import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    // Initialize theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            const isDarkMode = savedTheme === 'dark';
            setIsDark(isDarkMode);
            applyTheme(isDarkMode);
        } else {
            // Default to dark theme
            setIsDark(true);
            applyTheme(true);
        }
    }, []);

    const applyTheme = (isDarkMode) => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }
    };

    const toggleTheme = () => {
        setIsDark(prevState => {
            const newState = !prevState;
            localStorage.setItem('theme', newState ? 'dark' : 'light');
            applyTheme(newState);
            return newState;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
