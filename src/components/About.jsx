import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full"></div>

                    <h2 className="text-3xl font-bold mb-6 text-gradient">About Me</h2>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            I am a passionate <span className="text-white font-medium">Full Stack Developer</span> with a strong foundation in Java, Spring Boot, and ReactJS.
                            My journey involves building scalable web applications that solve real-world problems.
                        </p>
                        <p>
                            Beyond coding, I have a keen interest in <span className="text-white font-medium">Data Analytics</span>.
                            I love leveraging data to drive decisions, using tools like Power BI, SQL, and Excel to uncover actionable insights.
                            This unique combination allows me to build applications that are not only functional but also data-intelligent.
                        </p>
                        <p>
                            I thrive in collaborative environments and am always looking for opportunities to learn and grow.
                            Whether it's optimizing backend performance or crafting intuitive user interfaces, I am dedicated to delivering high-quality solutions.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
