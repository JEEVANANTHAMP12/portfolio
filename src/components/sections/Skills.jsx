import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const categories = ['All', 'Frontend', 'Backend & DB', 'Data & AI', 'Tools'];

const skillsData = [
    // Frontend
    { name: 'React', category: 'Frontend', icon: `${DI}/react/react-original.svg`, color: '#61DAFB' },
    { name: 'JavaScript', category: 'Frontend', icon: `${DI}/javascript/javascript-original.svg`, color: '#F7DF1E' },
    { name: 'TypeScript', category: 'Frontend', icon: `${DI}/typescript/typescript-original.svg`, color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: `${DI}/tailwindcss/tailwindcss-original.svg`, color: '#38BDF8' },
    { name: 'HTML5', category: 'Frontend', icon: `${DI}/html5/html5-original.svg`, color: '#E34F26' },
    { name: 'CSS3', category: 'Frontend', icon: `${DI}/css3/css3-original.svg`, color: '#1572B6' },

    // Backend & DB
    { name: 'Node.js', category: 'Backend & DB', icon: `${DI}/nodejs/nodejs-original.svg`, color: '#339933' },
    { name: 'Express', category: 'Backend & DB', icon: `${DI}/express/express-original.svg`, color: '#6875F5', mono: true },
    { name: 'Python', category: 'Backend & DB', icon: `${DI}/python/python-original.svg`, color: '#3776AB' },
    { name: 'Flask', category: 'Backend & DB', icon: `${DI}/flask/flask-original.svg`, color: '#000000', mono: true },
    { name: 'MongoDB', category: 'Backend & DB', icon: `${DI}/mongodb/mongodb-original.svg`, color: '#47A248' },
    { name: 'MySQL', category: 'Backend & DB', icon: `${DI}/mysql/mysql-original.svg`, color: '#4479A1' },

    // Data & AI
    { name: 'Machine Learning', category: 'Data & AI', icon: `${DI}/python/python-original.svg`, color: '#6366f1' },
    { name: 'NumPy', category: 'Data & AI', icon: `${DI}/numpy/numpy-original.svg`, color: '#4DABCF' },
    { name: 'Pandas', category: 'Data & AI', icon: `${DI}/pandas/pandas-original.svg`, color: '#130754' },
    { name: 'Scikit-learn', category: 'Data & AI', icon: `${DI}/scikitlearn/scikitlearn-original.svg`, color: '#F7931E' },
    { name: 'Jupyter', category: 'Data & AI', icon: `${DI}/jupyter/jupyter-original.svg`, color: '#F37626' },

    // Tools
    { name: 'Git', category: 'Tools', icon: `${DI}/git/git-original.svg`, color: '#F05032' },
    { name: 'GitHub', category: 'Tools', icon: `${DI}/github/github-original.svg`, color: '#24292F', mono: true },
    { name: 'Vite', category: 'Tools', icon: `${DI}/vitejs/vitejs-original.svg`, color: '#646CFF' },
    { name: 'VS Code', category: 'Tools', icon: `${DI}/vscode/vscode-original.svg`, color: '#007ACC' },
    { name: 'Figma', category: 'Tools', icon: `${DI}/figma/figma-original.svg`, color: '#F24E1E' },
];

function hexToRgba(hex, alpha) {
    if (!hex || !hex.startsWith('#')) return `rgba(99, 102, 241, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16) || 99;
    const g = parseInt(hex.slice(3, 5), 16) || 102;
    const b = parseInt(hex.slice(5, 7), 16) || 241;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const Skills = () => {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('All');

    const filteredSkills = activeTab === 'All'
        ? skillsData
        : skillsData.filter((skill) => skill.category === activeTab);

    return (
        <section id="skills" className={`relative py-20 md:py-28 overflow-hidden ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`}>
            {/* Ambient Blobs */}
            <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <p className={`section-eyebrow ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Skills & Tech Stack</p>
                        <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
                            Modern Development Toolkit.
                        </h2>
                        <p className={`mt-3 text-base sm:text-lg leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            Technologies, languages, and tools I use to build scalable web apps, APIs, and AI models.
                        </p>
                    </motion.div>

                    {/* Category Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-wrap items-center gap-2"
                    >
                        {categories.map((cat) => {
                            const isActive = activeTab === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                                        isActive
                                            ? 'text-white bg-indigo-600 shadow-md shadow-indigo-600/25'
                                            : isDark
                                            ? 'bg-neutral-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                                            : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300 shadow-sm'
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Simple & Modern Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 ${
                                    isDark
                                        ? 'bg-neutral-900/80 border-white/10 hover:border-indigo-500/40 hover:bg-neutral-900 hover:shadow-xl hover:shadow-indigo-500/10'
                                        : 'bg-white border-slate-200/90 hover:border-indigo-400 hover:shadow-lg shadow-sm'
                                }`}
                            >
                                {/* Tech Icon Badge */}
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: hexToRgba(skill.color, isDark ? 0.12 : 0.08),
                                    }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className={`h-6 w-6 object-contain transition-transform duration-300 ${
                                            skill.mono && isDark ? 'brightness-0 invert' : ''
                                        } ${skill.mono && !isDark ? 'brightness-0 opacity-75' : ''}`}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>

                                {/* Skill Name & Category */}
                                <div className="min-w-0 flex-1">
                                    <h3 className={`text-xs sm:text-sm font-bold truncate leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {skill.name}
                                    </h3>
                                    <span className={`text-[10px] font-semibold block mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {skill.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
