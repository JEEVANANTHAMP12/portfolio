import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const milestones = [
    {
        period: '2024 - Present',
        title: 'B.Tech in AI & Data Science',
        meta: 'M Kumarasamy College of Engineering',
        detail: 'Building a foundation in data structures, algorithms, machine learning, and software engineering while applying the concepts in practical web and data projects.',
        tags: ['AI', 'Data Science', 'Algorithms', 'Python'],
    },
    {
        period: '2024 - Present',
        title: 'Frontend Development',
        meta: 'React, Tailwind CSS, JavaScript',
        detail: 'Designing and implementing responsive interfaces with attention to accessibility, performance, reusable components, and clear user flows.',
        tags: ['React', 'Tailwind CSS', 'UI/UX', 'Performance'],
    },
    {
        period: '2022 - 2024',
        title: 'Higher Secondary Education',
        meta: 'Physics, Chemistry, Mathematics, Computer Science',
        detail: 'Developed analytical thinking, programming interest, and a strong technical base for engineering and product development.',
        tags: ['Mathematics', 'Computer Science', 'Problem Solving'],
    },
];

const Experience = () => {
    const { isDark } = useTheme();

    return (
        <section id="experience" className={`relative py-24 md:py-32 ${isDark ? 'bg-neutral-950' : 'bg-white'}`}>
            <motion.div
                className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-3xl">
                    <p className={`section-eyebrow ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Journey</p>
                    <h2 className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        Learning path with product-focused execution.
                    </h2>
                    <p className={`mt-5 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        A concise view of my education and development focus, optimized for quick scanning on every device.
                    </p>
                </div>

                <div className="mt-12 grid gap-5">
                    {milestones.map((item) => (
                        <article key={`${item.period}-${item.title}`} className={`grid gap-5 rounded-2xl border p-6 md:grid-cols-[180px_1fr] md:p-7 ${isDark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-slate-50'}`}>
                            <div>
                                <p className="text-sm font-black text-cyan-400">{item.period}</p>
                            </div>
                            <div>
                                <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
                                <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.meta}</p>
                                <p className={`mt-4 leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.detail}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className={`rounded-lg border px-3 py-1.5 text-xs font-bold ${isDark ? 'border-white/10 bg-white/[0.04] text-slate-300' : 'border-slate-200 bg-white text-slate-600'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
