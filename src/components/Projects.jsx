import { motion } from 'framer-motion';
import { Github, ExternalLink, Database, BarChart2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Employee Management System",
            badge: "Full Stack Application",
            description: "Developed a full-stack Employee Management System with complete CRUD functionality. Implemented RESTful APIs, integrated MySQL database, and tested backend services using Postman to ensure smooth frontend–backend communication. Built a responsive UI and followed a scalable, layered architecture for maintainability.",
            techStack: ["React.js", "Spring Boot", "MySQL", "REST API", "Postman"],
            githubLink: "https://github.com/SrriKrishna/Employee-Management-System",
            liveLink: "https://frontend-ems-olive.vercel.app",
        },
        // {
        //     title: "Data Analytics Dashboard",
        //     badge: "Data Visualization",
        //     description: "Interactive Power BI dashboard visualizing complex datasets to derive actionable insights. Focuses on data cleaning, modeling, and effective storytelling through data. Shows key performance indicators and trend analysis for business intelligence.",
        //     techStack: ["Power BI", "SQL", "Excel", "Data Visualization"],
        //     githubLink: "https://github.com/SrriKrishna",
        //     liveLink: "#",
        // }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 text-center text-cyan-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
                <p className="text-center text-gray-400 mb-16">Real-world applications showcasing my development expertise</p>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#0b1221] border border-blue-900/30 rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-xs font-medium border border-blue-800 mb-4">
                                    {project.badge}
                                </span>

                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-[#1e293b] text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                                            <Github size={20} />
                                        </a>
                                        {project.liveLink && project.liveLink !== "#" && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 rounded-lg bg-[#111827] border border-gray-800 text-gray-300 text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-500/50 text-blue-400 font-medium hover:bg-blue-500/10 transition-colors"
                                >
                                    <Github size={18} />
                                    View More on GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
