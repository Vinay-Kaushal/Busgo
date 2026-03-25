"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "+91 98765 43210",
        subtitle: "Mon–Sat, 9am–9pm IST",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Mail,
        title: "Email",
        value: "hello@busgo.in",
        subtitle: "We reply within 2 hours",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: MapPin,
        title: "Address",
        value: "Sector 62, Noida",
        subtitle: "Uttar Pradesh, India",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "9:00 AM – 9:00 PM",
        subtitle: "Monday to Saturday",
        gradient: "from-orange-500 to-red-500",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 sm:py-32">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
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
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-300 mb-6">
                        <Mail className="w-4 h-4" />
                        Get in Touch
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Us
                        </span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Have questions? We&apos;d love to hear from you. Reach out and we&apos;ll get back quickly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <Card className="h-full p-5 group cursor-pointer hover:border-white/20 transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div
                                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-xs text-white/40 mb-1">{item.title}</div>
                                        <div className="text-sm font-semibold text-white mb-1">{item.value}</div>
                                        <div className="text-xs text-white/40">{item.subtitle}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Card className="p-6">
                            <CardContent className="p-0 space-y-4">
                                <h3 className="text-lg font-semibold text-white mb-2">Send us a message</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input placeholder="Your name" />
                                    <Input type="email" placeholder="Your email" />
                                </div>
                                <Input placeholder="Subject" />
                                <textarea
                                    placeholder="Your message..."
                                    rows={4}
                                    className="flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
                                />
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button className="w-full gap-2">
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </Button>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
