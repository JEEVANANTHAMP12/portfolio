import React, { memo, useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const FORMSPREE_FORM_ID = 'xreyjozd';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false,
};

const contactLinks = [
    ['Email', 'jeevanantham129787@gmail.com', 'mailto:jeevanantham129787@gmail.com'],
    ['GitHub', 'github.com/jeevananthamp12', 'https://github.com/jeevananthamp12'],
    ['LinkedIn', 'linkedin.com/in/jeevananthamp12', 'https://linkedin.com/in/jeevananthamp12'],
];

const Contact = () => {
    const { isDark } = useTheme();
    const formRef = useRef(null);
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showPolicy, setShowPolicy] = useState(false);

    const handleChange = useCallback((event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }, []);

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const payload = new FormData();
            payload.append('firstName', formData.firstName);
            payload.append('lastName', formData.lastName);
            payload.append('email', formData.email);
            payload.append('phone', formData.phone || 'Not provided');
            payload.append('message', formData.message);

            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                body: payload,
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) throw new Error(`Failed to send: ${response.status}`);
            setSubmitStatus('success');
            setFormData(initialFormData);
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }, [formData]);

    React.useEffect(() => {
        if (!showPolicy) return;
        if (window.__lenis) window.__lenis.stop();
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        const handleEscape = (e) => { if (e.key === 'Escape') setShowPolicy(false); };
        window.addEventListener('keydown', handleEscape);
        return () => {
            if (window.__lenis) window.__lenis.start();
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [showPolicy]);

    const inputClasses = `w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/10 ${
        isDark ? 'border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500' : 'border-slate-200 bg-white text-slate-950 placeholder:text-slate-400'
    }`;

    return (
        <section id="contact" className={`relative py-24 md:py-32 ${isDark ? 'bg-neutral-950' : 'bg-slate-50'}`}>
            <motion.div
                className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div>
                    <p className={`section-eyebrow ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Contact</p>
                    <h2 className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        Let us discuss a project or opportunity.
                    </h2>
                    <p className={`mt-5 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        Send a message with the project context, timeline, or role details. I will respond as soon as possible.
                    </p>

                    <div className="mt-8 space-y-3">
                        {contactLinks.map(([label, value, href]) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                className={`block rounded-xl border p-4 transition ${isDark ? 'border-white/10 bg-white/[0.04] hover:border-indigo-400/40' : 'border-slate-200 bg-white shadow-sm hover:border-indigo-500'}`}
                            >
                                <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{label}</p>
                                <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{value}</p>
                            </a>
                        ))}
                    </div>
                </div>

                <div className={`rounded-2xl border p-6 sm:p-8 ${isDark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white shadow-sm'}`}>
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>Send a Message</h3>
                    <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>All fields marked with an asterisk are required.</p>

                    <AnimatePresence mode="wait">
                        {submitStatus === 'success' && (
                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-5 rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-400">
                                Message sent successfully. I will get back to you soon.
                            </motion.div>
                        )}
                        {submitStatus === 'error' && (
                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-5 rounded-lg border border-red-500/25 bg-red-500/10 p-4 text-sm font-medium text-red-400">
                                Something went wrong. Please try again or email me directly.
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <label className={`block text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                                First name *
                                <input className={`${inputClasses} mt-2`} type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </label>
                            <label className={`block text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                                Last name *
                                <input className={`${inputClasses} mt-2`} type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </label>
                        </div>

                        <label className={`block text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                            Email *
                            <input className={`${inputClasses} mt-2`} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                        </label>

                        <label className={`block text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                            Phone
                            <input className={`${inputClasses} mt-2`} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                        </label>

                        <label className={`block text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                            Message *
                            <textarea className={`${inputClasses} mt-2 min-h-36 resize-y`} name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about the project or opportunity." required />
                        </label>

                        <label className={`flex items-start gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <input className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-500" type="checkbox" name="agreeToPolicy" checked={formData.agreeToPolicy} onChange={handleChange} required />
                            <span>
                                I agree to the{' '}
                                <button type="button" onClick={() => setShowPolicy(true)} className={`font-semibold underline ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                    privacy policy
                                </button>
                                .
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.agreeToPolicy}
                            className="flex w-full items-center justify-center rounded-lg bg-indigo-500 px-6 py-3 text-sm font-black text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </motion.div>

            <AnimatePresence>
                {showPolicy && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowPolicy(false)}>
                        <motion.div
                            className={`w-full max-w-lg rounded-2xl border p-6 shadow-2xl ${isDark ? 'border-white/10 bg-neutral-950 text-slate-300' : 'border-slate-200 bg-white text-slate-700'}`}
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h2 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>Privacy Policy</h2>
                                <button onClick={() => setShowPolicy(false)} className={`rounded-lg px-3 py-1 text-sm font-bold ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}`}>Close</button>
                            </div>
                            <p className="mt-4 text-sm leading-6">Your contact details are used only to respond to your inquiry. They are not sold, shared, or added to a mailing list.</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default memo(Contact);
