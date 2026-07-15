import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const skillCategories = [
    ['Frontend', ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']],
    ['Backend & APIs', ['Node.js', 'Express', 'Flask', 'REST APIs', 'Authentication']],
    ['Data & AI', ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning']],
    ['Tools', ['Git', 'GitHub', 'Vite', 'VS Code', 'Figma', 'MongoDB', 'MySQL']],
];

const Skills = () => {
    const { isDark } = useTheme();

    return (
        <section id="skills" className={`relative py-24 md:py-32 ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`}>
            <motion.div
                className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="max-w-3xl">
                    <p className={`section-eyebrow ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Skills</p>
                    <h2 className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        A focused toolkit for modern product development.
                    </h2>
                    <p className={`mt-5 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        I work across interface implementation, API integration, and data-focused prototypes, with React and Python as my strongest daily tools.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map(([category, skills]) => (
                        <div key={category} className={`rounded-2xl border p-6 ${isDark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white shadow-sm'}`}>
                            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{category}</h3>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className={`rounded-lg border px-3 py-2 text-sm font-medium ${isDark ? 'border-white/10 bg-white/[0.04] text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
