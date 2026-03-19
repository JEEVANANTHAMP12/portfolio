import React, { lazy, Suspense } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

// Lazy load non-critical sections
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));  
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

// Lightweight loading fallback
const SectionLoader = ({ isDark }) => (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'} flex items-center justify-center`}>
        <div className={`w-6 h-6 border-2 ${isDark ? 'border-white/30 border-t-white' : 'border-black/30 border-t-black'} rounded-full animate-spin`}></div>
    </div>
);

function AppContent() {
    const { isDark } = useTheme();
    
    return (
        <>
            {/* Theme-aware background */}
            <div className={`fixed inset-0 z-0 ${isDark ? 'bg-black' : 'bg-white'}`} />

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
