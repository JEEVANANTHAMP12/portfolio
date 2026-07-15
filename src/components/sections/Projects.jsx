import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const projects = [
    {
        title: 'AI-Powered Chat Application',
        description: 'A conversational web app concept with a React interface, server-side message handling, and AI-assisted responses.',
        tags: ['React', 'Node.js', 'OpenAI', 'API'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    },
    {
        title: 'Task Management Dashboard',
        description: 'A productivity dashboard layout with task states, team-focused views, and responsive UI patterns.',
        tags: ['React', 'Tailwind CSS', 'Firebase', 'UI'],
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&q=80',
    },
    {
        title: 'ML Image Classifier',
        description: 'A machine learning prototype combining a Flask API with a simple frontend for submitting and reviewing predictions.',
        tags: ['Python', 'Flask', 'ML', 'React'],
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80',
    },
    {
        title: 'Data Analytics Dashboard',
        description: 'An analytics interface for exploring filtered data views, metrics, and charts from structured datasets.',
        tags: ['Python', 'Pandas', 'Charts', 'React'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    },
];

const Projects = () => {
    const { isDark } = useTheme();

    return (
        <section id="projects" className={`relative py-24 md:py-32 ${isDark ? 'bg-neutral-950' : 'bg-white'}`}>
            <motion.div
                className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-3xl">
                        <p className={`section-eyebrow ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Projects</p>
                        <h2 className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                            Selected work and project concepts.
                        </h2>
                        <p className={`mt-5 text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            A compact view of the kinds of applications I build: interfaces, dashboards, AI prototypes, and data-backed tools.
                        </p>
                    </div>
                    <a
                        href="https://github.com/jeevananthamp12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex w-fit items-center rounded-lg border px-5 py-3 text-sm font-bold transition ${isDark ? 'border-white/15 text-white hover:bg-white/10' : 'border-slate-300 text-slate-950 hover:bg-slate-100'}`}
                    >
                        View GitHub
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: index * 0.06 }}
                            className={`overflow-hidden rounded-2xl border ${isDark ? 'border-white/10 bg-white/[0.04]' : 'border-slate-200 bg-white shadow-sm'}`}
                        >
                            <div className="aspect-[16/9] overflow-hidden">
                                <img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" loading="lazy" />
                            </div>
                            <div className="p-6">
                                <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>{project.title}</h3>
                                <p className={`mt-3 leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={`rounded-lg border px-3 py-1.5 text-xs font-bold ${isDark ? 'border-white/10 bg-white/[0.04] text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
