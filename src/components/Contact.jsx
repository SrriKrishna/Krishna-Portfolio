import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Rocket, CheckCircle, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        emailjs.sendForm(
            'service_il80j6o',    // Service ID
            'template_4uewa4f',   // Template ID
            form.current,
            'XPCXVfF0FC8je0yf0'   // Public Key
        )
            .then((result) => {
                console.log(result.text);
                setSending(false);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setSending(false);
                setStatus('error');
            });
    };

    const handleKeyDown = (e) => {
        // Submit form on Enter key (without Shift)
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Use requestSubmit to trigger standard form submission (validation + onSubmit)
            form.current.requestSubmit();
        }
    };

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
                        Interested in working together? I’d love to hear from you.
                    </p>

                    <form ref={form} onSubmit={handleSendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    required
                                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    required
                                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                required
                                onKeyDown={handleKeyDown}
                                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <button
                                type="submit"
                                disabled={sending}
                                className={`btn-primary flex items-center gap-2 group px-8 ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                                {!sending && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg"
                                    >
                                        <CheckCircle size={18} />
                                        <span className="font-medium">Message landed successfully! I’ll get back to you soon.</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg"
                                    >
                                        <AlertTriangle size={18} />
                                        <span className="font-medium">Message missed its landing 🚀 Please try again</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
