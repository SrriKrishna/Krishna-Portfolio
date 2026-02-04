import { motion } from 'framer-motion';
import { Database, Code, BarChart, Settings } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Full Stack Development",
            icon: <Code size={32} className="text-blue-400" />,
            skills: ["Java", "Spring Boot", "ReactJS (Vite)", "REST APIs", "JavaScript", "HTML/CSS", "Bootstrap"]
        },
        {
            category: "Databases",
            icon: <Database size={32} className="text-purple-400" />,
            skills: ["MySQL", "PostgreSQL", "Database Design"]
        },
        {
            category: "Data Analytics",
            icon: <BarChart size={32} className="text-cyan-400" />,
            skills: ["SQL", "Power BI", "Excel", "Data Visualization", "Data Cleaning"]
        },
        {
            category: "Tools & DevOps",
            icon: <Settings size={32} className="text-pink-400" />,
            skills: ["Git/GitHub", "Postman", "Maven", "IntelliJ IDEA", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-gray-800/50 group-hover:bg-gray-800 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full text-sm bg-gray-800/50 border border-gray-700 text-gray-300 group-hover:border-blue-500/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
