"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Bus, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Trips", id: "trips" },
    { label: "Group Booking", id: "booking" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
];

const legalLinks = ["Terms of Service", "Privacy Policy", "Refund Policy", "FAQ"];

interface FooterProps {
    onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!footerRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, y: 30 },
                            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer ref={footerRef} className="relative border-t border-white/10 opacity-0">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                <Bus className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                BusGo
                            </span>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed mb-6">
                            India&apos;s leading group bus booking platform. Travel together, save together.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <button
                                    key={i}
                                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                                >
                                    <Icon className="w-4 h-4" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => {
                                            onNavigate(link.id);
                                            const el = document.getElementById(link.id);
                                            if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="text-sm text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link}>
                                    <button className="text-sm text-white/40 hover:text-white transition-colors duration-300 cursor-pointer">
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Quick */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-white/40">
                            <li>+91 98765 43210</li>
                            <li>hello@busgo.in</li>
                            <li>Sector 62, Noida, UP</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © 2026 BusGo. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
