import React from 'react';
import { motion } from 'framer-motion';

// Book Icon
export const BookIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v10H6.5A2.5 2.5 0 0 1 4 9.5v-5A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Books Icon (Stack)
export const BooksIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v10H6.5A2.5 2.5 0 0 1 4 9.5v-5A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9.5c0-1.38 1.12-2.5 2.5-2.5H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Graduation Cap Icon
export const GraduationCapIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M22 10v6m0 0l-8.5 4.7a2 2 0 01-1 .3 2 2 0 01-1-.3L2 16m20-6l-8.5-4.7a2 2 0 00-3 0L2 10m0 0v6m0 0l8.5 4.7a2 2 0 001 .3 2 2 0 001-.3L22 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v6" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Rocket Icon
export const RocketIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M12 2l1.268 3.8a6 6 0 014.2 4.2L22 12l-3.531 1.768a6 6 0 01-4.2 4.2L12 22l-1.268-3.8a6 6 0 01-4.2-4.2L2 12l3.531-1.768a6 6 0 014.2-4.2L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={12} cy={12} r={3} strokeWidth={2} strokeLinecap="round" />
    </svg>
);

// Lightning Bolt Icon
export const LightningIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

// Gem Icon
export const GemIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M6 3h12l4 6-10 12-10-12 4-6z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.3" />
        <path d="M6 9h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 3v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Laptop Icon
export const LaptopIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
        <path d="M2 17h20" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20h12" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Code Icon
export const CodeIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <polyline points="16 18 22 12 16 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Zap/Energy Icon
export const ZapIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Sparkles Icon
export const SparklesIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

// Globe Icon
export const GlobeIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <circle cx={12} cy={12} r={10} strokeWidth={2} />
        <path d="M2 12h20" strokeWidth="2" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
    </svg>
);

// Coffee Cup Icon
export const CoffeeIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M12 2v20M9 15.5h6M3 6h18v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2zM18 6v10c0 3.314-1.343 4-7 4s-7-.686-7-4V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12a2 2 0 0 0 2-2 2 2 0 0 0-2-2" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// Target Icon
export const TargetIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <circle cx={12} cy={12} r={1} strokeWidth={2} />
        <circle cx={12} cy={12} r={5} strokeWidth={2} />
        <circle cx={12} cy={12} r={9} strokeWidth={2} />
    </svg>
);

// Lightbulb Icon
export const LightbulbIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M9 18.5c0 1.37 1.12 2.5 2.5 2.5h1c1.38 0 2.5-1.13 2.5-2.5" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 16V9a4 4 0 00-8 0v7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="21" width="6" height="1.5" rx="0.5" fill="currentColor" />
    </svg>
);

// Bug Icon
export const BugIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={className}
    >
        <path d="M12 6V2m0 20v-4M6 9H2m20 0h-4M7.07 7.07L4.22 4.22m13.71 13.71l2.85 2.85M7.07 16.93L4.22 19.78m13.71-13.71l2.85-2.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={12} cy={12} r={3} strokeWidth={2} />
    </svg>
);

// Moon Icon
export const MoonIcon = ({ className = "w-6 h-6" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export default {
    BookIcon,
    BooksIcon,
    GraduationCapIcon,
    RocketIcon,
    LightningIcon,
    GemIcon,
    LaptopIcon,
    CodeIcon,
    ZapIcon,
    SparklesIcon,
    GlobeIcon,
    CoffeeIcon,
    TargetIcon,
    LightbulbIcon,
    BugIcon,
    MoonIcon,
};
