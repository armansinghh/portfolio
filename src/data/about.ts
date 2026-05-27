import { LuBookOpen, LuDumbbell, LuGamepad2, LuCamera } from "react-icons/lu";
export const aboutData = {
    introduction: [
        "I'm a first-year B.Tech student in Artificial Intelligence & Data Science. My focus is on building machine learning systems that solve real problems — currently working on sequence modeling with CRNN architectures for handwritten text recognition, trained on the IAM dataset using PyTorch.",
        "Beyond academics, I ship what I learn. I use Next.js and TypeScript to build interfaces around my ML models — because a model that can't be used by anyone isn't a complete project.",
    ],
    technicalFocus: {
        machineLearning: [
            "PyTorch", "CRNN", "OpenCV", "Python", "scikit-learn", "NumPy", "pandas",
        ],
        webDevelopment: [
            "Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel",
        ],
        currentlyLearning: [
            "Transformers", "Attention Mechanisms", "Fine-tuning LLMs", "Data Pipelines", "SQL", "Cloud ML (GCP/AWS)",
        ],
    },
    lookingFor: {
        description:
            "I'm actively seeking AI/ML and Data Science internship opportunities where I can contribute to real model development, data analysis, or ML-powered product work.",
        highlight:
            "I bring an unusual combination: I can build the model, and build the interface for it.",
    },
    education: {
        degree: "Bachelor of Technology in AI & Data Science",
        university: "[Your University Name], Gwalior", // Don't forget to update this!
        timeline: "2023 — 2027",
        coursework:
            "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Linear Algebra, Probability & Statistics, Machine Learning Basics.",
    },
    interests: [
        {
            label: "Reading",
            description: "Tech blogs & Sci-Fi Literature",
            icon: LuBookOpen,
        },
        {
            label: "Fitness",
            description: "Lifting and staying active",
            icon: LuDumbbell,
        },
        {
            label: "Gaming",
            description: "Story-driven single-player games",
            icon: LuGamepad2,
        },
        {
            label: "Photography",
            description: "Capturing street scenes & architecture",
            icon: LuCamera,
        },
    ],
};