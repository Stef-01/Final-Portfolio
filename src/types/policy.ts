export interface PolicyInitiative {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    role: string;
    scope: string;
    period: string;
    themes: string[];
}

export const policyInitiatives: PolicyInitiative[] = [
    {
        id: "biothreat-modelling",
        title: "Dynamic Biothreat Modelling",
        subtitle: "Detecting AI-engineered biothreats through adaptive threat-modelling systems.",
        description: "A national-capability oriented body of work exploring how AI-era biological threats might be detected, interpreted, and prioritized before they become operationally significant. The emphasis is on strategy, model logic, and decision frameworks rather than abstract speculation.",
        role: "Researcher and systems strategist",
        scope: "Biosecurity, AI risk, and national resilience",
        period: "2025",
        themes: ["Biosecurity", "AI Governance", "National Security"],
    },
    {
        id: "indigenous-implementation",
        title: "Indigenous Preventive Care Implementation",
        subtitle: "Understanding what makes preventive chronic-disease programs succeed in real primary-care settings.",
        description: "A program of implementation-focused work examining what influences the delivery of preventive health checks for Aboriginal and Torres Strait Islander communities. This work is less about abstract policy design and more about what actually enables uptake, continuity, and trust inside real health systems.",
        role: "Implementation researcher",
        scope: "Public health systems and Indigenous health",
        period: "2023-2025",
        themes: ["Implementation", "Equity", "Primary Care"],
    },
    {
        id: "public-health-policy",
        title: "Parliamentary and Public Policy Analysis",
        subtitle: "Evidence translation for government contexts where social recovery, health, and public systems intersect.",
        description: "Policy-oriented analysis developed through parliamentary internship and public-sector exposure, focused on turning complex evidence into concise recommendations relevant to decision-makers navigating post-pandemic recovery and broader public-system questions.",
        role: "Policy analyst and evidence translator",
        scope: "Public service and government advisory environments",
        period: "2022",
        themes: ["Policy", "Evidence Translation", "Government"],
    },
    {
        id: "surveillance-modelling",
        title: "Machine Learning for Infectious Disease Surveillance",
        subtitle: "Repurposing analytical approaches from counterterrorism and threat detection for health surveillance contexts.",
        description: "An exploration of how topic-modelling and risk-detection methods can support earlier recognition of infectious disease patterns. The strategic interest lies in adapting methods across domains to strengthen public-health sensing and response capabilities.",
        role: "Research collaborator",
        scope: "Public health intelligence and surveillance",
        period: "2025",
        themes: ["Surveillance", "ML", "Public Health Intelligence"],
    },
];
