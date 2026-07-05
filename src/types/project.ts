import swaadBranding from "../assets/swaad-branding.png";
import swaadGame from "../assets/swaad-game.png";
import swaadMealExplorer from "../assets/swaad-recipe-finder.png";
import swaadNutriserve from "../assets/swaad-nutriserve.png";
import hfteBiodesignFramework from "../assets/hfte/hfte-biodesign-framework.png";
import hfteDeliverables from "../assets/hfte/hfte-deliverables.png";
import hfteDeviceWorkflow from "../assets/hfte/hfte-device-and-diagnostic-workflow.png";
import hfteNeed from "../assets/hfte/hfte-diabetic-retinopathy-need.png";
import hfteRevenueModel from "../assets/hfte/hfte-revenue-model.png";
import hfteScalingChallenges from "../assets/hfte/hfte-scaling-challenges.png";
import hfteStakeholderEcosystem from "../assets/hfte/hfte-stakeholder-ecosystem.png";
import hfteWorkflowComparison from "../assets/hfte/hfte-workflow-comparison.png";
import adcemDialysisMarket from "../assets/adcem/adcem-dialysis-market-context.png";
import adcemLocalManufacturing from "../assets/adcem/adcem-local-manufacturing-model.png";
import adcemMarketPainPoints from "../assets/adcem/adcem-market-pain-points.png";
import entDischargeResearch from "../assets/ent/ent-discharge-research.png";
import entGapAnalysis from "../assets/ent/ent-gap-analysis.png";
import entNeedStatement from "../assets/ent/ent-need-statement.png";
import entPainGonePainGuinConcept from "../assets/ent/ent-paingone-painguin-concept.png";
import entPathToPayment from "../assets/ent/ent-path-to-payment.png";
import entProductWorkflow from "../assets/ent/ent-product-workflow.png";
import entValueProposition from "../assets/ent/ent-value-proposition.png";
import stanfordBiodesignClassroom from "../assets/ent/stanford-biodesign-digital-health-classroom.jpg";
import stanfordBiodesignProcess from "../assets/ent/stanford-biodesign-process.png";
import nourishDishDetail from "../assets/nourish/nourish-dish-detail.jpg";
import nourishGeneratedPairing from "../assets/nourish/nourish-generated-pairing.jpg";
import nourishMealDiscovery from "../assets/nourish/nourish-meal-discovery.jpg";
import nourishMobileDiscovery from "../assets/nourish/nourish-mobile-discovery.jpg";
import nourishPlateBalance from "../assets/nourish/nourish-plate-balance.jpg";
import nourishShareablePlate from "../assets/nourish/nourish-shareable-plate.jpg";
import neuragilityHero from "../assets/neuragility/neuragility-hero.webp";
import neuragilityMovementDemo from "../assets/neuragility/neuragility-movement-demo.webp";
import neuragilityShoulderContext from "../assets/neuragility/neuragility-shoulder-context.webp";
import neuragilitySignalActivation from "../assets/neuragility/neuragility-signal-activation.webp";
import neuragilitySignalBaseline from "../assets/neuragility/neuragility-signal-baseline.webp";
import neuragilityWearable from "../assets/neuragility/neuragility-wearable.webp";
import neuragilityXrTraining from "../assets/neuragility/neuragility-xr-training.webp";
import casaAiInputs from "../assets/casa/casa-ai-inputs.png";
import casaAiIntelligenceLoop from "../assets/casa/casa-ai-intelligence-loop.png";
import casaBusinessModel from "../assets/casa/casa-business-model.png";
import casaGoToMarket from "../assets/casa/casa-go-to-market.png";
import casaIntentToDinnerGap from "../assets/casa/casa-intent-to-dinner-gap.png";
import casaPitchCover from "../assets/casa/casa-pitch-cover.png";
import casaProductStack from "../assets/casa/casa-product-stack.png";
import casaRestaurantCapacity from "../assets/casa/casa-restaurant-capacity.png";
import casaSolutionPillars from "../assets/casa/casa-solution-pillars.png";
import casaTwoSidedProblem from "../assets/casa/casa-two-sided-problem.png";
import casaUnderstandMatchDeliver from "../assets/casa/casa-understand-match-deliver.png";

export interface ProjectStat {
    label: string;
    value: string;
}

export interface ProjectHighlight {
    title: string;
    text: string;
}

export interface ProjectSection {
    title: string;
    body: string[];
    media?: ProjectMedia;
}

export interface ProjectMedia {
    src: string;
    alt: string;
    caption: string;
    fit?: "cover" | "contain";
    aspect?: "4/3" | "16/9" | "8/5" | "9/16";
}

export interface ProjectVideo {
    src: string;
    poster?: string;
    title: string;
    caption: string;
}

export interface ProjectCaseStudyStep {
    phase: string;
    title: string;
    rationale: string;
    execution: string;
}

export interface ProjectCaseStudy {
    question: string;
    framing: string;
    processEyebrow: string;
    processHeading: string;
    processSummary: string;
    steps: ProjectCaseStudyStep[];
}

export interface ProjectInteractiveModule {
    title: string;
    summary: string;
    interaction: string;
    effect: string;
}

export interface ProjectPopout {
    url: string;
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    collapsedLabel: string;
    accessibleLabel: string;
}

export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    heroFit?: "cover" | "contain";
    heroAspect?: "16/9" | "8/5";
    tags: string[];
    role: string;
    client: string;
    duration: string;
    tools: string[];
    outcome: string;
    accent: string;
    stats: ProjectStat[];
    highlights: ProjectHighlight[];
    sections: ProjectSection[];
    media: ProjectMedia[];
    mediaEyebrow?: string;
    mediaHeading?: string;
    mediaLayout?: "grid" | "editorial";
    video?: ProjectVideo;
    interactiveModules: ProjectInteractiveModule[];
    interactiveEyebrow?: string;
    interactiveHeading?: string;
    interactiveActiveLabel?: string;
    interactivePrimaryLabel?: string;
    interactiveSecondaryLabel?: string;
    caseStudy?: ProjectCaseStudy;
    links?: ProjectLink[];
    popout?: ProjectPopout;
}

