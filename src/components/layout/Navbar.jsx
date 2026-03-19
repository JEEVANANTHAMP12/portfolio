import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ToggleTheme from '../common/ToggleTheme';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
        let lastScrollTime = 0;
        const scrollThrottle = 100; // Only update active section every 100ms
        
        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScrollTime < scrollThrottle) return;
            lastScrollTime = now;
            
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 150;
            
            let current = 'home';
            let closestSection = null;
            let closestDistance = Infinity;
            
            for (const section of sections) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                // Check if current scroll position is within this section
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = sectionId;
                    break;
                }
                
                // Track closest section below current scroll position
                if (sectionTop >= scrollPosition) {
                    const distance = sectionTop - scrollPosition;
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = sectionId;
                    }
                }
            }
            
            // If no section contains current scroll position, use the last section we passed
            if (current === 'home' && !closestSection) {
                // We're at the bottom - find the last section
                const lastSection = sections[sections.length - 1];
                if (lastSection && scrollPosition >= lastSection.offsetTop) {
                    current = lastSection.getAttribute('id');
                }
            }
            
            setActiveSection(current);
        };

        // Check on mount
        handleScroll();
        
        // Add scroll listener with passive flag for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { href: "#home", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#projects", text: "Projects" },
        { href: "#experience", text: "Experience" },
        { href: "#contact", text: "Contact" }
    ];

    return (
        <motion.header 
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <nav className={`max-w-7xl mx-auto backdrop-blur-2xl rounded-2xl shadow-2xl transition-colors duration-300 ${
                isDark 
                    ? 'bg-white/5 border border-white/10 shadow-black/20' 
                    : 'bg-white/95 border border-black/10 shadow-black/10'
            }`}>
                <div className="px-4 md:px-6 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <motion.a 
                        href="#home"
                        className={`text-lg md:text-xl font-black tracking-tight z-50 transition-colors duration-300 ${
                            isDark ? 'text-gray-200' : 'text-black'
                        }`}
                        style={{ 
                            fontFamily: "'Orbitron', 'Space Grotesk', 'Inter', sans-serif",
                            letterSpacing: '-0.02em',
                            textShadow: isDark ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none'
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            textShadow: isDark ? '0 0 25px rgba(255, 255, 255, 0.5)' : 'none'
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        JEEVANANTHAM
                    </motion.a>

                    {/* Desktop Navigation Links - Hidden on mobile */}
                    <div className={`hidden lg:flex items-center gap-1 backdrop-blur-xl rounded-full px-2 py-2 border transition-colors duration-300 ${
                        isDark
                            ? 'bg-white/5 border-white/10'
                            : 'bg-white/5 border-black/10'
                    }`}>
                        {navLinks.map((item, index) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;
                            return (
                                <motion.a 
                                    key={index}
                                    href={item.href}
                                    onClick={() => setActiveSection(sectionId)}
                                    className="relative text-sm font-medium px-5 py-2 rounded-full transition-all"
                                    animate={{
                                        backgroundColor: isActive 
                                            ? (isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)')
                                            : 'rgba(0, 0, 0, 0)',
                                        color: isActive 
                                            ? (isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)')
                                            : (isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'),
                                        opacity: 1,
                                        y: 0
                                    }}
                                    whileHover={{
                                        color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                                    }}
                                    transition={{ 
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    initial={{ opacity: 0, y: -10 }}
                                    style={{ 
                                        transitionDelay: `${index * 0.05}s`,
                                        backdropFilter: isActive ? 'blur(12px)' : 'none'
                                    }}
                                >
                                    {item.text}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Desktop CTA Button & Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        {/* Resume Button - Hidden on mobile */}
                        <motion.a 
                            href="#resume" 
                            className={`hidden md:block px-4 lg:px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                isDark
                                    ? 'bg-white text-black'
                                    : 'bg-black text-white'
                            }`}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Resume
                        </motion.a>

                        {/* Theme Toggle Button */}
                        <ToggleTheme 
                            animationType="diag-down-right"
                            duration={400}
                            className="p-2.5 rounded-full transition-colors duration-300"
                        />

                        {/* Mobile Menu Button */}
                        <motion.button
                            className={`lg:hidden p-2 z-50 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`lg:hidden border-t transition-colors duration-300 overflow-hidden ${
                                isDark
                                    ? 'border-white/10'
                                    : 'border-black/10'
                            }`}
                        >
                            <div className="px-4 py-4 space-y-2">
                                {navLinks.map((item, index) => {
                                    const sectionId = item.href.substring(1);
                                    const isActive = activeSection === sectionId;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            onClick={() => handleLinkClick(sectionId)}
                                            className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                                                isActive 
                                                    ? (isDark ? 'bg-white/15 text-white' : 'bg-black/10 text-black')
                                                    : (isDark ? 'text-gray-400 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-black/5 hover:text-black')
                                            }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {item.text}
                                        </motion.a>
                                    );
                                })}
                                <motion.a
                                    href="#resume"
                                    className={`block px-4 py-3 mt-4 text-center font-semibold rounded-lg transition-colors duration-300 ${
                                        isDark
                                            ? 'bg-white text-black'
                                            : 'bg-black text-white'
                                    }`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                >
                                    Resume
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (navLinks.length + 1) * 0.05 }}
                                    className="w-full mt-2"
                                >
                                    <ToggleTheme 
                                        animationType="diag-down-right"
                                        duration={400}
                                        className={`w-full px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 border transition-colors duration-300 ${
                                            isDark
                                                ? 'bg-white/5 hover:bg-white/10 border-white/20 text-gray-300 hover:text-white'
                                                : 'bg-black/5 hover:bg-black/10 border-black/20 text-gray-700 hover:text-black'
                                        }`}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Navbar;
