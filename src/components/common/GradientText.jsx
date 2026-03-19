import React from 'react';

const GradientText = ({ children, colors = null, animationSpeed = 1.5, className = "" }) => {
    const defaultColors = [
        '#ff006e',
        '#fb5607',
        '#ffbe0b',
        '#8338ec',
        '#3a86ff',
        '#ff006e'
    ];

    const colorArray = colors || defaultColors;
    const gradientString = colorArray.join(', ');

    return (
        <span
            className={`gradient-text ${className}`}
            style={{
                background: `linear-gradient(90deg, ${gradientString})`,
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: `gradientFlow ${animationSpeed}s ease infinite`,
                display: 'inline-block'
            }}
        >
            {children}
        </span>
    );
};

export default GradientText;
