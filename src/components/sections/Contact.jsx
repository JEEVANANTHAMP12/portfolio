import React, { useState, useRef, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ZapIcon, BooksIcon, SparklesIcon, GlobeIcon, CoffeeIcon, TargetIcon, LightbulbIcon, BugIcon, MoonIcon } from '../icons/AnimatedIcons';

// Memoized Social Icons
const GithubIcon = memo(() => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
));
GithubIcon.displayName = 'GithubIcon';

const LinkedinIcon = memo(() => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
));
LinkedinIcon.displayName = 'LinkedinIcon';

const EmailIcon = memo(() => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
));
EmailIcon.displayName = 'EmailIcon';

const TwitterIcon = memo(() => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
));
TwitterIcon.displayName = 'TwitterIcon';

const DiscordIcon = memo(() => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
));
DiscordIcon.displayName = 'DiscordIcon';

const WhatsAppIcon = memo(() => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
));
WhatsAppIcon.displayName = 'WhatsAppIcon';

const InstagramIcon = memo(() => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
));
InstagramIcon.displayName = 'InstagramIcon';

// Formspree Configuration - Get your Form ID from https://formspree.io/
const FORMSPREE_FORM_ID = 'xreyjozd';  // Your Formspree Form ID

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false
};

