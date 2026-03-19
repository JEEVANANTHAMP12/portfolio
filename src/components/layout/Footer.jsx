import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    return (
        <footer className={`pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 relative overflow-hidden transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-black to-neutral-950'
              : 'bg-gradient-to-b from-white to-gray-50'
        }`}>
            {/* Multi-layer Background Decoration with Synced Animations */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Main gradient orbs - large pulsing effects */}
                <motion.div 
                    className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.1, 0.15]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                
                {/* Additional accent orbs for depth */}
                <motion.div 
                    className="absolute top-1/2 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 20, -20, 0],
                        opacity: [0.05, 0.1, 0.05, 0.05]
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -20, 20, 0],
                        opacity: [0.05, 0.1, 0.05, 0.05]
                    }}
                    transition={{
                        duration: 13,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
                
                    {/* Gradient mesh overlay */}
                <div className={`absolute inset-0 ${
                    isDark
                      ? 'bg-gradient-to-b from-transparent via-black/5 to-black/20'
                      : 'bg-gradient-to-b from-transparent via-white/5 to-white/20'
                }`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                {/* Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Brand Section */}
                    <div>
                        <motion.h3 
                            className={`text-3xl font-black mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}
                            whileHover={{ scale: 1.02 }}
                        >
                            JEEVANANTHAM
                        </motion.h3>
                        <p className={`mb-6 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Frontend Developer & AI Enthusiast crafting exceptional digital experiences through innovative solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <motion.a 
                                href="https://github.com/jeevananthamp12" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    isDark
                                      ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                                      : 'bg-black/5 border border-black/10 text-gray-600 hover:text-black hover:bg-black/10 hover:border-black/20'
                                }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </motion.a>
                            <motion.a 
                                href="https://linkedin.com/in/jeevanantham12-p" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    isDark
                                      ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                                      : 'bg-black/5 border border-black/10 text-gray-600 hover:text-black hover:bg-black/10 hover:border-black/20'
                                }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </motion.a>
                            <motion.a 
                                href="mailto:jeevanantham129787@gmail.com" 
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    isDark
                                      ? 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                                      : 'bg-black/5 border border-black/10 text-gray-600 hover:text-black hover:bg-black/10 hover:border-black/20'
                                }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Contact Info - Right Side */}
                    <div className={`text-right transition-colors duration-300 ${isDark ? '' : ''}`}>
                        <h4 className={`font-semibold mb-6 text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className={`flex items-center justify-end gap-3 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                <span className="text-sm">jeevanantham129787@gmail.com</span>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    isDark
                                      ? 'bg-purple-500/10'
                                      : 'bg-purple-300/10'
                                }`}>
                                    <svg className={`w-4 h-4 ${
                                        isDark ? 'text-purple-400' : 'text-purple-600'
                                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </li>
                            <li className={`flex items-center justify-end gap-3 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                <span className="text-sm">India</span>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                    isDark
                                      ? 'bg-blue-500/10'
                                      : 'bg-blue-300/10'
                                }`}>
                                    <svg className={`w-4 h-4 ${
                                        isDark ? 'text-blue-400' : 'text-blue-600'
                                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </li>
                        </ul>

                        {/* Status */}
                        <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                            isDark
                              ? 'bg-green-500/10 border-green-500/20'
                              : 'bg-green-300/10 border-green-300/20'
                        }`}>
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                                isDark ? 'text-green-400' : 'text-green-600'
                            }`}>Available for work</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r to-transparent mb-8 ${isDark ? 'from-transparent via-white/10' : 'from-transparent via-black/10'}`}></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                        &copy; 2026 JEEVANANTHAM P. All rights reserved.
                    </p>
                    <p className={`text-sm flex items-center gap-1 transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                        Built with <span className="text-red-400 animate-pulse">❤</span> using React & TailwindCSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
