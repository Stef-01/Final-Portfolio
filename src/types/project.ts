import swaadBranding from "../assets/swaad-branding.png";
import swaadGame from "../assets/swaad-game.png";
import swaadMealExplorer from "../assets/swaad-recipe-finder.png";
import swaadNutriserve from "../assets/swaad-nutriserve.png";

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
}

export interface ProjectMedia {
    src: string;
    alt: string;
    caption: string;
}

export interface ProjectInteractiveModule {
    title: string;
    summary: string;
    interaction: string;
    effect: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
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
    interactiveModules: ProjectInteractiveModule[];
}

export const projects: Project[] = [
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
                    "This project demonstrates how public health evidence, interface design, and community insight can be translated into a product that feels both serious and joyful.",
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
        title: "NOURISH Meal Explorer",
        subtitle: "A meal-discovery and behavior-change experience for healthier everyday choices.",
        description: "A polished nutrition product concept that helps users navigate meals through health goals, mood, context, and personal constraints, turning recommendation systems into something useful and humane.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop",
        tags: ["Product Design", "Nutrition", "Behavior Change"],
        role: "Product strategist and experience designer",
        client: "Self-initiated digital health concept",
        duration: "Concept development and product-direction work",
        tools: ["Figma", "React", "Prompt systems", "Service blueprinting"],
        outcome: "Defined a stronger consumer-facing product direction for nutrition guidance that feels adaptive, personal, and visually premium.",
        accent: "#65a30d",
        stats: [
            { label: "Product type", value: "Meal exploration and recommendation" },
            { label: "Design focus", value: "Behavior change through interface quality" },
            { label: "Primary surface", value: "Mobile-first recommendation flows" },
            { label: "Differentiator", value: "Decision support without clinical heaviness" },
        ],
        highlights: [
            { title: "Less dashboard, more guidance", text: "The concept focuses on helping people decide rather than drowning them in metrics." },
            { title: "High-quality product language", text: "NOURISH is designed to feel premium and trustworthy, closer to the best consumer products than to typical health apps." },
            { title: "Behavioral nuance", text: "Mood, time, appetite, and real constraints are treated as first-class inputs into the recommendation system." },
        ],
        sections: [
            {
                title: "The opportunity",
                body: [
                    "Nutrition products often fail not because the advice is wrong, but because the interaction model is weak. They expect users to think like dietitians when most users simply need help choosing well in context.",
                    "NOURISH was conceived as a more elegant meal-exploration experience: one that translates health intent into a clear, beautiful, confidence-building decision pathway.",
                ],
            },
            {
                title: "The design thesis",
                body: [
                    "The core proposition is that food recommendation should feel editorial, adaptive, and supportive. Instead of overwhelming people with nutrient dashboards, the interface should guide them through a sequence of relevant decisions.",
                    "That means clean mobile architecture, strong content hierarchy, and interactive states that make healthier options feel obvious rather than burdensome.",
                ],
            },
            {
                title: "Portfolio value",
                body: [
                    "NOURISH gives the portfolio a stronger consumer-product signal while staying aligned with Stefan's public-health and nutrition interests.",
                    "It works especially well alongside SWAAD because it shows a more refined, productized counterpart to the culturally grounded community-health direction.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1600&auto=format&fit=crop", alt: "Curated meal cards", caption: "A calmer, more editorial visual language for meal discovery and habit formation." },
            { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop", alt: "Healthy food composition", caption: "High-quality food imagery supports appetite, aspiration, and trust." },
            { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop", alt: "Ingredients selection", caption: "Ingredient and context inputs can be turned into an elegant recommendation engine rather than a form-heavy funnel." },
        ],
        interactiveModules: [
            {
                title: "Adaptive Meal Deck",
                summary: "A swipeable card system that adapts to dietary targets, mood, and available time.",
                interaction: "Users move through meal options that explain why each suggestion fits the moment rather than simply listing nutrients.",
                effect: "Layered card stacks, confident motion, and animated 'why this meal' rationales that feel premium instead of gamified.",
            },
            {
                title: "Context Filter Studio",
                summary: "A filter system where constraints such as cost, prep time, and protein goals reshape the meal universe in real time.",
                interaction: "Sliders and discrete toggles change the meal field while preserving visual continuity.",
                effect: "Fluid content rearrangement, subtle gradient shifts, and animated prioritization states.",
            },
            {
                title: "Behavior Trail",
                summary: "A visual recap of how repeated small decisions can improve weekly dietary quality.",
                interaction: "Users can inspect how one healthier choice compounds over several days without relying on punitive tracking metaphors.",
                effect: "Calendar arcs, momentum trails, and soft progress states instead of aggressive dashboards.",
            },
        ],
    },
    {
        id: "pgx-llm-copilot",
        title: "Pharmacogenomics LLM Copilot",
        subtitle: "An AI-powered clinical decision support system for safer prescribing.",
        description: "A clinical workflow concept and research translation effort designed to make pharmacogenomics more usable in everyday prescribing, with clear, contextual decision support for clinicians.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        tags: ["AI in Healthcare", "Clinical Decision Support", "Precision Medicine"],
        role: "Researcher, product thinker, and workflow designer",
        client: "Stanford-aligned pharmacogenomics research environment",
        duration: "Ongoing research and translational design work",
        tools: ["LLM prompting", "Clinical workflow mapping", "Evaluation frameworks", "Figma"],
        outcome: "Framed a high-value direction for translating pharmacogenomics from specialist knowledge into a usable clinical interface for day-to-day prescribing.",
        accent: "#2563eb",
        stats: [
            { label: "Clinical domain", value: "Pharmacogenomics" },
            { label: "Use case", value: "Everyday prescribing support" },
            { label: "Primary user", value: "Clinicians at point of care" },
            { label: "Differentiator", value: "Research-informed workflow design" },
        ],
        highlights: [
            { title: "A real workflow problem", text: "Pharmacogenomic knowledge is valuable, but often too fragmented or hard to apply under time pressure." },
            { title: "Trust by design", text: "The concept is strongest when evidence, rationale, and recommendation are shown together rather than hidden behind an opaque answer." },
            { title: "From publication to product surface", text: "This project sits exactly where Stefan's work becomes most distinctive: at the edge of AI research, medicine, and product strategy." },
        ],
        sections: [
            {
                title: "The problem",
                body: [
                    "Clinicians are expected to make safe prescribing decisions in environments where time is limited, information is fragmented, and pharmacogenomic insight is not always easy to retrieve or interpret in context.",
                    "The opportunity was not merely to generate answers with a model, but to design a decision-support layer that helps clinicians move from genotype to action with clarity and confidence.",
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
                    "This is a flagship panel because it demonstrates an unusually strong combination of clinical depth, AI literacy, and product thinking.",
                    "It also translates serious academic work into a credible interface narrative, which is central to Stefan's broader portfolio identity.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop", alt: "Clinical review context", caption: "The opportunity lies in improving decision quality inside time-constrained care environments." },
            { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1600&auto=format&fit=crop", alt: "Healthcare technology workflow", caption: "Clinical intelligence is only useful when surfaced at the right moment in the right form." },
            { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop", alt: "Precision medicine context", caption: "Precision medicine requires not just insight, but interface quality that makes action feel safe and legible." },
        ],
        interactiveModules: [
            {
                title: "Genotype-to-Action Workflow",
                summary: "A guided sequence that transforms pharmacogenomic findings into concrete prescribing guidance.",
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
        id: "precision-oncology",
        title: "Precision Oncology Signal Design",
        subtitle: "Translating EGFR tumour-burden work into clearer precision-oncology reasoning.",
        description: "A precision-oncology project shaped around Summer Han's EGFR tumour-burden work, focused on how signal-rich oncology insight can be turned into more legible clinical and product-facing decision structures.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
        tags: ["Precision Oncology", "Clinical Research", "Decision Design"],
        role: "Research translator and product-framing collaborator",
        client: "Precision-oncology research context",
        duration: "2025 translational design work",
        tools: ["Signal interpretation", "Clinical workflow framing", "Narrative design", "Figma"],
        outcome: "Developed a clearer way to think about how tumour-burden evidence can be represented, prioritized, and translated for higher-quality reasoning in precision-care environments.",
        accent: "#f97316",
        stats: [
            { label: "Domain", value: "Precision oncology and EGFR tumour burden" },
            { label: "Focus", value: "Clinical signal translation" },
            { label: "Primary challenge", value: "Making complex oncology insight legible" },
            { label: "Strength", value: "Bridging research depth and decision design" },
        ],
        highlights: [
            { title: "Signal over summary", text: "The work is strongest when it preserves the nuance of tumour-burden insight while still making the reasoning usable." },
            { title: "High-consequence framing", text: "In oncology, interface clarity is not aesthetic polish; it changes how confidence, tradeoffs, and action are understood." },
            { title: "A strong product translation story", text: "This project helps show how Stefan approaches advanced clinical research not just as knowledge, but as decision architecture." },
        ],
        sections: [
            {
                title: "The opportunity",
                body: [
                    "Precision-oncology workflows often depend on rich biomarkers, burden measures, and longitudinal patterns that are meaningful to specialists but hard to represent clearly in decision-facing tools.",
                    "The opportunity here was to think through how EGFR tumour-burden work could be translated into a more navigable reasoning surface without flattening the science.",
                ],
            },
            {
                title: "The design question",
                body: [
                    "What matters is not simply displaying oncology data, but structuring the signal so users can understand what changed, why it matters, and what kind of action or interpretation should follow.",
                    "That makes this a strong translational project: it sits between research insight, clinical judgment, and product-level clarity.",
                ],
            },
            {
                title: "Why it belongs",
                body: [
                    "This panel strengthens the portfolio's precision-medicine arc by adding a more explicitly oncology-facing story alongside pharmacogenomics and preventive nutrition.",
                    "It also broadens the perception of Stefan's range for product and systems leaders looking for people who can work across very different forms of medical complexity.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop", alt: "Oncology review context", caption: "Precision-oncology signal design depends on clarity under uncertainty, not just data density." },
            { src: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1600&auto=format&fit=crop", alt: "Clinical insight and cancer care context", caption: "The goal is to make research-grade insight useful at the point of reasoning." },
            { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop", alt: "Diagnostic and molecular analysis context", caption: "Good translational design preserves nuance while improving decisional clarity." },
        ],
        interactiveModules: [
            {
                title: "Tumour Burden Signal View",
                summary: "A concept interface showing how tumour-burden change can be surfaced as a usable clinical signal.",
                interaction: "Users inspect key shifts, comparison states, and explanatory layers that help connect signal movement to interpretation.",
                effect: "Layered charts, confidence emphasis, and progressive disclosure of clinical context.",
            },
            {
                title: "Oncology Reasoning Lens",
                summary: "A structured frame for understanding what a biomarker pattern suggests and what uncertainty still remains.",
                interaction: "Tap into signal components to reveal the logic beneath the summary and what additional context would change confidence.",
                effect: "Expanding cards, focus transitions, and crisp evidence-to-judgment pathways.",
            },
            {
                title: "Research-to-Workflow Translator",
                summary: "A module that turns a research insight into a more usable decision-support surface.",
                interaction: "Users toggle between raw research framing and clinical-facing product framing to see how translational choices alter usability.",
                effect: "Mode-switch transitions, layered detail states, and narrative annotation.",
            },
        ],
    },
    {
        id: "healthcare-from-the-eye",
        title: "Healthcare from the Eye",
        subtitle: "Mapping the promise, tradeoffs, and system effects of AI-assisted retinal screening.",
        description: "A research-driven systems case study exploring how AI-assisted screening can transform diabetic retinopathy care while also introducing new behavioral, operational, and equity challenges.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
        tags: ["AI in Healthcare", "Screening Systems", "Health Economics"],
        role: "Research analyst and systems designer",
        client: "Conference and research translation work",
        duration: "2025 analytical and presentation cycle",
        tools: ["Systems mapping", "Literature synthesis", "Health economics framing", "Presentation design"],
        outcome: "Developed a stronger systems-level interpretation of AI retinal screening, moving beyond technical promise into behavior, incentives, and downstream care effects.",
        accent: "#7c3aed",
        stats: [
            { label: "Topic", value: "AI-assisted retinal screening" },
            { label: "Lens", value: "Behavioral hazards and system externalities" },
            { label: "Primary value", value: "Second-order systems thinking" },
            { label: "Format", value: "Conference-ready analytical narrative" },
        ],
        highlights: [
            { title: "Beyond the model", text: "The most interesting question is not whether AI can detect disease, but what the system becomes once AI is inserted into it." },
            { title: "Rare portfolio territory", text: "This panel would immediately differentiate the portfolio from design work that stops at interface polish." },
            { title: "A bridge project", text: "It connects public health, medicine, AI, and economic reasoning in a single coherent story." },
        ],
        sections: [
            {
                title: "The framing",
                body: [
                    "AI-assisted screening is often discussed as a straightforward quality upgrade. In reality, it changes how risk is perceived, how labor is allocated, and where costs appear or disappear across a care pathway.",
                    "This project repositions screening as a system to be designed and interrogated, not just an algorithm to be admired.",
                ],
            },
            {
                title: "The analysis",
                body: [
                    "The work examines behavioral hazards, incentive misalignment, workflow externalities, and the conditions under which AI screening can improve outcomes without simply shifting burdens elsewhere.",
                    "That makes it especially strong as a portfolio case study because it shows Stefan's ability to reason across technical, clinical, and policy layers at once.",
                ],
            },
            {
                title: "The portfolio contribution",
                body: [
                    "As a project panel, Healthcare from the Eye would add a more analytical, strategic dimension to the portfolio while still supporting beautiful and interactive visual translation.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop", alt: "Eye screening context", caption: "Retinal AI is compelling precisely because it looks simple while touching a much larger system." },
            { src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1600&auto=format&fit=crop", alt: "Medical analysis visuals", caption: "The strongest design move is to reveal second-order effects without losing clarity." },
            { src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1600&auto=format&fit=crop", alt: "Care pathway imagery", caption: "Patient pathways, referral flows, and operational incentives should all be visible in the story." },
        ],
        interactiveModules: [
            {
                title: "Stakeholder Impact Viewer",
                summary: "A map showing how AI screening shifts value and burden across patients, clinicians, health systems, and payers.",
                interaction: "Users toggle one stakeholder at a time to see primary gains, secondary costs, and hidden dependencies.",
                effect: "Soft lens transitions, layered pathways, and node illumination that clarifies causality without clutter.",
            },
            {
                title: "Screening Funnel Simulator",
                summary: "A simplified care-funnel model that makes throughput gains and leakage points visible.",
                interaction: "Sliders adjust adoption, false positives, referral capacity, and follow-up rates.",
                effect: "Animated funnel states and cascading flow responses that make system tradeoffs immediately legible.",
            },
            {
                title: "Externalities Matrix",
                summary: "A matrix of intended effects versus downstream consequences.",
                interaction: "Tapping a benefit reveals where it may produce compensating risk or new workflow demand.",
                effect: "Expanding matrix cells, cross-linked annotations, and calm but high-information motion design.",
            },
        ],
    },
    {
        id: "indigenous-preventive-care",
        title: "Indigenous Preventive Care Pathways",
        subtitle: "Understanding what shapes preventive health-check uptake in Indigenous primary care.",
        description: "An implementation-focused health systems project examining what influences the prevention and early detection of chronic disease among Aboriginal and Torres Strait Islander communities in primary care.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Implementation Science", "Indigenous Health", "Primary Care"],
        role: "Research contributor and systems thinker",
        client: "Public health and implementation research collaboration",
        duration: "2023-2025 research cycle",
        tools: ["Realist review methods", "Implementation mapping", "Systems synthesis"],
        outcome: "Clarified the structural and relational conditions that shape health-check uptake, with direct relevance for equitable service design.",
        accent: "#d97706",
        stats: [
            { label: "System", value: "Primary care and chronic disease prevention" },
            { label: "Population focus", value: "Aboriginal and Torres Strait Islander communities" },
            { label: "Method", value: "Implementation and realist-review lens" },
            { label: "Strength", value: "Equity-centered systems analysis" },
        ],
        highlights: [
            { title: "Not just access, but trust", text: "Uptake is shaped by relationships, continuity, and service design quality, not by availability alone." },
            { title: "Operational relevance", text: "This work supports stronger policy and service design decisions by identifying what actually enables uptake in practice." },
            { title: "Credibility through seriousness", text: "It gives the portfolio a grounded equity and implementation story that cannot be substituted with superficial 'social impact' language." },
        ],
        sections: [
            {
                title: "The challenge",
                body: [
                    "Preventive care programs often assume that offering a service is enough. In reality, participation depends on trust, relevance, continuity, staffing, cultural safety, and the way care is organized on the ground.",
                    "This project looks at those mechanisms rather than treating uptake as a purely individual behavior problem.",
                ],
            },
            {
                title: "The insight",
                body: [
                    "The most useful implementation insights are often structural. How systems invite, retain, and support people matters as much as what they recommend clinically.",
                    "That makes this project particularly valuable in a portfolio because it shows Stefan working at the level of care pathways, institutions, and practical barriers.",
                ],
            },
            {
                title: "Why it belongs in the portfolio",
                body: [
                    "This panel would show that Stefan's health-design lens is not limited to interfaces. It extends to delivery systems, community context, and the real conditions under which prevention succeeds or fails.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1516549655669-df83a0774514?q=80&w=1600&auto=format&fit=crop", alt: "Primary care setting", caption: "Preventive care is as much a service-design problem as a clinical one." },
            { src: "https://images.unsplash.com/photo-1584516150909-c43483ee7938?q=80&w=1600&auto=format&fit=crop", alt: "Healthcare pathway imagery", caption: "Care pathways, invitations, and trust signals shape whether prevention becomes real." },
            { src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1600&auto=format&fit=crop", alt: "Community health context", caption: "Community-facing health systems require relational intelligence as well as operational competence." },
        ],
        interactiveModules: [
            {
                title: "Barrier-to-Enabler Map",
                summary: "An ecosystem view of what blocks and what enables preventive health-check uptake.",
                interaction: "Users tap into service factors, workforce factors, and relational factors to see how each changes the pathway.",
                effect: "Layered node animation, expanding pathway branches, and deliberate, respectful pacing.",
            },
            {
                title: "Primary Care Pathway Lens",
                summary: "A service blueprint showing where invitation, engagement, and follow-through break down.",
                interaction: "Switch between current-state and redesigned pathway views.",
                effect: "Pathway tracing, soft-stage transitions, and subtle emphasis on breakpoints and repair opportunities.",
            },
            {
                title: "Trust and Continuity Explorer",
                summary: "A concept surface showing how continuity, culture, and service design interact.",
                interaction: "Different care scenarios reveal what changes when trust-building conditions are present or absent.",
                effect: "Scenario toggles, gentle reveal animations, and calm visual storytelling.",
            },
        ],
    },
    {
        id: "ent-readmission-platform",
        title: "ENT Readmission Prevention Platform",
        subtitle: "A human-centered care experience designed to reduce avoidable pediatric readmissions.",
        description: "A care-transition concept shaped through Stanford Biodesign that explores how better discharge support, follow-up orchestration, and caregiver guidance can prevent avoidable pediatric ENT readmissions.",
        image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
        tags: ["Service Design", "Care Pathways", "Stanford Biodesign"],
        role: "Health innovation collaborator and service designer",
        client: "Stanford Biodesign training context",
        duration: "Immersive innovation sprint",
        tools: ["Journey mapping", "Problem framing", "Concept prototyping", "Healthcare systems design"],
        outcome: "Defined a clinically relevant product-and-service direction that centers caregiver confidence, follow-up quality, and safer transitions after discharge.",
        accent: "#db2777",
        stats: [
            { label: "Care setting", value: "Pediatric ENT discharge and follow-up" },
            { label: "Primary goal", value: "Reduce avoidable readmissions" },
            { label: "Design focus", value: "Caregiver guidance and coordination" },
            { label: "Strength", value: "Strong service design narrative" },
        ],
        highlights: [
            { title: "A real patient journey problem", text: "The challenge sits in the messy space between hospital discharge, home care, and follow-up coordination." },
            { title: "Human-centered by necessity", text: "For families, confusion after discharge is not a minor inconvenience; it can directly influence outcomes." },
            { title: "A strong systems-and-interface bridge", text: "This project is ideal for showing how Stefan approaches service design, not just screen design." },
        ],
        sections: [
            {
                title: "The problem space",
                body: [
                    "Readmissions do not happen in a vacuum. They often emerge from unclear instructions, caregiver uncertainty, weak communication, or fragmented transitions between care settings.",
                    "This project focuses on how a better designed discharge experience can reduce preventable risk without adding needless complexity.",
                ],
            },
            {
                title: "The concept",
                body: [
                    "The proposed platform improves discharge understanding, follow-up clarity, and ongoing caregiver support through better sequencing of information and touchpoints.",
                    "Rather than treating discharge as a single event, it reframes it as a guided journey that extends beyond the hospital door.",
                ],
            },
            {
                title: "Portfolio contribution",
                body: [
                    "The project adds a highly legible healthcare service-design panel to the portfolio and balances the more AI-heavy work with a deeply human operational problem.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1584516150909-c43483ee7938?q=80&w=1600&auto=format&fit=crop", alt: "Hospital and caregiver context", caption: "Discharge quality lives at the intersection of clinical clarity and caregiver confidence." },
            { src: "https://images.unsplash.com/photo-1579684385127-1ef15d5087a3?q=80&w=1600&auto=format&fit=crop", alt: "Pediatric care context", caption: "Pediatric care transitions demand interfaces and services that work for families under stress." },
            { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop", alt: "Care pathway imagery", caption: "The most meaningful improvements often come from redesigning coordination, not just information density." },
        ],
        interactiveModules: [
            {
                title: "Discharge Journey Map",
                summary: "A step-by-step journey surface showing what families need before leaving, at home, and during follow-up.",
                interaction: "Users move through moments of uncertainty and see how better guidance changes risk exposure.",
                effect: "Narrative timeline motion, state-aware cards, and supportive rather than flashy interaction design.",
            },
            {
                title: "Caregiver Confidence Layer",
                summary: "A focused view of what instructions actually land and what remains confusing after discharge.",
                interaction: "Tap on each discharge step to reveal information gaps, emotional load, and design opportunities.",
                effect: "Micro-expansions, highlighted handoff points, and context-aware overlays.",
            },
            {
                title: "Follow-up Orchestration",
                summary: "A coordination model for reminders, escalation, and next-step clarity.",
                interaction: "Users inspect how messages, symptoms, and care actions evolve over time.",
                effect: "Progressive sequencing, alert-state transitions, and calm operational clarity.",
            },
        ],
    },
    {
        id: "biothreat-modelling",
        title: "Dynamic Biothreat Modelling",
        subtitle: "Designing signal-detection and response frameworks for AI-enabled biological risk.",
        description: "A systems and policy design project exploring how dynamic threat modelling can improve the detection and interpretation of AI-engineered biological risk.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Biosecurity", "AI Governance", "Systems Design"],
        role: "Research collaborator and systems analyst",
        client: "Ethics, policy, and biothreat presentation work",
        duration: "2025 analytical and presentation work",
        tools: ["Threat modelling", "Scenario design", "Systems mapping", "Presentation design"],
        outcome: "Created a more dynamic way of thinking about AI-enabled biosecurity risk, helping translate abstract threat conversations into structured detection and response logic.",
        accent: "#dc2626",
        stats: [
            { label: "Domain", value: "AI-enabled biosecurity risk" },
            { label: "Approach", value: "Dynamic threat modelling" },
            { label: "Portfolio strength", value: "Highly distinctive systems thinking" },
            { label: "Output mode", value: "Analytical framework and presentation" },
        ],
        highlights: [
            { title: "Memorable by design", text: "Very few portfolios can credibly speak about biothreat detection without sounding speculative or superficial." },
            { title: "A systems-first lens", text: "The value of the work is in structuring uncertainty, not pretending it can be eliminated." },
            { title: "Cross-disciplinary signal", text: "This project expands the portfolio into governance, security, and advanced systems analysis while staying coherent with Stefan's broader interests." },
        ],
        sections: [
            {
                title: "The problem",
                body: [
                    "AI changes the speed, scale, and accessibility of biological design capabilities. That creates a need for more dynamic ways of identifying where risk is emerging and how institutions should respond.",
                    "Static threat lists are insufficient in a domain where signals, actors, and capabilities can shift quickly.",
                ],
            },
            {
                title: "The design move",
                body: [
                    "The project reframes biothreat analysis as an evolving system of signals, scenarios, and decision points rather than a fixed catalogue of hazards.",
                    "This makes it possible to design interfaces and analytical frameworks that help people reason through uncertainty in a more structured way.",
                ],
            },
            {
                title: "Why it belongs",
                body: [
                    "As a portfolio panel, Dynamic Biothreat Modelling adds intellectual range and a uniquely strategic dimension that complements the clinical and public-health work.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=1600&auto=format&fit=crop", alt: "Biosecurity lab context", caption: "The strongest visual treatment should feel structured, tense, and analytical rather than cinematic." },
            { src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1600&auto=format&fit=crop", alt: "Systems and health research context", caption: "Complex risks need navigable models, not just alarming headlines." },
            { src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1600&auto=format&fit=crop", alt: "Signal and network imagery", caption: "Signal pathways and escalation states are core to the interaction language." },
        ],
        interactiveModules: [
            {
                title: "Scenario Escalation Engine",
                summary: "A branching system that shows how risk evolves as signals accumulate across actors and environments.",
                interaction: "Users test scenarios and see how risk posture changes as more information is revealed.",
                effect: "Escalating states, branching paths, and alert gradients that remain rigorous rather than theatrical.",
            },
            {
                title: "Signal Classification Grid",
                summary: "A framework for separating noise, weak signals, and high-priority indicators.",
                interaction: "Tapping signal cards reveals why they matter, how they interact, and what response paths they trigger.",
                effect: "Matrix expansion, node-link motion, and controlled state transitions.",
            },
            {
                title: "Response Architecture View",
                summary: "A system map linking detection to institutional action.",
                interaction: "Different stakeholder lenses reveal where response capacity is strong, fragile, or missing.",
                effect: "Layered system maps, confidence contours, and progressive disclosure.",
            },
        ],
    },
    {
        id: "dialysis-device-gtm",
        title: "Dialysis Device Market Entry",
        subtitle: "Go-to-market strategy for a medical device operating in a complex health system.",
        description: "A strategy-oriented health innovation project focused on how a dialysis device could enter and scale in a challenging operating environment, balancing product, distribution, and health-system realities.",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2070&auto=format&fit=crop",
        tags: ["MedTech Strategy", "Global Health", "Go-To-Market"],
        role: "Strategy contributor and product-thinking advisor",
        client: "Stanford Seed internship context",
        duration: "Applied strategy internship",
        tools: ["Market mapping", "Stakeholder analysis", "Product management", "Commercial strategy"],
        outcome: "Developed a stronger understanding of how medical-device adoption depends on channels, incentives, operating conditions, and local market structure, not just technical merit.",
        accent: "#0f766e",
        stats: [
            { label: "Context", value: "Dialysis device market entry in Nigeria" },
            { label: "Focus", value: "Commercial strategy and product management" },
            { label: "Portfolio role", value: "Venture and operating strategy" },
            { label: "Differentiator", value: "Health-systems GTM perspective" },
        ],
        highlights: [
            { title: "Not a standard design story", text: "This project proves Stefan can think through markets, channels, and operating constraints as well as interfaces." },
            { title: "Global health realism", text: "It grounds innovation strategy in actual system conditions rather than imported assumptions." },
            { title: "Useful portfolio breadth", text: "It adds a venture and commercialization dimension that strengthens the overall portfolio mix." },
        ],
        sections: [
            {
                title: "The strategic problem",
                body: [
                    "Medical devices do not succeed by virtue of technical quality alone. Adoption depends on trust, procurement, channel design, training, financing, and the fit between a product and the system in which it lands.",
                    "This project focused on that deeper operating question rather than on surface-level market optimism.",
                ],
            },
            {
                title: "The work",
                body: [
                    "The project examined go-to-market logic, stakeholder incentives, and product-management considerations for a dialysis device in Nigeria.",
                    "That makes it a strong portfolio case study because it shows Stefan working across healthcare delivery, market design, and execution constraints.",
                ],
            },
            {
                title: "Why it matters",
                body: [
                    "As part of the portfolio, this panel broadens the story from design and research into commercialization and operating strategy without losing coherence with the health-systems theme.",
                ],
            },
        ],
        media: [
            { src: "https://images.unsplash.com/photo-1579684453377-8c5e6bb9c4e4?q=80&w=1600&auto=format&fit=crop", alt: "Medical device strategy context", caption: "Health innovation succeeds when go-to-market design is treated as part of the product." },
            { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop", alt: "Strategy and mapping context", caption: "Market-entry logic is often where strong products either scale or stall." },
            { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop", alt: "Stakeholder planning context", caption: "Channels, incentives, and operational realities deserve as much attention as the device itself." },
        ],
        interactiveModules: [
            {
                title: "Market Entry Path Builder",
                summary: "A concept tool showing different routes to distribution and adoption.",
                interaction: "Users compare direct, partnership-led, and institution-led rollout models.",
                effect: "Branching route animation, pathway highlighting, and structured decision feedback.",
            },
            {
                title: "Stakeholder Incentive Map",
                summary: "A visual model of who needs to believe what for adoption to work.",
                interaction: "Tap providers, distributors, funders, and institutions to inspect incentives and friction points.",
                effect: "Node activation, relationship paths, and layered emphasis on bottlenecks.",
            },
            {
                title: "Operating Constraint Explorer",
                summary: "A system surface for understanding how training, support, financing, and logistics shape GTM viability.",
                interaction: "Users tune operational assumptions and watch the rollout profile change.",
                effect: "Responsive system cards, subtle graph shifts, and clear constraint-state transitions.",
            },
        ],
    },
];