export const projects: Project[] = [
    {
        id: "casa",
        title: "Casa",
        subtitle: "A culinary-medicine platform that turns personalised guidance into health-optimised meal kits from restaurants people already know.",
        description: "Casa is a free consumer app, an AI intelligence layer, and a restaurant operating system designed as one connected service. It learns household preferences, matches people to practical meals, and gives restaurant partners the planning infrastructure to produce recurring kits.",
        image: casaPitchCover,
        heroFit: "contain",
        heroAspect: "16/9",
        tags: ["Culinary Medicine", "AI Product Strategy", "Marketplace Design"],
        role: "Founder, product lead, and venture architect",
        client: "Pre-seed venture concept",
        duration: "2026 · ongoing",
        tools: ["Service blueprinting", "Consumer journey mapping", "Preference graph design", "AI and ML product architecture", "Recommendation systems", "Restaurant workflow design", "Marketplace business modelling", "Clinician referral pathway"],
        outcome: "Defined the end-to-end product system across the consumer experience, intelligence layer, restaurant operations, product standardisation, and marketplace model.",
        accent: "#6a101b",
        stats: [
            { label: "Consumer layer", value: "Planning, pantry support, guided cooking" },
            { label: "Intelligence layer", value: "Preferences, ranking, trends, forecasting" },
            { label: "Supply layer", value: "Restaurant-made kits using existing capacity" },
            { label: "Business model", value: "Meal kits, B2B services, restaurant SaaS" },
        ],
        highlights: [
            { title: "Design around the failure point", text: "The product begins where healthy intention usually collapses: a tired household facing dinner, shopping, preparation, and nutritional uncertainty at once." },
            { title: "One service, three operating surfaces", text: "The consumer app, restaurant OS, and product studio are coordinated by a shared intelligence layer rather than designed as disconnected products." },
            { title: "Learning compounds across both sides", text: "Orders, skips, preference signals, and kit outcomes improve household matching while giving restaurant partners clearer recurring-demand signals." },
        ],
        sections: [
            {
                title: "The gap between intention and dinner",
                body: [
                    "The design problem is not a shortage of recipes. On a weeknight, people still have to find something trustworthy, judge whether it suits their goals and culture, work out what they already own, shop, prepare, and cook while tired.",
                    "Casa reframes that chain as a single service-design problem. The aim is to remove avoidable decisions while keeping the user informed and in control.",
                ],
                media: { src: casaIntentToDinnerGap, alt: "Casa journey map showing five points where eating well at home breaks down", caption: "The source journey identifies five compounding failure points, from recipe discovery to the final effort of cooking.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "Make culinary medicine usable",
                body: [
                    "The consumer proposition combines practitioner-informed recipes, guided cooking, smart-pantry support, and restaurant-prepared kits. Users can engage at the level that fits the night: learn and cook, reduce shopping friction, or order a matched kit.",
                    "The information architecture is deliberately progressive. Health guidance and meal planning remain accessible in the free app; paid fulfillment enters when convenience is the more important job.",
                ],
                media: { src: casaSolutionPillars, alt: "Casa solution architecture showing health-optimised recipes, guided cooking, smart pantry, and meal kits", caption: "Three service pillars connect trusted meal guidance to practical household execution.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "Understand, match, deliver",
                body: [
                    "The core journey moves through three jobs. First, Casa learns diet, taste, routine, and meal-planning context. Second, an agent turns that context into ranked meals and relevant restaurant-kit options. Third, the user cooks with guidance or receives the kit on demand or through a subscription.",
                    "This sequence keeps the experience understandable: intelligence is expressed through a better recommendation and a clearer next step, not through technical language.",
                ],
                media: { src: casaUnderstandMatchDeliver, alt: "Casa experience flow from understanding a user to matching meals and delivering meal kits", caption: "The consumer journey translates a complex platform into three legible actions: understand, match, and deliver.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "A coordinated product stack",
                body: [
                    "The consumer app is only the visible edge. Behind it, the restaurant OS supports build sheets, batch plans, labels, and analytics, while the product studio standardises recipes, nutrition data, and packaging.",
                    "I mapped these as interdependent surfaces so the customer promise remains executable in the kitchen. A recommendation is only valuable when the supply-side workflow can produce it consistently.",
                ],
                media: { src: casaProductStack, alt: "Casa product stack showing the consumer app, AI intelligence layer, restaurant OS, and product studio", caption: "The stack links the experience layer to the operational infrastructure needed to fulfill it.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "The intelligence and learning loop",
                body: [
                    "LLMs translate qualitative tastes into structured meal preferences. Ranking models prioritise kits by likely fit and completion. Agents surface demand and trend signals that restaurant partners can use in product decisions.",
                    "The preference graph connects planning, personalisation, orders, subscriptions, recurring kits, and recipe-redesign sprints. Every interaction creates a signal that can improve the next household recommendation or supply decision.",
                ],
                media: { src: casaAiIntelligenceLoop, alt: "Casa AI intelligence loop connecting meal planning, personalisation, trend signals, orders, and restaurant recipe redesign", caption: "The supplied intelligence-layer architecture shows how household and restaurant signals form a reinforcing learning loop.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "Unlock supply without building kitchens",
                body: [
                    "Casa’s supply thesis starts with an existing asset: restaurant staff, equipment, and ingredients are concentrated around lunch and dinner peaks, leaving periods of underused capacity.",
                    "The operating model converts selected downtime into planned kit production. That creates a potential recurring revenue line for restaurants while allowing Casa to scale supply through local partners rather than a central kitchen.",
                ],
                media: { src: casaRestaurantCapacity, alt: "Casa capacity model showing meal-kit preparation between restaurant lunch and dinner peaks", caption: "A time-based service blueprint positions kit preparation in the capacity valleys between service peaks.", fit: "contain", aspect: "16/9" },
            },
        ],
        caseStudy: {
            question: "How might we make culinary medicine workable on a busy weeknight while using restaurant capacity that already exists?",
            framing: "Casa treats household decision fatigue and restaurant underutilisation as one system. The design connects personalised guidance, a clear consumer journey, an intelligence layer, and operational tools that let local kitchens fulfill the promise.",
            processEyebrow: "Venture design method",
            processHeading: "From recurring failure point to operating system",
            processSummary: "The process moved from the household problem to a two-sided service blueprint, then tested whether product architecture, fulfillment, and economics could reinforce one another.",
            steps: [
                {
                    phase: "Frame",
                    title: "Locate the real dinner breakdown",
                    rationale: "Recipe discovery, trust, shopping, optimisation, and cooking are usually treated as separate tasks, even though users experience them as one exhausting chain.",
                    execution: "Mapped the end-to-end household journey and defined the design opportunity at the point where good intention repeatedly collapses into an expensive, opaque takeaway decision.",
                },
                {
                    phase: "Simplify",
                    title: "Turn a complex discipline into three user jobs",
                    rationale: "Culinary medicine is inaccessible when people must interpret nutrition evidence, personalise it, and execute it alone.",
                    execution: "Organised the experience around understand, match, and deliver, with progressive support from free guidance through to a restaurant-prepared kit.",
                },
                {
                    phase: "Connect",
                    title: "Design the intelligence as a feedback system",
                    rationale: "Personalisation cannot depend on a static onboarding questionnaire; it must improve from actual choices, skips, orders, and completion signals.",
                    execution: "Mapped LLM preference translation, ML ranking, agent-led trend discovery, and the preference graph that connects household behaviour to restaurant decisions.",
                },
                {
                    phase: "Operationalise",
                    title: "Make the recommendation fulfillable",
                    rationale: "A consumer promise fails if restaurant teams cannot standardise, forecast, batch, label, and analyse the product behind it.",
                    execution: "Designed the four-layer stack across the consumer app, intelligence layer, restaurant OS, and product studio, then mapped kit production into restaurant capacity valleys.",
                },
                {
                    phase: "Model",
                    title: "Align access with marketplace economics",
                    rationale: "Charging for basic guidance would narrow access and weaken the preference data needed to improve matching.",
                    execution: "Kept the consumer app free and structured potential revenue around recurring kits, supplier and brand services, and restaurant SaaS, with clinician referral as the initial trust channel.",
                },
            ],
        },
        media: [
            { src: casaTwoSidedProblem, alt: "Casa two-sided problem frame comparing household dinner friction with restaurant operating friction", caption: "The venture begins with two connected unmet needs: households need lower-friction dinner decisions, while restaurants need predictable recurring demand.", fit: "contain", aspect: "16/9" },
            { src: casaAiInputs, alt: "Casa AI model connecting household signals, restaurant capacity, trend intelligence, and creator content", caption: "The intelligence layer combines household, supply, trend, and content signals instead of treating personalisation as a consumer-only problem.", fit: "contain", aspect: "16/9" },
            { src: casaBusinessModel, alt: "Casa business model showing meal-kit subscriptions, brand consulting, and restaurant software", caption: "The commercial model keeps the consumer guidance layer free while monetising fulfillment and supply-side services.", fit: "contain", aspect: "16/9" },
            { src: casaGoToMarket, alt: "Casa go-to-market loop connecting clinician referral, app onboarding, and patient use", caption: "The initial go-to-market hypothesis uses clinician trust to reach people who need the service before expanding to a broader consumer market.", fit: "contain", aspect: "16/9" },
        ],
        mediaEyebrow: "Venture evidence",
        mediaHeading: "Product, intelligence, and market logic in one system",
        mediaLayout: "editorial",
        interactiveEyebrow: "Experience architecture",
        interactiveHeading: "How the platform compounds value",
        interactiveActiveLabel: "System layer",
        interactivePrimaryLabel: "What it coordinates",
        interactiveSecondaryLabel: "Why it matters",
        interactiveModules: [
            {
                title: "Consumer app",
                summary: "A free planning and guidance layer learns the household before asking it to buy.",
                interaction: "Health coaching, meal planning, smart-pantry support, swaps, bridge meals, and guided cooking.",
                effect: "Reduces the number of decisions between intention and dinner while building a richer preference model.",
            },
            {
                title: "Intelligence layer",
                summary: "A shared decision layer translates behaviour into better matching and clearer demand signals.",
                interaction: "Preference translation, meal and kit ranking, recommendations, forecasting, and trend discovery.",
                effect: "Each order, skip, and kit outcome improves the next consumer recommendation and supply decision.",
            },
            {
                title: "Restaurant OS",
                summary: "The operating layer turns personalised demand into work that a restaurant team can execute.",
                interaction: "Build sheets, batch planning, labels, production analytics, and recurring-kit workflows.",
                effect: "Makes the consumer promise operationally credible and converts idle capacity into planned production.",
            },
            {
                title: "Product studio",
                summary: "A standardisation layer converts restaurant menu items into repeatable Casa products.",
                interaction: "Recipe redesign, nutrition data, kit format, packaging, and kitchen quality assurance.",
                effect: "Preserves the value of familiar local restaurants while creating consistent meal-kit products.",
            },
            {
                title: "Marketplace loop",
                summary: "Consumer demand, restaurant execution, and product learning reinforce one another.",
                interaction: "Recurring kits and subscriptions return outcome data to the preference graph and product studio.",
                effect: "Moves Casa beyond a recommendation interface toward a defensible operating and learning system.",
            },
        ],
    },
    {
        id: "swaad",
        title: "SWAAD",
        subtitle: "A culturally grounded precision nutrition platform for Indian vegetarian communities.",
        description: "A behavior-change product that links local produce, diabetes-friendly meal discovery, and playful education so healthier decisions feel relevant, practical, and culturally fluent.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop",
        tags: ["Health Tech", "Nutrition", "Community Health"],
        role: "Product lead, UX designer, and public health researcher",
        client: "Self-initiated venture built with Logan Indian community members",
        duration: "Ongoing concept and prototype, initial design over 4 months",
        tools: ["Figma", "React", "Supabase", "OpenAI API", "Airtable"],
        outcome: "Established a strong concept direction for a community-facing nutrition product that blends culturally specific meal planning with interactive chronic-disease education.",
        accent: "#0f766e",
        popout: {
            url: "https://bud-hub-29-10.vercel.app/",
            eyebrow: "Live experience",
            heading: "Put SWAAD to the test",
            description: "Explore the working prototype and test how the experience behaves beyond static screens.",
            ctaLabel: "Test SWAAD live",
            collapsedLabel: "Try SWAAD live",
            accessibleLabel: "Live SWAAD experience",
        },
        stats: [
            { label: "Focus", value: "Diabetes and hypertension prevention" },
            { label: "Audience", value: "Indian vegetarian communities in Logan" },
            { label: "Format", value: "Meal planner, game layer, produce explorer" },
            { label: "Strength", value: "Culture-specific behavior change design" },
        ],
        highlights: [
            { title: "Grounded in lived context", text: "The product concept starts from how families actually shop, cook, and discuss health, not from generic Western nutrition advice." },
            { title: "Education embedded in use", text: "Instead of treating learning as a separate content layer, the product teaches through meal choices, swaps, and game mechanics." },
            { title: "Local and actionable", text: "Fresh produce, price-awareness, and recipe suggestions are tied to real household constraints rather than abstract health targets." },
        ],
        sections: [
            {
                title: "The challenge",
                body: [
                    "People living with diabetes or hypertension are routinely told to 'eat better', yet the advice they receive is often generic, culturally distant, and disconnected from what is available or affordable locally.",
                    "For Indian vegetarian households in Logan, healthy decision-making is shaped by family norms, ingredient availability, time, budget, and the emotional comfort of familiar food. Existing tools rarely respect those realities.",
                ],
            },
            {
                title: "The response",
                body: [
                    "SWAAD reframes precision nutrition as a culturally fluent digital experience. The concept combines produce discovery, recipe guidance, and lightweight interactive learning to help users make better decisions without feeling judged or medicalized.",
                    "The product logic is structured around glycaemic load, fiber quality, sodium awareness, and meal composition, but it expresses those systems through approachable interactions rather than clinical language.",
                ],
            },
            {
                title: "Why it matters",
                body: [
                    "The work translates public-health evidence, interface design, and community insight into a product that feels both serious and joyful.",
                    "It is one of the clearest expressions of Stefan's broader thesis: digital health tools work better when they respect culture, motivation, and everyday behavior rather than assuming compliance.",
                ],
            },
        ],
        media: [
            { src: swaadBranding, alt: "SWAAD branding", caption: "A vibrant visual system that positions metabolic health as inviting, modern, and culturally resonant." },
            { src: swaadMealExplorer, alt: "SWAAD recipe flow", caption: "Meal discovery experience structured around preferences, pantry context, and health goals." },
            { src: swaadNutriserve, alt: "SWAAD educational game", caption: "Interactive nutrition learning translated into playful service mechanics." },
            { src: swaadGame, alt: "SWAAD game screen", caption: "Gamified interfaces designed to make tradeoffs in food decisions legible and memorable." },
        ],
        interactiveModules: [
            {
                title: "Plate Intelligence",
                summary: "A drag-and-drop plate builder that visualizes how swaps affect carb quality, sodium load, and satiety.",
                interaction: "Users assemble a meal and instantly see what small changes improve metabolic outcomes without changing the cultural identity of the dish.",
                effect: "Soft card-lift interactions, animated nutrient pulses, and before/after overlays that make improvements feel tangible.",
            },
            {
                title: "Market-to-Meal Explorer",
                summary: "A local produce and pricing surface that connects what is in season to what can be cooked tonight.",
                interaction: "Tap produce cards to reveal meal suggestions, health rationale, and culturally relevant preparation options.",
                effect: "Stacked ingredient cards, price-to-recipe transitions, and subtle route animations between produce and meals.",
            },
            {
                title: "Nutrition Game Loop",
                summary: "A lightweight simulation where serving choices influence energy, glucose stability, and disease-risk education.",
                interaction: "Players serve meals to different profiles and receive contextual feedback on where they helped or harmed outcomes.",
                effect: "Playful status meters, ingredient feedback chips, and animated lesson summaries instead of static advice blocks.",
            },
        ],
    },
    {
        id: "nourish-meal-explorer",
        title: "NOURISH Meal Pairer AI",
        subtitle: "Turning familiar meals into balanced, culturally relevant plates through a health-literacy-aware pairing experience.",
        description: "I conceived, designed, and built the Meal Explorer end to end — from the product thesis and AI-assisted pairing flow through interaction design, accessibility, and implementation. The current build uses placeholder recipes while the NOURISH team prepares its reviewed launch library.",
        image: nourishGeneratedPairing,
        heroFit: "contain",
        heroAspect: "8/5",
        tags: ["AI Meal Pairing", "Nutrition Education", "Product Engineering"],
        role: "Product creator, UX/UI designer, and lead developer",
        client: "NOURISH · Stanford Medicine",
        duration: "Active development · release planned in the coming months",
        tools: ["Human-centred design", "Nutrition research synthesis", "Low-health-literacy design", "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Fuse.js", "Accessible interaction design"],
        outcome: "Created the product concept and built the complete working platform to handoff. A technical specialist is now managing the institutional embedding work for the Stanford Medicine NOURISH website.",
        accent: "#315f46",
        links: [
            { label: "Test the working product", url: "https://nourish-meal-explorer.vercel.app/" },
            { label: "View the source code", url: "https://github.com/Stef-01/nourish-meal-explorer" },
        ],
        popout: {
            url: "https://nourish-meal-explorer.vercel.app/",
            eyebrow: "Working product",
            heading: "Build a plate and test the flow",
            description: "Try the complete pairing experience—from a familiar main dish to complementary sides, whole-plate evaluation, and a shareable result. Recipe data is currently provisional.",
            ctaLabel: "Test Meal Pairer live",
            collapsedLabel: "Try Meal Pairer",
            accessibleLabel: "Live NOURISH Meal Pairer experience",
        },
        stats: [
            { label: "Ownership", value: "Concept → design → working product → handoff" },
            { label: "Core flow", value: "Familiar meal → sides → inspect or swap → evaluate → share" },
            { label: "Design priority", value: "Accessible across varied health-literacy levels" },
            { label: "Release state", value: "Working build · reviewed NOURISH recipes pending" },
        ],
        highlights: [
            { title: "Preserve identity before optimizing nutrition", text: "The main dish remains the anchor. The system improves the plate around a familiar meal instead of treating culture and health as competing goals." },
            { title: "Reduce interpretation burden", text: "Search examples, food photography, local swaps, compact labels, and progressive disclosure replace dense nutrient tables and clinical language." },
            { title: "Reason about the whole plate", text: "The experience delays evaluation until vegetables, protein, and carbohydrates can be considered together, making the recommendation easier to explain and act on." },
        ],
        sections: [
            {
                title: "The behavioural and nutrition problem",
                body: [
                    "Many nutrition tools begin with restriction, generic meal plans, or unfamiliar substitutions. That creates immediate friction for people who want practical guidance without abandoning culturally meaningful food.",
                    "The product reframes the decision from “What should I stop eating?” to “What can I add or adjust around the meal I already know?” This moves nutrition education into a concrete composition task instead of a lecture.",
                ],
            },
            {
                title: "Human-centred design across health-literacy levels",
                body: [
                    "I applied a Stanford d.school-style human-centred cycle: start from the lived meal context, define the narrow decision people need to make, prototype the smallest understandable flow, and use the working interface to expose where explanation or control is missing.",
                    "To support people across health-literacy levels, the interface favors recognition over recall, one decision at a time, plain-language categories, visual meal composition, and optional detail. Nutrition reasoning remains available, but the user does not need to decode a nutrient dashboard before acting.",
                ],
            },
            {
                title: "The interaction model",
                body: [
                    "The flow begins with a familiar dish, generates culturally coherent sides, and keeps each recommendation locally inspectable and replaceable. Users can change one side without losing the rest of the plate or restarting the experience.",
                    "Only after the plate is assembled does the product synthesize vegetables, protein, and carbohydrates into a simple balance view. The final pairing can then be downloaded, copied, or shared as a portable result.",
                ],
            },
            {
                title: "What I designed and built",
                body: [
                    "I originated the product thesis, defined the information architecture and pairing journey, designed the responsive interface, structured the meal and side-dish content model, and implemented the complete application.",
                    "The working build uses Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Fuse.js, and structured pairing data. It includes keyboard-operable cards and dialogs, visible focus treatment, semantic labelling, responsive layouts, and reduced-motion behaviour.",
                ],
            },
            {
                title: "Current development state",
                body: [
                    "The application is functional, but the recipes and supporting data remain placeholders for testing interaction, content hierarchy, and pairing behaviour. The NOURISH team will replace them with reviewed recipes and program content before release.",
                    "A technical specialist is handling the behind-the-scenes embedding work for the Stanford Medicine NOURISH website. My documented contribution covers concept creation, product design, and technical implementation; clinical validation, health outcomes, and launch adoption remain outside the current evidence.",
                ],
            },
        ],
        caseStudy: {
            question: "How might an AI meal-pairing tool improve a familiar meal without demanding unfamiliar substitutions or specialist nutrition knowledge?",
            framing: "The design answer was to preserve the main dish, offer complementary sides as reversible choices, and explain balance only after the complete plate is visible. That principle shaped the product architecture, visual hierarchy, pairing logic, and accessibility decisions.",
            processEyebrow: "Human-centred product method",
            processHeading: "From familiar food to an explainable plate",
            processSummary: "Each phase converted a nutrition principle into a product decision and then into working software. The sequence shows both the design reasoning and what I personally executed.",
            steps: [
                {
                    phase: "Empathize",
                    title: "Start from the meal people already choose",
                    rationale: "Culturally meaningful food is a source of identity and familiarity. Beginning with replacement would add emotional and cognitive friction before guidance starts.",
                    execution: "Made free-text meal search and recognisable examples the first interaction, then kept the selected main dish visually dominant throughout the experience.",
                },
                {
                    phase: "Define",
                    title: "Turn “eat healthier” into one tractable decision",
                    rationale: "A broad instruction creates interpretation burden. Choosing complementary sides is specific, reversible, and easier to understand than rebuilding an entire diet.",
                    execution: "Defined the product around a single job: pair one familiar main with sides that make the overall plate more balanced and coherent.",
                },
                {
                    phase: "Prototype",
                    title: "Make explanation available at the moment of choice",
                    rationale: "People need enough context to trust or reject a suggestion, but too much information interrupts discovery and disadvantages users with less nutrition knowledge.",
                    execution: "Built dish-detail dialogs with compact categories, plain-language context, recipe access, and a local swap action that preserves the rest of the pairing.",
                },
                {
                    phase: "Synthesize",
                    title: "Evaluate the whole plate, not isolated ingredients",
                    rationale: "Meal quality is compositional. Vegetables, protein, and carbohydrates become more meaningful when assessed together rather than as disconnected scores.",
                    execution: "Designed and implemented the plate-balance view, three-part legend, explanatory result state, and the transition from pairing to evaluation.",
                },
                {
                    phase: "Deliver",
                    title: "Build for accessibility, portability, and institutional handoff",
                    rationale: "A persuasive prototype still needs responsive behaviour, keyboard access, realistic content structures, and a path into the host institution.",
                    execution: "Implemented the full responsive product, accessible interactions, reduced-motion support, shareable output, repository, deployment, and handoff for Stanford Medicine embedding.",
                },
            ],
        },
        media: [
            { src: nourishMealDiscovery, alt: "NOURISH Meal Pairer search interface with a familiar-meal prompt and example dishes", caption: "Start with a meal the user already knows; examples reduce recall burden and make the first action immediately legible.", fit: "contain", aspect: "8/5" },
            { src: nourishDishDetail, alt: "Dish-detail dialog showing a side dish, compact nutrition categories, a recipe link, and a swap action", caption: "Nutrition context and user control appear at the decision point without forcing the user to leave the pairing flow.", fit: "contain", aspect: "8/5" },
            { src: nourishPlateBalance, alt: "Whole-plate evaluation showing the main dish and sides across vegetables, protein, and carbohydrate categories", caption: "The interface evaluates the completed plate across vegetables, protein, and carbohydrates instead of scoring one item in isolation.", fit: "contain", aspect: "8/5" },
            { src: nourishShareablePlate, alt: "Share dialog offering download, copy, and share actions for the completed meal pairing", caption: "The recommendation becomes a portable result that can be downloaded, copied, or shared.", fit: "contain", aspect: "8/5" },
            { src: nourishMobileDiscovery, alt: "Mobile NOURISH Meal Pairer search screen with a touch-friendly meal field and example dishes", caption: "The same search-first mental model compresses into a clear touch-friendly sequence on mobile.", fit: "contain", aspect: "9/16" },
        ],
        interactiveEyebrow: "Experience architecture",
        interactiveHeading: "How one familiar meal becomes an explainable, shareable plate",
        interactiveActiveLabel: "Active step",
        interactivePrimaryLabel: "User decision",
        interactiveSecondaryLabel: "Design response",
        interactiveModules: [
            {
                title: "Familiar meal",
                summary: "The experience begins with a dish the user already recognizes and wants to keep.",
                interaction: "Enter a meal directly or choose a concrete example without translating a broad health goal into search terminology.",
                effect: "Recognition-first prompts lower cognitive demand and signal that the product will work with the user's food rather than against it.",
            },
            {
                title: "Complementary sides",
                summary: "The pairing system keeps the main dish central and composes supporting sides around it.",
                interaction: "Review the complete generated pairing while retaining the main meal as the fixed anchor.",
                effect: "The visual hierarchy communicates adaptation rather than replacement and makes the system's recommendation easier to parse.",
            },
            {
                title: "Inspect or swap",
                summary: "Each suggested side remains independently explainable and replaceable.",
                interaction: "Open dish details, inspect compact nutrition context, continue to a recipe, or swap only that side.",
                effect: "Local reversible actions keep users in control and prevent one rejected recommendation from destroying the whole result.",
            },
            {
                title: "Evaluate the plate",
                summary: "The product synthesizes the completed meal across vegetables, protein, and carbohydrates.",
                interaction: "Move from individual dishes to a single plate-balance view and inspect the explanation of the full composition.",
                effect: "One visual model makes nutrition reasoning legible without demanding interpretation of a dense nutrient table.",
            },
            {
                title: "Share the result",
                summary: "The completed pairing becomes an artifact that can travel beyond the immediate session.",
                interaction: "Download, copy, or share the plate while retaining the main dish and selected sides.",
                effect: "Portability turns a recommendation into something users can revisit or discuss with others.",
            },
        ],
    },
    {
        id: "pgx-llm-copilot",
        title: "Pharmacogenomics LLM Copilot",
        subtitle: "GenieRX — an LLM tool for gene-guided prescribing. 2nd in the US and 7th of 3,500 teams globally at Harvard HSIL.",
        description: "GenieRX is an LLM pharmacogenomics tool that supports gene-guided prescribing across commonly prescribed medications. Built with a five-person team at the Harvard Health Systems Innovation Lab (HSIL) hackathon and advanced through the HSIL Venture Incubation Program, it connects to Stefan's Stanford research on CPIC-guideline-based prescribing and LLM clinical decision support.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        tags: ["Pharmacogenomics", "Clinical Decision Support", "LLM"],
        role: "GenieRX Team Leader → Director (Harvard HSIL); pharmacogenomics CDS researcher (Stanford Medicine)",
        client: "Harvard Health Systems Innovation Lab · Stanford Medicine",
        duration: "Hackathon + venture incubation; ongoing Stanford research",
        tools: ["LLM prompting", "CPIC guideline logic", "Clinical workflow mapping", "Figma"],
        outcome: "Led a five-person team to 2nd nationally (USA) and 7th of 3,500 teams globally, then directed GenieRX through the HSIL Venture Incubation Program. The clinical-workflow direction is grounded in Stanford research on CPIC-guideline-based prescribing and translating pharmacogenomics into practice.",
        accent: "#2563eb",
        stats: [
            { label: "Recognition", value: "2nd US · 7th / 3,500 global" },
            { label: "Team", value: "Five-person team" },
            { label: "Clinical domain", value: "Pharmacogenomics — gene-guided prescribing" },
            { label: "Foundations", value: "CPIC guidelines + LLM CDS (Stanford)" },
        ],
        highlights: [
            { title: "A real workflow problem", text: "Pharmacogenomic knowledge is valuable, but often too fragmented or hard to apply under time pressure." },
            { title: "Proven in competition", text: "Built by a five-person team and judged 2nd nationally (USA) and 7th of 3,500 teams globally at the Harvard HSIL hackathon, then advanced into the Venture Incubation Program." },
            { title: "Grounded in research", text: "The decision-support direction draws on Stanford research into CPIC-guideline-based prescribing and the translation of pharmacogenomics into real clinical workflows." },
        ],
        sections: [
            {
                title: "The problem",
                body: [
                    "Clinicians are expected to make safe prescribing decisions in environments where time is limited, information is fragmented, and pharmacogenomic insight is not always easy to retrieve or interpret in context.",
                    "The opportunity was to design a decision-support layer that helps clinicians move from genotype to action, rather than simply generating answers with a model.",
                ],
            },
            {
                title: "The product direction",
                body: [
                    "The concept centers on an LLM-assisted copilot that organizes clinical context, pharmacogenomic evidence, and prescribing recommendations into a usable workflow surface.",
                    "Rather than imitating a chatbot for its own sake, the design aims to reduce friction, reveal provenance, and make tradeoffs explicit where they matter most.",
                ],
            },
            {
                title: "Why it matters",
                body: [
                    "Pharmacogenomics can make prescribing safer, but only if gene-guided guidance reaches clinicians at the moment of decision. GenieRX targets exactly that gap.",
                    "The work pairs a competition-tested build with Stanford research on CPIC-guideline-based prescribing, so the interface direction is grounded in how pharmacogenomics actually translates into clinical workflows.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop", alt: "Clinical review context", caption: "The opportunity lies in improving decision quality inside time-constrained care environments." },
            { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1600&auto=format&fit=crop", alt: "Healthcare technology workflow", caption: "Clinical intelligence is only useful when surfaced at the right moment in the right form." },
            { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop", alt: "Precision medicine context", caption: "Precision medicine depends on interface quality that makes action feel safe and legible." },
        ],
        interactiveModules: [
            {
                title: "Genotype-to-Action Workflow",
                summary: "A guided sequence that turns pharmacogenomic findings into concrete prescribing guidance.",
                interaction: "Clinicians inspect a patient context, view medication implications, and expand evidence layers only where needed.",
                effect: "Progressive disclosure, evidence drawers, and crisp transitions between patient state, recommendation, and rationale.",
            },
            {
                title: "Evidence Rail",
                summary: "A supporting panel that keeps trust-building evidence in view without overwhelming the main workflow.",
                interaction: "Users can toggle between concise clinical guidance and full justification, including uncertainty or caveats.",
                effect: "Sliding panels, layered emphasis, and animated confidence states that remain calm and clinical.",
            },
            {
                title: "Decision Comparison View",
                summary: "A split-screen exploration of standard prescribing versus PGx-informed prescribing.",
                interaction: "Switching states reveals where the AI assistant clarifies risk, alternatives, or dose implications.",
                effect: "Side-by-side state transitions, highlighted delta regions, and structured comparison animations.",
            },
        ],
    },
    {
        id: "neuragility-xr-prehab",
        title: "NeurAgility XR Prehab",
        subtitle: "XR Hack the Bay Social Good winner: a wearable-signal and immersive-training prototype for precision prehabilitation.",
        description: "NeurAgility reframed prehab as an interactive feedback loop: wearable signals make body activation visible, while an XR environment turns repetitive movement into a guided, motivating task. It remains a hackathon prototype and has not been clinically validated.",
        image: neuragilityHero,
        heroFit: "contain",
        heroAspect: "16/9",
        tags: ["XR", "Social Good", "Biofeedback"],
        role: "Hackathon project contributor: XR concept, product framing, and prototype storytelling",
        client: "XR Hack the Bay",
        duration: "Hackathon prototype",
        tools: ["XR prototyping", "Wearable signal feedback", "Movement-based interaction design", "Rapid product storytelling", "Social-good pitch development"],
        outcome: "Won the Social Good category at XR Hack the Bay with a prototype positioning precision prehab as a clearer, more motivating interaction between body signals and immersive tasks.",
        accent: "#7c3aed",
        stats: [
            { label: "Recognition", value: "XR Hack the Bay · Social Good winner" },
            { label: "Prototype frame", value: "Wearable feedback + XR movement task" },
            { label: "Design goal", value: "Make prehab clearer, more engaging, and easier to repeat" },
            { label: "Evidence used here", value: "Screenshots extracted from the submitted demo video" },
        ],
        highlights: [
            { title: "Signal visibility", text: "The prototype makes muscle activation and movement feedback part of the user experience instead of hiding it behind technical instrumentation." },
            { title: "Motivation through embodied play", text: "The XR environment changes prehab from a repetitive instruction into a spatial task with visual goals, feedback, and progression cues." },
            { title: "Responsible prototype framing", text: "The evidence covers a hackathon-winning product concept and working demo, without claiming clinical validation, adherence outcomes, or deployment." },
        ],
        sections: [
            {
                title: "The design problem",
                body: [
                    "Prehabilitation and rehabilitation exercises can be difficult to sustain because feedback is often delayed, abstract, or dependent on a specialist interpreting performance. For a hackathon setting, the opportunity was to ask how immersive design could make the body-feedback loop easier to understand.",
                    "The product direction focused on precision prehab: make the user's movement and activation visible, then translate that signal into an XR task that feels less like compliance and more like progress.",
                ],
            },
            {
                title: "The prototype logic",
                body: [
                    "The demo pairs wearable signal capture with an XR environment. The signal view establishes that body activity can be measured, while the immersive scene gives that activity a purpose through movement, targeting, and progression.",
                    "This is the key design move: the interface does not ask users to interpret raw biosignals. It turns technical feedback into a visible, goal-oriented training loop.",
                ],
            },
            {
                title: "Why the framing mattered",
                body: [
                    "The Social Good pitch depended on more than novelty. The product story had to connect clinical need, user motivation, signal trust, and a feasible demo architecture within a short hackathon window.",
                    "The final concept presents XR as a behavior-design layer around precision movement practice: more interpretable for users, more demonstrable for judges, and more aligned with a future care workflow than a standalone game.",
                ],
            },
        ],
        caseStudy: {
            question: "How might XR make precision prehab feel clearer and more motivating without asking users to understand raw biosignal data?",
            framing: "The answer was to split the problem into two interfaces: a technical evidence layer that shows body activation, and an immersive task layer that turns movement into understandable action. That separation made the prototype credible as health technology and legible as a user experience.",
            processEyebrow: "Hackathon design method",
            processHeading: "From raw movement data to embodied feedback",
            processSummary: "The work moved from the prehab engagement gap to signal capture, interpretable user feedback, and a coherent social-good product proposition.",
            steps: [
                {
                    phase: "Frame",
                    title: "Define prehab as a feedback problem",
                    rationale: "If users cannot tell whether they are doing the movement well or why repetition matters, adherence becomes a motivation and comprehension problem.",
                    execution: "Positioned NeurAgility around precision prehab rather than generic fitness, making the core promise about clearer feedback and guided repetition.",
                },
                {
                    phase: "Instrument",
                    title: "Make activation visible",
                    rationale: "A health-tech prototype needs evidence that movement is being sensed, not just animated. Signal visibility builds trust in the concept.",
                    execution: "Used demo footage showing wearable setup and signal changes between baseline and activation states as the primary evidence.",
                },
                {
                    phase: "Translate",
                    title: "Turn signal into an XR task",
                    rationale: "Raw data is useful to experts, but users need goals, environmental cues, and feedback that map to the movement they are performing.",
                    execution: "Built the story around the transition from technical signal readout to immersive movement training in a spatial world.",
                },
                {
                    phase: "Motivate",
                    title: "Use embodied play without losing the clinical intent",
                    rationale: "The XR layer needed to feel engaging while still communicating prehab, control, and repeatable practice rather than pure entertainment.",
                    execution: "Selected demo visuals that show body movement alongside the XR environment, linking play mechanics back to physical practice.",
                },
                {
                    phase: "Pitch",
                    title: "Package the prototype as social-good infrastructure",
                    rationale: "Hackathon judging rewards clear social value and feasibility, not just a technical demo.",
                    execution: "Framed the outcome as a Social Good-winning concept for making precision prehab more understandable and motivating, while avoiding claims of clinical efficacy.",
                },
            ],
        },
        media: [
            { src: neuragilityHero, alt: "NeurAgility title frame reading Precision Prehab Made Easy", caption: "The demo positioned the prototype around a clear product promise: precision prehab made easier to understand and repeat.", fit: "contain", aspect: "16/9" },
            { src: neuragilityWearable, alt: "Person wearing an XR headset and biosignal setup during the NeurAgility demo", caption: "The physical setup links the immersive experience to body-signal sensing rather than treating the XR world as a standalone game.", fit: "cover", aspect: "16/9" },
            { src: neuragilitySignalBaseline, alt: "Baseline biosignal dashboard from the NeurAgility demo", caption: "A signal view establishes the evidence layer: movement can be detected and represented before it becomes user-facing feedback.", fit: "contain", aspect: "16/9" },
            { src: neuragilitySignalActivation, alt: "Biosignal dashboard showing activation during the NeurAgility demo", caption: "The demo shows the contrast between low activity and activation, grounding the product story in observable feedback.", fit: "contain", aspect: "16/9" },
            { src: neuragilityShoulderContext, alt: "Shoulder anatomy and digital interface visual from the NeurAgility demo", caption: "The product is anchored in shoulder-focused movement and prehab rather than generic XR training.", fit: "cover", aspect: "16/9" },
            { src: neuragilityXrTraining, alt: "First-person XR environment with movement targets in the NeurAgility prototype", caption: "The immersive environment converts exercise into a spatial task with visual goals and progression cues.", fit: "cover", aspect: "16/9" },
            { src: neuragilityMovementDemo, alt: "Split-screen NeurAgility demo showing XR environment beside the person performing movement", caption: "The strongest proof-of-concept moment: the user moves in the room while the XR world represents the training task.", fit: "cover", aspect: "16/9" },
        ],
        video: {
            src: "/videos/neuragility-demo.mp4",
            poster: neuragilityHero,
            title: "Full NeurAgility demo video",
            caption: "The complete submitted demo video shows the product framing, wearable setup, signal evidence, XR environment, and movement interaction as one continuous prototype story.",
        },
        interactiveEyebrow: "Experience model",
        interactiveHeading: "How the prototype turns prehab into a feedback loop",
        interactiveActiveLabel: "Prototype layer",
        interactivePrimaryLabel: "User action",
        interactiveSecondaryLabel: "Design purpose",
        interactiveModules: [
            {
                title: "Calibrate",
                summary: "The system starts with wearable setup and visible signal capture.",
                interaction: "The user enters the XR setup while the demo confirms that movement or activation can be sensed.",
                effect: "Calibration makes the experience feel grounded in body evidence rather than purely simulated motion.",
            },
            {
                title: "Move",
                summary: "The user performs a guided movement inside the immersive task.",
                interaction: "Movement becomes a spatial action, with the environment giving the user something concrete to aim for.",
                effect: "The task reframes repetition as progress, reducing the boredom and ambiguity of exercise instructions.",
            },
            {
                title: "Reflect",
                summary: "Signal views provide a technical explanation of what the movement generated.",
                interaction: "Baseline and activation states can be compared to show that the body-feedback loop is working.",
                effect: "The prototype keeps trust-building evidence available without making raw signal interpretation the main user burden.",
            },
            {
                title: "Pitch",
                summary: "The final story connects XR novelty to a social-good use case.",
                interaction: "The product narrative moves from body signal to training task to real-world prehab motivation.",
                effect: "Judges can understand the value proposition quickly: clearer feedback, more engaging repetition, and a plausible future care workflow.",
            },
        ],
    },
    {
        id: "healthcare-from-the-eye",
        title: "Healthcare from the Eye",
        subtitle: "Designing an implementation model for AI-enabled diabetic-retinopathy screening across primary care, ophthalmology, payers, and technology partners.",
        description: "As Student Project Manager for a Microsoft × Stanford MED 232 project focused on Topcon-enabled Healthcare from the Eye, I led a multidisciplinary team from needs finding through workflow design, stakeholder strategy, reimbursement analysis, and a scenario-based business model.",
        image: hfteDeviceWorkflow,
        heroFit: "contain",
        heroAspect: "16/9",
        tags: ["Health Systems", "AI Screening", "Stanford Biodesign"],
        role: "Student Project Manager and health-systems lead",
        client: "Microsoft × Stanford MED 232, with the Topcon-enabled HFTE ecosystem",
        duration: "2025",
        tools: ["Stanford Biodesign", "Stakeholder interviews", "Literature synthesis", "Workflow mapping", "Business modelling", "Reimbursement analysis", "Strategic planning", "Manuscript development"],
        outcome: "Produced a scenario-based revenue model, HFTE awareness paper, and strategic action plan, while contributing to manuscript development on HFTE's disruptive potential.",
        accent: "#8c1515",
        stats: [
            { label: "Access focus", value: "Diabetic-retinopathy screening in rural and under-resourced settings" },
            { label: "Care pathway", value: "Primary-care scan → AI grading → EHR → referral or follow-up" },
            { label: "Scale barriers", value: "Workflow, adoption, and reimbursement" },
            { label: "Deliverables", value: "Revenue model, awareness paper, and strategic action plan" },
        ],
        highlights: [
            { title: "Designed the implementation, not the algorithm", text: "The project began from a harder question than diagnostic accuracy: what has to change across people, workflows, data, and incentives for AI screening to work in routine care?" },
            { title: "Mapped value and friction together", text: "Patients, primary-care teams, eye specialists, health systems, payers, Microsoft, and Topcon each receive different benefits and inherit different work." },
            { title: "Turned research into operating decisions", text: "Needs finding and secondary research were translated into a revised care pathway, scenario economics, adoption priorities, and a staged action plan." },
        ],
        sections: [
            {
                title: "The need behind the technology",
                body: [
                    "Diabetic retinopathy is a major source of preventable blindness, yet the source deck identified a persistent screening gap and materially lower access among rural and underserved populations. The problem was not simply whether retinal AI could detect disease; it was whether the health system could reach people early enough and move positive findings into care.",
                    "Healthcare from the Eye combines non-invasive retinal imaging, AI-supported risk stratification and triage, and patient engagement. That means the product boundary extends from a camera in primary care through cloud infrastructure, graded results, EHR integration, consultation, referral, and follow-up.",
                ],
            },
            {
                title: "Biodesign as the operating method",
                body: [
                    "I led the team through Stanford Biodesign's identify, invent, and implement phases. Needs finding combined stakeholder conversations with literature review; concept screening reframed HFTE around benefits and burdens across the ecosystem; implementation work converted those insights into concrete operating and business decisions.",
                    "The work deliberately moved beyond an efficacy story. An FDA-cleared or technically effective tool still has to fit clinical routines, earn staff buy-in, connect to the EHR, protect data, support follow-up capacity, and produce a credible reason for practices and payers to participate.",
                ],
            },
            {
                title: "Rewriting the screening pathway",
                body: [
                    "The team compared a specialist-dependent screening pathway with a primary-care workflow in which retinal images are captured and graded during the visit. The deck cites a UMass evaluation reporting a two-minute screening process and a 75% reduction in screening time compared with teleretinal imaging.",
                    "The important design move was not speed alone. The redesigned pathway had to define image-quality checks, algorithmic grading, direct export into the EHR, physician consultation, urgent referral for mild or severe disease, and a twelve-month follow-up route for lower-risk results.",
                ],
            },
            {
                title: "The system that has to move",
                body: [
                    "The stakeholder map made implementation dependencies visible. Topcon and other imaging partners support oculomics; Microsoft provides connective cloud infrastructure; primary-care and eye-care organizations carry triage and treatment work; payers shape financial viability; and community and patient organizations influence awareness and uptake.",
                    "Three scale barriers organized the strategy: workflow implementation, adoption, and reimbursement. Each demanded a different response—standardized workflows and training, lower-friction leasing and patient education, and a reimbursement narrative that positions screening as a gateway into appropriate care rather than a threat to downstream revenue.",
                ],
            },
            {
                title: "A business case, not a promised outcome",
                body: [
                    "The revenue model was built as a scenario tool, not as observed performance. It tested the economics of opportunistic screening using explicit assumptions about daily eligible patients, payer mix, reimbursement, equipment leasing, cloud and algorithm costs, and staff time.",
                    "Under the deck's assumptions, the model estimated annual profit in the range of approximately $275,000 to $571,000 for 4,000–8,000 screened patients. Its purpose was to make the adoption conversation concrete and expose which assumptions require validation—not to claim realized revenue.",
                ],
            },
            {
                title: "Deliverables",
                body: [
                    "The implementation work produced three connected outputs: an HFTE awareness paper to socialize the model and address misconceptions, a scenario-based revenue model to test financial viability, and a strategic action plan spanning workflow optimization, subsidized access, payer engagement, data stewardship, and future diagnostic collaboration.",
                    "The same systems analysis also contributed to manuscript development on HFTE's disruptive potential across ophthalmology and primary care.",
                ],
            },
        ],
        caseStudy: {
            question: "How might a two-minute retinal screen become a reliable care pathway rather than an isolated technical demonstration?",
            framing: "The implementation problem sat outside the algorithm: the scan had to fit primary-care work, move results into the EHR, trigger appropriate referral and follow-up, align stakeholder incentives, and support a credible reimbursement and operating model.",
            processEyebrow: "Stanford Biodesign method",
            processHeading: "From unmet need to implementation strategy",
            processSummary: "The project followed an identify–invent–implement logic. Each phase narrowed uncertainty and produced a decision artifact that the team could use to move the model forward.",
            steps: [
                {
                    phase: "Identify",
                    title: "Frame screening as an access and continuity problem",
                    rationale: "Diagnostic capability does not prevent vision loss if underserved patients are not screened or if positive findings fail to reach treatment.",
                    execution: "Led needs finding and literature synthesis around screening gaps, rural access, care fragmentation, and the end-to-end pathway from retinal capture to follow-up.",
                },
                {
                    phase: "Map",
                    title: "Make the ecosystem and incentive structure visible",
                    rationale: "Primary care, ophthalmology, payers, technology partners, and patients experience different benefits, costs, and operational burdens.",
                    execution: "Directed stakeholder mapping and translated interviews and research into value, burden, ownership, and dependency questions across the ecosystem.",
                },
                {
                    phase: "Invent",
                    title: "Redesign the service around the fast scan",
                    rationale: "The speed advantage matters only when image quality, grading, EHR export, consultation, referral, and follow-up are deliberately connected.",
                    execution: "Led comparison of specialist-dependent and primary-care pathways, then defined handoffs, result states, escalation routes, and follow-up requirements.",
                },
                {
                    phase: "Model",
                    title: "Expose the assumptions behind adoption",
                    rationale: "Practices and payers need to see how patient volume, reimbursement, equipment, software, and staffing interact before committing resources.",
                    execution: "Built a scenario-based revenue model that made payer mix, throughput, leasing, cloud, algorithm, and staff-cost assumptions explicit and testable.",
                },
                {
                    phase: "Implement",
                    title: "Convert analysis into a staged action plan",
                    rationale: "Workflow, adoption, and reimbursement constraints cannot be solved as one generic scale problem; they require sequenced owners and evidence.",
                    execution: "Produced the HFTE awareness paper, strategic action plan, and implementation priorities while contributing the systems analysis to manuscript development.",
                },
            ],
        },
        media: [
            { src: hfteNeed, alt: "Presentation slide explaining diabetic-retinopathy screening need, retinal damage, screening rates, and rural access disparities", caption: "The case begins with an access problem: preventable vision loss persists when screening does not reach people early enough.", fit: "contain", aspect: "16/9" },
            { src: hfteBiodesignFramework, alt: "Stanford Biodesign framework showing identify, invent, and implement phases from needs finding through business planning", caption: "Biodesign provided the structure for moving from needs finding to a practical implementation model.", fit: "contain", aspect: "16/9" },
            { src: hfteStakeholderEcosystem, alt: "Healthcare from the Eye ecosystem map grouping technology, health-care, payer, and patient-engagement partners", caption: "HFTE is an ecosystem product: technical performance and service delivery depend on different organizations moving together.", fit: "contain", aspect: "16/9" },
            { src: hfteWorkflowComparison, alt: "Presentation slide comparing a 30-to-50-minute specialist workflow with a two-minute Healthcare from the Eye pathway", caption: "The redesigned pathway moves screening into primary care while preserving consultation, referral, and follow-up decisions.", fit: "contain", aspect: "16/9" },
            { src: hfteScalingChallenges, alt: "Three-column analysis of workflow implementation, adoption, and reimbursement barriers with proposed responses", caption: "Scaling was treated as three linked design problems: workflow implementation, adoption, and reimbursement.", fit: "contain", aspect: "16/9" },
            { src: hfteRevenueModel, alt: "Scenario revenue model showing patient volume, payer mix, equipment, cloud, algorithm, and staff-cost assumptions", caption: "The model makes assumptions visible so stakeholders can test the business case instead of debating it abstractly.", fit: "contain", aspect: "16/9" },
            { src: hfteDeliverables, alt: "Presentation slide showing the three project deliverables: revenue model, HFTE awareness paper, and strategic action plan", caption: "Research was converted into three implementation artifacts rather than ending as a diagnostic summary.", fit: "contain", aspect: "16/9" },
        ],
        interactiveEyebrow: "Implementation lenses",
        interactiveHeading: "The operating model behind a two-minute eye screen",
        interactiveActiveLabel: "Active lens",
        interactivePrimaryLabel: "System view",
        interactiveSecondaryLabel: "Design implication",
        interactiveModules: [
            {
                title: "Care pathway",
                summary: "A primary-care scan is only useful when quality control, grading, EHR export, consultation, referral, and follow-up form one reliable service.",
                interaction: "Trace the pathway from retinal capture through a positive or lower-risk result and identify where ownership changes hands.",
                effect: "Makes the hidden operational work around a fast clinical interaction visible and assignable.",
            },
            {
                title: "Stakeholder value",
                summary: "Patients, practices, specialists, payers, technology partners, and community organizations each experience a different value proposition.",
                interaction: "Move between stakeholder perspectives to compare who benefits, who pays, who performs new work, and who carries follow-up risk.",
                effect: "Prevents a single-actor business case from hiding the incentives that determine real adoption.",
            },
            {
                title: "Scale barriers",
                summary: "Workflow implementation, adoption, and reimbursement are separate constraints that reinforce one another.",
                interaction: "Inspect each barrier alongside the team's proposed operating response, from staff training to lease incentives and payer engagement.",
                effect: "Turns a generic call for scale into a prioritized set of implementation decisions.",
            },
            {
                title: "Business model",
                summary: "The scenario model connects eligible patient volume and payer mix to recurring equipment, cloud, algorithm, and staffing costs.",
                interaction: "Treat every figure as a variable to validate rather than a guaranteed result.",
                effect: "Makes the economic logic auditable and shows where a pilot must collect better evidence.",
            },
            {
                title: "Action roadmap",
                summary: "Short-term workflow and payer work creates the base for longer-term subsidy, data-stewardship, and diagnostic-development partnerships.",
                interaction: "Sequence the recommendations by dependency instead of treating all next steps as parallel.",
                effect: "Clarifies what the ecosystem can act on now and what requires additional validation or institutional alignment.",
            },
        ],
    },
    {
        id: "ent-readmission-platform",
        title: "PainGone PainGuin",
        subtitle: "A two-sided home-recovery concept for children after tonsillectomy and adenoidectomy.",
        description: "Completed through the Stanford Biodesign for Digital Health program, this concept pairs caregiver guidance and proactive risk monitoring with a child-facing companion designed to support hydration, nutrition, medication, and pain-management routines during the first seven days at home.",
        image: entPainGonePainGuinConcept,
        heroFit: "contain",
        heroAspect: "16/9",
        tags: ["Pediatric ENT", "Digital Health", "Stanford Biodesign"],
        role: "Health innovation collaborator and service designer",
        client: "Stanford Biodesign for Digital Health · Team 6, Hospital at Home",
        duration: "10-week experiential program",
        tools: ["Clinical and end-user interviews", "Biodesign needs finding", "Need-statement development", "Literature synthesis", "Stakeholder mapping", "Concept generation and screening", "Care-pathway mapping", "Behavioral design", "Risk-escalation design", "Business-model assumptions", "Pilot planning"],
        outcome: "Applied Stanford's needs-driven Biodesign process with ENT surgeons, hospital teams, children, and parents to develop an ENT-specific app-and-companion concept, home-recovery workflow, stakeholder value proposition, and staged validation plan.",
        accent: "#c52f47",
        links: [
            { label: "Stanford Biodesign process", url: "https://biodesign.stanford.edu/about-us/process.html" },
            { label: "Digital Health course", url: "https://biodesign.stanford.edu/programs/stanford-courses/biodesign-for-digital-health.html" },
        ],
        stats: [
            { label: "Program", value: "Application-only · BIOE 273 / MED 273" },
            { label: "Critical window", value: "First seven days of recovery at home" },
            { label: "User model", value: "Caregiver workflow + child-facing companion" },
            { label: "Evidence status", value: "Concept and proposed pilot; not yet clinically validated" },
        ],
        highlights: [
            { title: "Learned in class, tested against the care context", text: "The program paired formal Biodesign teaching and expert mentorship with a real health challenge, requiring the team to move repeatedly between the framework, stakeholder evidence, and concept decisions." },
            { title: "Designed with the whole recovery system", text: "ENT surgeons and hospital teams clarified clinical and workflow realities; children who had experienced tonsillitis and parents made the home-care burden, uncertainty, and cooperation problem tangible." },
            { title: "Separated ambition from evidence", text: "Readmission reduction, dehydration detection, adherence, savings, and ROI appear as design targets or model assumptions—not as achieved outcomes." },
        ],
        sections: [
            {
                title: "Why the Biodesign program matters",
                body: [
                    "Biodesign for Digital Health is a limited-enrollment, application-only Stanford course (BIOE 273 / MED 273) delivered through the Stanford Mussallem Center for Biodesign. The ten-week program brings multidisciplinary students into a project-based environment supported by experienced instructors, need coaches, mentors, and more than 50 digital-health and industry experts.",
                    "Its significance is methodological as much as institutional. Stanford Biodesign has refined its need-driven health-technology innovation process since 2000. Rather than beginning with an attractive technology, teams begin with an important unmet need, generate and screen possible responses, and develop an implementation path capable of surviving clinical, operational, regulatory, payment, and business constraints.",
                ],
            },
            {
                title: "From the teaching framework to fieldwork",
                body: [
                    "The official framework moves through Identify, Invent, and Implement, with iteration inside every phase. In this project, classroom teaching was immediately applied to a live pediatric ENT challenge: observe and research the recovery problem, define and filter the need, generate and compare concepts, and then test whether the lead concept could fit a real care pathway.",
                    "We interviewed ENT surgeons, worked with hospital teams, and engaged end users—including children who had experienced tonsillitis and parents managing tonsillitis at home. This combination prevented the project from being shaped by one perspective alone: clinical stakeholders described safety, escalation, and discharge constraints, while families exposed the practical and emotional work of hydration, food, medication, pain, and uncertainty outside the hospital.",
                ],
            },
            {
                title: "The recovery gap after discharge",
                body: [
                    "The source research framed pediatric tonsillectomy and adenoidectomy recovery as a fragile transition from hospital to home. Caregivers may leave with a paper instruction sheet yet still be unsure how much a child should drink, whether pain is expected, when medication is due, or when a symptom requires clinical help.",
                    "The first seven days concentrate the hardest work: pain can peak, appetite and fluid intake can fall, and children may resist eating, drinking, or taking medication. A caregiver-only information product would therefore address only half of the behavior problem.",
                ],
            },
            {
                title: "What the interviews changed",
                body: [
                    "The interviews shifted the problem away from generic discharge education. Parents did need clearer information, but the daily recovery routine also depended on whether a child in pain would drink, eat, and take medication. The design therefore had to support caregiver comprehension and child cooperation at the same time.",
                    "Hospital and ENT perspectives also made escalation part of the product boundary. Logging symptoms without a clear response would simply move uncertainty into a screen. The concept therefore connected daily tracking to explainable risk flags, next-step guidance, and a route back to the care team.",
                ],
            },
            {
                title: "The PainGone PainGuin concept",
                body: [
                    "PainGone is the caregiver layer: a personalized care plan, medication and pain tracking, fluid and food logs, symptom check-ins, reminders, risk flags, a question-and-answer pathway, and a route to contact the care team. PainGuin is the child layer: a companion whose wellbeing reacts to the child's real recovery behaviors.",
                    "The behavioral mechanism makes an abstract clinical instruction tangible. Drinking water or eating is represented as caring for PainGuin, while the caregiver retains the operational view needed to recognize patterns and act on risk.",
                ],
            },
            {
                title: "Designing the home-recovery loop",
                body: [
                    "The proposed journey begins at discharge, when the caregiver scans a QR code, installs the app, and receives a tailored plan. At home, the caregiver logs fluids, pain, medication, food, and symptoms while the child engages with PainGuin. The system then provides reminders and flags patterns associated with dehydration or uncontrolled pain.",
                    "The escalation layer was designed to nudge caregivers before a problem becomes acute and to clarify when provider contact is appropriate. This is a proposed decision-support workflow, not an autonomous clinical diagnosis or a validated monitoring system.",
                ],
            },
            {
                title: "Design criteria and business logic",
                body: [
                    "The team translated the need into explicit must-have criteria covering readmission reduction, dehydration detection, caregiver comprehension, adherence, affordability, and safety. These thresholds functioned as concept-screening and future-validation targets; the project did not produce clinical performance data against them.",
                    "The adoption model considered three stakeholders together: families, ENT departments and hospitals, and insurers. A B2B software model and national savings scenarios were developed to test plausibility, but all pricing, savings, and ROI figures in the deck are projections based on assumptions rather than realized results.",
                ],
            },
            {
                title: "What would need to happen next",
                body: [
                    "The proposed path begins with an early Stanford CHARIOT pilot focused on feasibility, usability, safety, caregiver comprehension, child engagement, and workflow fit. It would require a finalized MVP, clinical governance, data and IRB planning, and clear escalation protocols before any efficacy claim.",
                    "Only after evidence from an initial pilot should the team test hospital purchasing, quality-improvement funding, reimbursement pathways, insurer partnerships, or expansion into other procedures. The work therefore ends with a validation roadmap rather than a claim of launch or clinical impact.",
                ],
            },
        ],
        caseStudy: {
            question: "How might an ENT recovery system help caregivers know what to do while motivating children to drink, eat, and take medication during the highest-risk week at home?",
            framing: "The design challenge was not simply to digitize discharge instructions. It was to connect comprehension, child behavior, daily monitoring, and clinical escalation in one low-friction recovery loop—then define what evidence would be required before deployment.",
            processEyebrow: "Stanford Biodesign for Digital Health",
            processHeading: "Teaching framework → field evidence → testable care concept",
            processSummary: "The project used Stanford Biodesign's Identify–Invent–Implement structure as an applied working method. Each phase shows how formal teaching was converted into interviews, design decisions, concept artifacts, and an evidence plan.",
            steps: [
                {
                    phase: "Identify",
                    title: "Observe the recovery system from multiple viewpoints",
                    rationale: "A meaningful need cannot be defined from the hospital's perspective alone; the recovery work changes when the child and caregiver leave the clinical setting.",
                    execution: "Interviewed ENT surgeons, worked with hospital teams, and engaged children with tonsillitis and parents alongside literature review to map pain, hydration, nutrition, medication, comprehension, and escalation challenges.",
                },
                {
                    phase: "Identify",
                    title: "Synthesize and filter the unmet need",
                    rationale: "Needs finding only becomes actionable when observations are translated into a population, problem, outcome, and defensible set of screening criteria.",
                    execution: "Framed the seven-day home-recovery need and filtered it through stakeholder relevance, caregiver comprehension, child cooperation, risk detection, affordability, adherence, and safety criteria.",
                },
                {
                    phase: "Invent",
                    title: "Generate and screen responses to the need",
                    rationale: "Biodesign asks teams to compare concepts against the need rather than allowing an early favorite to define the problem retrospectively.",
                    execution: "Compared parent-only, reactive, and generic pediatric approaches, then selected an ENT-specific two-sided model that addressed both caregiver decision-making and child behavior.",
                },
                {
                    phase: "Invent",
                    title: "Prototype the app, companion, and service loop",
                    rationale: "The lead concept had to operate as a care pathway, not a disconnected feature list, and remain legible to both children and adults under stress.",
                    execution: "Developed PainGone for plans, logs, reminders, questions, flags, and provider contact; paired it with PainGuin; and mapped discharge, daily routines, alerts, and escalation.",
                },
                {
                    phase: "Implement",
                    title: "Define a responsible validation pathway",
                    rationale: "Readmission, safety, detection, adherence, and economic claims require prospective evidence and clinical governance before they can support deployment.",
                    execution: "Outlined an MVP and Stanford CHARIOT pilot pathway, IRB and data planning, hospital partnerships, purchasing routes, and later reimbursement exploration.",
                },
            ],
        },
        media: [
            { src: stanfordBiodesignProcess, alt: "Official Stanford Biodesign innovation-process framework showing the iterative Identify, Invent, and Implement phases", caption: "Stanford's official framework treats innovation as a repeatable, iterative process: identify the unmet need, invent against explicit criteria, and plan implementation. Source: Stanford Mussallem Center for Biodesign.", fit: "contain", aspect: "16/9" },
            { src: stanfordBiodesignClassroom, alt: "Stanford Biodesign for Digital Health classroom with a student team presenting a mobile-health concept", caption: "The application-only course blends instruction, expert critique, teamwork, and project delivery. This official Stanford course image illustrates the learning environment; it is not the PainGone PainGuin team.", fit: "cover", aspect: "16/9" },
            { src: entDischargeResearch, alt: "Research slide showing pediatric ENT anatomy and evidence that caregivers can misunderstand post-operative instructions about hydration, pain, and when to seek help", caption: "Need finding moved beyond the existence of discharge instructions to whether families can interpret and act on them at home.", fit: "contain", aspect: "16/9" },
            { src: entNeedStatement, alt: "Stanford Biodesign need statement for improving home recovery after pediatric tonsillectomy or adenoidectomy", caption: "The 40% readmission-reduction figure was a design target used to focus concept development, not an achieved result.", fit: "contain", aspect: "16/9" },
            { src: entProductWorkflow, alt: "Four-stage PainGone PainGuin workflow from discharge setup through daily tracking, child engagement, and caregiver alerts", caption: "The service connects discharge setup, a daily caregiver routine, child engagement, and risk-oriented support across the first week.", fit: "contain", aspect: "16/9" },
            { src: entGapAnalysis, alt: "Gap analysis comparing parent-only, reactive, and generic pediatric tools with the proposed two-sided ENT-specific system", caption: "Concept differentiation came from addressing child behavior, proactive support, ENT specificity, and instruction comprehension together.", fit: "contain", aspect: "16/9" },
            { src: entValueProposition, alt: "Stakeholder value proposition for pediatric ENT departments, children and caregivers, and insurers", caption: "The value hypothesis was mapped across the family, care-delivery, and payer perspectives rather than relying on a single-user benefit.", fit: "contain", aspect: "16/9" },
            { src: entPathToPayment, alt: "Proposed path from a Stanford CHARIOT pilot to hospital purchasing and later reimbursement or insurer partnerships", caption: "The implementation pathway explicitly starts with evidence generation; purchasing and reimbursement are later hypotheses.", fit: "contain", aspect: "16/9" },
        ],
        interactiveEyebrow: "Recovery workflow",
        interactiveHeading: "How the two-sided recovery system works",
        interactiveActiveLabel: "Active stage",
        interactivePrimaryLabel: "Caregiver and child action",
        interactiveSecondaryLabel: "Design response",
        interactiveModules: [
            {
                title: "Discharge setup",
                summary: "The caregiver scans a hospital-provided QR code, installs PainGone PainGuin, and receives a personalized recovery plan.",
                interaction: "Confirm the procedure, medication schedule, hydration guidance, warning signs, care-team contact, and accessibility needs before leaving.",
                effect: "Turns a one-time paper handoff into an initialized recovery pathway with clear ownership and next actions.",
            },
            {
                title: "Child engagement",
                summary: "The child feeds, gives water to, and cares for PainGuin as a representation of their own recovery behaviors.",
                interaction: "Connect real actions such as drinking or eating to immediate, age-appropriate feedback from the companion.",
                effect: "Makes repetitive clinical instructions concrete and gives the child an active role in the recovery routine.",
            },
            {
                title: "Daily home routine",
                summary: "The caregiver records fluids, food, pain scores, medication, and symptoms while receiving contextual reminders.",
                interaction: "Review the day's recovery pattern instead of interpreting each data point or missed task in isolation.",
                effect: "Creates a lightweight longitudinal view that can support comprehension and reveal patterns requiring attention.",
            },
            {
                title: "Risk alerts",
                summary: "The proposed system identifies patterns associated with dehydration or uncontrolled pain and nudges the caregiver before escalation.",
                interaction: "Present the reason for the flag, the immediate recommended action, and the threshold for contacting the care team.",
                effect: "Replaces a vague warning with a legible decision step while keeping clinical judgment and validation requirements explicit.",
            },
            {
                title: "Provider escalation",
                summary: "When a pattern crosses a defined threshold, the caregiver can contact the ENT team with structured context from the home-recovery log.",
                interaction: "Share the relevant symptom, intake, pain, and medication history while preserving a clear emergency route.",
                effect: "Supports a more informed handoff and defines the clinical governance that a future pilot would need to test.",
            },
        ],
    },
    {
        id: "dialysis-device-gtm",
        title: "Adcem × Fidson Dialysis Access",
        subtitle: "Building a local manufacturing and home peritoneal-dialysis pathway for Nigeria.",
        description: "Through Stanford GSB SEED, I supported product management and business development for the Adcem Fidson joint venture—connecting manufacturing economics, a CR-CAPD home-therapy model, clinical implementation, validation design, and a route to scale.",
        image: adcemLocalManufacturing,
        heroFit: "contain",
        heroAspect: "16/9",
        tags: ["Dialysis Access", "Venture Strategy", "Local Manufacturing"],
        role: "Product Management and Business Development Intern",
        client: "Adcem Fidson Joint Venture · Stanford GSB SEED",
        duration: "April–December 2025",
        tools: ["Product management", "Business development", "Renal-care pathway design", "Financial modelling", "Partnership design", "Pilot planning", "Supply-chain strategy", "Clinical advisory coordination", "Implementation strategy"],
        outcome: "Translated the venture thesis into pilot and implementation plans, financial modelling, partnership documents, audits, and supply-chain strategy for a proposed Nigerian dialysis-manufacturing and home-CAPD platform.",
        accent: "#0b4a9f",
        stats: [
            { label: "Venture model", value: "Adcem channels and technology transfer × Fidson manufacturing" },
            { label: "Flagship pathway", value: "CR-CAPD home peritoneal dialysis" },
            { label: "Planned feasibility study", value: "20–26 weeks · 24–32 patients · four hospitals" },
            { label: "My work", value: "Pilot, economics, partnerships, audits, and supply chain" },
        ],
        highlights: [
            { title: "Localization as product strategy", text: "The core move was to shift from importing finished dialysis products to importing inputs and transferring production into a Nigerian manufacturing line." },
            { title: "The product includes care delivery", text: "A home-CAPD system only works when catheter coordination, staff preparation, patient training, infection prevention, and ongoing support are designed together." },
            { title: "Validation before expansion", text: "The proposed feasibility study was structured to test clinical, operational, patient-experience, and economic assumptions before wider replication." },
        ],
        sections: [
            {
                title: "The access problem",
                body: [
                    "The joint-venture proposal framed a large renal-care gap in Nigeria: high chronic-kidney-disease burden, fewer than 250 dialysis centres concentrated in urban areas, and in-centre hemodialysis costs that can exceed the national monthly minimum wage several times over.",
                    "Import dependence sits underneath that access problem. Finished dialysis products absorb freight, currency, and intermediary costs, while local pharmaceutical manufacturing supplies only a minority of domestic demand. The commercial challenge and the public-health challenge are therefore linked.",
                ],
            },
            {
                title: "The joint-venture thesis",
                body: [
                    "Adcem contributes dialysis expertise, technology transfer, raw-material sourcing, training, marketing, distribution, and an established renal-care network. Fidson contributes a Nigerian manufacturing facility, production labour, and integration into an existing pharmaceutical line.",
                    "The future-state model replaces imported finished goods with locally manufactured dialysis consumables. That changes the cost structure while preserving a clear off-take and distribution route through Adcem's existing relationships.",
                ],
            },
            {
                title: "From a consumable to a care system",
                body: [
                    "The flagship CR-CAPD pathway was designed around home-based continuous ambulatory peritoneal dialysis. The proposal combines the bag set, transfer set, catheter pathway, and supporting consumables with a practical implementation model.",
                    "The planned patient experience included hospital-coordinated catheter placement, one-on-one training, infection-prevention protocols, four daily exchanges, monitoring and reporting, local-language learning materials, and 24/7 support. The product is therefore not only hardware; it is a supported care service.",
                ],
            },
            {
                title: "The pilot as validation infrastructure",
                body: [
                    "The proposal specified a 20–26 week feasibility study across four teaching hospitals in Lagos, Enugu, and Kano, with an initial 24–32 patients. Those are planned study parameters, not completed enrollment or outcomes.",
                    "The measurement plan covered peritonitis and infection, fluid balance, hospitalizations, survival, quality of life, patient and provider feedback, ease of use, satisfaction, cost comparison with hemodialysis, and patient out-of-pocket spending. This made the pilot a learning system for clinical, operational, and business decisions.",
                ],
            },
            {
                title: "Preparing people and sites",
                body: [
                    "Before patient launch, each hospital would receive hands-on workshops for nephrologists and nurses on peritoneal-dialysis protocols, infection prevention, and patient coaching. Equipment and educational materials would be supplied so sites begin with a defined operating standard.",
                    "At patient level, the education model moved from basic CAPD understanding to hands-on bag exchange, hygiene, symptom tracking, reporting, and continued support. Adoption was treated as a capability-building problem rather than a marketing message.",
                ],
            },
            {
                title: "My contribution and the scale pathway",
                body: [
                    "As Product Management and Business Development Intern, I worked across financial modelling, partnership documentation, pilot planning, implementation strategy, clinical advisory coordination, audits, and supply-chain planning.",
                    "The proposed scale pathway used the feasibility study to support clinical publication, engagement with nephrology leaders and policymakers, insurance advocacy, community outreach, and future replication. The evidence documents strategy and planned implementation; the pilot and projected clinical or commercial outcomes have not yet been achieved.",
                ],
            },
        ],
        caseStudy: {
            question: "How might a dialysis joint venture lower structural access barriers while proving that a home-CAPD model can operate safely and sustainably?",
            framing: "The answer could not be a product catalogue alone. It required a connected system spanning local manufacturing, venture governance, hospital readiness, patient training, clinical support, supply continuity, and an evidence plan capable of informing scale.",
            processEyebrow: "Venture design method",
            processHeading: "From market constraint to an executable care model",
            processSummary: "The work treated affordability, delivery, and validation as one system. Each phase links the strategic reasoning to the product-management and business-development artifacts I helped produce.",
            steps: [
                {
                    phase: "Frame",
                    title: "Define the access problem beneath treatment demand",
                    rationale: "Renal-care demand alone does not explain access. Import dependence, urban concentration, recurring consumable costs, and limited local production shape whether treatment is reachable.",
                    execution: "Synthesised proposal evidence into a market problem statement connecting clinical need, treatment economics, supply exposure, and manufacturing capacity.",
                },
                {
                    phase: "Structure",
                    title: "Translate complementary assets into a joint operating model",
                    rationale: "A joint venture only becomes executable when technology transfer, production, quality, sourcing, training, off-take, and distribution responsibilities are explicit.",
                    execution: "Supported partnership documentation, financial modelling, governance planning, and the division of work between Adcem's dialysis capabilities and Fidson's manufacturing platform.",
                },
                {
                    phase: "Design",
                    title: "Treat CAPD as a supported service, not a bag set",
                    rationale: "Home peritoneal dialysis transfers technical work to patients and caregivers, making catheter coordination, training, hygiene, monitoring, and support part of the product.",
                    execution: "Mapped the proposed patient and hospital pathway across catheter placement, four daily exchanges, staff workshops, infection prevention, reporting, and 24/7 support.",
                },
                {
                    phase: "Validate",
                    title: "Use the feasibility study as a learning system",
                    rationale: "Before expansion, the venture needs evidence across safety, usability, site readiness, patient experience, cost, and operational feasibility.",
                    execution: "Supported the 20–26 week, four-hospital pilot design and its measurement plan across infection, fluid balance, hospitalisation, survival, quality of life, feedback, and spending.",
                },
                {
                    phase: "Sequence",
                    title: "Connect pilot evidence to scale decisions",
                    rationale: "Clinical findings, manufacturing readiness, payer interest, professional advocacy, and community trust mature at different speeds and require different evidence.",
                    execution: "Linked pilot outputs to publication, nephrology engagement, insurance advocacy, community outreach, supply-chain planning, and future replication decisions.",
                },
            ],
        },
        media: [
            { src: adcemDialysisMarket, alt: "Joint-venture proposal slide summarizing chronic kidney disease and dialysis demand estimates in Nigeria and across Africa", caption: "The proposal synthesised renal-care demand estimates to frame dialysis access as both a health-system and capacity problem.", fit: "contain", aspect: "16/9" },
            { src: adcemMarketPainPoints, alt: "Four-part analysis of Nigeria's fragmented medical-supply market, import reliance, limited local production, and sector complexity", caption: "The market diagnosis connected fragmented supply, import exposure, limited local production, and regulatory and workforce constraints.", fit: "contain", aspect: "16/9" },
            { src: adcemLocalManufacturing, alt: "Current-state and future-state model showing the shift from imported finished dialysis goods to local Nigerian manufacturing", caption: "The operating thesis is visible in one transition: import inputs, manufacture locally, and return cost savings to the care pathway.", fit: "contain", aspect: "16/9" },
        ],
        interactiveEyebrow: "Venture workstreams",
        interactiveHeading: "How manufacturing, care delivery, and evidence connect",
        interactiveActiveLabel: "Active workstream",
        interactivePrimaryLabel: "Operating model",
        interactiveSecondaryLabel: "Validation need",
        interactiveModules: [
            {
                title: "Local manufacturing",
                summary: "Move from imported finished consumables to local production using Adcem's technology and channel relationships and Fidson's manufacturing line.",
                interaction: "Map responsibility for technology transfer, raw-material sourcing, staff training, production, quality, off-take, and distribution.",
                effect: "Validate production economics, regulatory requirements, quality systems, and whether savings reach providers and patients.",
            },
            {
                title: "JV governance",
                summary: "The partnership needs a clear bridge between board decisions, implementation work, and on-the-ground pilot execution.",
                interaction: "Define which decisions sit with joint governance, the implementation team, hospital partners, clinical advisors, logistics, finance, and commercial teams.",
                effect: "Test decision rights, escalation paths, accountability, and the operating cadence required before scale.",
            },
            {
                title: "CAPD pilot",
                summary: "A planned multi-site feasibility study connects the product, hospital workflow, patient support, and evidence plan.",
                interaction: "Trace the sequence from site preparation and catheter placement through home exchanges, support, monitoring, and follow-up.",
                effect: "Validate safety, usability, site readiness, clinical outcomes, patient experience, and cost assumptions before expansion.",
            },
            {
                title: "Patient enablement",
                summary: "Home dialysis transfers meaningful work to patients and caregivers, so education and support are core product infrastructure.",
                interaction: "Structure onboarding around CAPD understanding, hands-on exchange practice, hygiene, symptom tracking, reporting, and local-language materials.",
                effect: "Validate comprehension, technique confidence, support demand, adherence, and infection-prevention performance.",
            },
            {
                title: "Evidence to scale",
                summary: "Clinical, operational, and economic evidence must travel from the pilot into policy, reimbursement, professional advocacy, and replication decisions.",
                interaction: "Sequence publication, nephrology engagement, payer and government advocacy, community outreach, and future country expansion.",
                effect: "Validate which audiences need which evidence and what must be proven before each next-stage commitment.",
            },
        ],
    },
];