const Contact = () => {
    const { isDark } = useTheme();
    const formRef = useRef(null);
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showPolicy, setShowPolicy] = useState(false);

    // No initialization needed for Formspree

    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            console.log('Submitting form via Formspree...');
            
            // Prepare form data
            const formDataToSend = new FormData();
            formDataToSend.append('firstName', formData.firstName);
            formDataToSend.append('lastName', formData.lastName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone || 'Not provided');
            formDataToSend.append('message', formData.message);

            // Send to Formspree
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to send. Status: ${response.status}`);
            }
            
            console.log('✓ Message sent successfully!');
            setSubmitStatus('success');
            setFormData(initialFormData);
        } catch (error) {
            console.error('Submission Error:', error.message);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }, [formData]);

    return (
        <section id="contact" className="min-h-screen py-16 md:py-20 lg:py-24 relative overflow-hidden flex items-center">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" style={{ animation: "blurPulse 7s ease-in-out infinite" }} />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" style={{ animation: "blurPulse 9s ease-in-out infinite" }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className={`inline-block text-sm uppercase tracking-widest mb-4 font-medium transition-colors duration-300 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                        Let's Connect
                    </span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                    }`}>
                        Ready to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">Collaborate?</span>
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-6 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Got an exciting project in mind? Need a developer who knows their way around code (and coffee)? 
                        Drop me a message and let's make something awesome! 💻✨
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-2xl">📧</span>
                            <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Usually responds in</span>
                            <span className={`font-bold transition-colors duration-300 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>24 hours</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <SparklesIcon className="w-6 h-6 text-yellow-400" />
                            <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Response rate</span>
                            <span className="text-green-400 font-bold">99%</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <ZapIcon className="w-6 h-6 text-blue-400" />
                            <span className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Timezone</span>
                            <span className="text-blue-400 font-bold">IST (UTC+5:30)</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Side - Form */}
                    <div className={`backdrop-blur-xl rounded-2xl p-8 transition-colors duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-400/30'
                          : 'bg-gradient-to-br from-black/5 to-black/[0.02] border border-black/10 hover:border-purple-500/30'
                    }`}>
                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Send a Message</h3>
                        <p className={`mb-8 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Fill out the form below and I'll get back to you soon.
                        </p>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                                Something went wrong. Please try again or email me directly.
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                                        isDark ? 'text-white' : 'text-black'
                                    }`}>
                                        First name <span className={isDark ? 'text-purple-500' : 'text-purple-600'}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First name"
                                        required
                                        className={`w-full px-4 py-3 bg-transparent rounded-lg transition-all duration-300 ${
                                            isDark
                                              ? 'border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500'
                                              : 'border border-gray-400 text-black placeholder-gray-600 focus:outline-none focus:border-purple-600'
                                        }`}
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                                        isDark ? 'text-white' : 'text-black'
                                    }`}>
                                        Last name <span className={isDark ? 'text-purple-500' : 'text-purple-600'}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last name"
                                        required
                                        className={`w-full px-4 py-3 bg-transparent rounded-lg transition-all duration-300 ${
                                            isDark
                                              ? 'border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500'
                                              : 'border border-gray-400 text-black placeholder-gray-600 focus:outline-none focus:border-purple-600'
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                                    isDark ? 'text-white' : 'text-black'
                                }`}>
                                    Email <span className={isDark ? 'text-purple-500' : 'text-purple-600'}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    required
                                    className={`w-full px-4 py-3 bg-transparent rounded-lg transition-all duration-300 ${
                                        isDark
                                          ? 'border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500'
                                          : 'border border-gray-400 text-black placeholder-gray-600 focus:outline-none focus:border-purple-600'
                                    }`}
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                                    isDark ? 'text-white' : 'text-black'
                                }`}>
                                    Phone number
                                </label>
                                <div className="flex">
                                    <select className={`px-3 py-3 bg-transparent border border-r-0 rounded-l-lg transition-all duration-300 focus:outline-none ${
                                        isDark
                                          ? 'border-gray-600 text-white focus:border-purple-500'
                                          : 'border-gray-400 text-black focus:border-purple-600'
                                    }`}>
                                        <option value="US" className={isDark ? 'bg-gray-900' : 'bg-gray-100'}>US</option>
                                        <option value="IN" className={isDark ? 'bg-gray-900' : 'bg-gray-100'}>IN</option>
                                        <option value="UK" className={isDark ? 'bg-gray-900' : 'bg-gray-100'}>UK</option>
                                    </select>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (000) 000-0000"
                                        className={`w-full px-4 py-3 bg-transparent border rounded-r-lg transition-all duration-300 ${
                                            isDark
                                              ? 'border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500'
                                              : 'border-gray-400 text-black placeholder-gray-600 focus:outline-none focus:border-purple-600'
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                                    isDark ? 'text-white' : 'text-black'
                                }`}>
                                    Message <span className={isDark ? 'text-purple-500' : 'text-purple-600'}>*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Leave us a message..."
                                    required
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-transparent rounded-lg resize-none transition-all duration-300 ${
                                        isDark
                                          ? 'border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500'
                                          : 'border border-gray-400 text-black placeholder-gray-600 focus:outline-none focus:border-purple-600'
                                    }`}
                                />
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="agreeToPolicy"
                                    checked={formData.agreeToPolicy}
                                    onChange={handleChange}
                                    required
                                    className={`w-5 h-5 rounded transition-all duration-300 ${
                                        isDark
                                          ? 'border-gray-600 bg-transparent text-purple-500 focus:ring-purple-500'
                                          : 'border-gray-400 bg-transparent text-purple-600 focus:ring-purple-600'
                                    } focus:ring-offset-0`}
                                />
                                <label className={`text-sm transition-colors duration-300 ${
                                    isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    You agree to our friendly{' '}
                                    <button
                                        type="button"
                                        className={`underline cursor-pointer focus:outline-none transition-colors duration-300 ${
                                            isDark ? 'text-white hover:text-purple-400' : 'text-black hover:text-purple-600'
                                        }`}
                                        onClick={() => setShowPolicy(true)}
                                    >
                                        privacy policy
                                    </button>
                                    .
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || !formData.agreeToPolicy}
                                className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                                    isDark
                                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                                      : 'bg-purple-700 text-white hover:bg-purple-800'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send message'}
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Info & Social Links */}
                    <div className="flex flex-col space-y-6">
                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className={`p-5 backdrop-blur-xl rounded-xl text-center transition-colors ${isDark ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40' : 'bg-gradient-to-br from-blue-300/10 to-cyan-300/10 border border-blue-300/20 hover:border-blue-300/40'}`}>
                                <div className="flex justify-center mb-2">
                                    <ZapIcon className="w-8 h-8 text-blue-400" />
                                </div>
                                <p className={`font-semibold text-sm transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Fast Response</p>
                                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Within 24 hours</p>
                            </div>
                            <div className={`p-5 backdrop-blur-xl rounded-xl text-center transition-colors ${isDark ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40' : 'bg-gradient-to-br from-purple-300/10 to-pink-300/10 border border-purple-300/20 hover:border-purple-300/40'}`}>
                                <div className="flex justify-center mb-2">
                                    <GlobeIcon className="w-8 h-8 text-purple-400" />
                                </div>
                                <p className={`font-semibold text-sm transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Location</p>
                                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>India (IST)</p>
                            </div>
                            <div className={`p-5 backdrop-blur-xl rounded-xl text-center transition-colors ${isDark ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40' : 'bg-gradient-to-br from-green-300/10 to-emerald-300/10 border border-green-300/20 hover:border-green-300/40'}`}>
                                <div className="flex justify-center mb-2">
                                    <CoffeeIcon className="w-8 h-8 text-green-400" />
                                </div>
                                <p className={`font-semibold text-sm transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Coffee Lover</p>
                                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Always brewing</p>
                            </div>
                            <div className={`p-5 backdrop-blur-xl rounded-xl text-center transition-colors ${isDark ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40' : 'bg-gradient-to-br from-orange-300/10 to-red-300/10 border border-orange-300/20 hover:border-orange-300/40'}`}>
                                <div className="flex justify-center mb-2">
                                    <TargetIcon className="w-8 h-8 text-orange-400" />
                                </div>
                                <p className={`font-semibold text-sm transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Availability</p>
                                <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Open to work</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Connect with me</h3>
                            <div className="space-y-3">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/jeevananthamp12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 p-4 backdrop-blur-xl rounded-xl transition-colors group ${isDark ? 'border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10' : 'border border-gray-300 hover:border-purple-500 hover:bg-purple-500/5'}`}
                                >
                                    <div className={`p-3 rounded-lg transition-colors ${isDark ? 'bg-gray-800 group-hover:bg-purple-600' : 'bg-gray-200 group-hover:bg-purple-500'}`}>
                                        <GithubIcon />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>GitHub</p>
                                        <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>jeevananthamp12</p>
                                    </div>
                                    <span className={`transition-colors ${isDark ? 'text-gray-500 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'}`}>→</span>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/in/jeevananthamp12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-4 p-4 backdrop-blur-xl rounded-xl transition-colors group ${isDark ? 'border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10' : 'border border-gray-300 hover:border-blue-500 hover:bg-blue-500/5'}`}
                                >
                                    <div className={`p-3 rounded-lg transition-colors ${isDark ? 'bg-gray-800 group-hover:bg-blue-600' : 'bg-gray-200 group-hover:bg-blue-500'}`}>
                                        <LinkedinIcon />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>LinkedIn</p>
                                        <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>jeevanantham12-p</p>
                                    </div>
                                    <span className={`transition-colors ${isDark ? 'text-gray-500 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-600'}`}>→</span>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:jeevanantham129787@gmail.com"
                                    className={`flex items-center gap-4 p-4 backdrop-blur-xl rounded-xl transition-colors group ${isDark ? 'border border-gray-700 hover:border-green-500 hover:bg-green-500/10' : 'border border-gray-300 hover:border-green-500 hover:bg-green-500/5'}`}
                                >
                                    <div className={`p-3 rounded-lg transition-colors ${isDark ? 'bg-gray-800 group-hover:bg-green-600' : 'bg-gray-200 group-hover:bg-green-500'}`}>
                                        <EmailIcon />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Email</p>
                                        <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>jeevanantham129787@gmail.com</p>
                                    </div>
                                    <span className={`transition-colors ${isDark ? 'text-gray-500 group-hover:text-green-400' : 'text-gray-600 group-hover:text-green-600'}`}>→</span>
                                </a>
                            </div>
                        </div>

                        {/* Fun Facts Section */}
                        <div className={`p-6 backdrop-blur-xl rounded-2xl transition-colors ${isDark ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20' : 'bg-gradient-to-br from-purple-200/20 to-blue-200/20 border border-purple-300/20'}`}>
                            <div className="flex items-center gap-2 mb-3">
                                <LightbulbIcon className="w-5 h-5 text-yellow-400" />
                                <h4 className={`font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Fun Facts!</h4>
                            </div>
                            <ul className={`space-y-2 text-sm transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <div className="flex items-center gap-2">
                                        <span>I debug with console.log() and I'm not ashamed!</span>
                                        <BugIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">•</span>
                                    <div className="flex items-center gap-2">
                                        <span>Dark mode enthusiast - light themes hurt my soul</span>
                                        <MoonIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400">•</span>
                                    <div className="flex items-center gap-2">
                                        <span>Stack Overflow has saved my life more times than I can count</span>
                                        <BooksIcon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400">•</span>
                                    <div className="flex items-center gap-2">
                                        <span>My code works, I have no idea why, but it works!</span>
                                        <SparklesIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Privacy Policy Modal */}
            {showPolicy && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className={`max-w-lg w-[90vw] rounded-2xl shadow-2xl p-8 relative animate-fadeIn mx-4 transition-colors duration-300 ${isDark ? 'bg-black border border-white/10' : 'bg-white border border-black/10'}`}>
                        <button
                            onClick={() => setShowPolicy(false)}
                            className={`absolute top-3 right-3 text-2xl font-bold focus:outline-none transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className={`text-2xl font-bold mb-4 text-center transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Privacy Policy</h2>
                        <div className={`space-y-3 text-sm max-h-[60vh] overflow-y-auto transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            <p>
                                We value your privacy. Your information will only be used to respond to your inquiry and will not be shared with third parties. By submitting this form, you consent to the collection and use of your information for the purpose of communication.
                            </p>
                            <ul className="list-disc pl-5">
                                <li>We do not sell or share your data with anyone.</li>
                                <li>Your email and message are only used to contact you regarding your inquiry.</li>
                                <li>You may request deletion of your data at any time.</li>
                            </ul>
                            <p>
                                For more details, contact us directly.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default memo(Contact);
