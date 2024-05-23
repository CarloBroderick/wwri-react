/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        IBMPlexSerif: ["IBM Plex Serif", "serif"],
        BeVietnamPro: ["Be Vietnam Pro", "sans-serif"],
      },
      fontSize: {
        "2xs": ".625rem",
      },
      padding: {
        leftSidebarXAxis: "20px",
      },
      colors: {
        headerBackgroundWhite: "#FFFFFF",
        headerBorder: "#808080",
        subheaderBackground: "#F5F5F5",
        subheaderBorder: "#808080",
        leftSidebarHeaderBackground: "#F5F5F5",
        leftSidebarHeaderBottomBorder: "#F5F5F5",
        leftSidebarHeaderLabelTextColor: "#333333",
        leftSidebarHeaderRegionTextColor: "#000000",
        leftSidebarBackground: "#FFFFFF",
        leftSidebarRightBorder: "#808080",
        leftSidebarNotifier: "#898989",
        leftSidebarOverallResilience: "#585858",
        rightSidebarBackground: "#FFFFFF",
        rightSidebarBorder: "#808080",
        rightSidebarSearchBoxGray: "#6B6B6B",
        metricSelectorBoxesDefault: "#F0F0F0",
        metricSelectorBoxesBorderDefault: "#808080",
      }
    }
  },
  plugins: []
}
