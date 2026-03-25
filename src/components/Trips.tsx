"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

const trips = [
    {
        id: 1,
        from: "Mumbai",
        to: "Goa",
        date: "Mar 15, 2026",
        price: "₹899",
        seats: 24,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        duration: "8h 30m",
    },
    {
        id: 2,
        from: "Delhi",
        to: "Jaipur",
        date: "Mar 18, 2026",
        price: "₹649",
        seats: 18,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
        duration: "5h 45m",
    },
    {
        id: 3,
        from: "Bangalore",
        to: "Chennai",
        date: "Mar 20, 2026",
        price: "₹549",
        seats: 32,
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
        duration: "6h 15m",
    },
    {
        id: 4,
        from: "Pune",
        to: "Mumbai",
        date: "Mar 22, 2026",
        price: "₹349",
        seats: 40,
        image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80",
        duration: "3h 30m",
    },
    {
        id: 5,
        from: "Hyderabad",
        to: "Vizag",
        date: "Mar 25, 2026",
        price: "₹799",
        seats: 22,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        duration: "9h 00m",
    },
    {
        id: 6,
        from: "Kolkata",
        to: "Darjeeling",
        date: "Mar 28, 2026",
        price: "₹1,199",
        seats: 16,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        duration: "12h 00m",
    },
];

interface TripsProps {
    onBook: () => void;
}

export default function Trips({ onBook }: TripsProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardsRef.current) return;
        const cards = cardsRef.current.querySelectorAll(".trip-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, y: 60, scale: 0.95 },
                            {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                duration: 0.8,
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
        <section id="trips" ref={sectionRef} className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 mb-6">
                        <MapPin className="w-4 h-4" />
                        Popular Routes
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Trending{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Trips
                        </span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Discover the most popular bus routes with the best prices and premium comfort
                    </p>
                </motion.div>

                {/* Trip Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trips.map((trip) => (
                        <motion.div
                            key={trip.id}
                            className="trip-card opacity-0"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="overflow-hidden group cursor-pointer h-full">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${trip.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-white font-medium">
                                        {trip.duration}
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="text-2xl font-bold text-white">{trip.price}</div>
                                        <div className="text-xs text-white/60">per person</div>
                                    </div>
                                </div>

                                <CardContent className="p-5">
                                    {/* Route */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex-1">
                                            <div className="text-xs text-white/40 mb-1">FROM</div>
                                            <div className="text-sm font-semibold text-white">{trip.from}</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-purple-400 shrink-0" />
                                        <div className="flex-1 text-right">
                                            <div className="text-xs text-white/40 mb-1">TO</div>
                                            <div className="text-sm font-semibold text-white">{trip.to}</div>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="flex items-center justify-between mb-4 text-xs text-white/50">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {trip.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-3.5 h-3.5" />
                                            {trip.seats} seats left
                                        </span>
                                    </div>

                                    {/* Book Button */}
                                    <Button
                                        onClick={onBook}
                                        className="w-full"
                                        size="sm"
                                    >
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
