import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(60);

    const titles = [
        { text: "Java Developer", color: "text-orange-500" },
        { text: "Full Stack Engineer", color: "text-blue-500" },
        { text: "ReactJS Developer", color: "text-cyan-400" },
        { text: "Data Analyst", color: "text-purple-400" }
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i].text;

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 80);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

            <div className="max-w-5xl mx-auto px-6 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-mono text-cyan-400 mb-4 tracking-wider">Hello, I'm</p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Srri</span>
                        <span className="text-[#DC2626]">Krishna</span>
                        <span className="text-white"> N</span>
                    </h1>

                    <h2 className="text-3xl md:text-3xl text-white font-bold mb-8 h-20">
                        <span className={`font-mono ${titles[loopNum % titles.length].color}`}>{text}</span>
                        <span className="animate-pulse text-gray-400">|</span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-400 mb-12 text-lg leading-relaxed font-light">
                        Fueled by curiosity, building ideas with technology.
                    </p>



                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        {/* View Projects - Outline Blue */}
                        <a href="#projects" className="px-8 py-3 rounded-lg border border-blue-500/50 text-blue-400 font-medium hover:bg-blue-500/10 transition-all flex items-center gap-2 group">
                            View Projects
                            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>

                        {/* Download Resume - Solid Gradient */}
                        <a href="/Krishna_Resume.pdf" download className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all flex items-center gap-2 transform hover:-translate-y-1">
                            <Download size={18} />
                            Download Resume
                        </a>

                        {/* Contact Me - Outline Cyan */}
                        <a href="#contact" className="px-8 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all flex items-center gap-2">
                            <Mail size={18} />
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
