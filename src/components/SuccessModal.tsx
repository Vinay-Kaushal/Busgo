"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PartyPopper, X } from "lucide-react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const createConfetti = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            color: string;
            size: number;
            rotation: number;
            rotationSpeed: number;
        }[] = [];

        const colors = [
            "#8B5CF6", "#6366F1", "#3B82F6", "#06B6D4",
            "#10B981", "#F59E0B", "#EF4444", "#EC4899",
        ];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: -10 - Math.random() * 200,
                vx: (Math.random() - 0.5) * 8,
                vy: Math.random() * 3 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;

            particles.forEach((p) => {
                if (p.y < canvas.height + 50) {
                    alive = true;
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.1;
                    p.vx *= 0.99;
                    p.rotation += p.rotationSpeed;

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                    ctx.restore();
                }
            });

            if (alive) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Small delay so modal renders first
            const timer = setTimeout(() => createConfetti(), 300);

            // GSAP success animation
            gsap.fromTo(
                ".success-icon",
                { scale: 0, rotation: -180 },
                { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 0.2 }
            );

            return () => clearTimeout(timer);
        }
    }, [isOpen, createConfetti]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                >
                    {/* Confetti Canvas */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 z-[101] pointer-events-none"
                    />

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: "spring", bounce: 0.3 }}
                        className="relative z-[102] w-full max-w-md mx-4"
                    >
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl p-8 text-center shadow-2xl">
                            {/* Close */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Success Icon */}
                            <div className="success-icon mb-6 inline-flex">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            {/* Party Icon */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mb-4"
                            >
                                <PartyPopper className="w-8 h-8 text-yellow-400 mx-auto" />
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl font-bold text-white mb-2"
                            >
                                Booking Confirmed!
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-white/50 mb-8 text-sm leading-relaxed"
                            >
                                Your group booking has been successfully confirmed. A confirmation email will be sent to all members shortly.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button onClick={onClose} size="lg" className="w-full">
                                    Continue Exploring
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
