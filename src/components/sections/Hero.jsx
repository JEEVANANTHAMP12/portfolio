import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import GradientText from '../common/GradientText';

const Hero = () => {
    const { isDark } = useTheme();
    
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Theme-aware background */}
            <div className={`absolute inset-0 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`} />

            {/* Main content */}
            <motion.div 
                className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8"
                >
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-colors duration-300 ${
                        isDark 
                            ? 'border-white/10 bg-white/5 text-gray-400' 
                            : 'border-black/10 bg-black/5 text-gray-600'
                    }`}>
                        <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-green-400' : 'bg-green-600'}`}></span>
                        <span className="text-sm tracking-wider uppercase">Available for opportunities</span>
                    </span>
                </motion.div>

                {/* Main title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-6"
                >
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                    }`}>
                        JEEVANANTHAM
                    </h1>
                </motion.div>

                {/* Animated gradient subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                >
                    <GradientText className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight block" animationSpeed={2}>
                        Frontend Developer & AI Enthusiast
                    </GradientText>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-12"
                >
                    <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Crafting exceptional digital experiences through innovative web development 
                        and cutting-edge AI solutions. Building the future, one line of code at a time.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
                >
                    <motion.a 
                        href="#projects" 
                        className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-colors duration-300 ${
                            isDark 
                                ? 'bg-white text-black hover:bg-gray-200' 
                                : 'bg-black text-white hover:bg-gray-800'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                    <motion.a 
                        href="#contact" 
                        className={`px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-full font-semibold text-base sm:text-lg text-center transition-colors duration-300 ${
                            isDark
                                ? 'border-white/30 text-white hover:border-white/60'
                                : 'border-black/30 text-black hover:border-black/60'
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Let's Connect
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
