"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion"; // 1. Added Variants type
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
    onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
    const bgRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bgRef.current) {
            gsap.fromTo(
                bgRef.current,
                { scale: 1.2 },
                { scale: 1, duration: 2, ease: "power2.out" }
            );
        }

        const handleScroll = () => {
            if (bgRef.current) {
                const scrollY = window.scrollY;
                gsap.to(bgRef.current, {
                    y: scrollY * 0.4,
                    duration: 0.3,
                    ease: "none",
                });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Explicitly typing as Variants fixes the "index signature" error
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.8, 
                // 3. Added 'as const' to ensure the array is treated as a fixed tuple
                ease: [0.25, 0.46, 0.45, 0.94] as const 
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background & Overlays remain the same */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div ref={overlayRef} className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                
                <motion.div variants={itemVariants} className="mb-8 flex justify-center w-full">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/80">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        India&apos;s #1 Group Bus Booking Platform
                    </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6">
                    <span className="text-white">Book Bus Tickets</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Solo or With Your Group
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Smart, Fast and Modern Booking Experience. Travel together with seamless group coordination and premium comfort.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => onNavigate("booking")} size="lg" className="gap-2 text-base">
                        Book Now <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button onClick={() => onNavigate("trips")} variant="outline" size="lg" className="text-base">
                        Explore Trips
                    </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    {[
                        { value: "50K+", label: "Trips Booked" },
                        { value: "500+", label: "Routes" },
                        { value: "4.9★", label: "Rating" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}