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
        title: "E-commerce Redesign",
        description: "A complete overhaul of a fashion e-commerce platform focusing on user experience and conversion optimization.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        tags: ["UI/UX", "E-commerce", "Mobile First"],
        longDescription: "This project involved a comprehensive redesign of an existing fashion e-commerce platform. The primary goal was to improve the user journey, reduce cart abandonment, and modernize the visual identity. We conducted extensive user research, created wireframes and prototypes, and implemented a responsive design that works seamlessly across all devices.",
        role: "Lead Designer",
        client: "FashionForward",
        duration: "3 months",
        tools: ["Figma", "Adobe CC", "React"]
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
