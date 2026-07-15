import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`border-t py-10 ${isDark ? 'border-white/10 bg-neutral-950' : 'border-slate-200 bg-white'}`}>
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>Jeevanantham</p>
                    <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Frontend Developer and AI/Data Science student.</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                    <a className={isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'} href="https://github.com/jeevananthamp12" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className={isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'} href="https://linkedin.com/in/jeevananthamp12" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className={isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'} href="mailto:jeevanantham129787@gmail.com">Email</a>
                </div>

                <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Copyright {currentYear} Jeevanantham.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
