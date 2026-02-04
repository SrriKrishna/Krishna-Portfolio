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

                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Developed responsive and reusable UI components using <span className="text-blue-400">ReactJS (Vite)</span>, JavaScript, JSX, and Bootstrap.</li>
                                <li>Integrated REST APIs and handled JSON data for seamless frontend–backend communication.</li>
                                <li>Collaborated with backend developers to ensure smooth data flow and feature implementation.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
