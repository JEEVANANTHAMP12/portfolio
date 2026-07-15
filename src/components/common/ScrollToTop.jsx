import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ScrollToTop = () => {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setIsVisible(window.scrollY > 600);
                ticking = false;
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-xl border shadow-lg transition md:bottom-8 md:right-8 ${
                        isDark
                            ? 'border-white/10 bg-neutral-900/90 text-white hover:bg-neutral-800'
                            : 'border-slate-200 bg-white/95 text-slate-950 hover:bg-slate-100'
                    }`}
                    whileTap={{ scale: 0.96 }}
                    aria-label="Scroll to top"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
