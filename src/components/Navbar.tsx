"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Bus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "trips", label: "Trips" },
    { id: "booking", label: "Group Booking" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

interface NavbarProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (navRef.current) {
            gsap.fromTo(
                navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
            );
        }
    }, []);

    const handleNav = (id: string) => {
        onNavigate(id);
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNav("home")}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <Bus className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            BusGo
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.id}
                                onClick={() => handleNav(link.id)}
                                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer ${activeSection === link.id
                                        ? "text-white"
                                        : "text-white/60 hover:text-white"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button onClick={() => handleNav("booking")} size="sm">
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/80 backdrop-blur-2xl border-t border-white/10"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNav(link.id)}
                                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${activeSection === link.id
                                            ? "bg-white/10 text-white"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <Button onClick={() => handleNav("booking")} className="w-full mt-2">
                                Book Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
