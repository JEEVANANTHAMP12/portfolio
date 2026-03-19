// @ts-nocheck
import React, { memo, useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * CountUp Component - Animates numbers from 0 to target value
 * @param {number} value - Target number to count to
 * @param {number} duration - Animation duration in seconds (default: 2)
 * @param {string} suffix - Text to append after the number (e.g., "+", "%")
 * @param {string} prefix - Text to prepend before the number (e.g., "$")
 * @param {number} decimals - Number of decimal places (default: 0)
 */
const CountUp = memo(function CountUp({ 
    value, 
    duration = 2.5, 
    suffix = "", 
    prefix = "",
    decimals = 0 
}) {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "0px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !isInView) return;

        // Set initial value
        node.textContent = prefix + "0" + suffix;
        
        const controls = animate(0, value, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
                if (node) {
                    const formatted = decimals > 0 
                        ? latest.toFixed(decimals) 
                        : Math.round(latest).toString();
                    node.textContent = prefix + formatted + suffix;
                }
            }
        });

        return () => controls.stop();
    }, [value, duration, isInView, suffix, prefix, decimals]);

    return <span ref={nodeRef}>{prefix}0{suffix}</span>;
});

/**
 * AnimatedText Component - Parses and animates numbers within text strings
 * Examples: "2024 - Present", "10+", "$1,000", "5+"
 * @param {Object} props
 * @param {string} props.text - Text containing numbers to animate
 * @param {number} [props.duration=2.5] - Animation duration (default: 2.5)
 */
const AnimatedTextComponent = function ({ text, duration = 2.5 }) {
    if (!text || typeof text !== 'string') {
        return <span>{text}</span>;
    }

    // Split by numbers with optional prefix ($) and suffix (+, %, K, M, B)
    // This regex captures: optional $, digits with optional commas, optional decimal, optional suffix
    const parts = text.split(/(\$?\d+(?:,\d{3})*(?:\.\d+)?[+%KMB]?)/);
    
    return (
        <>
            {parts.map((part, idx) => {
                if (!part) return null;
                
                // Match pattern: optional prefix, number (with commas), optional decimals, optional suffix
                const match = part.match(/^(\$?)(\d+(?:,\d{3})*)(?:\.(\d+))?([+%KMB]?)$/);
                
                if (match) {
                    const [, prefix, intPart, decPart, suffix] = match;
                    const numValue = parseFloat(intPart.replace(/,/g, '') + (decPart ? '.' + decPart : ''));
                    const decimals = decPart ? decPart.length : 0;
                    
                    if (!isNaN(numValue) && numValue < 10000) {
                        return (
                            <CountUp 
                                key={idx} 
                                value={numValue} 
                                duration={duration}
                                prefix={prefix}
                                suffix={suffix}
                                decimals={decimals}
                            />
                        );
                    }
                }
                
                return <span key={idx}>{part}</span>;
            })}
        </>
    );
};

export const AnimatedText = memo(AnimatedTextComponent);

/**
 * AnimatedYear Component - Specifically for year ranges like "2024 - Present"
 * @param {string} year - Year string to animate
 * @param {number} duration - Animation duration (default: 1.5)
 */
export const AnimatedYear = memo(function AnimatedYear({ year, duration = 2 }) {
    if (!year || typeof year !== 'string') {
        return <span>{year}</span>;
    }

    // Split by 4-digit years while keeping them in the array
    const parts = year.split(/(\d{4})/);
    
    return (
        <>
            {parts.map((part, idx) => {
                // Check if this part is a 4-digit year
                const num = parseInt(part, 10);
                if (part.length === 4 && !isNaN(num) && num >= 1900 && num <= 2100) {
                    return <CountUp key={idx} value={num} duration={duration} decimals={0} />;
                }
                return <span key={idx}>{part}</span>;
            })}
        </>
    );
});

export default CountUp;
