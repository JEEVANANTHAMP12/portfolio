import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const certificates = [
    {
        id: 1,
        title: 'Predictive Modeling Fundamentals I',
        issuer: 'Cognitive Class',
        platform: 'cognitiveclass.ai — Powered by IBM Developer Skills Network',
        provider: 'IBM Skills Network',
        category: 'Machine Learning',
        color: '#6366f1',
        description: 'A structured learning program covering key concepts in data analysis, statistical modeling, machine learning techniques, and predictive insights delivered by Cognitive Class in collaboration with IBM.',
        image: '/certificates/predictive_modeling.png',
        pdf: '/certificates/predictive_modeling.pdf',
    },
    {
        id: 2,
        title: 'Machine Learning with Python',
        issuer: 'Cognitive Class',
        platform: 'cognitiveclass.ai — Powered by IBM Developer Skills Network',
        provider: 'IBM Skills Network',
        category: 'Artificial Intelligence',
        color: '#8b5cf6',
        description: 'A comprehensive professional development course covering supervised and unsupervised learning algorithms, regression, classification, and practical Python machine learning workflows.',
        image: '/certificates/machine_learning.png',
        pdf: '/certificates/machine_learning.pdf',
    },
    {
        id: 3,
        title: 'Data Science Foundations',
        issuer: 'IBM Skills Network',
        platform: 'cognitiveclass.ai — Powered by IBM Developer Skills Network',
        provider: 'IBM Skills Network',
        category: 'Data Science',
        color: '#06b6d4',
        description: 'Official certificate of completion covering data science methodology, data manipulation with Pandas & NumPy, data visualization, and SQL database fundamentals for data science.',
        image: '/certificates/data_science.png',
        pdf: '/certificates/data_science.pdf',
    },
];

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 280 : -280,
        opacity: 0,
        scale: 0.98,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: (direction) => ({
        x: direction < 0 ? 280 : -280,
        opacity: 0,
        scale: 0.98,
        transition: {
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const Certificates = () => {
    const { isDark } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [selectedCertIndex, setSelectedCertIndex] = useState(null);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const activeCert = certificates[currentIndex];

    const nextCert = (e) => {
        if (e) e.stopPropagation();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevCert = (e) => {
        if (e) e.stopPropagation();
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (showInfoModal) {
                if (e.key === 'Escape') setShowInfoModal(false);
                return;
            }
            if (selectedCertIndex !== null) {
                if (e.key === 'Escape') setSelectedCertIndex(null);
                if (e.key === 'ArrowRight') {
                    setSelectedCertIndex((prev) => (prev + 1) % certificates.length);
                }
                if (e.key === 'ArrowLeft') {
                    setSelectedCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
                }
            } else {
                if (e.key === 'ArrowRight') nextCert();
                if (e.key === 'ArrowLeft') prevCert();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedCertIndex, showInfoModal, currentIndex]);

    return (
        <section id="certificates" className={`relative py-20 md:py-28 overflow-hidden ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`}>
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-8"
                >
                    <p className={`section-eyebrow ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Certificates</p>
                    <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        Verified Learning & Credentials
                    </h2>
                    <p className={`mt-3 text-base sm:text-lg leading-7 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Official certificates earned through structured online programs. Click the image to view full PDF document.
                    </p>
                </motion.div>

                {/* SINGLE CERTIFICATE CONTAINER BOX — NO PITCH BLACK BARS */}
                <div className="relative w-full mx-auto max-w-4xl">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={activeCert.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            onClick={() => setSelectedCertIndex(currentIndex)}
                            className={`group relative w-full aspect-[1.414/1] cursor-pointer overflow-hidden rounded-3xl border transition-all duration-300 shadow-2xl flex items-center justify-center p-3 sm:p-5 md:p-6 ${
                                isDark
                                    ? 'bg-neutral-900/90 border-white/15 hover:border-indigo-500/50 hover:shadow-indigo-500/10'
                                    : 'bg-white border-slate-200/90 hover:border-indigo-400 shadow-xl'
                            }`}
                        >
                            {/* Certificate Image Frame — Uncropped & Filling Box Cleanly */}
                            <img
                                src={activeCert.image}
                                alt={activeCert.title}
                                className="w-full h-full object-contain rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-[1.008]"
                                loading="eager"
                                style={{ imageRendering: 'high-quality' }}
                            />

                            {/* TOP RIGHT BUTTONS: INFORMATION ICON & OPEN PDF */}
                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2.5 z-20">
                                {/* Info Icon Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowInfoModal(true);
                                    }}
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl border transition backdrop-blur-md shadow-xl ${
                                        isDark
                                            ? 'bg-neutral-900/85 text-white border-white/20 hover:bg-indigo-600'
                                            : 'bg-white/90 text-slate-800 border-slate-300 hover:bg-indigo-600 hover:text-white'
                                    }`}
                                    title="Certificate Information"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>

                                {/* Open PDF Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedCertIndex(currentIndex);
                                    }}
                                    className={`flex items-center gap-2 h-10 px-3.5 rounded-xl border transition backdrop-blur-md shadow-xl text-xs font-bold ${
                                        isDark
                                            ? 'bg-neutral-900/85 text-white border-white/20 hover:bg-indigo-600'
                                            : 'bg-white/90 text-slate-800 border-slate-300 hover:bg-indigo-600 hover:text-white'
                                    }`}
                                    title="Open Full PDF Viewer"
                                >
                                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <span>Open PDF</span>
                                </button>
                            </div>

                            {/* Floating Previous Button */}
                            <button
                                onClick={prevCert}
                                aria-label="Previous Certificate"
                                className={`absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition backdrop-blur-md shadow-xl hover:scale-105 active:scale-95 ${
                                    isDark
                                        ? 'bg-neutral-900/85 text-white border-white/20 hover:bg-indigo-600'
                                        : 'bg-white/90 text-slate-800 border-slate-300 hover:bg-indigo-600 hover:text-white'
                                }`}
                                title="Previous Certificate"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Floating Next Button */}
                            <button
                                onClick={nextCert}
                                aria-label="Next Certificate"
                                className={`absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition backdrop-blur-md shadow-xl hover:scale-105 active:scale-95 ${
                                    isDark
                                        ? 'bg-neutral-900/85 text-white border-white/20 hover:bg-indigo-600'
                                        : 'bg-white/90 text-slate-800 border-slate-300 hover:bg-indigo-600 hover:text-white'
                                }`}
                                title="Next Certificate"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-2 mt-6">
                    {certificates.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`h-3 transition-all duration-300 rounded-full ${
                                currentIndex === i
                                    ? 'w-9 bg-indigo-500'
                                    : `w-3 ${isDark ? 'bg-white/20 hover:bg-white/40' : 'bg-slate-300 hover:bg-slate-400'}`
                            }`}
                            aria-label={`Go to certificate ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* INFORMATION MODAL (Triggered by Information Icon) */}
            <AnimatePresence>
                {showInfoModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
                        onClick={() => setShowInfoModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 10 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative w-full max-w-xl rounded-3xl border p-6 sm:p-8 shadow-2xl will-change-transform ${
                                isDark
                                    ? 'bg-neutral-900 border-white/15 text-white'
                                    : 'bg-white border-slate-200 text-slate-900'
                            }`}
                        >
                            {/* Modal Close Button */}
                            <button
                                onClick={() => setShowInfoModal(false)}
                                className={`absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl transition ${
                                    isDark
                                        ? 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950'
                                }`}
                                title="Close Information"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Info Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="h-3.5 w-3.5 rounded-full shrink-0"
                                    style={{ backgroundColor: activeCert.color }}
                                />
                                <span
                                    className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                                    style={{ background: `${activeCert.color}18`, color: activeCert.color }}
                                >
                                    {activeCert.category}
                                </span>
                                <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                    Certificate {currentIndex + 1} of {certificates.length}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black leading-snug mb-4">
                                {activeCert.title}
                            </h3>

                            {/* Details List */}
                            <div className={`space-y-3 border-t border-b py-4 mb-6 text-sm ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                <div className="flex items-center justify-between gap-4">
                                    <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Issuer</span>
                                    <span className="font-bold">{activeCert.issuer}</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Provider</span>
                                    <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{activeCert.provider}</span>
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                    <span className={`font-semibold shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Platform</span>
                                    <span className={`text-right text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{activeCert.platform}</span>
                                </div>
                                <div className={`pt-2 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                                    <span className={`block font-semibold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Program Summary</span>
                                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {activeCert.description}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-end gap-3">
                                <button
                                    onClick={() => setShowInfoModal(false)}
                                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                                        isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                                    }`}
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => {
                                        setShowInfoModal(false);
                                        setSelectedCertIndex(currentIndex);
                                    }}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition shadow-md"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <span>View PDF Document</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FULLSCREEN PDF VIEWER MODAL */}
            <AnimatePresence>
                {selectedCertIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-5"
                        onClick={() => setSelectedCertIndex(null)}
                    >
                        {/* Modal Box */}
                        <div
                            className="relative flex flex-col w-full h-full max-w-6xl max-h-[96vh] justify-between pointer-events-auto will-change-transform"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* PDF Viewer Header Toolbar */}
                            <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-neutral-900/90 border border-white/10 backdrop-blur-md mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm sm:text-base leading-tight truncate max-w-[200px] sm:max-w-md">
                                            {certificates[selectedCertIndex].title}.pdf
                                        </h3>
                                        <p className="text-slate-400 text-xs mt-0.5">
                                            Official PDF Viewer ({selectedCertIndex + 1} of {certificates.length})
                                        </p>
                                    </div>
                                </div>

                                {/* PDF Toolbar Actions */}
                                <div className="flex items-center gap-2">
                                    {/* Open PDF in New Tab */}
                                    <a
                                        href={certificates[selectedCertIndex].pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-md"
                                    >
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span className="hidden sm:inline">Open PDF in New Tab</span>
                                    </a>

                                    {/* Download PDF */}
                                    <a
                                        href={certificates[selectedCertIndex].pdf}
                                        download
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
                                        title="Download PDF File"
                                    >
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        <span className="hidden sm:inline">Download</span>
                                    </a>

                                    {/* Close Modal */}
                                    <button
                                        onClick={() => setSelectedCertIndex(null)}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition ml-1"
                                        title="Close PDF Viewer (Esc)"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Embedded PDF Viewer Window */}
                            <div className="relative flex-1 overflow-hidden rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center p-0">
                                <object
                                    data={`${certificates[selectedCertIndex].pdf}#view=FitH`}
                                    type="application/pdf"
                                    className="w-full h-full rounded-2xl border-0"
                                >
                                    <img
                                        src={certificates[selectedCertIndex].image}
                                        alt={certificates[selectedCertIndex].title}
                                        className="max-h-full max-w-full object-contain rounded-2xl"
                                    />
                                </object>

                                {/* PDF Navigation Arrows */}
                                <button
                                    onClick={() => setSelectedCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white border border-white/20 hover:bg-indigo-600 transition backdrop-blur-md"
                                    title="Previous Certificate PDF"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => setSelectedCertIndex((prev) => (prev + 1) % certificates.length)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white border border-white/20 hover:bg-indigo-600 transition backdrop-blur-md"
                                    title="Next Certificate PDF"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
