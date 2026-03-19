'use client';
import React from 'react';
import Navbar from './src/components/layout/Navbar';
import Hero from './src/components/sections/Hero';
import About from './src/components/sections/About';
import Skills from './src/components/sections/Skills';
import Projects from './src/components/sections/Projects';
import Contact from './src/components/sections/Contact';
import Footer from './src/components/layout/Footer';
import './app/globals.css';

export default function App() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
