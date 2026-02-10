import { motion } from 'framer-motion';
import { Database, Code, BarChart, Settings, Boxes, Terminal, Rocket } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Full Stack Development",
            icon: <Code size={24} />,
            skills: ["Python (Basics)", "Java 8 (Core Java, OOP, Collections)", "Spring Boot & Microservices", "REST APIs & JDBC", "ReactJS (Vite)", "HTML5, CSS3, JavaScript", "Bootstrap & Responsive Design"],
            color: "blue"
        },
        {
            category: "Tools & Technologies",
            icon: <Settings size={24} />,
            skills: ["GitHub & Version Control", "Postman API Testing", "Maven", "Visual Studio Code", "Eclipse", "Intellij","Microsoft Excel","Microsoft Word","Microsoft PowerBI","Oracle Toad"],
            color: "green"
        },
        {
            category: "Database Technologies",
            icon: <Database size={24} />,
            skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
            color: "cyan"
        },
        {
            category: "Data Analytics",
            icon: <BarChart size={24} />,
            skills: ["SQL", "Microsoft Excel", "Power BI"],
            color: "purple"
        },
        {
            category: "Deployment",
            icon: <Rocket size={24} />,
            skills: [
                "Netlify", "Vercel", "Render"
            ],
            color: "orange"
        }

    ];

    const colorVariants = {
        blue: {
            icon: "bg-blue-900/20 text-blue-400",
            tag: "bg-[#1e293b]/50 border-blue-900/30 text-blue-200 hover:bg-blue-900/20 hover:border-blue-500/50"
        },
        cyan: {
            icon: "bg-cyan-900/20 text-cyan-400",
            tag: "bg-[#1e293b]/50 border-cyan-900/30 text-cyan-200 hover:bg-cyan-900/20 hover:border-cyan-500/50"
        },
        purple: {
            icon: "bg-purple-900/20 text-purple-400",
            tag: "bg-[#1e293b]/50 border-purple-900/30 text-purple-200 hover:bg-purple-900/20 hover:border-purple-500/50"
        },
        green: {
            icon: "bg-green-900/20 text-green-400",
            tag: "bg-[#1e293b]/50 border-green-900/30 text-green-200 hover:bg-green-900/20 hover:border-green-500/50"
        },
        orange: {
            icon: "bg-orange-900/20 text-orange-400",
            tag: "bg-[#1e293b]/50 border-orange-900/30 text-orange-200 hover:bg-orange-900/20 hover:border-orange-500/50"
        }
    };

    const softSkills = ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Quick Learner", "Attention to Detail"];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-4 text-center text-purple-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>
                <p className="text-center text-red-400 mb-12">Technologies and tools I use to bring ideas to life</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0b1221] border border-blue-900/30 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-lg ${colorVariants[category.color].icon}`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${colorVariants[category.color].tag}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 rounded-full bg-[#1e293b] border border-purple-900/30 text-gray-300 hover:border-purple-500/50 hover:text-white transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
