"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Bus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


import Link from "next/link";

interface NavbarProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Trips", href: "/#trips" },
    { label: "Group Booking", href: "/#booking" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          padding: 18px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header.scrolled {
          background: rgba(8, 8, 16, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 12px 0;
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }
        .header-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .header-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 1.35rem; font-weight: 700;
          letter-spacing: -0.3px; flex-shrink: 0;
        }
        .logo-icon {
          width: 34px; height: 34px; border-radius: 8px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .header-nav {
          display: flex; align-items: center; gap: 2px;
          list-style: none; flex: 1; justify-content: center;
        }
        .header-nav a {
          text-decoration: none; color: rgba(255,255,255,0.6);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 500;
          padding: 8px 14px; border-radius: 8px;
          transition: all 0.2s ease; white-space: nowrap;
        }
        .header-nav a:hover { color: #fff; background: rgba(255,255,255,0.07); }

        .header-actions {
          display: flex; align-items: center; gap: 10px; flex-shrink: 0;
        }

        /* ── ELITE FLEET BUTTON ── */
        .btn-elite {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 18px;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.5);
          color: #C9A84C;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          border-radius: 4px; cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }
        .btn-elite::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05));
          opacity: 0; transition: opacity 0.3s ease;
        }
        .btn-elite:hover {
          border-color: #C9A84C;
          color: #F5D78E;
          box-shadow: 0 0 20px rgba(201,168,76,0.2), 0 4px 16px rgba(201,168,76,0.1);
          transform: translateY(-1px);
        }
        .btn-elite:hover::before { opacity: 1; }
        .btn-elite-icon { font-size: 0.9rem; }

        /* ── BOOK NOW BUTTON ── */
        .btn-book-now {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 600;
          border: none; border-radius: 8px; cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(249,115,22,0.35);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .btn-book-now:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(249,115,22,0.5);
        }

        /* HAMBURGER */
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: rgba(255,255,255,0.8); border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* MOBILE MENU */
        .mobile-menu {
          display: none; position: fixed; inset: 0; top: 65px;
          background: rgba(8,8,16,0.98); backdrop-filter: blur(20px);
          z-index: 998; flex-direction: column;
          align-items: center; justify-content: center; gap: 8px;
          padding: 40px 24px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          text-decoration: none; color: rgba(255,255,255,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 1.1rem; font-weight: 500;
          padding: 14px 32px; border-radius: 10px;
          transition: all 0.2s ease; width: 100%; text-align: center;
        }
        .mobile-menu a:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .mobile-menu-divider {
          width: 100%; height: 1px;
          background: rgba(201,168,76,0.2);
          margin: 8px 0;
        }
        .mobile-elite-btn {
          width: 100%; padding: 14px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.4);
          color: #C9A84C;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          border-radius: 4px; text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .mobile-elite-btn:hover {
          background: rgba(201,168,76,0.15);
          border-color: #C9A84C;
          color: #F5D78E !important;
        }
        .mobile-book-btn {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          border-radius: 8px; text-align: center;
          text-decoration: none; border: none;
          box-shadow: 0 4px 16px rgba(249,115,22,0.35);
        }

        @media (max-width: 900px) {
          .header-nav { display: none; }
          .btn-elite { display: none; }
          .btn-book-now { display: none; }
          .hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .header-inner { padding: 0 20px; }
        }
      `}</style>

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <div className="logo-icon">🚌</div>
            BusGo
          </Link>

          {/* Desktop Nav */}
          <ul className="header-nav">
            {navLinks.map(link => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="header-actions">
            {/* ✨ NEW — Elite Fleet Button */}
            <Link href="/elite-fleet" className="btn-elite">
              <span className="btn-elite-icon">✦</span>
              Elite Fleet
            </Link>

            {/* Book Now */}
            <Link href="/#booking" className="btn-book-now">
              Book Now
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map(link => (
          <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
        <div className="mobile-menu-divider" />
        <Link href="/elite-fleet" className="mobile-elite-btn" onClick={() => setMobileOpen(false)}>
          ✦ Elite Fleet
        </Link>
        <Link href="/#booking" className="mobile-book-btn" onClick={() => setMobileOpen(false)}>
          Book Now
        </Link>
      </div>
    </>
  );
}