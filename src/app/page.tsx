"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trips from "@/components/Trips";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SuccessModal from "@/components/SuccessModal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleBookingSuccess = useCallback(() => {
    setShowSuccess(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <Trips onBook={() => handleNavigate("booking")} />
      <BookingForm onSuccess={handleBookingSuccess} />
      <About />
      <Contact />
      <Footer onNavigate={handleNavigate} />
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}
