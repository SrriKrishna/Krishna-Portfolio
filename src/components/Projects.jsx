import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, BarChart2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Employee Management System",
            description: "A comprehensive full-stack application for managing employee records. Built with a scalable layered architecture ensuring data integrity and efficient CRUD operations.",
            techStack: ["ReactJS", "Spring Boot", "MySQL", "REST API", "Bootstrap"],
            githubLink: "https://github.com/SrriKrishna/Employee-Management-System",
            liveLink: "https://frontend-ems-olive.vercel.app", // Added placeholder, user didn't specify but good to have logic
            icon: <Database size={40} className="text-blue-400" />,
            color: "blue"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Interactive Power BI dashboard visualizing complex datasets to derive actionable insights. Focuses on data cleaning, modeling, and effective storytelling through data.",
            techStack: ["Power BI", "SQL", "Excel", "Data Visualization"],
            githubLink: "https://github.com/SrriKrishna",
            liveLink: "#",
            icon: <BarChart2 size={40} className="text-purple-400" />,
            color: "purple"
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 neon-border flex flex-col h-full"
                        >
                            <div className={`h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-gray-800 group-hover:to-${project.color}-900/20 transition-all duration-500`}>
                                <div className="p-4 rounded-full bg-gray-900/50 border border-gray-700 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-1 line-clamp-3 md:line-clamp-none leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-700"
                                    >
                                        <Github size={18} />
                                        Code
                                    </a>
                                    {project.liveLink && project.liveLink !== "#" && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-500/20"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
