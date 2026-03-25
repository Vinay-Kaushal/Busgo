"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    User,
    Mail,
    Phone,
    Users,
    MapPin,
    Calendar,
    Bus,
    Trash2,
    Plus,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

interface Member {
    name: string;
    age: string;
    gender: string;
}

interface BookingFormProps {
    onSuccess: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
    const [leaderName, setLeaderName] = useState("");
    const [leaderEmail, setLeaderEmail] = useState("");
    const [leaderPhone, setLeaderPhone] = useState("");
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [travelDate, setTravelDate] = useState("");
    const [members, setMembers] = useState<Member[]>([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [busType, setBusType] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!formRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, y: 50 },
                            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
                        );
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer.observe(formRef.current);
        return () => observer.disconnect();
    }, []);

    const addMember = () => {
        setMembers([...members, { name: "", age: "", gender: "" }]);
    };

    const removeMember = (index: number) => {
        setMembers(members.filter((_, i) => i !== index));
    };

    const updateMember = (index: number, field: keyof Member, value: string) => {
        const updated = [...members];
        updated[index][field] = value;
        setMembers(updated);
    };

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            onSuccess();
        }, 2000);
    }, [onSuccess]);

    const cities = [
        "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad",
        "Pune", "Kolkata", "Jaipur", "Goa", "Vizag", "Darjeeling",
    ];


    const handleConfirmBooking = () => {
    // 1. Define the owner's WhatsApp number
    const ownerNumber = "918400309801"; 

    // 2. Construct the message string (using your form state)
    // Replace these variables with your actual state variables
    const message = `*New Group Booking Request*%0A` +
        `--------------------------%0A` +
        `*Leader:* ${leaderName}%0A` +
        `*Phone:* ${leaderPhone}%0A` +
        `*From:* ${fromLocation}%0A` +
        `*To:* ${toLocation}%0A` +
        `*Date:* ${travelDate}%0A` +
        `*Bus Type:* ${busType}%0A` +
        `--------------------------%0A` +
        `*Members:*%0A${members.map((m, i) => `${i + 1}. ${m.name}`).join('%0A')}`;

    // 3. Redirect the user
    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
};

    return (
        <section id="booking" className="relative py-24 sm:py-32">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300 mb-6">
                        <Users className="w-4 h-4" />
                        Group Booking
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Book for Your{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Group
                        </span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Fill in the details below to book tickets for your entire group in one go
                    </p>
                </motion.div>

                {/* Form */}
                <div ref={formRef} className="opacity-0">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Leader Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-lg">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                        <User className="w-4 h-4 text-white" />
                                    </div>
                                    Leader Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5" /> Full Name
                                    </label>
                                    <Input
                                        placeholder="John Doe"
                                        value={leaderName}
                                        onChange={(e) => setLeaderName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <Mail className="w-3.5 h-3.5" /> Email
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={leaderEmail}
                                        onChange={(e) => setLeaderEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <Phone className="w-3.5 h-3.5" /> Phone
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={leaderPhone}
                                        onChange={(e) => setLeaderPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Group Members */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-3 text-lg">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                            <Users className="w-4 h-4 text-white" />
                                        </div>
                                        Group Members
                                        {members.length > 0 && (
                                            <span className="text-sm font-normal text-white/40">
                                                ({members.length} {members.length === 1 ? "member" : "members"})
                                            </span>
                                        )}
                                    </CardTitle>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button type="button" onClick={addMember} size="sm" className="gap-1.5">
                                            <Plus className="w-4 h-4" />
                                            Add Member
                                        </Button>
                                    </motion.div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {members.length === 0 ? (
                                    <div className="text-center py-8 text-white/30">
                                        <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                        <p className="text-sm">No members added yet. Click &ldquo;Add Member&rdquo; to start.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <AnimatePresence mode="popLayout">
                                            {members.map((member, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, height: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, height: "auto", scale: 1 }}
                                                    exit={{ opacity: 0, height: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                    className="relative"
                                                >
                                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs text-white/40">Member {index + 1} Name</label>
                                                            <Input
                                                                placeholder="Member name"
                                                                value={member.name}
                                                                onChange={(e) => updateMember(index, "name", e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs text-white/40">Age</label>
                                                            <Input
                                                                type="number"
                                                                placeholder="Age"
                                                                min="1"
                                                                max="120"
                                                                value={member.age}
                                                                onChange={(e) => updateMember(index, "age", e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="space-y-1.5">
                                                            <label className="text-xs text-white/40">Gender</label>
                                                            <Select
                                                                value={member.gender}
                                                                onChange={(e) => updateMember(index, "gender", e.target.value)}
                                                                required
                                                            >
                                                                <option value="" disabled>Select</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                                <option value="other">Other</option>
                                                            </Select>
                                                        </div>
                                                        <div className="flex items-end">
                                                            <motion.button
                                                                type="button"
                                                                onClick={() => removeMember(index)}
                                                                className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer"
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Travel Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-lg">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    Travel Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5" /> From
                                    </label>
                                    <Select value={from} onChange={(e) => setFrom(e.target.value)} required>
                                        <option value="" disabled>Select departure</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5" /> To
                                    </label>
                                    <Select value={to} onChange={(e) => setTo(e.target.value)} required>
                                        <option value="" disabled>Select destination</option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> Date
                                    </label>
                                    <Input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/50 flex items-center gap-1.5">
                                        <Bus className="w-3.5 h-3.5" /> Bus Type
                                    </label>
                                    <Select value={busType} onChange={(e) => setBusType(e.target.value)} required>
                                        <option value="" disabled>Select bus type</option>
                                        <option value="sleeper">AC Sleeper</option>
                                        <option value="semi-sleeper">AC Semi-Sleeper</option>
                                        <option value="seater">AC Seater</option>
                                        <option value="non-ac">Non-AC Seater</option>
                                        <option value="volvo">Volvo Multi-Axle</option>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Submit */}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full text-base gap-2"
                                disabled={isSubmitting}
                                onClick={handleConfirmBooking}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5" />
                                        Confirm Group Booking
                                        <CheckCircle2 className="w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </section>
    );
}
