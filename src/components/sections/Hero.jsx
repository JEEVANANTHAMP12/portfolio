import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const metrics = [
    { value: '6+', label: 'Projects shipped' },
    { value: '12+', label: 'Core tools' },
    { value: 'AI/DS', label: 'Degree focus' },
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/jeevananthamp12',
        icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/jeevananthamp12',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
        label: 'Email',
        href: 'mailto:jeevanantham129787@gmail.com',
        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
];

const Hero = () => {
    const { isDark } = useTheme();

    return (
        <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28">
            <div className={`absolute inset-0 ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`} />
            <div className={`absolute inset-0 opacity-70 ${isDark ? 'professional-grid-dark' : 'professional-grid-light'}`} />
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 sm:px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${isDark ? 'border-white/10 bg-white/5 text-slate-300' : 'border-slate-200 bg-white text-slate-700 shadow-sm'}`}>
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for frontend and AI-focused work
                    </div>

                    <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        Frontend Developer
                    </p>
                    <h1 className={`max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        Jeevanantham builds clean, fast web experiences.
                    </h1>
                    <p className={`mt-7 max-w-2xl text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        I create responsive React interfaces, practical full-stack features, and AI/data science projects with a focus on clarity, performance, and maintainable implementation.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-400">
                            View Projects
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#contact" className={`inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-bold transition ${isDark ? 'border-white/15 text-white hover:bg-white/10' : 'border-slate-300 text-slate-950 hover:bg-slate-100'}`}>
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-9 flex items-center gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.label === 'Email' ? undefined : '_blank'}
                                rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                                aria-label={social.label}
                                className={`flex h-11 w-11 items-center justify-center rounded-lg border transition ${isDark ? 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400 hover:text-white' : 'border-slate-200 bg-white text-slate-600 shadow-sm hover:border-indigo-500 hover:text-slate-950'}`}
                            >
                                <svg className="h-5 w-5" fill={social.label === 'Email' ? 'none' : 'currentColor'} stroke={social.label === 'Email' ? 'currentColor' : 'none'} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={social.label === 'Email' ? 2 : undefined} d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-2xl border p-5 shadow-2xl ${isDark ? 'border-white/10 bg-white/[0.04] shadow-black/40' : 'border-slate-200 bg-white shadow-slate-200/80'}`}
                >
                    <div className={`rounded-xl border p-5 ${isDark ? 'border-white/10 bg-neutral-950/70' : 'border-slate-200 bg-slate-50'}`}>
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-950'}`}>Current Focus</p>
                                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>React, UI systems, AI/Data Science</p>
                            </div>
                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">Open</span>
                        </div>

                        <div className="space-y-3">
                            {[
                                'Polished responsive interfaces',
                                'Reusable components with Tailwind CSS',
                                'AI and data-driven project prototypes',
                                'Accessible forms and clear user flows',
                            ].map((item) => (
                                <div key={item} className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-white'}`}>
                                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15 text-indigo-500">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                        {metrics.map((metric) => (
                            <div key={metric.label} className={`rounded-xl border p-4 ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-slate-50'}`}>
                                <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>{metric.value}</p>
                                <p className={`mt-1 text-xs leading-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
