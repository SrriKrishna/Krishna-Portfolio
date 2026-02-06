import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        setTimeout(() => {
            element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full transition-all duration-300 ${isOpen ? 'z-[10000] bg-transparent' : 'z-50 ' + (scrolled ? 'bg-[#050a14]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6')
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="font-mono text-xl md:text-2xl font-bold tracking-tighter relative z-50">
                        <span className="text-blue-500">&lt;</span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SrriKrishna</span>
                        <span className="text-blue-500"> /&gt;</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector(link.href);
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide hover:scale-105 transform duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Z-Index higher than portal */}
                    <button
                        className="md:hidden relative z-[99999] p-2 text-gray-300 hover:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out transform origin-left ${isOpen ? 'rotate-45 translate-x-px' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'
                                    }`}
                            />
                            <span
                                className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out transform origin-left ${isOpen ? '-rotate-45 translate-x-px' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Portal */}
            {isOpen && createPortal(
                <div className="fixed inset-0 z-[9999] bg-[#050a14] flex flex-col justify-center items-center animate-fade-in">

                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
                    </div>

                    {/* Nav Items */}
                    <div className="flex flex-col gap-8 items-center relative z-10 w-full px-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl md:text-5xl font-bold text-gray-300 hover:text-white transition-all duration-300 tracking-tight flex items-center gap-4 group cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                }}
                                style={{
                                    animation: `slideUp 0.5s ease-out forwards`,
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: 0,
                                    transform: 'translateY(20px)'
                                }}
                            >
                                <span className="text-lg font-mono text-blue-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    0{index + 1}
                                </span>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="absolute bottom-12 text-center opacity-80">
                        <p className="text-gray-500 font-mono text-sm">
                            &lt; Designed & Built by SrriKrishna /&gt;
                        </p>
                    </div>

                    {/* Inline Styles for pure CSS animations */}
                    <style>{`
                        @keyframes slideUp {
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        .animate-fade-in {
                            animation: fadeIn 0.3s ease-out forwards;
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                    `}</style>
                </div>,
                document.body
            )}
        </>
    );
};

export default Navbar;
