const chatKnowledge = {
    profile: {
        name: 'Jeevanantham',
        title: 'Frontend Developer & AI/Data Science Student',
        location: 'Tamil Nadu, India',
        email: 'jeevanantham129787@gmail.com',
        github: 'https://github.com/jeevananthamp12',
        linkedin: 'https://linkedin.com/in/jeevananthamp12',
        education: 'B.Tech in AI & Data Science at M Kumarasamy College of Engineering, Karur (2024 - Present)',
        experience: '1+ year of building web applications and AI projects',
    },

    skills: {
        frontend: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion', 'Vite'],
        backend: ['Node.js', 'Express', 'Python', 'Flask', 'FastAPI'],
        databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
        ai_ml: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'Jupyter', 'Machine Learning'],
        tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker'],
    },

    projects: {
        unicanteen: {
            name: 'UniCanteen',
            tagline: 'Multi-University Campus Food Ordering Platform',
            description: 'A Zomato/Swiggy-style food ordering platform for college campuses with real-time tracking, Razorpay payments, wallet system, and 4 user roles (Student, Owner, Staff, Admin).',
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Razorpay', 'Tailwind CSS'],
            metrics: { roles: '4', realtime: 'Socket.io', payments: 'Razorpay' },
        },
        docmind: {
            name: 'DocMind AI',
            tagline: 'Talk to Your Docs',
            description: 'An enterprise-grade RAG platform that lets you upload PDFs, extract content, and query documents using Gemini, Grok, OpenAI, Claude, or a local ML engine.',
            tech: ['FastAPI', 'React 19', 'MongoDB', 'Gemini', 'PyPDF', 'Tailwind CSS'],
            metrics: { aiModels: '5+', pdfSpeed: '~15ms', offline: 'Local RAG' },
        },
        zycrop: {
            name: 'ZYCROP',
            tagline: 'AI-Powered Agricultural Intelligence Platform',
            description: 'An offline-capable AI system for crop disease detection, pest identification, soil analysis, and farmer advisory using YOLOv8, TensorFlow, and faster-whisper.',
            tech: ['Python', 'YOLOv8', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
            metrics: { offlineFeatures: '6/8', aiModels: 'YOLOv8 + TF', voiceInput: 'faster-whisper' },
        },
        blog: {
            name: 'Blog',
            tagline: 'Personal Tech Blog',
            description: 'A personal blog sharing thoughts on web development, AI, and building real-world software. Hosted on Vercel.',
            tech: ['React', 'Vercel', 'MDX', 'Tailwind CSS'],
            metrics: { platform: 'Vercel', framework: 'React', speed: 'Global CDN' },
        },
        portfolio: {
            name: 'Developer Portfolio',
            tagline: 'Interactive Showcase',
            description: 'This portfolio site — built with React, Vite, Framer Motion, and Tailwind CSS with dark/light theme, AI chat assistant, and micro-interactions.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lenis Scroll'],
            metrics: { lighthouse: '100', fps: '60', a11y: 'WCAG AAA' },
        },
    },

    certificates: [
        { name: 'Predictive Modeling Fundamentals I', issuer: 'IBM / Cognitive Class' },
        { name: 'Machine Learning with Python', issuer: 'IBM / Cognitive Class' },
        { name: 'Data Science Foundations', issuer: 'IBM Skills Network' },
    ],
};

const greetings = [
    "Hey! I'm Jeevanantham's AI assistant. Ask me anything about his work, skills, or projects!",
    "Hi there! I know everything about Jeevanantham's portfolio. What would you like to know?",
    "Welcome! I can tell you about Jeevanantham's projects, skills, experience, or anything else. Just ask!",
];

const farewell = [
    "Thanks for chatting! Feel free to reach out to Jeevanantham directly at jeevanantham129787@gmail.com",
    "Great talking with you! You can connect with Jeevanantham on LinkedIn or check out his GitHub.",
    "Hope that was helpful! Don't forget to check out the projects section for more details.",
];

