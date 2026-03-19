'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from '../../context/ThemeContext';

export const ToggleTheme = ({
    className = '',
    duration = 400,
    animationType = 'diag-down-right',
    ...props
}) => {
    const { isDark, toggleTheme: contextToggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return;

        // Start view transition
        if (!document.startViewTransition) {
            // Fallback for browsers that don't support View Transitions
            contextToggleTheme();
            return;
        }

        await document.startViewTransition(() => {
            flushSync(() => {
                contextToggleTheme();
            });
        }).ready;

        // Calculate animation parameters
        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Handle different animation types
        switch (animationType) {
            case 'circle-spread':
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${maxRadius}px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration,
                        easing: 'ease-in-out',
                        pseudoElement: '::view-transition-new(root)',
                    }
                );
                break;

            case 'diag-down-right':
                document.documentElement.animate(
                    {
                        clipPath: [
                            `polygon(0 0, 0 0, 0 0, 0 0)`,
                            `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                        ],
                    },
                    {
                        duration: duration * 1.2,
                        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        pseudoElement: '::view-transition-new(root)',
                    }
                );
                break;

            case 'swipe-left':
                document.documentElement.animate(
                    {
                        clipPath: [
                            `inset(0 0 0 ${viewportWidth}px)`,
                            `inset(0 0 0 0)`,
                        ],
                    },
                    {
                        duration,
                        easing: 'cubic-bezier(0.2, 0, 0, 1)',
                        pseudoElement: '::view-transition-new(root)',
                    }
                );
                break;

            case 'fade-in-out':
                document.documentElement.animate(
                    {
                        opacity: [0, 1],
                    },
                    {
                        duration: duration * 0.5,
                        easing: 'ease-in-out',
                        pseudoElement: '::view-transition-new(root)',
                    }
                );
                break;

            case 'none':
            default:
                break;
        }
    }, [isDark, duration, animationType, contextToggleTheme]);

    if (!mounted) return null;

    return (
        <>
            <button
                ref={buttonRef}
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                    isDark ? 'hover:text-amber-400' : 'hover:text-blue-500'
                } ${className}`}
                aria-label="Toggle theme"
                {...props}
            >
                {isDark ? (
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </button>

            {animationType !== 'none' && (
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            ::view-transition-old(root),
                            ::view-transition-new(root) {
                                animation: none;
                                mix-blend-mode: normal;
                            }
                        `,
                    }}
                />
            )}
        </>
    );
};

export default ToggleTheme;
