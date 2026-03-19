'use client';
import './globals.css';

export const metadata = {
    title: 'Portfolio - JEEVANANTHAM',
    description: 'A modern React portfolio showcasing projects and skills',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-black text-white">
                {children}
            </body>
        </html>
    );
}
