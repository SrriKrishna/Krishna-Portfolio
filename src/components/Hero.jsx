import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                        Welcome to my portfolio
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="text-gradient">N. SrriKrishna</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
                        Full Stack Developer <span className="text-blue-500">&</span> Data Analyst
                    </h2>

                    <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed">
                        Building scalable web applications with a data-driven mindset.
                        Passionate about crafting premium user experiences and solving complex problems with efficient code.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                        <a href="#projects" className="btn-primary flex items-center gap-2 group">
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/Krishna_Resume.pdf" download className="btn-outline flex items-center gap-2">
                            Download Resume
                            <Download size={20} />
                        </a>
                        <a href="#contact" className="btn-outline border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/SrriKrishna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/srri-krishna15" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:srrikrishna09@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
