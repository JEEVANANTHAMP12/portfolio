import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const projects = [
    {
        id: 'unicanteen',
        title: 'UniCanteen',
        subtitle: 'Multi-University Campus Food Ordering Platform',
        category: 'Full Stack Web',
        description: 'A Zomato/Swiggy-style food ordering platform built for college campuses with real-time tracking, Razorpay payments, and 4 user roles.',
        fullDescription: 'UniCanteen is a full-stack food ordering platform designed for university campuses. It supports multiple universities, multiple canteens per campus, real-time order tracking via Socket.io, Razorpay payments, a wallet system, and role-based access for Students, Owners, Staff, and Admins. Built with React, Node.js, MongoDB, and Socket.io.',
        tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Razorpay', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
        featured: true,
        status: 'Live Production',
        metrics: [
            { label: 'User Roles', value: '4' },
            { label: 'Real-time', value: 'Socket.io' },
            { label: 'Payments', value: 'Razorpay' },
        ],
        features: [
            'Multi-university & multi-canteen support with role-based access',
            'Real-time order tracking with Socket.io live updates',
            'Razorpay payments + wallet top-up system',
            'Admin dashboard with platform stats, canteen approvals & ads',
        ],
        techStack: {
            'Frontend': ['React 18', 'Vite 5', 'Tailwind CSS 3', 'React Router 6'],
            'Backend': ['Node.js 20', 'Express 4', 'MongoDB + Mongoose 8'],
            'Real-time': ['Socket.io 4'],
            'Payments': ['Razorpay', 'JWT + bcryptjs'],
        },
        demoUrl: 'https://github.com/jeevananthamp12',
        githubUrl: 'https://github.com/jeevananthamp12',
        accentColor: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
        id: 'docmind',
        title: 'DocMind AI',
        subtitle: 'Talk to Your Docs',
        category: 'AI & Machine Learning',
        description: 'An enterprise-grade RAG platform that lets you upload PDFs, extract content, and query documents using Gemini, Grok, OpenAI, Claude, or a local ML engine.',
        fullDescription: 'DocMind AI is a full-stack AI Document Intelligence and RAG platform. Users can upload PDF documents, extract structured content instantly, and query documents using state-of-the-art AI models including Google Gemini, xAI Grok, OpenAI, Anthropic Claude, or a Local ML RAG engine. Features persistent conversation history, multi-provider switching, and a modern glassmorphic UI.',
        tags: ['FastAPI', 'React 19', 'MongoDB', 'Gemini', 'PyPDF', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
        featured: true,
        status: 'Live',
        metrics: [
            { label: 'AI Models', value: '5+' },
            { label: 'PDF Speed', value: '~15ms' },
            { label: 'Offline', value: 'Local RAG' },
        ],
        features: [
            'Multi-provider AI engine — switch between Gemini, Grok, OpenAI, Claude, or local ML',
            'Instant PDF extraction via PyPDF with Gemini OCR fallback for scanned docs',
            'Persistent conversation history with pinned threads and word stats',
            'Security hardened — JWT auth, Pydantic validation, XSS sanitization',
        ],
        techStack: {
            'Frontend': ['React 19', 'Vite 8', 'TailwindCSS v4', 'Framer Motion 12'],
            'Backend': ['FastAPI', 'Python 3.10+', 'PyMongo', 'PyPDF'],
            'AI Services': ['Google Gemini', 'xAI Grok', 'OpenAI', 'Anthropic Claude', 'Local ML'],
            'Auth': ['JWT (HS256)', 'bcrypt'],
        },
        demoUrl: 'https://github.com/jeevananthamp12',
        githubUrl: 'https://github.com/jeevananthamp12',
        accentColor: 'from-indigo-500 via-purple-500 to-pink-500',
    },
    {
        id: 'zycrop',
        title: 'ZYCROP',
        subtitle: 'AI-Powered Agricultural Intelligence Platform',
        category: 'AI & Machine Learning',
        description: 'An offline-capable AI system for crop disease detection, pest identification, soil analysis, and farmer advisory — designed to work without internet.',
        fullDescription: 'ZYCROP is an offline-capable AI system for crop disease detection, pest identification, soil analysis, and farmer advisory. It uses YOLOv8 + TensorFlow for disease detection, faster-whisper for voice input, HSV color-based soil classification, and local RAG embeddings for scheme finding. Works fully offline after initial setup.',
        tags: ['Python', 'YOLOv8', 'TensorFlow', 'FastAPI', 'React', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80',
        featured: false,
        status: 'Offline Ready',
        metrics: [
            { label: 'Offline Features', value: '6/8' },
            { label: 'AI Models', value: 'YOLOv8 + TF' },
            { label: 'Voice Input', value: 'faster-whisper' },
        ],
        features: [
            'Crop disease detection & pest identification using YOLOv8 + TensorFlow',
            'Soil analysis via HSV color-based classification',
            'Offline voice input with faster-whisper (CPU) — no internet needed',
            'Local RAG embeddings for government scheme finder',
        ],
        techStack: {
            'Frontend': ['React', 'Expo'],
            'Backend': ['Python 3.11', 'FastAPI', 'Uvicorn'],
            'AI/ML': ['YOLOv8', 'TensorFlow', 'faster-whisper', 'OpenCV'],
            'Database': ['MongoDB', 'Docker'],
        },
        demoUrl: 'https://github.com/jeevananthamp12',
        githubUrl: 'https://github.com/jeevananthamp12',
        accentColor: 'from-emerald-500 via-teal-500 to-green-400',
    },
    {
        id: 'blog',
        title: 'Blog',
        subtitle: 'Personal Tech Blog',
        category: 'Content & Writing',
        description: 'A personal blog sharing thoughts on web development, AI, and building real-world software — hosted on Vercel.',
        fullDescription: 'A personal tech blog built for sharing knowledge about web development, AI tools, and software engineering. Features clean article layouts, responsive design, and is hosted on Vercel for fast global delivery.',
        tags: ['React', 'Vercel', 'MDX', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=80',
        featured: false,
        status: 'Live',
        metrics: [
            { label: 'Platform', value: 'Vercel' },
            { label: 'Framework', value: 'React' },
            { label: 'Speed', value: 'Global CDN' },
        ],
        features: [
            'Clean article layouts with responsive design',
            'Fast global delivery via Vercel CDN',
            'Topics covering web dev, AI, and software engineering',
        ],
        techStack: {
            'Frontend': ['React', 'Tailwind CSS'],
            'Hosting': ['Vercel'],
            'Content': ['MDX / Markdown'],
        },
        demoUrl: 'https://jeevananthamblog.vercel.app',
        githubUrl: 'https://github.com/jeevananthamp12',
        accentColor: 'from-violet-500 via-purple-500 to-indigo-500',
    },
    {
        id: 'portfolio-system',
        title: 'Developer Portfolio',
        subtitle: 'Interactive Showcase',
        category: 'Full Stack Web',
        description: 'This portfolio site — built with React, Vite, Framer Motion, and Tailwind CSS with smooth theme switching, AI chat assistant, and micro-interactions.',
        fullDescription: 'Designed with ultra-modern UI aesthetics, fluid scroll physics, and dark/light ambient contrast. Features a built-in AI chat assistant, smooth page transitions, and Lenis scroll. Serves as a live demonstration of component modularity, web accessibility standards, and clean code practices.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lenis Scroll'],
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80',
        featured: false,
        status: 'v2.0 Active',
        metrics: [
            { label: 'Lighthouse', value: '100' },
            { label: 'FPS', value: '60' },
            { label: 'A11y', value: 'WCAG AAA' },
        ],
        features: [
            'Dark/light theme with smooth transitions',
            'AI chat assistant with portfolio knowledge base',
            'Framer Motion scroll reveals and page transitions',
            'Optimized assets with zero render-blocking bottlenecks',
        ],
        techStack: {
            'Core': ['React 18', 'Vite 7'],
            'Styling': ['Tailwind CSS 3', 'PostCSS'],
            'Animation': ['Framer Motion', 'Lenis Scroll'],
            'Deployment': ['Vercel'],
        },
        demoUrl: 'https://github.com/jeevananthamp12',
        githubUrl: 'https://github.com/jeevananthamp12',
        accentColor: 'from-cyan-500 via-blue-500 to-indigo-500',
    },
];

const Projects = () => {
    const { isDark } = useTheme();
    const [activeProject, setActiveProject] = useState(null);
    const [activeModalTab, setActiveModalTab] = useState('overview');

    // Strictly lock main background scroll when modal is active
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveProject(null);
            }
        };

        if (activeProject) {
            if (window.__lenis) window.__lenis.stop();
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            if (window.__lenis) window.__lenis.start();
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            if (window.__lenis) window.__lenis.start();
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeProject]);

    return (
        <section id="projects" className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-neutral-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            {/* Ambient Background Glowing Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Header Area */}
                <motion.div
                    className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="max-w-3xl">
                        <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
                            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                            Portfolio & Case Studies
                        </div>
                        <h2 className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                            Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            Explore real-world software applications, AI integration concepts, full-stack tools, and analytics dashboards built with modern web technologies.
                        </p>
                    </div>

                    <a
                        href="https://github.com/jeevananthamp12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2.5 rounded-xl border px-6 py-3.5 text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-sm ${
                            isDark 
                                ? 'border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-indigo-400/50' 
                                : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:border-indigo-500'
                        }`}
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        Explore GitHub Repos
                    </a>
                </motion.div>

                {/* Project Grid */}
                <div 
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1.5 ${
                                    isDark
                                        ? 'border-white/10 bg-white/[0.03] hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10'
                                        : 'border-slate-200 bg-white shadow-sm hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10'
                                }`}
                            >
                                {/* Top Glow Accent Header Line */}
                                <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                                {/* Project Image Container */}
                                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width={900}
                                        height={506}
                                        decoding="async"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/15">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Action Hover Quick View */}
                                    <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4">
                                        <button
                                            onClick={() => { setActiveProject(project); setActiveModalTab('overview'); }}
                                            className="px-4 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-extrabold flex items-center gap-2 transform transition hover:scale-105 shadow-lg"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            View Case Study
                                        </button>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className={`text-xl font-black transition-colors group-hover:text-indigo-400 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                        {project.title}
                                    </h3>
                                    
                                    <p className={`mt-2 text-sm leading-relaxed line-clamp-3 flex-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {project.description}
                                    </p>

                                    {/* Key Tech Tags */}
                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold ${
                                                    isDark
                                                        ? 'border-white/10 bg-white/[0.04] text-slate-300'
                                                        : 'border-slate-200 bg-slate-100 text-slate-700'
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Bottom Footer Actions */}
                                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                        <button
                                            onClick={() => { setActiveProject(project); setActiveModalTab('overview'); }}
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                                                isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                                            }`}
                                        >
                                            Detailed Specs
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub Repository"
                                                className={`p-2 rounded-lg border transition ${
                                                    isDark 
                                                        ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30' 
                                                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-950 hover:border-slate-400'
                                                }`}
                                            >
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                </div>
            </div>

            {/* High-Z-Index Modal Dialog Window */}
            <AnimatePresence>
                {activeProject && (
                    <div 
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                            className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm z-[99999]"
                        />

                        {/* Modal Window Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                            onWheel={(e) => e.stopPropagation()}
                            className={`relative z-[100000] w-full max-w-xl max-h-[80vh] my-auto flex flex-col rounded-2xl border overflow-hidden shadow-2xl ${
                                isDark 
                                    ? 'border-white/15 bg-neutral-900 text-white shadow-black/80' 
                                    : 'border-slate-200 bg-white text-slate-900 shadow-slate-400/50'
                            }`}
                        >
                            {/* Modal Header Bar */}
                            <div className={`flex items-center justify-between px-5 py-3.5 border-b shrink-0 ${isDark ? 'border-white/10 bg-neutral-950' : 'border-slate-200 bg-slate-50'}`}>
                                <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/25">
                                        {activeProject.category}
                                    </span>
                                    <span className="text-[11px] font-semibold text-slate-400">
                                        {activeProject.status}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setActiveProject(null)}
                                    className={`h-7 w-7 rounded-lg flex items-center justify-center border text-xs font-bold transition ${
                                        isDark 
                                            ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white' 
                                            : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Project Title Banner */}
                            <div className="px-5 pt-4 pb-2 shrink-0">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                            {activeProject.title}
                                        </h3>
                                        <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                            {activeProject.subtitle}
                                        </p>
                                    </div>

                                    <a
                                        href={activeProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold transition shrink-0"
                                    >
                                         <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                        </svg>
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>

                            {/* Compact Tab Header */}
                            <div className={`flex border-b px-5 gap-5 text-xs font-bold shrink-0 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                {[
                                    { id: 'overview', label: 'Overview' },
                                    { id: 'features', label: 'Key Features' },
                                    { id: 'techStack', label: 'Tech Stack' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveModalTab(tab.id)}
                                        className={`py-2.5 transition-colors relative ${
                                            activeModalTab === tab.id
                                                ? 'text-indigo-400 font-extrabold'
                                                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                    >
                                        {tab.label}
                                        {activeModalTab === tab.id && (
                                            <motion.div layoutId="modalTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Smoothly Scrollable Body Panel */}
                            <div 
                                className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 space-y-4 cursor-default"
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {activeModalTab === 'overview' && (
                                    <div className="space-y-4">
                                        {/* Description */}
                                        <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {activeProject.fullDescription}
                                        </p>

                                        {/* Metrics Grid */}
                                        <div>
                                            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-2">
                                                Key Benchmarks & Metrics
                                            </h4>
                                            <div className="grid grid-cols-3 gap-3">
                                                {activeProject.metrics.map((m) => (
                                                    <div
                                                        key={m.label}
                                                        className={`p-3 rounded-xl border ${
                                                            isDark
                                                                ? 'border-white/10 bg-white/[0.03]'
                                                                : 'border-slate-200 bg-slate-50'
                                                        }`}
                                                    >
                                                        <p className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                                            {m.value}
                                                        </p>
                                                        <p className={`text-[10px] font-semibold mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                                            {m.label}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeModalTab === 'features' && (
                                    <div className="space-y-3">
                                        <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-2">
                                            Core Capabilities
                                        </h4>
                                        <div className="space-y-2">
                                            {activeProject.features.map((feat, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex items-start gap-2.5 p-3 rounded-lg border ${
                                                        isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-slate-50'
                                                    }`}
                                                >
                                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold mt-0.5">
                                                        ✓
                                                    </span>
                                                    <p className={`text-xs font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                                                        {feat}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeModalTab === 'techStack' && (
                                    <div className="space-y-3">
                                        <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 mb-2">
                                            Architecture Breakdown
                                        </h4>
                                        <div className="space-y-2.5">
                                            {Object.entries(activeProject.techStack).map(([layer, tools]) => (
                                                <div
                                                    key={layer}
                                                    className={`p-3 rounded-lg border ${
                                                        isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-slate-50'
                                                    }`}
                                                >
                                                    <p className="text-[10px] font-bold uppercase text-slate-400 mb-1.5">{layer}</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {tools.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Compact Modal Footer */}
                            <div className={`p-3 px-5 border-t flex justify-end shrink-0 ${isDark ? 'border-white/10 bg-neutral-950/80' : 'border-slate-200 bg-slate-50'}`}>
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className={`px-4 py-1.5 rounded-lg border text-xs font-bold transition ${
                                        isDark
                                            ? 'border-white/20 bg-white/5 text-white hover:bg-white/15'
                                            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    Close Window
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default memo(Projects);
