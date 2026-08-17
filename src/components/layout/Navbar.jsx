import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ToggleTheme from '../common/ToggleTheme';

const navLinks = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Blog', 'https://jeevananthamblog.vercel.app'],
    ['Experience', '#experience'],
    ['Certificates', '#certificates'],
    ['Contact', '#contact'],
];

const Navbar = () => {
    const { isDark } = useTheme();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
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
    }, [isHome]);

    const linkClasses = (id) => {
        const active = activeSection === id;
        if (active) return isDark ? 'bg-white/10 text-white font-bold' : 'bg-slate-100 text-slate-950 font-bold';
        return isDark ? 'text-slate-400 hover:text-white font-medium' : 'text-slate-600 hover:text-slate-950 font-medium';
    };

    const renderNavLink = ([label, href], isMobile = false) => {
        const isExternal = href.startsWith('http');
        const isRoute = !isExternal && href.startsWith('/');
        const id = isRoute ? 'blog' : isExternal ? 'blog' : href.slice(1);
        const linkPath = isHome ? href : (isRoute ? href : `/${href}`);

        if (isExternal) {
            return (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { setActiveSection(id); if (isMobile) setIsMobileMenuOpen(false); }}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition flex items-center gap-1 ${
                        isDark ? 'text-slate-400 hover:text-white font-medium' : 'text-slate-600 hover:text-slate-950 font-medium'
                    }`}
                >
                    {label}
                    <svg className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            );
        }

        if (isRoute) {
            return (
                <Link
                    key={href}
                    to={href}
                    onClick={() => { setActiveSection(id); if (isMobile) setIsMobileMenuOpen(false); }}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${isMobile ? '' : ''} ${
                        location.pathname === href || (href === '/blog' && location.pathname.startsWith('/blog'))
                            ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-slate-100 text-slate-950 font-bold'
                            : isDark ? 'text-slate-400 hover:text-white font-medium' : 'text-slate-600 hover:text-slate-950 font-medium'
                    }`}
                >
                    {label}
                </Link>
            );
        }

        return (
            <a
                key={href}
                href={linkPath}
                onClick={() => { setActiveSection(id); if (isMobile) setIsMobileMenuOpen(false); }}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${isMobile ? 'py-2.5' : ''} ${
                    isHome && activeSection === id
                        ? isDark ? 'bg-white/10 text-white font-bold' : 'bg-slate-100 text-slate-950 font-bold'
                        : isDark ? 'text-slate-400 hover:text-white font-medium' : 'text-slate-600 hover:text-slate-950 font-medium'
                }`}
            >
                {label}
            </a>
        );
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${
                isDark 
                    ? `border-white/10 ${isScrolled ? 'bg-neutral-950/90 shadow-lg shadow-black/50 backdrop-blur-xl' : 'bg-neutral-950/75 backdrop-blur-md'}` 
                    : `border-slate-200/80 ${isScrolled ? 'bg-white/90 shadow-md shadow-slate-200/50 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-md'}`
            }`}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
                <div className="flex items-center justify-between gap-4">
                    {/* Brand Name */}
                    <a href={isHome ? '#home' : '/'} className="text-base font-black tracking-tight transition hover:opacity-80" onClick={() => setActiveSection('home')}>
                        Jeevanantham
                    </a>

                    {/* Navigation Buttons */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => renderNavLink(link))}
                    </div>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2">
                        {/* Classic Hire Me Button */}
                        <a 
                            href={isHome ? '#contact' : '/#contact'} 
                            className={`hidden rounded-lg px-4 py-2 text-sm font-bold transition md:inline-flex ${
                                isDark 
                                    ? 'bg-indigo-500 text-white hover:bg-indigo-400' 
                                    : 'bg-slate-950 text-white hover:bg-slate-800'
                            }`}
                        >
                            Hire Me
                        </a>

                        {/* Theme Toggle Icon Button */}
                        <ToggleTheme animationType="diag-down-right" duration={350} className={isDark ? 'text-slate-300' : 'text-slate-700'} />
                        
                        {/* Mobile Hamburger Button */}
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

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className={`mt-3 border-t pt-3 lg:hidden ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                        >
                            <div className="grid gap-1 pb-2">
                                {navLinks.map((link) => renderNavLink(link, true))}
                                <a
                                    href={isHome ? '#contact' : '/#contact'}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white ${
                                        isDark ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-slate-950 hover:bg-slate-800'
                                    }`}
                                >
                                    Hire Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
