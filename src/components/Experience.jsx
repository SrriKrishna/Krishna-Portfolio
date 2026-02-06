import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Professional Experience
                </motion.h2>

                <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-12">
                    <motion.div
                        className="relative pl-8 md:pl-12"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Dot on Timeline */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                        <div className="glass-card p-6 md:p-8 rounded-xl hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-blue-400" />
                                        ReactJS Developer Intern
                                    </h3>
                                    <h4 className="text-blue-400 font-medium text-lg mt-1">Trinethra Tech Solution</h4>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                                    <Calendar size={14} />
                                    July 2025 – September 2025
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-gray-300 font-semibold mb-2">Project: Karat & Carat Diamonds</h5>
                                <p className="text-sm text-gray-400 italic">Jewellery E-commerce & Order Management System</p>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-gray-300 font-semibold mb-2">Tech Stack</h5>
                                <div className="flex flex-wrap gap-2">
                                    {["ReactJS(Vite)", "HTML", "CSS", "JavaScript", "REST API", "MySQL", "Visual Studio Code"].map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 rounded bg--900/20 text-[rgb(96_165_250/var(--tw-text-opacity,1))] text-xs border border-blue-800/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                                <li>Developed responsive and reusable UI components using <span className="text-blue-400">ReactJS (Vite)</span>, JavaScript, JSX, and Bootstrap.</li>
                                <li>Integrated REST APIs and handled JSON data for seamless frontend–backend communication.</li>
                                <li>Collaborated with backend developers to ensure smooth data flow and feature implementation.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Paushtik Aahar Entry */}
                    <motion.div
                        className="relative pl-8 md:pl-12"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Dot on Timeline */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

                        <div className="glass-card p-6 md:p-8 rounded-xl hover:border-purple-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-purple-400" />
                                        Java Developer Intern
                                    </h3>
                                    <h4 className="text-purple-400 font-medium text-lg mt-1">Annular Technologies</h4>
                                </div>
                                <div className="mt-2 md:mt-0 flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                                    <Calendar size={14} />
                                    Live
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="text-gray-300 font-semibold mb-2">Tech Stack</h5>
                                <div className="flex flex-wrap gap-2">
                                    {["Java", "Spring Boot", "REST API", "MySQL", "Postman", "IntelliJ IDEA"].map((tech, idx) => (
                                        <span key={idx} className="px-2 py-1 rounded bg-purple-900/20 text-purple-300 text-xs border border-purple-800/50">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h6 className="text-white font-medium mb-2 border-b border-gray-800 pb-1">Key Contributions</h6>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                        <li>Developed CRUD REST APIs for managing carousel images, enabling dynamic content updates.</li>
                                        <li>Implemented endpoints for creating, retrieving, updating, and deleting carousel image data.</li>
                                        <li>Integrated backend APIs with frontend components and tested services using Postman.</li>
                                        <li>Applied pagination, sorting, and searching to efficiently manage and retrieve data.</li>
                                        <li>Followed a layered architecture and clean coding practices for maintainability.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6 className="text-white font-medium mb-2 border-b border-gray-800 pb-1">Internship Learnings & Exposure</h6>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                                        <li>Gained hands-on exposure to Microservices architecture using Spring Boot.</li>
                                        <li>Worked with Spring Cloud Gateway and WebFlux for reactive request handling.</li>
                                        <li>Implemented authentication/authorization using Spring Security, JWT, and OAuth 2.0.</li>
                                        <li>Learned secure API design and role-based access control.</li>
                                        <li>Integrated Stripe Payment Gateway and implemented Mail Sender services.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
