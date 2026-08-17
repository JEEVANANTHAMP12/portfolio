import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ScrollStack, { ScrollStackItem } from '../common/ScrollStack';

const experiences = [
    {
        id: 1,
        period: '2024 - Present',
        type: 'College / Degree',
        title: 'B.Tech in AI & Data Science',
        institution: 'M Kumarasamy College of Engineering',
        location: 'Karur, Tamil Nadu',
        description: 'Building a strong technical foundation in artificial intelligence, machine learning, data structures, algorithms, and software engineering. Applying theoretical concepts in practical full-stack and data projects.',
        highlights: [
            'Hands-on machine learning & predictive analytics',
            'Data structures & algorithm optimization',
            'Full-stack React & Python development',
        ],
        tags: ['AI & ML', 'Data Science', 'Python', 'Algorithms', 'React'],
        color: '#6366f1',
    },
    {
        id: 2,
        period: '2024 - Present',
        type: 'Practical Experience',
        title: 'Frontend & Web Development',
        institution: 'Self-Driven Projects & Open Source',
        location: 'Remote',
        description: 'Designing and engineering high-performance web applications, portfolio interfaces, and interactive dashboards using modern web frameworks, Tailwind CSS, and Framer Motion.',
        highlights: [
            'Crafting responsive UI/UX with smooth micro-animations',
            'Optimizing web app performance & build bundles',
            'Integrating modern JavaScript APIs & state management',
        ],
        tags: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        color: '#8b5cf6',
    },
    {
        id: 3,
        period: '2022 - 2024',
        type: 'Higher Secondary School',
        title: 'Higher Secondary Education (12th Grade)',
        institution: 'Vivekanandha Matriculation Higher Secondary School',
        location: 'Sirkali, Tamil Nadu',
        description: 'Completed Higher Secondary Education specializing in Physics, Chemistry, Mathematics, and Computer Science (PCM + CS stream). Developed a passionate interest in programming, problem-solving, and technology.',
        highlights: [
            'Excelled in Computer Science and Mathematics',
            'Built first programming projects in C++ and Python',
            'Developed analytical & logical reasoning skills',
        ],
        tags: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Problem Solving'],
        color: '#06b6d4',
    },
    {
        id: 4,
        period: '2021 - 2022',
        type: 'Secondary School',
        title: 'Secondary Education (10th Grade)',
        institution: 'Vivekanandha Matriculation Higher Secondary School',
        location: 'Sirkali, Tamil Nadu',
        description: 'Completed Secondary School Certificate (SSLC) with top academic performance. Established a strong foundation in core mathematics, natural science, and logical thinking.',
        highlights: [
            'Strong foundation in core science & mathematics',
            'Early exposure to computer basics & logic',
            'Consistently high academic standing',
        ],
        tags: ['Mathematics', 'Science', 'English', 'Social Studies'],
        color: '#10b981',
    },
];

const Experience = () => {
    const { isDark } = useTheme();

    return (
        <section id="experience" className={`relative py-16 md:py-24 ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`}>
            {/* Ambient Blobs */}
            <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-6"
                >
                    <p className={`section-eyebrow ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Education & Journey</p>
                    <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        Experience & Schooling.
                    </h2>
                    <p className={`mt-2.5 text-base sm:text-lg leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Scroll down to explore my academic background and engineering journey. Cards stack smoothly as you scroll.
                    </p>
                </motion.div>

                {/* SCROLL STACK COMPONENT */}
                <ScrollStack
                    useWindowScroll={true}
                    itemDistance={40}
                    itemScale={0.02}
                    itemStackDistance={16}
                    stackPosition="100px"
                    scaleEndPosition="60px"
                    baseScale={0.92}
                >
                    {experiences.map((item) => (
                        <ScrollStackItem key={item.id}>
                            <div
                                className={`w-full rounded-3xl border p-6 sm:p-8 md:p-9 transition-colors duration-300 shadow-2xl ${isDark
                                        ? 'bg-neutral-900/95 border-white/15 text-white shadow-black/80'
                                        : 'bg-white border-slate-200/90 text-slate-900 shadow-slate-300/60'
                                    }`}
                            >
                                {/* Header Row */}
                                <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-4 mb-4 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="h-3.5 w-3.5 rounded-full shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <div>
                                            <span
                                                className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider inline-block"
                                                style={{ background: `${item.color}18`, color: item.color }}
                                            >
                                                {item.type}
                                            </span>
                                            <h3 className={`text-xl sm:text-2xl md:text-3xl font-black mt-1 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="text-left sm:text-right shrink-0">
                                        <span className="text-sm sm:text-base font-black text-indigo-500 block">
                                            {item.period}
                                        </span>
                                        <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {item.institution}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-sm sm:text-base leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {item.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-5 space-y-2">
                                    {item.highlights.map((h, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                            <svg className="h-4 w-4 mt-0.5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className={`flex flex-wrap items-center justify-between gap-3 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`rounded-lg px-3 py-1 text-xs font-bold border transition ${isDark
                                                        ? 'border-white/10 bg-white/5 text-slate-300'
                                                        : 'border-slate-200 bg-slate-100 text-slate-700'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </section>
    );
};

export default Experience;
