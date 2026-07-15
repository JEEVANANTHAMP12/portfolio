import React, { lazy, Suspense } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ScrollToTop from './components/common/ScrollToTop';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

const SectionLoader = ({ isDark }) => (
    <div className={`flex min-h-72 items-center justify-center ${isDark ? 'bg-neutral-950' : 'bg-white'}`}>
        <div className="relative">
            <div className={`h-8 w-8 animate-spin rounded-full border-2 ${isDark ? 'border-white/10 border-t-cyan-400' : 'border-slate-200 border-t-cyan-600'}`} />
        </div>
    </div>
);

function AppContent() {
    const { isDark } = useTheme();

    return (
        <>
            <div className={`fixed inset-0 z-0 transition-colors duration-500 ${isDark ? 'bg-neutral-950' : 'bg-white'}`} />
            
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Suspense fallback={<SectionLoader isDark={isDark} />}>
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                </Suspense>
            </main>
            
            <ScrollToTop />
        </>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
