import { Domain } from "../types/domainTypes";

const domainHierarchy: Domain[] = [
  {
    id: "water",
    label: "Domain 1",
    description: "The overall score for Domain 1.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 78, g: 160, b: 220 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 1.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 1.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 1.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for domain 1.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Air Quality Metrics
  {
    id: "air",
    label: "Domain 2",
    description: "The overall score for Domain 2",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 73, g: 0, b: 106 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of domain 2.",

      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 2.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 2.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 2.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Ecosystems Metrics
  {
    id: "ecosystems",
    label: "Domain 3",
    description: "The overall score for Domain 3.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 255, g: 145, b: 178 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 3.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 3.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 3.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 3.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Biodiversity domain
  {
    id: "biodiversity",
    label: "Domain 4",
    description: "The overall score for Domain 4",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 103, g: 14, b: 10 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 4.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 4.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 4.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 4.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Infrastructure
  {
    id: "infrastructure",
    label: "Domain 5",
    description: "The overall score for Domain 5.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 78, g: 160, b: 220 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 5.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 5.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of the Domain 5.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 5.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Social
  {
    id: "social",
    label: "Domain 6",
    description: "The overall score for Domain 6.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 23, g: 46, b: 106 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 6.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 6.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 6.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 6.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Economy
  {
    id: "economy",
    label: "Domain 7",
    description: "The overall score for Domain 7.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 90, g: 56, b: 15 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 7.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 7.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 7.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 7.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Culture
  {
    id: "culture",
    label: "Domain 8",
    description: "The overall score for Domain 8.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 20, g: 13, b: 70 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score for Domain 8.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 8.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 8.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 8.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
  // Carbon
  {
    id: "carbon",
    label: "Domain 9",
    description: "The overall score for Domain 9.",
    colorGradient: {
      startColor: { r: 255, g: 255, b: 255 },
      endColor: { r: 15, g: 15, b: 15 },
    },
    status: {
      id: "status_summary",
      label: "Subdomain 1",
      description: "The subdomain 1 score of Domain 9.",
      metrics: [
        {
          id: "status_metric_1",
          label: "Subdomain 1 Metric 1",
          description: "Description text for Status Metric 1",
        },
        {
          id: "status_metric_2",
          label: "Subdomain 1 Metric 2",
          description: "Description text for Status Metric 2",
        },
        {
          id: "status_metric_3",
          label: "Subdomain 1 Metric 3",
          description: "Description text for Status Metric 3",
        },
        {
          id: "status_metric_4",
          label: "Subdomain 1 Metric 4",
          description: "Description text for Status Metric 4",
        },
        {
          id: "status_metric_5",
          label: "Subdomain 1 Metric 5",
          description: "Description text for Status Metric 5",
        },
        {
          id: "status_metric_6",
          label: "Subdomain 1 Metric 6",
          description: "Description text for Status Metric 6",
        },
      ],
    },
    resilience: {
      id: "resilience_summary",
      label: "Subdomain 2",
      description: "The subdomain 2 score for Domain 9.",
      resistance: {
        id: "resistance_summary",
        label: "Section 1",
        description: "The subsubdomain 1 score of Domain 9.",
        metrics: [
          {
            id: "resilience_resistance_metric_1",
            label: "Section 1 Metric 1",
            description: "Description text for Section 1 Metric 1",
          },
          {
            id: "resilience_resistance_metric_2",
            label: "Section 1 Metric 2",
            description: "Description text for Section 1 Metric 2",
          },
          {
            id: "resilience_resistance_metric_3",
            label: "Section 1 Metric 3",
            description: "Description text for Section 1 Metric 3",
          },
          {
            id: "resilience_resistance_metric_4",
            label: "Section 1 Metric 4",
            description: "Description text for Section 1 Metric 4",
          },
          {
            id: "resilience_resistance_metric_5",
            label: "Section 1 Metric 5",
            description: "Description text for Section 1 Metric 5",
          },
          {
            id: "resilience_resistance_metric_6",
            label: "Section 1 Metric 6",
            description: "Description text for Section 1 Metric 6",
          },
          {
            id: "resilience_resistance_metric_7",
            label: "Section 1 Metric 7",
            description: "Description text for Section 1 Metric 7",
          },
          {
            id: "resilience_resistance_metric_8",
            label: "Section 1 Metric 8",
            description: "Description text for Section 1 Metric 8",
          },
        ],
      },
      recovery: {
        id: "recovery_summary",
        label: "Section 2",
        description: "The subsubdomain 2 score for Domain 9.",
        metrics: [
          {
            id: "resilience_recovery_metric_1",
            label: "Section 2 Metric 1",
            description: "Description text for Recovery Metric 1",
          },
          {
            id: "resilience_recovery_metric_2",
            label: "Section 2 Metric 2",
            description: "Description text for Recovery Metric 2",
          },
          {
            id: "resilience_recovery_metric_3",
            label: "Section 2 Metric 3",
            description: "Description text for Recovery Metric 3",
          },
          {
            id: "resilience_recovery_metric_4",
            label: "Section 2 Metric 4",
            description: "Description text for Recovery Metric 4",
          },
          {
            id: "resilience_recovery_metric_5",
            label: "Section 2 Metric 5",
            description: "Description text for Recovery Metric 5",
          },
          {
            id: "resilience_recovery_metric_6",
            label: "Section 2 Metric 6",
            description: "Description text for Recovery Metric 6",
          },
          {
            id: "resilience_recovery_metric_7",
            label: "Section 2 Metric 7",
            description: "Description text for Recovery Metric 7",
          },
          {
            id: "resilience_recovery_metric_8",
            label: "Section 2 Metric 8",
            description: "Description text for Recovery Metric 8",
          },
          {
            id: "resilience_recovery_metric_9",
            label: "Section 2 Metric 9",
            description: "Description text for Recovery Metric 9",
          },
        ],
      },
    },
  },
];

export default domainHierarchy;
