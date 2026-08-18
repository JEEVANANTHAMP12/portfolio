import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { getAIResponse, getGreeting } from '../../data/chatKnowledge';

const quickSuggestions = [
    'What projects has he built?',
    'What technologies does he use?',
    'Tell me about his education',
    'How can I contact him?',
];

const ChatAssistant = () => {
    const { isDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ id: 1, text: getGreeting(), sender: 'bot' }]);
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    const handleSend = (text) => {
        const msg = text || input.trim();
        if (!msg) return;

        const userMsg = { id: Date.now(), text: msg, sender: 'user' };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getAIResponse(msg);
            setMessages((prev) => [...prev, { id: Date.now(), text: response, sender: 'bot' }]);
            setIsTyping(false);
        }, 600 + Math.random() * 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors ${
                    isDark
                        ? 'bg-indigo-500 text-white shadow-indigo-500/30 hover:bg-indigo-400'
                        : 'bg-slate-900 text-white shadow-slate-900/30 hover:bg-slate-800'
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Toggle chat assistant"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        className={`fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border shadow-2xl ${
                            isDark
                                ? 'border-white/10 bg-neutral-900 shadow-black/50'
                                : 'border-slate-200 bg-white shadow-slate-200/50'
                        }`}
                        style={{ height: 'min(520px, calc(100vh - 8rem))' }}
                    >
                        {/* Header */}
                        <div
                            className={`flex items-center gap-3 px-5 py-4 ${
                                isDark
                                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-b border-white/10'
                                    : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-slate-200'
                            }`}
                        >
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-bold">
                                JA
                                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-emerald-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Jeevanantham's Assistant
                                </h3>
                                <p className="text-[11px] font-medium text-emerald-500">Online</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`rounded-lg p-1.5 transition ${isDark ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                                            msg.sender === 'user'
                                                ? isDark
                                                    ? 'bg-indigo-500 text-white rounded-br-md'
                                                    : 'bg-indigo-600 text-white rounded-br-md'
                                                : isDark
                                                    ? 'bg-white/10 text-slate-200 rounded-bl-md'
                                                    : 'bg-slate-100 text-slate-700 rounded-bl-md'
                                        }`}
                                        dangerouslySetInnerHTML={{
                                            __html: msg.text
                                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                .replace(/\n/g, '<br/>'),
                                        }}
                                    />
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className={`rounded-2xl rounded-bl-md px-4 py-3 ${isDark ? 'bg-white/10' : 'bg-slate-100'}`}>
                                        <div className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`h-2 w-2 rounded-full ${isDark ? 'bg-slate-400' : 'bg-slate-400'}`}
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestions */}
                        {messages.length <= 1 && (
                            <div className={`flex flex-wrap gap-1.5 px-4 pb-3 ${isDark ? '' : ''}`}>
                                {quickSuggestions.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => handleSend(s)}
                                        className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition hover:scale-[1.02] ${
                                            isDark
                                                ? 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10'
                                                : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className={`border-t px-4 py-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                            <div className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${
                                isDark
                                    ? 'border-white/10 bg-white/5 focus-within:border-indigo-500/50'
                                    : 'border-slate-200 bg-slate-50 focus-within:border-indigo-500/50'
                            }`}>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask me anything..."
                                    className={`flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500 ${
                                        isDark ? 'text-white' : 'text-slate-900'
                                    }`}
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim()}
                                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                                        input.trim()
                                            ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                                            : isDark
                                                ? 'bg-white/10 text-slate-500'
                                                : 'bg-slate-200 text-slate-400'
                                    }`}
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatAssistant;
