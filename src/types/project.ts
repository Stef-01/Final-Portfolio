export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    longDescription?: string;
    role?: string;
    client?: string;
    duration?: string;
    tools?: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        title: "SWAAD - AI Precision Nutrition App",
        description: "A community first Indian vegetarian nutrition app that surfaces local produce deals, diabetes friendly recipes, and playful meal planning games that provide precise health education content.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop",
        tags: ["Health Tech", "AI/ML", "Community Health"],
        longDescription: `This project created a digital home for healthy Indian food, combining local market data, culturally grounded recipes, and light touch gamification for chronic disease prevention. The goal was to make it simple for migrant families living with diabetes or high blood pressure to see what is in season, explore healthier versions of familiar dishes, and use interactive tools to understand how meals affect glycemic control and salt intake.

**Role**  
Product lead, UX designer, and public health researcher

**Context**  
Self initiated venture built with Logan Indian community members 

**Duration**  
Ongoing, initial design and prototype over 4 months

**Tools**  
Figma, Supabase, React, OpenAI API, Airtable

---

## The Challenge

Indian families in Logan often rely on informal WhatsApp threads and supermarket flyers to plan meals, with little structured guidance on carb quality, sodium content, or portion size. People with diabetes or hypertension are told to change their diet, yet most advice is generic, not tailored to Indian vegetarian food, and rarely linked to what is actually affordable locally. There was a need for a tool that could connect blood sugar and blood pressure education to real shopping and cooking decisions in a culturally respectful way. Also an leverage emerging AI/LM tools to provide precision advice based on the current level of health education.

## The Solution

SWAAD is a site that acts as a neighborhood nutrition hub focused on metabolic health. The app pulls in data on Logan markets and fruit shops to find fresh, on sale, and diabetes friendly, produce and links them to a recipe library that respects regional styles and spice profiles.

A survey like recipe finder asks about mood, time, pantry items, health goals, and what users want to pair a dish with, then suggests options that optimize glycemic load or support lower salt intake. Mini games let users simulate a day of eating, drag and drop foods into a plate, and see projected effects on their glucose curve or sodium budget, turning abstract guidelines into an intuitive experience. An AI system identifies mistakes that they are repeatedly making and provides precise advice on where they are going wrong and how they can improve in serving meals to the in-game customers who have comorbidities.

The system is built on structured tags and rules for carbs, fiber, sodium, and fats so it can serve people with diabetes, prediabetes, or hypertension.

## The Result

The prototype shows how local price data, cultural context, and interactive education can support lifestyle change for high risk communities. Early feedback from Logan families and clinicians highlighted that the app felt fun rather than a clinic tool, and that the games made it easier to understand how small swaps in rotis, rice, and curries could smooth post-meal glucose peaks or reduce salt over the week. The concept now serves as a foundation for future pilots that link community based nutrition support with measurable improvements in glycemic control and blood pressure.`,
        role: "Product lead, UX designer, and public health researcher",
        client: "Self initiated venture built with Logan Indian community members",
        duration: "Ongoing, initial design and prototype over 4 months",
        tools: ["Figma", "Supabase", "React", "OpenAI API", "Airtable"]
    },
    {
        id: "2",
        title: "Fintech Dashboard",
        description: "Modern dashboard for a financial analytics tool helping users track their investments and market trends.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Dashboard", "Fintech", "Data Visualization"],
        longDescription: "Designed a powerful dashboard for financial analytics. The challenge was to present complex data in an intuitive and digestible format. We utilized advanced data visualization techniques and created a customizable interface that allows users to focus on the metrics that matter most to them.",
        role: "Product Designer",
        client: "InvestSmart",
        duration: "4 months",
        tools: ["Figma", "D3.js", "React"]
    },
    {
        id: "3",
        title: "Healthcare App",
        description: "Mobile application for patient monitoring and doctor-patient communication.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Mobile App", "Healthcare", "iOS/Android"],
        longDescription: "Developed a mobile application to bridge the gap between patients and healthcare providers. Key features include appointment scheduling, secure messaging, and real-time health monitoring. The design focuses on accessibility and ease of use for patients of all ages.",
        role: "UX Researcher & Designer",
        client: "HealthConnect",
        duration: "6 months",
        tools: ["Figma", "Protopie", "React Native"]
    }
];
