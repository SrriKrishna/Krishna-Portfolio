import { motion } from 'framer-motion';
import { Code, Database, BarChart, Server, GraduationCap, MapPin, BookOpen, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-center text-gray-400 mb-16 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    A passionate developer turning ideas into digital reality
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xl leading-relaxed text-gray-300 mb-6">
                            I'm a <span className="text-blue-400 font-bold">Backend-focused Full Stack Developer</span> with hands-on experience in designing RESTful APIs, implementing scalable business logic, and managing databases using <span className="text-cyan-400">Java, Spring Boot, and MySQL</span>.
                        </p>
                        <p className="text-xl leading-relaxed text-gray-300 mb-6">
                            I complement my backend expertise with strong skills in building dynamic, high-performance frontends using <span className="text-purple-400">React.js</span>. My approach combines clean architecture with modern development practices.
                        </p>
                        <p className="text-xl leading-relaxed text-gray-300 mb-8">
                            Additionally, I bring value through <span className="text-green-400">Data Analytics</span> skills, leveraging SQL, Excel, and Power BI to derive insights and support data-driven decision making.
                        </p>




                        {/* Location Card Mini */}
                        <div className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-colors mt-6">
                            <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Location</h4>
                                <p className="text-gray-400 text-sm">Based in <span className="text-white font-medium">Chennai</span> & <span className="text-white font-medium">Theni</span></p>
                                <p className="text-purple-400 text-sm font-medium mt-1">Open to Relocation</p>
                            </div>
                        </div>

                        <div className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-colors mt-6">
                            <div className="p-3 bg-green-900/20 rounded-lg text-green-400">
                                <Heart size={28} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Hobbies</h4>
                                <p className="text-gray-400 text-sm">
                                    Drawing & sketching ideas, Football for teamwork, Bike rides for focus.
                                </p>
                                <p className="text-green-400 text-sm font-medium mt-1">
                                    Lifestyle Stack: Creativity • Teamwork • Focus
                                </p>

                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bento Grid of Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >

                        <div className="col-span-2 bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                            {/* Education Card Mini */}

                            <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Bachelor of Computer Application</h4>
                                <p className="text-gray-400 text-sm">Ramakrishna Mission Vivekananda College (Autonomous)</p>
                                <span className="text-white font-medium">Chennai</span>
                                <p className="text-cyan-400 text-sm font-medium mt-1">CGPA: 7.5/10 | August 2022 – April 2025</p>
                            </div>
                        </div>

                        {/* Course Card Mini - Spans 2 Columns */}
                        <div className="col-span-2 bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                            <div className="p-3 bg-orange-900/20 rounded-lg text-orange-400">
                                <BookOpen size={28} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-white font-bold text-lg">Java Full Stack Development</h4>
                                <p className="text-gray-400 text-sm">Trinthera Tech Solution</p>
                                <span className="text-white font-medium text-sm">Chennai</span>
                                <p className="text-orange-400 text-sm font-medium mt-1">December 2024 - June 2025</p>
                            </div>
                        </div>


                        {/* Card 1 */}
                        <div className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-blue-900/5">
                            <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-400">
                                <Server size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Backend Dev</h3>
                            <p className="text-gray-500 text-sm">Java, Spring Boot, REST APIs, Python (Basics)</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-blue-900/5">
                            <div className="w-12 h-12 bg-cyan-900/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-400">
                                <Database size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Databases</h3>
                            <p className="text-gray-500 text-sm">SQL, MySQL, PostgreSQL, MongoDB</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-blue-900/5">
                            <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-purple-400">
                                <Code size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Frontend Dev</h3>
                            <p className="text-gray-500 text-sm">HTML, CSS, JavaScript, React.js, Bootstrap</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-blue-900/5">
                            <div className="w-12 h-12 bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-green-400">
                                <BarChart size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2">Data Analytics</h3>
                            <p className="text-gray-500 text-sm">SQL, Excel, Power BI</p>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
