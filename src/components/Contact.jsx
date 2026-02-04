import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-2xl"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Get In Touch</h2>
                    <p className="text-center text-gray-400 mb-10 max-w-lg mx-auto">
                        Whether you have a question, a project opportunity, or just want to say hi, my inbox is always open!
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="btn-primary flex items-center gap-2 group px-8">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center gap-8">
                        <a href="mailto:srrikrishna09@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                            <Mail size={20} />
                            <span className="hidden sm:inline">srrikrishna09@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/srri-krishna15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                        <a href="https://github.com/SrriKrishna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                            <Github size={20} />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
