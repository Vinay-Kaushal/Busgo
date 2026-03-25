"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Shield, Target, Eye, Zap, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
    {
        icon: Shield,
        title: "Safe & Reliable",
        description: "Every journey is backed by comprehensive safety measures and real-time tracking.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Target,
        title: "Our Mission",
        description: "To make group travel effortless by combining technology with comfort and affordability.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Eye,
        title: "Our Vision",
        description: "A world where every group journey is seamless, from booking the first ticket to reaching the destination.",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Book tickets for your entire group in under 2 minutes with our streamlined process.",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Globe,
        title: "500+ Routes",
        description: "Covering every major city and hidden gem across India with premium bus operators.",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Heart,
        title: "Customer First",
        description: "24/7 support, instant refunds, and a team that genuinely cares about your experience.",
        gradient: "from-pink-500 to-rose-500",
    },
];

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const cards = sectionRef.current.querySelectorAll(".about-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, y: 40, scale: 0.95 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.7,
                                delay: i * 0.1,
                                ease: "power3.out",
                            }
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative py-24 sm:py-32">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 mb-6">
                        <Heart className="w-4 h-4" />
                        About Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            BusGo?
                        </span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        We&apos;re redefining group travel with cutting-edge technology and unparalleled service
                    </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((item) => (
                        <motion.div
                            key={item.title}
                            className="about-card opacity-0"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="h-full p-6 group cursor-pointer hover:border-white/20 transition-colors duration-300">
                                <CardContent className="p-0">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
