import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { AnimatedText } from '../common/CountUp';
import { LaptopIcon, RocketIcon, SparklesIcon } from '../icons/AnimatedIcons';

const About = () => {
    const { isDark } = useTheme();
    const stats = [
        { value: "1+", label: "Years Experience", color: "blue" },
        { value: "6+", label: "Projects Completed", color: "green" },
        { value: "5+", label: "Technologies", color: "purple" },
        { value: "∞", label: "Learning Spirit", color: "pink" }
    ];

    return (
        <section id="about" className="min-h-screen py-16 md:py-20 lg:py-24 flex items-center relative overflow-hidden">
            {/* Background decoration - Theme aware */}
            <div className="absolute inset-0">
                {isDark ? (
                    <>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/5 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/5 to-transparent" />
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" style={{ animation: "blurPulse 7s ease-in-out infinite" }} />
                        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" style={{ animation: "blurPulse 9s ease-in-out infinite" }} />
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-300/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-300/10 to-transparent" />
                    </>
                )}
            </div>

            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
                    {/* Left Column - Title & Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                    >
                        <motion.span 
                            className={`inline-block text-sm uppercase tracking-widest mb-4 font-medium transition-colors duration-300 ${
                                isDark ? 'text-purple-400' : 'text-purple-600'
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        >
                            About Me
                        </motion.span>
                        
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-black'
                        }`}>
                            Crafting Digital
                            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                                Excellence
                            </span>
                        </h2>
                        
                        <p className={`text-xl leading-relaxed mb-8 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            I'm <span className={`font-semibold transition-colors duration-300 ${
                                isDark ? 'text-white' : 'text-black'
                            }`}>JEEVANANTHAM</span>, a passionate 
                            Frontend Developer & AI enthusiast dedicated to transforming complex challenges 
                            into elegant, scalable solutions.
                        </p>

                        <p className={`leading-relaxed mb-8 transition-colors duration-300 ${
                            isDark ? 'text-gray-500' : 'text-gray-700'
                        }`}>
                            With expertise in modern web technologies, machine learning, and scalable 
                            application architecture, I focus on delivering innovative solutions that 
                            drive real business value and exceptional user experiences.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={`text-center p-4 backdrop-blur-xl rounded-xl border transition-all duration-300 ${
                                        isDark 
                                            ? 'bg-white/5 border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10'
                                            : 'bg-black/5 border-black/10 hover:border-black/20 hover:shadow-lg hover:shadow-purple-500/10'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                                        isDark ? (
                                            stat.color === 'blue' ? 'text-blue-400' :
                                            stat.color === 'green' ? 'text-green-400' :
                                            stat.color === 'purple' ? 'text-purple-400' : 'text-pink-400'
                                        ) : (
                                            stat.color === 'blue' ? 'text-blue-600' :
                                            stat.color === 'green' ? 'text-green-600' :
                                            stat.color === 'purple' ? 'text-purple-600' : 'text-pink-600'
                                        )
                                    }`}>
                                        <AnimatedText text={stat.value} duration={2.5} />
                                    </div>
                                    <div className={`text-xs uppercase tracking-wider transition-colors duration-300 ${
                                        isDark ? 'text-gray-500' : 'text-gray-600'
                                    }`}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Feature Cards */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
                    >
                        {[
                            {
                                iconComponent: LaptopIcon,
                                title: "Technical Expertise",
                                description: "Proficient in Python, JavaScript, TypeScript, React, Node.js, and Flask. Specialized in building responsive web applications and implementing AI/ML solutions.",
                                color: "blue"
                            },
                            {
                                iconComponent: RocketIcon,
                                title: "Problem Solver",
                                description: "Passionate about tackling complex challenges with creative solutions. I believe every problem has an elegant solution waiting to be discovered.",
                                color: "green"
                            },
                            {
                                iconComponent: SparklesIcon,
                                title: "Vision & Goals",
                                description: "Committed to continuous learning and innovation. My goal is to contribute to open-source projects while developing cutting-edge solutions in AI and web development.",
                                color: "purple"
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                className={`group p-6 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
                                    isDark
                                        ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10'
                                        : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-black/10 hover:border-black/20 hover:shadow-xl hover:shadow-purple-500/10'
                                }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <card.iconComponent className={`w-8 h-8 transition-colors duration-300 ${
                                            isDark ? 'text-white' : 'text-black'
                                        }`} />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300 ${
                                            isDark ? 'text-white' : 'text-black'
                                        }`}>
                                            {card.title}
                                            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                                isDark ? (
                                                    card.color === 'blue' ? 'bg-blue-400' :
                                                    card.color === 'green' ? 'bg-green-400' : 'bg-purple-400'
                                                ) : (
                                                    card.color === 'blue' ? 'bg-blue-600' :
                                                    card.color === 'green' ? 'bg-green-600' : 'bg-purple-600'
                                                )
                                            }`}></span>
                                        </h3>
                                        <p className={`leading-relaxed transition-colors duration-300 ${
                                            isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>{card.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
