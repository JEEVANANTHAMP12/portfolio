import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const skillCategories = [
    {
        title: "Frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        skills: [
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        ]
    },
    {
        title: "Backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        skills: [
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        ]
    },
    {
        title: "Database & Tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        skills: [
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        ]
    },
    {
        title: "AI & Data Science",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        skills: [
            { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
            { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
        ]
    }
];

const Skills = () => {
    const { isDark } = useTheme();
    return (
        <section id="skills" className="min-h-screen py-16 md:py-20 lg:py-24 relative overflow-hidden flex items-center">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30" style={{ contain: 'strict' }}>
                <motion.div
                    className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
                    animate={{ 
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform', animation: 'blurPulse 7s ease-in-out infinite' }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px]"
                    animate={{ 
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform', animation: 'blurPulse 9s ease-in-out infinite' }}
                />
            </div>

            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                    className="text-center mb-16"
                >
                    <motion.span 
                        className={`inline-block text-sm uppercase tracking-widest mb-4 font-medium transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "0px 0px -30px 0px" }}
                    >
                        What I Work With
                    </motion.span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
                        My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Tech Stack</span>
                    </h2>
                    <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        A comprehensive toolkit spanning full-stack development, AI/ML, and modern web technologies.
                    </p>
                </motion.div>

                {/* Skills Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: categoryIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                            className={`bg-gradient-to-br backdrop-blur-xl rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 ${
                                isDark 
                                  ? 'from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20' 
                                  : 'from-black/5 to-black/[0.02] border border-black/10 hover:border-black/20'
                            }`}
                        >
                            {/* Category Header */}
                            <div className="mb-6">
                                <h3 className={`text-xl font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>{category.title}</h3>
                            </div>
                            
                            {/* Skills Grid */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                        viewport={{ once: true, amount: 0.3, margin: "0px 0px -30px 0px" }}
                                        className="group relative flex items-center justify-center p-2 cursor-default"
                                    >
                                        {/* Tooltip */}
                                        <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none ${
                                            isDark ? 'bg-white text-black' : 'bg-black text-white'
                                        }`}>
                                            {skill.name}
                                        </span>
                                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 mt-12 text-sm"
                >
                    Always learning, always evolving — currently exploring Cloud Computing & DevOps
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Skills;
