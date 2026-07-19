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
    caseStudy?: ProjectCaseStudy;
    links?: ProjectLink[];
    popout?: ProjectPopout;
}

export const projects: Project[] = [
    {
        id: "casa",
        title: "Casa",
        subtitle: "A culinary-medicine platform that turns personalised guidance into health-optimised meal kits from restaurants people already know.",
        description: "A free consumer app, an AI intelligence layer, and a restaurant operating system designed as one connected service.",
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
                    "The problem is not a shortage of recipes. On a weeknight, people still have to find something trustworthy, judge whether it suits their goals and culture, work out what they own, shop, prepare, and cook while tired.",
                ],
                media: { src: casaIntentToDinnerGap, alt: "Casa journey map showing five points where eating well at home breaks down", caption: "The source journey identifies five compounding failure points, from recipe discovery to the final effort of cooking.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "Make culinary medicine usable",
                body: [
                    "Practitioner-informed recipes, guided cooking, smart-pantry support, and restaurant-prepared kits. Users engage at the level that fits the night: learn and cook, cut shopping friction, or order a matched kit.",
                ],
                media: { src: casaSolutionPillars, alt: "Casa solution architecture showing health-optimised recipes, guided cooking, smart pantry, and meal kits", caption: "Three service pillars connect trusted meal guidance to practical household execution.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "Understand, match, deliver",
                body: [
                    "Casa learns diet, taste, and routine; an agent turns that context into ranked meals and kit options; the user cooks with guidance or receives the kit on demand.",
                ],
                media: { src: casaUnderstandMatchDeliver, alt: "Casa experience flow from understanding a user to matching meals and delivering meal kits", caption: "The consumer journey translates a complex platform into three legible actions: understand, match, and deliver.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "A coordinated product stack",
                body: [
                    "The consumer app is the visible edge. Behind it, the restaurant OS supports build sheets, batch plans, labels, and analytics, while the product studio standardises recipes, nutrition data, and packaging.",
                    "I mapped these as interdependent surfaces so the customer promise remains executable in the kitchen.",
                ],
                media: { src: casaProductStack, alt: "Casa product stack showing the consumer app, AI intelligence layer, restaurant OS, and product studio", caption: "The stack links the experience layer to the operational infrastructure needed to fulfill it.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "The intelligence and learning loop",
                body: [
                    "LLMs translate qualitative tastes into structured preferences, ranking models prioritise kits by likely fit, and agents surface demand signals restaurant partners can act on.",
                ],
                media: { src: casaAiIntelligenceLoop, alt: "Casa AI intelligence loop connecting meal planning, personalisation, trend signals, orders, and restaurant recipe redesign", caption: "The supplied intelligence-layer architecture shows how household and restaurant signals form a reinforcing learning loop.", fit: "contain", aspect: "16/9" },
            },
            {
                title: "Unlock supply without building kitchens",
                body: [
                    "Casa’s supply thesis starts with an existing asset: restaurant staff, equipment, and ingredients are concentrated around lunch and dinner peaks, leaving periods of underused capacity.",
                    "The operating model converts selected downtime into planned kit production — a recurring revenue line for restaurants, and supply that scales through local partners rather than a central kitchen.",
                ],
                media: { src: casaRestaurantCapacity, alt: "Casa capacity model showing meal-kit preparation between restaurant lunch and dinner peaks", caption: "A time-based service blueprint positions kit preparation in the capacity valleys between service peaks.", fit: "contain", aspect: "16/9" },
            },
        ],
        caseStudy: {
            question: "How might we make culinary medicine workable on a busy weeknight while using restaurant capacity that already exists?",
            framing: "Casa treats household decision fatigue and restaurant underutilisation as one system.",
            processEyebrow: "Venture design method",
            processHeading: "From recurring failure point to operating system",
            processSummary: "From the household problem to a two-sided service blueprint.",
            steps: [
                {
                    phase: "Frame",
                    title: "Locate the real dinner breakdown",
                    rationale: "Recipe discovery, trust, shopping, optimisation, and cooking are usually treated as separate tasks, even though users experience them as one exhausting chain.",
                    execution: "Mapped the end-to-end household journey to the point where good intentions collapse into takeaway.",
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
                    execution: "Kept the app free; revenue sits in recurring kits, supplier services, and restaurant SaaS, with clinician referral as the first trust channel.",
                },
            ],
        },
        media: [
            { src: casaTwoSidedProblem, alt: "Casa two-sided problem frame comparing household dinner friction with restaurant operating friction", caption: "The venture begins with two connected unmet needs: households need lower-friction dinner decisions, while restaurants need predictable recurring demand.", fit: "contain", aspect: "16/9" },
            { src: casaAiInputs, alt: "Casa AI model connecting household signals, restaurant capacity, trend intelligence, and creator content", caption: "The intelligence layer combines household, supply, trend, and content signals instead of treating personalisation as a consumer-only problem.", fit: "contain", aspect: "16/9" },
            { src: casaBusinessModel, alt: "Casa business model showing meal-kit subscriptions, brand consulting, and restaurant software", caption: "The commercial model keeps the consumer guidance layer free while monetising fulfillment and supply-side services.", fit: "contain", aspect: "16/9" },
            { src: casaGoToMarket, alt: "Casa go-to-market loop connecting clinician referral, app onboarding, and patient use", caption: "The initial go-to-market hypothesis uses clinician trust to reach people who need the service before expanding to a broader consumer market.", fit: "contain", aspect: "16/9" },
        ],
        mediaHeading: "Product, intelligence, and market logic in one system",
        mediaLayout: "editorial",
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
            description: "Explore the working prototype.",
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
                    "Digital health tools work better when they respect culture, motivation, and everyday behavior rather than assuming compliance.",
                ],
            },
        ],
        media: [
            { src: swaadBranding, alt: "SWAAD branding", caption: "A vibrant visual system that positions metabolic health as inviting, modern, and culturally resonant." },
            { src: swaadMealExplorer, alt: "SWAAD recipe flow", caption: "Meal discovery experience structured around preferences, pantry context, and health goals." },
            { src: swaadNutriserve, alt: "SWAAD educational game", caption: "Interactive nutrition learning translated into playful service mechanics." },
            { src: swaadGame, alt: "SWAAD game screen", caption: "Gamified interfaces designed to make tradeoffs in food decisions legible and memorable." },
        ],
    },
    {
        id: "nourish-meal-explorer",
        title: "NOURISH Meal Pairer AI",
        subtitle: "Turning familiar meals into balanced, culturally relevant plates through a health-literacy-aware pairing experience.",
        description: "I conceived, designed, and built the Meal Explorer end to end. The current build uses placeholder recipes while the NOURISH team prepares its reviewed launch library.",
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
            description: "Try the pairing flow — familiar main to shareable plate. Recipe data is provisional.",
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
                    "Many nutrition tools begin with restriction, generic plans, or unfamiliar substitutions. The product reframes the decision from “What should I stop eating?” to “What can I add or adjust around the meal I already know?”",
                ],
            },
            {
                title: "Human-centred design across health-literacy levels",
                body: [
                    "The interface favors recognition over recall: one decision at a time, plain-language categories, visual meal composition, and optional detail. Nobody has to decode a nutrient dashboard before acting.",
                ],
            },
            {
                title: "The interaction model",
                body: [
                    "The flow begins with a familiar dish, generates culturally coherent sides, and keeps each recommendation inspectable and replaceable without restarting.",
                    "Only after the plate is assembled does the product synthesize vegetables, protein, and carbohydrates into a balance view the user can download, copy, or share.",
                ],
            },
            {
                title: "What I designed and built",
                body: [
                    "I originated the product thesis, defined the information architecture, designed the interface, structured the content model, and implemented the complete application.",
                    "The build uses Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Fuse.js, with keyboard-operable dialogs and reduced-motion behaviour.",
                ],
            },
            {
                title: "Current development state",
                body: [
                    "The application is functional; recipes remain placeholders until the NOURISH team supplies its reviewed library.",
                    "My documented contribution covers concept, design, and implementation; clinical validation, health outcomes, and launch adoption remain outside the current evidence.",
                ],
            },
        ],
        caseStudy: {
            question: "How might an AI meal-pairing tool improve a familiar meal without demanding unfamiliar substitutions or specialist nutrition knowledge?",
            framing: "Preserve the main dish, offer sides as reversible choices, and explain balance only after the complete plate is visible.",
            processEyebrow: "Human-centred product method",
            processHeading: "From familiar food to an explainable plate",
            processSummary: "Each phase converted a nutrition principle into a product decision, then into working software.",
            steps: [
                {
                    phase: "Empathize",
                    title: "Start from the meal people already choose",
                    rationale: "Beginning with replacement adds friction before guidance starts.",
                    execution: "Made free-text meal search and recognisable examples the first interaction, then kept the selected main dish visually dominant throughout the experience.",
                },
                {
                    phase: "Define",
                    title: "Turn “eat healthier” into one tractable decision",
                    rationale: "Choosing complementary sides is specific, reversible, and easier than rebuilding a diet.",
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
                    rationale: "Meal quality is compositional — the parts mean more assessed together than as disconnected scores.",
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
    },
    {
        id: "pgx-llm-copilot",
        title: "Pharmacogenomics LLM Copilot",
        subtitle: "GenieRX — an LLM tool for gene-guided prescribing. 2nd in the US and 7th of 3,500 teams globally at Harvard HSIL.",
        description: "An LLM tool that turns a patient's genotype into safer prescribing across commonly prescribed medications. Built with a five-person team at the Harvard HSIL hackathon, advanced through its Venture Incubation Program, and grounded in Stanford research on CPIC-guideline prescribing.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
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
            { title: "The gap", text: "Pharmacogenomic guidance exists, but it is scattered and hard to apply while prescribing under time pressure." },
            { title: "2nd in the US", text: "Judged 2nd nationally and 7th of 3,500 teams at Harvard HSIL, then taken into the Venture Incubation Program." },
            { title: "Grounded in research", text: "Built on Stanford research into CPIC-guideline prescribing and translating pharmacogenomics into clinical workflows." },
        ],
        sections: [
            {
                title: "The problem",
                body: [
                    "Clinicians prescribe under time pressure, with pharmacogenomic evidence scattered across guidelines and databases.",
                    "GenieRX moves them from genotype to a concrete prescribing action, instead of just answering a question.",
                ],
            },
            {
                title: "How it works",
                body: [
                    "The copilot pulls patient context, pharmacogenomic evidence, and a recommended action onto one screen.",
                    "It shows where each recommendation comes from and where the dose or drug-choice tradeoffs sit, so a clinician can trust it or override it.",
                ],
            },
            {
                title: "Why it matters",
                body: [
                    "Pharmacogenomics only improves safety when the guidance reaches the clinician while they prescribe — GenieRX delivers it there.",
                    "It pairs a competition-tested build with Stanford research on how CPIC guidelines translate into real prescribing.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1600&auto=format&fit=crop", alt: "Assorted prescription medications", caption: "Gene-guided prescribing spans commonly prescribed medications across drug classes." },
            { src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1600&auto=format&fit=crop", alt: "Prescription blister packs", caption: "CPIC guidelines map specific gene variants to dose and drug-choice changes." },
            { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop", alt: "Medication capsules from a prescription bottle", caption: "The copilot surfaces that guidance at the moment a prescription is written." },
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
        role: "Hackathon contributor: XR concept, interaction design, and prototype build",
        client: "XR Hack the Bay",
        duration: "Hackathon prototype",
        tools: ["XR prototyping", "Wearable biosignal feedback", "Movement-based interaction design", "Rapid prototyping"],
        outcome: "Won the Social Good category at XR Hack the Bay with a prototype positioning precision prehab as a clearer, more motivating interaction between body signals and immersive tasks.",
        accent: "#7c3aed",
        stats: [
            { label: "Recognition", value: "XR Hack the Bay · Social Good winner" },
            { label: "Prototype frame", value: "Wearable feedback + XR movement task" },
            { label: "Design goal", value: "Make prehab clearer, more engaging, and easier to repeat" },
            { label: "Evidence used here", value: "Screenshots extracted from the submitted demo video" },
        ],
        highlights: [
            { title: "Visible signals", text: "Muscle activation and movement feedback are shown to the user, not buried in instrumentation." },
            { title: "Movement as a task", text: "The XR environment turns repetitive prehab into a spatial task with visual goals and progression." },
            { title: "Honest scope", text: "A hackathon-winning concept and working demo — no claims of clinical validation or deployment." },
        ],
        sections: [
            {
                title: "The problem",
                body: [
                    "Prehab exercises are hard to sustain: feedback is delayed, abstract, or needs a specialist to interpret.",
                    "NeurAgility makes the user's movement and activation visible, then turns that signal into an XR task that feels like progress rather than compliance.",
                ],
            },
            {
                title: "How it works",
                body: [
                    "Wearable signal capture drives an XR environment: the signal view proves movement is measured, and the immersive scene gives it a goal.",
                    "Users never read raw biosignals — the prototype turns them into a visible, goal-oriented training loop.",
                ],
            },
            {
                title: "Why it works",
                body: [
                    "The loop connects clinical need, user motivation, and trustworthy signals, not just a novel headset demo.",
                    "XR sits as a behaviour layer around precision movement practice — closer to a care workflow than a standalone game.",
                ],
            },
        ],
        caseStudy: {
            question: "How might XR make precision prehab feel clearer and more motivating without asking users to understand raw biosignal data?",
            framing: "Two interfaces: an evidence layer that shows body activation, and a task layer that turns movement into action.",
            processEyebrow: "Hackathon design method",
            processHeading: "From raw movement data to embodied feedback",
            processSummary: "From the prehab engagement gap to signal capture, interpretable feedback, and a working social-good demo.",
            steps: [
                {
                    phase: "Frame",
                    title: "Define prehab as a feedback problem",
                    rationale: "If users cannot tell whether a movement is done well, or why repetition matters, adherence collapses.",
                    execution: "Positioned NeurAgility around precision prehab rather than generic fitness.",
                },
                {
                    phase: "Instrument",
                    title: "Make activation visible",
                    rationale: "A health-tech prototype needs evidence that movement is being sensed, not just animated.",
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
                    rationale: "The XR layer had to stay engaging without drifting into pure entertainment.",
                    execution: "Selected demo visuals that show body movement alongside the XR environment, linking play mechanics back to physical practice.",
                },
                {
                    phase: "Deliver",
                    title: "Ship a working social-good demo",
                    rationale: "The prototype had to show clear social value and feasibility, not just a technical trick.",
                    execution: "Delivered the Social Good-winning demo, without claiming clinical efficacy.",
                },
            ],
        },
        media: [
            { src: neuragilityHero, alt: "NeurAgility title frame reading Precision Prehab Made Easy", caption: "The demo positioned the prototype around a clear product promise: precision prehab made easier to understand and repeat.", fit: "contain", aspect: "16/9" },
            { src: neuragilityWearable, alt: "Person wearing an XR headset and biosignal setup during the NeurAgility demo", caption: "The physical setup links the immersive experience to body-signal sensing rather than treating the XR world as a standalone game.", fit: "cover", aspect: "16/9" },
            { src: neuragilitySignalBaseline, alt: "Baseline biosignal dashboard from the NeurAgility demo", caption: "A signal view establishes the evidence layer: movement can be detected and represented before it becomes user-facing feedback.", fit: "contain", aspect: "16/9" },
            { src: neuragilitySignalActivation, alt: "Biosignal dashboard showing activation during the NeurAgility demo", caption: "The demo contrasts low activity with activation — feedback you can see.", fit: "contain", aspect: "16/9" },
            { src: neuragilityShoulderContext, alt: "Shoulder anatomy and digital interface visual from the NeurAgility demo", caption: "The product is anchored in shoulder-focused movement and prehab rather than generic XR training.", fit: "cover", aspect: "16/9" },
            { src: neuragilityXrTraining, alt: "First-person XR environment with movement targets in the NeurAgility prototype", caption: "The immersive environment converts exercise into a spatial task with visual goals and progression cues.", fit: "cover", aspect: "16/9" },
            { src: neuragilityMovementDemo, alt: "Split-screen NeurAgility demo showing XR environment beside the person performing movement", caption: "The strongest proof-of-concept moment: the user moves in the room while the XR world represents the training task.", fit: "cover", aspect: "16/9" },
        ],
        video: {
            src: "/videos/neuragility-demo.mp4",
            poster: neuragilityHero,
            title: "Full NeurAgility demo video",
            caption: "The complete submitted demo: product framing, wearable setup, signal evidence, and the XR movement task.",
        },
    },
    {
        id: "healthcare-from-the-eye",
        title: "Healthcare from the Eye",
        subtitle: "Designing an implementation model for AI-enabled diabetic-retinopathy screening across primary care, ophthalmology, payers, and technology partners.",
        description: "As Student Project Manager for a Microsoft × Stanford MED 232 project, I led a multidisciplinary team from needs finding through workflow design, reimbursement analysis, and a scenario-based business model.",
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
                    "Diabetic retinopathy is a major source of preventable blindness, with a persistent screening gap among rural and underserved populations. The question was never whether retinal AI could detect disease — it was whether the system could reach people early and move positive findings into care.",
                    "The product boundary runs from a camera in primary care through AI grading, EHR integration, referral, and follow-up.",
                ],
            },
            {
                title: "Biodesign as the operating method",
                body: [
                    "I led the team through Stanford Biodesign's identify, invent, and implement phases, from needs finding through concept screening to operating decisions.",
                    "A technically effective tool still has to fit clinical routines, connect to the EHR, and give practices and payers a credible reason to participate.",
                ],
            },
            {
                title: "Rewriting the screening pathway",
                body: [
                    "In the redesigned pathway, retinal images are captured and graded during the primary-care visit — a UMass evaluation reports a two-minute screen and a 75% reduction in screening time versus teleretinal imaging.",
                    "The pathway defines image-quality checks, grading, EHR export, consultation, urgent referral, and a twelve-month follow-up route.",
                ],
            },
            {
                title: "The system that has to move",
                body: [
                    "Topcon supports imaging, Microsoft the cloud layer; primary-care and eye-care organizations carry triage and treatment; payers shape financial viability.",
                    "Three barriers organized the strategy — workflow, adoption, and reimbursement — each with its own response.",
                ],
            },
            {
                title: "A business case, not a promised outcome",
                body: [
                    "The revenue model is a scenario tool with explicit assumptions: patient volume, payer mix, reimbursement, leasing, cloud costs, and staff time.",
                    "Under those assumptions it estimates annual profit of roughly $275,000–$571,000 at 4,000–8,000 screened patients — built to expose which assumptions need validation, not to claim realized revenue.",
                ],
            },
            {
                title: "Deliverables",
                body: [
                    "Three connected outputs: an HFTE awareness paper, the scenario revenue model, and a strategic action plan.",
                    "The same analysis contributed to manuscript development on HFTE's disruptive potential across ophthalmology and primary care.",
                ],
            },
        ],
        caseStudy: {
            question: "How might a two-minute retinal screen become a reliable care pathway rather than an isolated technical demonstration?",
            framing: "The implementation problem sat outside the algorithm: the scan had to fit primary-care work, move results into the EHR, trigger appropriate referral and follow-up, align stakeholder incentives, and support a credible reimbursement and operating model.",
            processEyebrow: "Stanford Biodesign method",
            processHeading: "From unmet need to implementation strategy",
            processSummary: "An identify–invent–implement sequence, each phase ending in a decision artifact.",
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
    },
    {
        id: "ent-readmission-platform",
        title: "PainGone PainGuin",
        subtitle: "A two-sided home-recovery concept for children after tonsillectomy and adenoidectomy.",
        description: "Developed through Stanford Biodesign for Digital Health: caregiver guidance and risk monitoring paired with a child-facing companion for the first seven days of recovery at home.",
        image: entPainGonePainGuinConcept,
        heroFit: "contain",
        heroAspect: "16/9",
        tags: ["Pediatric ENT", "Digital Health", "Stanford Biodesign"],
        role: "Health innovation collaborator and service designer",
        client: "Stanford Biodesign for Digital Health · Team 6, Hospital at Home",
        duration: "10-week experiential program",
        tools: ["Clinical and end-user interviews", "Biodesign needs finding", "Need-statement development", "Literature synthesis", "Stakeholder mapping", "Concept generation and screening", "Care-pathway mapping", "Behavioral design", "Risk-escalation design", "Business-model assumptions", "Pilot planning"],
        outcome: "Applied Stanford's needs-driven Biodesign process with ENT surgeons, hospital teams, children, and parents to develop an ENT-specific app-and-companion concept, home-recovery workflow, stakeholder value map, and staged validation plan.",
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
            { title: "Learned in class, tested against the care context", text: "Formal Biodesign teaching applied directly to a real pediatric health challenge." },
            { title: "Designed with the whole recovery system", text: "ENT surgeons and hospital teams clarified clinical and workflow realities; children who had experienced tonsillitis and parents made the home-care burden, uncertainty, and cooperation problem tangible." },
            { title: "Separated ambition from evidence", text: "Readmission reduction, dehydration detection, adherence, savings, and ROI appear as design targets or model assumptions—not as achieved outcomes." },
        ],
        sections: [
            {
                title: "Why the Biodesign program matters",
                body: [
                    "Biodesign for Digital Health (BIOE 273 / MED 273) is a limited-enrollment, application-only Stanford course: ten weeks, multidisciplinary teams, and more than 50 digital-health and industry experts.",
                    "Teams begin with an unmet need rather than a technology, then screen concepts against clinical, operational, regulatory, and business constraints.",
                ],
            },
            {
                title: "From the teaching framework to fieldwork",
                body: [
                    "Classroom teaching was applied directly to a live pediatric ENT challenge across Identify, Invent, and Implement.",
                    "We interviewed ENT surgeons, worked with hospital teams, and engaged children and parents: clinicians described safety and discharge constraints, families exposed the daily work of hydration, food, medication, and pain at home.",
                ],
            },
            {
                title: "The recovery gap after discharge",
                body: [
                    "Caregivers may leave hospital with a paper instruction sheet yet still be unsure how much a child should drink, whether pain is expected, or when a symptom needs clinical help.",
                    "The first seven days concentrate the hardest work: pain peaks, intake falls, and children resist eating, drinking, and medication.",
                ],
            },
            {
                title: "What the interviews changed",
                body: [
                    "The interviews shifted the problem beyond discharge education: recovery also depended on whether a child in pain would cooperate, so the design had to support caregiver comprehension and child behavior together.",
                    "Clinical input made escalation part of the boundary — daily tracking connects to explainable risk flags and a route back to the care team.",
                ],
            },
            {
                title: "The PainGone PainGuin concept",
                body: [
                    "PainGone is the caregiver layer: care plan, medication and pain tracking, fluid and food logs, reminders, risk flags, and a route to the care team. PainGuin is the child layer: a companion whose wellbeing reacts to the child's real recovery behaviors.",
                    "Drinking water becomes caring for PainGuin, while the caregiver keeps the operational view needed to act on risk.",
                ],
            },
            {
                title: "Designing the home-recovery loop",
                body: [
                    "At discharge the caregiver scans a QR code and receives a tailored plan; at home they log fluids, pain, medication, and symptoms while the child engages with PainGuin, and the system flags patterns associated with dehydration or uncontrolled pain.",
                    "This is proposed decision support, not an autonomous diagnosis or a validated monitoring system.",
                ],
            },
            {
                title: "Design criteria and business logic",
                body: [
                    "Must-have criteria covered readmission reduction, dehydration detection, comprehension, adherence, affordability, and safety — screening targets, not achieved outcomes.",
                    "A B2B model and national savings scenarios tested plausibility across families, hospitals, and insurers; all figures are projections.",
                ],
            },
            {
                title: "What would need to happen next",
                body: [
                    "The path starts with a Stanford CHARIOT feasibility pilot — MVP, clinical governance, IRB and data planning, and clear escalation protocols before any efficacy claim.",
                    "Only with pilot evidence would the team test purchasing, reimbursement, or expansion; the work ends with a validation roadmap, not a launch claim.",
                ],
            },
        ],
        caseStudy: {
            question: "How might an ENT recovery system help caregivers know what to do while motivating children to drink, eat, and take medication during the highest-risk week at home?",
            framing: "Connect comprehension, child behavior, daily monitoring, and clinical escalation in one low-friction recovery loop — then define the evidence required before deployment.",
            processEyebrow: "Stanford Biodesign for Digital Health",
            processHeading: "Teaching framework → field evidence → testable care concept",
            processSummary: "Stanford Biodesign's Identify–Invent–Implement structure, applied as a working method.",
            steps: [
                {
                    phase: "Identify",
                    title: "Observe the recovery system from multiple viewpoints",
                    rationale: "A meaningful need cannot be defined from the hospital's perspective alone; the recovery work changes when the child and caregiver leave the clinical setting.",
                    execution: "Interviewed ENT surgeons, hospital teams, children, and parents alongside literature review.",
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
    },
    {
        id: "dialysis-device-gtm",
        title: "Adcem × Fidson Dialysis Access",
        subtitle: "Building a local manufacturing and home peritoneal-dialysis pathway for Nigeria.",
        description: "Through Stanford GSB SEED, I supported product management and business development for the Adcem Fidson joint venture: manufacturing economics, a CR-CAPD home-therapy model, and a route to scale.",
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
                    "Nigeria has a high chronic-kidney-disease burden, fewer than 250 dialysis centres concentrated in cities, and in-centre hemodialysis costs that can exceed the monthly minimum wage several times over.",
                    "Underneath sits import dependence: finished products absorb freight, currency, and intermediary costs while local manufacturing supplies only a minority of demand.",
                ],
            },
            {
                title: "The joint-venture thesis",
                body: [
                    "Adcem contributes dialysis expertise, technology transfer, sourcing, training, and distribution; Fidson contributes a Nigerian manufacturing facility and an existing pharmaceutical line.",
                    "Locally manufactured consumables replace imports — changing the cost structure while keeping Adcem's established distribution route.",
                ],
            },
            {
                title: "From a consumable to a care system",
                body: [
                    "The flagship pathway is home-based continuous ambulatory peritoneal dialysis: bag set, transfer set, catheter pathway, and supporting consumables with a practical implementation model.",
                    "The planned experience includes hospital-coordinated catheter placement, one-on-one training, infection-prevention protocols, four daily exchanges, local-language materials, and 24/7 support.",
                ],
            },
            {
                title: "The pilot as validation infrastructure",
                body: [
                    "A 20–26 week feasibility study across four teaching hospitals in Lagos, Enugu, and Kano, with an initial 24–32 patients — planned parameters, not completed enrollment.",
                    "The measurement plan spans infection, fluid balance, hospitalization, survival, quality of life, usability, and cost against hemodialysis.",
                ],
            },
            {
                title: "Preparing people and sites",
                body: [
                    "Each hospital would receive hands-on workshops for nephrologists and nurses on protocols, infection prevention, and patient coaching, with equipment and materials supplied.",
                    "Patient education moves from CAPD basics to hands-on bag exchange, hygiene, symptom tracking, and continued support.",
                ],
            },
            {
                title: "My contribution and the scale pathway",
                body: [
                    "I worked across financial modelling, partnership documentation, pilot planning, clinical advisory coordination, audits, and supply-chain planning.",
                    "The pilot and its projected clinical or commercial outcomes have not yet been achieved; the work documents strategy and planned implementation.",
                ],
            },
        ],
        caseStudy: {
            question: "How might a dialysis joint venture lower structural access barriers while proving that a home-CAPD model can operate safely and sustainably?",
            framing: "A connected system: local manufacturing, hospital readiness, patient training, supply continuity, and an evidence plan capable of informing scale.",
            processEyebrow: "Venture design method",
            processHeading: "From market constraint to an executable care model",
            processSummary: "Affordability, delivery, and validation treated as one system.",
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
    },
];