const generalResponses = {
    'who are you': "I'm an AI assistant built into Jeevanantham's portfolio. I can answer questions about his projects, skills, experience, education, and more. I'm here to help you get to know him better!",
    'what can you do': "I can tell you about:\n\n• **Projects** — What Jeevanantham has built\n• **Skills** — Technologies he works with\n• **Experience** — His background and education\n• **Contact** — How to reach him\n\nJust ask me anything!",
    'help': "Here are some things you can ask me:\n\n• \"What projects has Jeevanantham built?\"\n• \"What technologies does he use?\"\n• \"Tell me about NexusAI\"\n• \"What's his education?\"\n• \"How can I contact him?\"\n• \"What certifications does he have?\"\n\nFeel free to ask in any way — I'll do my best to help!",
    'thanks': "You're welcome! Is there anything else you'd like to know about Jeevanantham?",
    'thank you': "Happy to help! Let me know if you have any other questions.",
    'hello': "Hey! How can I help you today? Ask me anything about Jeevanantham's work!",
    'hi': "Hi there! What would you like to know about Jeevanantham?",
    'hey': "Hey! What's up? Need any info about Jeevanantham's portfolio?",
    'bye': farewell[Math.floor(Math.random() * farewell.length)],
    'goodbye': farewell[Math.floor(Math.random() * farewell.length)],
    'what is this': "This is Jeevanantham's portfolio website. It showcases his projects, skills, and experience as a Frontend Developer and AI/Data Science student. I'm the AI assistant here to help you navigate and learn more!",
    'are you real': "I'm an AI assistant built into this portfolio. I'm not a real person — I'm a smart chatbot that knows all about Jeevanantham's work. Think of me as a friendly guide!",
    'do you know chatgpt': "I'm not ChatGPT — I'm a custom AI assistant built specifically for this portfolio. I'm pre-loaded with all the information about Jeevanantham's work, so I can give you focused, accurate answers about his projects and skills.",
};

