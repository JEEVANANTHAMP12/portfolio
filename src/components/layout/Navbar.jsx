import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ToggleTheme from '../common/ToggleTheme';

const navLinks = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
];

const Navbar = () => {
    const { isDark } = useTheme();
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
            const sections = document.querySelectorAll('section[id]');
            const position = window.scrollY + 130;
            let current = 'home';

            sections.forEach((section) => {
                if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses = (id) => {
        const active = activeSection === id;
        if (active) return isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-950';
        return isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950';
    };

    return (
        <motion.header
            className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
            <nav className={`mx-auto max-w-7xl rounded-2xl border px-4 py-3 transition ${isDark ? 'border-white/10 bg-neutral-950/80 text-white' : 'border-slate-200 bg-white/85 text-slate-950'} ${isScrolled ? 'shadow-lg backdrop-blur-xl' : 'backdrop-blur'}`}>
                <div className="flex items-center justify-between gap-4">
                    <a href="#home" className="text-base font-black tracking-tight" onClick={() => setActiveSection('home')}>
                        Jeevanantham
                    </a>

                    <div className="hidden items-center gap-1 lg:flex">
                        {navLinks.map(([label, href]) => {
                            const id = href.slice(1);
                            return (
                                <a key={href} href={href} onClick={() => setActiveSection(id)} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${linkClasses(id)}`}>
                                    {label}
                                </a>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <a href="#contact" className={`hidden rounded-lg px-4 py-2 text-sm font-bold transition md:inline-flex ${isDark ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
                            Hire Me
                        </a>
                        <ToggleTheme animationType="diag-down-right" duration={350} className={isDark ? 'text-slate-300' : 'text-slate-700'} />
                        <button
                            type="button"
                            className={`rounded-lg p-2 lg:hidden ${isDark ? 'text-white hover:bg-white/10' : 'text-slate-950 hover:bg-slate-100'}`}
                            onClick={() => setIsMobileMenuOpen((open) => !open)}
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className={`mt-3 border-t pt-3 lg:hidden ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                        >
                            <div className="grid gap-1">
                                {navLinks.map(([label, href]) => {
                                    const id = href.slice(1);
                                    return (
                                        <a key={href} href={href} onClick={() => { setActiveSection(id); setIsMobileMenuOpen(false); }} className={`rounded-lg px-3 py-3 text-sm font-semibold ${linkClasses(id)}`}>
                                            {label}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Navbar;
