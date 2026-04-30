#!/usr/bin/env python3
"""
Audit selected-region label lengths from live WWRI location endpoints.

Usage:
  python scripts/location-label-audit/main.py
  python scripts/location-label-audit/main.py --base-url https://major-sculpin.nceas.ucsb.edu/api
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import ssl
import sys
import urllib.request
from dataclasses import dataclass
from typing import Dict, Iterable, List, Optional, Tuple


API_DEFAULT_BASE_URL = "https://major-sculpin.nceas.ucsb.edu/api"

UNIFIED_LEVELS = {
    "tract": {
        "us": "tract",
        "canada": "subdivision",
    },
    "county": {
        "us": "county",
        "canada": "division",
    },
    "state": {
        "us": "state",
        "canada": "province",
    },
}

REGION_ABBREVIATIONS: Dict[str, str] = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
    "Alberta": "AB",
    "British Columbia": "BC",
    "Manitoba": "MB",
    "New Brunswick": "NB",
    "Newfoundland and Labrador": "NL",
    "Northwest Territories": "NT",
    "Nova Scotia": "NS",
    "Nunavut": "NU",
    "Ontario": "ON",
    "Prince Edward Island": "PE",
    "Quebec": "QC",
    "Saskatchewan": "SK",
    "Yukon": "YT",
    "": "",
}


@dataclass
class LabelRecord:
    geoid: str
    country: str
    unified_level: str
    region_name: str
    state_or_province: str
    line1: str
    line2: str


def fetch_csv_rows(url: str, ssl_context: Optional[ssl.SSLContext] = None) -> List[Dict[str, str]]:
    with urllib.request.urlopen(url, context=ssl_context) as response:
        payload = response.read().decode("utf-8", errors="replace")
    reader = csv.DictReader(io.StringIO(payload))
    return [dict(row) for row in reader]


def get_region_abbreviation(region_name: str) -> str:
    return REGION_ABBREVIATIONS.get(region_name, region_name)


def format_tract_id(geoid: str, country: str) -> str:
    if country == "us" and len(geoid) >= 11:
        tract_portion = geoid[-6:]
        before_decimal = tract_portion[:4].lstrip("0") or "0"
        after_decimal = tract_portion[4:]
        return f"{before_decimal}.{after_decimal}"
    return geoid


def build_region_display_text(
    geoid: str,
    region_name: str,
    state_name: str,
    country: str,
    unified_level: str,
) -> Tuple[str, str]:
    state_abbrev = get_region_abbreviation(state_name)

    if unified_level == "tract":
        tract_label = "Census Subdivision" if country == "canada" else "Census Tract"
        tract_id = format_tract_id(geoid, country)
        line1 = f"{tract_label} {tract_id}"
        if region_name and state_name:
            line2 = f"{region_name}, {state_abbrev}"
        elif state_name:
            line2 = state_abbrev
        else:
            line2 = ""
        return line1, line2

    if unified_level == "county":
        if region_name and state_name:
            return f"{region_name}, {state_abbrev}", ""
        if region_name:
            return region_name, ""
        return geoid, ""

    if unified_level == "state":
        return state_name or geoid, ""

    return geoid, ""


def collect_records(base_url: str, ssl_context: Optional[ssl.SSLContext] = None) -> List[LabelRecord]:
    records: List[LabelRecord] = []

    for unified_level, levels in UNIFIED_LEVELS.items():
        for country, api_level in levels.items():
            url = f"{base_url}/{country}/{api_level}/locations"
            rows = fetch_csv_rows(url, ssl_context=ssl_context)

            for row in rows:
                geoid = row.get("geoid", "").strip()
                if not geoid:
                    continue

                region_name = (row.get("county_name") if unified_level == "tract" and country == "us" else row.get("name") or "").strip()
                state_or_province = (row.get("state_name") or row.get("province") or "").strip()
                line1, line2 = build_region_display_text(
                    geoid=geoid,
                    region_name=region_name,
                    state_name=state_or_province,
                    country=country,
                    unified_level=unified_level,
                )

                records.append(
                    LabelRecord(
                        geoid=geoid,
                        country=country,
                        unified_level=unified_level,
                        region_name=region_name,
                        state_or_province=state_or_province,
                        line1=line1,
                        line2=line2,
                    )
                )

    return records


def line_length(text: str) -> int:
    return len(text or "")


def top_n(items: Iterable[LabelRecord], key_fn, n: int = 5) -> List[LabelRecord]:
    return sorted(items, key=key_fn, reverse=True)[:n]


def summarize(records: List[LabelRecord]) -> Dict[str, object]:
    summary: Dict[str, object] = {}

    for unified_level in UNIFIED_LEVELS.keys():
        level_records = [r for r in records if r.unified_level == unified_level]
        longest_line1 = top_n(level_records, lambda r: line_length(r.line1), n=5)
        longest_line2 = top_n(level_records, lambda r: line_length(r.line2), n=5)
        longest_combined = top_n(
            level_records,
            lambda r: line_length(r.line1) + line_length(r.line2),
            n=5,
        )

        summary[unified_level] = {
            "count": len(level_records),
            "max_line1_chars": line_length(longest_line1[0].line1) if longest_line1 else 0,
            "max_line2_chars": line_length(longest_line2[0].line2) if longest_line2 else 0,
            "max_combined_chars": (
                line_length(longest_combined[0].line1) + line_length(longest_combined[0].line2)
                if longest_combined
                else 0
            ),
            "top_line1": [
                {
                    "country": r.country,
                    "geoid": r.geoid,
                    "line1": r.line1,
                    "line1_chars": line_length(r.line1),
                }
                for r in longest_line1
            ],
            "top_line2": [
                {
                    "country": r.country,
                    "geoid": r.geoid,
                    "line2": r.line2,
                    "line2_chars": line_length(r.line2),
                }
                for r in longest_line2
            ],
            "top_combined": [
                {
                    "country": r.country,
                    "geoid": r.geoid,
                    "line1": r.line1,
                    "line2": r.line2,
                    "total_chars": line_length(r.line1) + line_length(r.line2),
                }
                for r in longest_combined
            ],
        }

    return summary


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Audit selected-region label lengths.")
    parser.add_argument(
        "--base-url",
        default=API_DEFAULT_BASE_URL,
        help="Metrics API base URL (default: deployed major-sculpin).",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Print machine-readable JSON output.",
    )
    parser.add_argument(
        "--insecure",
        action="store_true",
        help="Disable SSL certificate verification (use only for local/dev troubleshooting).",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    ssl_context: Optional[ssl.SSLContext] = None
    if args.insecure:
        ssl_context = ssl._create_unverified_context()

    try:
        records = collect_records(base_url=args.base_url.rstrip("/"), ssl_context=ssl_context)
    except Exception as exc:
        print(f"Failed to fetch location data: {exc}", file=sys.stderr)
        return 1

    summary = summarize(records)

    if args.json:
        print(json.dumps(summary, indent=2))
        return 0

    print(f"API base URL: {args.base_url}")
    print(f"Total records analyzed: {len(records)}")
    print("")

    for level in UNIFIED_LEVELS.keys():
        level_summary = summary[level]
        print(f"=== {level.upper()} ===")
        print(f"records: {level_summary['count']}")
        print(f"max line1 chars: {level_summary['max_line1_chars']}")
        print(f"max line2 chars: {level_summary['max_line2_chars']}")
        print(f"max combined chars: {level_summary['max_combined_chars']}")
        print("top combined examples:")
        for row in level_summary["top_combined"][:3]:
            print(
                f"  - [{row['country']}] {row['line1']} | {row['line2']} "
                f"(geoid={row['geoid']}, total={row['total_chars']})"
            )
        print("")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