function findBestMatch(input) {
    const lower = input.toLowerCase().trim();

    // Check general responses first
    for (const [key, response] of Object.entries(generalResponses)) {
        if (lower.includes(key)) return response;
    }

    // Project queries
    const projectKeywords = {
        unicanteen: ['unicanteen', 'uni canteen', 'canteen', 'food ordering', 'campus food', 'razorpay'],
        docmind: ['docmind', 'doc mind', 'talk to your docs', 'document', 'rag', 'pdf', 'ai document'],
        zycrop: ['zycrop', 'zy crop', 'agriculture', 'crop', 'farming', 'disease detection', 'pest', 'soil'],
        blog: ['blog', 'blogging', 'writing', 'articles', 'jeevananthamblog'],
        portfolio: ['portfolio', 'this site', 'this website', 'this project', 'personal site'],
    };

    for (const [key, keywords] of Object.entries(projectKeywords)) {
        if (keywords.some((kw) => lower.includes(kw))) {
            const p = chatKnowledge.projects[key];
            return `**${p.name}** — ${p.tagline}\n\n${p.description}\n\n**Tech Stack:** ${p.tech.join(', ')}\n\n**Key Metrics:** ${Object.entries(p.metrics).map(([k, v]) => `${k}: ${v}`).join(', ')}`;
        }
    }

    // Skills queries
    if (lower.match(/skill|technolog|tech stack|tools|languages|what (do|does) (he|jeevanantham) (use|know|work)/)) {
        const s = chatKnowledge.skills;
        return `Here's Jeevanantham's complete tech stack:\n\n**Frontend:** ${s.frontend.join(', ')}\n\n**Backend:** ${s.backend.join(', ')}\n\n**Databases:** ${s.databases.join(', ')}\n\n**AI/ML:** ${s.ai_ml.join(', ')}\n\n**Tools:** ${s.tools.join(', ')}\n\nThat's ${s.frontend.length + s.backend.length + s.databases.length + s.ai_ml.length + s.tools.length} technologies in total!`;
    }

    // Specific skill queries
    const allSkills = [
        ...chatKnowledge.skills.frontend,
        ...chatKnowledge.skills.backend,
        ...chatKnowledge.skills.databases,
        ...chatKnowledge.skills.ai_ml,
        ...chatKnowledge.skills.tools,
    ];
    for (const skill of allSkills) {
        if (lower.includes(skill.toLowerCase())) {
            return `Yes! Jeevanantham works with **${skill}**. It's part of his ${Object.entries(chatKnowledge.skills).find(([, v]) => v.includes(skill))?.[0] || 'tech'} toolkit. He uses it across multiple projects. Want to know more about a specific project that uses ${skill}?`;
        }
    }

    // Experience / Education
    if (lower.match(/experience|background|about (him|jeevanantham)|who is|tell me about/)) {
        return `**${chatKnowledge.profile.name}** — ${chatKnowledge.profile.title}\n\n📍 ${chatKnowledge.profile.location}\n\n🎓 ${chatKnowledge.profile.education}\n\n💻 ${chatKnowledge.profile.experience}\n\nHe's passionate about building clean, fast web experiences with a focus on clarity, performance, and maintainable code.`;
    }

    if (lower.match(/education|college|university|school|degree|study|studying|b\.?tech/)) {
        return `Jeevanantham is pursuing a **${chatKnowledge.profile.education}**.\n\nHe also completed his schooling at Vivekanandha Matriculation Higher Secondary School in Sirkali, Tamil Nadu, where he developed his early interest in programming and technology.`;
    }

    // Certifications
    if (lower.match(/certif|credential|ibm|cognitive|course/)) {
        return `Jeevanantham has earned these certifications:\n\n${chatKnowledge.certificates.map((c, i) => `${i + 1}. **${c.name}** — ${c.issuer}`).join('\n\n')}\n\nAll earned through IBM's Skills Network and Cognitive Class platform.`;
    }

    // Contact
    if (lower.match(/contact|reach|email|hire|freelance|available|collaborate|connect/)) {
        return `You can reach Jeevanantham through:\n\n📧 **Email:** jeevanantham129787@gmail.com\n\n💼 **LinkedIn:** linkedin.com/in/jeevananthamp12\n\n🐙 **GitHub:** github.com/jeevananthamp12\n\nHe's available for frontend and AI-focused work opportunities!`;
    }

    // Projects list
    if (lower.match(/project|built|work|portfolio|app|application/)) {
        const projectCount = Object.keys(chatKnowledge.projects).length;
        const p = chatKnowledge.projects;
        return `Jeevanantham has built **${projectCount} projects**:\n\n${Object.values(p).map((proj) => `• **${proj.name}** — ${proj.tagline}`).join('\n')}\n\nWant to know more about any specific project? Just ask!`;
    }

    // Fallback
    return null;
}

export function getAIResponse(input) {
    const trimmed = input.trim();
    if (!trimmed) return "Type something and I'll do my best to help!";

    const lower = trimmed.toLowerCase();

    // Greetings
    if (lower.match(/^(hi|hello|hey|yo|sup|howdy|hola|namaste)/)) {
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Try smart matching
    const smartResponse = findBestMatch(lower);
    if (smartResponse) return smartResponse;

    // Final fallback
    const fallbacks = [
        "I'm not sure I understand that. Try asking about Jeevanantham's projects, skills, experience, or education!",
        "Hmm, I don't have info on that. But I know a lot about Jeevanantham's work! Try asking about his projects or skills.",
        "I'm focused on Jeevanantham's portfolio, so I might not know about that. Want to ask about his projects or tech stack instead?",
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

export function getGreeting() {
    return greetings[Math.floor(Math.random() * greetings.length)];
}

export default chatKnowledge;
