import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const skillsData = [
    { name: 'React', icon: `${DI}/react/react-original.svg` },
    { name: 'JavaScript', icon: `${DI}/javascript/javascript-original.svg` },
    { name: 'TypeScript', icon: `${DI}/typescript/typescript-original.svg` },
    { name: 'Tailwind CSS', icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
    { name: 'HTML5', icon: `${DI}/html5/html5-original.svg` },
    { name: 'CSS3', icon: `${DI}/css3/css3-original.svg` },
    { name: 'Node.js', icon: `${DI}/nodejs/nodejs-original.svg` },
    { name: 'Express', icon: `${DI}/express/express-original.svg`, mono: true },
    { name: 'Python', icon: `${DI}/python/python-original.svg` },
    { name: 'Flask', icon: `${DI}/flask/flask-original.svg`, mono: true },
    { name: 'MongoDB', icon: `${DI}/mongodb/mongodb-original.svg` },
    { name: 'MySQL', icon: `${DI}/mysql/mysql-original.svg` },
    { name: 'Machine Learning', icon: `${DI}/python/python-original.svg` },
    { name: 'NumPy', icon: `${DI}/numpy/numpy-original.svg` },
    { name: 'Pandas', icon: `${DI}/pandas/pandas-original.svg` },
    { name: 'Scikit-learn', icon: `${DI}/scikitlearn/scikitlearn-original.svg` },
    { name: 'Jupyter', icon: `${DI}/jupyter/jupyter-original.svg` },
    { name: 'Git', icon: `${DI}/git/git-original.svg` },
    { name: 'GitHub', icon: `${DI}/github/github-original.svg`, mono: true },
    { name: 'Vite', icon: `${DI}/vitejs/vitejs-original.svg` },
    { name: 'VS Code', icon: `${DI}/vscode/vscode-original.svg` },
    { name: 'Figma', icon: `${DI}/figma/figma-original.svg` },
];

// Duplicate skills array to ensure seamless infinite looping slider
const sliderSkills = [...skillsData, ...skillsData];

const Skills = () => {
    const { isDark } = useTheme();
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <section id="skills" className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-neutral-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
                {/* Header */}
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className={`section-eyebrow ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Skills & Tech Stack</p>
                        <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
                            Modern Development Toolkit.
                        </h2>
                        <p className={`mt-3 text-base sm:text-lg leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            Technologies, languages, and tools I use to build scalable web apps, APIs, and AI models. Hover or tap an icon to reveal its name.
                        </p>
                    </motion.div>
                </div>

                {/* Auto-Sliding Icon Track with Ample Vertical Headroom for Tooltips */}
                <div className="relative w-full pt-16 pb-12 overflow-hidden">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-14 sm:gap-20 cursor-pointer">
                        {sliderSkills.map((skill, index) => {
                            const isTapped = activeSkill === `${skill.name}-${index}`;

                            return (
                                <div
                                    key={`${skill.name}-${index}`}
                                    className="group relative flex flex-col items-center justify-center shrink-0"
                                    onClick={() => setActiveSkill(isTapped ? null : `${skill.name}-${index}`)}
                                >
                                    {/* Unclipped Tooltip Badge */}
                                    <span
                                        className={`absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 ${
                                            isTapped ? 'opacity-100 -translate-y-1' : ''
                                        } group-hover:-translate-y-1 transition-all duration-300 pointer-events-none z-50 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-slate-950 border border-white/20 shadow-2xl whitespace-nowrap flex items-center justify-center`}
                                    >
                                        {skill.name}
                                        {/* Arrow Indicator */}
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-950 rotate-45 border-r border-b border-white/20" />
                                    </span>

                                    {/* Real Icon Alone */}
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className={`h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform duration-300 transform group-hover:scale-125 ${
                                            skill.mono && isDark ? 'brightness-0 invert' : ''
                                        } ${skill.mono && !isDark ? 'brightness-0 opacity-80' : ''}`}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Marquee Animation Styles */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Skills;
