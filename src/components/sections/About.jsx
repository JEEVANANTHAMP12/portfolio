import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { CodeIcon, GraduationCapIcon, LaptopIcon } from '../icons/AnimatedIcons';

const highlights = [
    {
        icon: LaptopIcon,
        title: 'Frontend Craft',
        text: 'Building responsive, accessible React interfaces with thoughtful layout, clear states, and reliable component structure.',
    },
    {
        icon: CodeIcon,
        title: 'Practical Engineering',
        text: 'Comfortable connecting UI to APIs, organizing project logic, and keeping implementation readable for future changes.',
    },
    {
        icon: GraduationCapIcon,
        title: 'AI & Data Science',
        text: 'Studying AI and Data Science while applying Python, data analysis, and model concepts in hands-on projects.',
    },
];

const stats = [
    ['1+', 'Year learning and building'],
    ['6+', 'Portfolio projects'],
    ['React', 'Primary frontend stack'],
    ['AI/DS', 'Academic specialization'],
];

const About = () => {
    const { isDark } = useTheme();

    return (
        <section id="about" className={`relative py-24 md:py-32 ${isDark ? 'bg-neutral-950' : 'bg-white'}`}>
            <motion.div
                className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div>
                        <p className={`section-eyebrow ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>About</p>
                        <h2 className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                            A developer focused on useful, polished interfaces.
                        </h2>
                        <p className={`mt-6 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            I am Jeevanantham, a frontend developer and AI/Data Science student. I enjoy translating ideas into clean web experiences that are easy to use, fast to load, and simple to maintain.
                        </p>
                        <p className={`mt-4 leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            My current work centers on React, Tailwind CSS, JavaScript, Python, and data-driven prototypes. I care about strong visual hierarchy, responsive behavior, and practical engineering decisions.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {highlights.map((item) => (
                            <div key={item.title} className={`rounded-2xl border p-6 ${isDark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-slate-50'}`}>
                                <div className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
                                        <p className={`mt-2 text-sm leading-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {stats.map(([value, label]) => (
                        <div key={label} className={`rounded-2xl border p-5 ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-white shadow-sm'}`}>
                            <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>{value}</p>
                            <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
