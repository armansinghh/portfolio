import { LuTv, LuDumbbell, LuGamepad2, LuCamera } from "react-icons/lu";
export const aboutData = {
    introduction: [
        "I'm a first-year B.Tech student in Artificial Intelligence & Data Science, obsessed with building machine learning systems that actually do something useful, right now that's sequence modeling with CRNN architectures for handwritten text recognition, trained on the IAM dataset using PyTorch.",
        "Outside of academics, I make things look good. I started with fandom edits in After Effects, which turned into motion graphics. Recently picked up Photoshop to start designing posters. I'm also a huge movie nerd, pretty much every Nolan and Fincher film is checked off my list!",
    ],
    technicalFocus: {
        machineLearning: [
            "PyTorch", "CRNN", "OpenCV", "Python",
        ],
        webDevelopment: [
            "Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel",
        ],
        currentlyLearning: [
            "Data Structures & Algorithms", "Python (deepening)", "AI Fundamentals", "Neural Networks",
        ],
    },
    lookingFor: {
        description:
            "Exploring AI/ML and Data Science internship roles focused on applied machine learning, scalable data analysis, and intelligent product design.",
        highlight:
            "I offer an end-to-end skill set: I can train the model, and I can build the production interface around it.",
    },
    education: {
        degree: "B.Tech in AI & Data Science",
        university: "MITS Gwalior",
        timeline: "2025 - 2029",
        coursework:
            "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Linear Algebra, Probability & Statistics, Machine Learning Basics.",
    },
    interests: [
        {
            label: "Movies & TV Shows",
            description: "Watching and discussing peak cinema",
            icon: LuTv,
        },
        {
            label: "Fitness",
            description: "Lifting and staying active",
            icon: LuDumbbell,
        },
        {
            label: "Gaming",
            description: "Story driven single player games",
            icon: LuGamepad2,
        },
        {
            label: "Photography",
            description: "Capturing street scenes & architecture",
            icon: LuCamera,
        },
    ],
};