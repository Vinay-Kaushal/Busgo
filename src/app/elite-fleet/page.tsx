"use client";

import { useState } from "react";

const cars = [
  {
    id: 1,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    category: "Ultra Luxury",
    tagline: "The pinnacle of British craftsmanship",
    price: 25000,
    priceUnit: "per day",
    seats: 4,
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=85",
    badge: "Most Booked",
    badgeColor: "#C9A84C",
    features: ["Chauffeur Included", "Star-light Roof", "Bespoke Interior", "Privacy Glass"],
    events: ["Royal Wedding", "Corporate Event", "Airport Transfer"],
    color: "#1a1a1a",
  },
  {
    id: 2,
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    category: "Ultra Luxury SUV",
    tagline: "Effortless everywhere",
    price: 28000,
    priceUnit: "per day",
    seats: 5,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=85",
    badge: "Premium",
    badgeColor: "#8B0000",
    features: ["Chauffeur Included", "All-Terrain", "Panoramic Roof", "Rear Theatre"],
    events: ["Wedding Convoy", "VIP Pickup", "Film Shoot"],
    color: "#0f0f1a",
  },
  {
    id: 3,
    name: "Jaguar XJ Ultimate",
    brand: "Jaguar",
    category: "Executive Luxury",
    tagline: "Grace, Space, Pace — redefined",
    price: 12000,
    priceUnit: "per day",
    seats: 4,
    image: "https://images.unsplash.com/photo-1555652736-e92021d28a10?w=800&q=85",
    badge: "Popular",
    badgeColor: "#1a5276",
    features: ["Professional Driver", "Mood Lighting", "Premium Sound", "Tinted Glass"],
    events: ["Corporate Transfer", "Airport Pickup", "Special Occasion"],
    color: "#0a0f1e",
  },
  {
    id: 4,
    name: "BMW 7 Series M760",
    brand: "BMW",
    category: "Luxury Sedan",
    tagline: "The ultimate driving machine",
    price: 10000,
    priceUnit: "per day",
    seats: 4,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=85",
    badge: "Best Value",
    badgeColor: "#1e6b1e",
    features: ["Executive Chauffeur", "Massage Seats", "Night Vision", "Sky Lounge"],
    events: ["Business Meeting", "Graduation", "Anniversary"],
    color: "#0d1117",
  },
  {
    id: 5,
    name: "BMW X7 M60i",
    brand: "BMW",
    category: "Luxury SUV",
    tagline: "Bold presence, refined luxury",
    price: 14000,
    priceUnit: "per day",
    seats: 7,
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?w=800&q=85",
    badge: "Family Choice",
    badgeColor: "#4a1a6e",
    features: ["7 Seats", "Panoramic Sky Bar", "Harman Kardon Audio", "4x4 Capability"],
    events: ["Family Event", "Group Transfer", "Destination Wedding"],
    color: "#0f0f0f",
  },
  {
    id: 6,
    name: "Jaguar F-PACE SVR",
    brand: "Jaguar",
    category: "Performance SUV",
    tagline: "Fierce beauty, untamed performance",
    price: 11000,
    priceUnit: "per day",
    seats: 5,
    image: "https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?w=800&q=85",
    badge: "New",
    badgeColor: "#c0392b",
    features: ["550 BHP", "Sport Exhaust", "Performance Brakes", "Dynamic Handling"],
    events: ["Sporty Wedding Exit", "Photoshoot", "Corporate Launch"],
    color: "#120a0a",
  },
];

const events = [
  { icon: "💍", label: "Wedding & Baraat" },
  { icon: "✈️", label: "Airport Transfers" },
  { icon: "👑", label: "Royal Pickups" },
  { icon: "🎬", label: "Film & Photo Shoots" },
  { icon: "🏢", label: "Corporate Events" },
  { icon: "🎓", label: "Graduations" },
  { icon: "🥂", label: "Anniversary Dinners" },
  { icon: "🎪", label: "Special Occasions" },
];

export default function EliteFleetPage() {
  const [selectedCar, setSelectedCar] = useState<(typeof cars)[0] | null>(null);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", event: "", date: "", duration: "1", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [filterBrand, setFilterBrand] = useState("All");

  const brands = ["All", "Rolls-Royce", "Jaguar", "BMW"];
  const filtered = filterBrand === "All" ? cars : cars.filter(c => c.brand === filterBrand);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setSelectedCar(null); }, 3500);
  }

  return (
    <main style={{ background: "#080810", minHeight: "100vh", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .elite-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #050508;
        }
        .elite-hero-bg {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1920&q=80') center/cover;
          filter: brightness(0.18) saturate(0.8);
        }
        .elite-hero-grad {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(5,5,8,0.97) 0%, rgba(5,5,8,0.6) 50%, rgba(201,168,76,0.08) 100%);
        }
        .gold-line {
          display: inline-block;
          width: 60px; height: 2px;
          background: linear-gradient(90deg, #C9A84C, #F5D78E);
          margin-bottom: 20px;
        }
        .hero-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 20px;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 7vw, 7rem);
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: -1px;
          color: #fff;
          margin-bottom: 28px;
        }
        .hero-title em {
          font-style: italic;
          background: linear-gradient(135deg, #C9A84C, #F5D78E, #C9A84C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          font-size: 1.1rem;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          max-width: 520px;
          line-height: 1.8;
          margin-bottom: 48px;
          letter-spacing: 0.2px;
        }
        .btn-gold {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #C9A84C, #F5D78E, #C9A84C);
          background-size: 200% 200%;
          color: #080810;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
        }
        .btn-gold:hover {
          background-position: right center;
          box-shadow: 0 8px 40px rgba(201,168,76,0.4);
          transform: translateY(-2px);
        }
        .btn-outline-gold {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 36px;
          background: transparent;
          color: #C9A84C;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(201,168,76,0.5);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-outline-gold:hover {
          border-color: #C9A84C;
          background: rgba(201,168,76,0.06);
        }
        .stat-block { text-align: center; }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #C9A84C;
          line-height: 1;
          display: block;
        }
        .stat-label {
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 6px;
          display: block;
        }

        /* FLEET SECTION */
        .fleet-section { padding: 120px 0; background: #080810; }
        .section-eyebrow {
          font-size: 0.72rem; letter-spacing: 4px; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px; font-weight: 600;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 700; color: #fff; line-height: 1.05;
          margin-bottom: 16px;
        }
        .section-title em { font-style: italic; color: #C9A84C; }
        .section-sub { color: rgba(255,255,255,0.4); font-size: 0.95rem; font-weight: 300; max-width: 480px; }

        /* FILTER TABS */
        .filter-tabs { display: flex; gap: 8px; margin-bottom: 56px; flex-wrap: wrap; }
        .filter-tab {
          padding: 8px 22px; border: 1px solid rgba(201,168,76,0.2);
          background: transparent; color: rgba(255,255,255,0.45);
          font-family: 'DM Sans', sans-serif; font-size: 0.8rem;
          font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase;
          border-radius: 1px; cursor: pointer; transition: all 0.3s ease;
        }
        .filter-tab:hover { border-color: rgba(201,168,76,0.5); color: #C9A84C; }
        .filter-tab.active { background: rgba(201,168,76,0.1); border-color: #C9A84C; color: #C9A84C; }

        /* CAR CARDS */
        .cars-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 2px; }
        .car-card {
          position: relative; overflow: hidden; cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
          background: #0d0d18; border: 1px solid rgba(255,255,255,0.04);
        }
        .car-card:hover { border-color: rgba(201,168,76,0.3); z-index: 2; transform: scale(1.01); box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.08); }
        .car-img-wrap { position: relative; overflow: hidden; height: 240px; }
        .car-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
          filter: brightness(0.85) saturate(0.9);
        }
        .car-card:hover .car-img { transform: scale(1.08); filter: brightness(0.95) saturate(1); }
        .car-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, #0d0d18 0%, rgba(13,13,24,0.2) 60%, transparent 100%);
        }
        .car-badge-wrap { position: absolute; top: 16px; left: 16px; }
        .car-badge {
          padding: 4px 12px; font-size: 0.65rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; border-radius: 1px;
          color: #fff;
        }
        .car-category-tag {
          position: absolute; top: 16px; right: 16px;
          padding: 4px 12px; font-size: 0.65rem; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase;
          background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7); border-radius: 1px;
          backdrop-filter: blur(8px);
        }
        .car-body { padding: 28px 28px 32px; }
        .car-brand { font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; color: #C9A84C; margin-bottom: 8px; }
        .car-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem; font-weight: 700; color: #fff;
          margin-bottom: 10px; line-height: 1.1;
        }
        .car-tagline { font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.4); margin-bottom: 22px; font-style: italic; }
        .car-features { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
        .car-feat {
          padding: 4px 10px; font-size: 0.7rem; letter-spacing: 0.5px;
          border: 1px solid rgba(201,168,76,0.2); color: rgba(201,168,76,0.8);
          border-radius: 1px; font-weight: 500;
        }
        .car-footer { display: flex; justify-content: space-between; align-items: flex-end; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); }
        .car-price-label { font-size: 0.68rem; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 4px; }
        .car-price-val { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; color: #C9A84C; line-height: 1; }
        .car-price-unit { font-size: 0.72rem; color: rgba(255,255,255,0.3); font-weight: 300; }
        .car-seats { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: rgba(255,255,255,0.4); }
        .btn-reserve {
          padding: 10px 22px;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.4);
          color: #C9A84C; font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; border-radius: 1px; cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-reserve:hover { background: rgba(201,168,76,0.18); border-color: #C9A84C; }

        /* EVENTS SECTION */
        .events-section { padding: 100px 0; background: linear-gradient(180deg, #080810 0%, #0a0a14 100%); }
        .events-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1px; }
        .event-card {
          padding: 36px 24px; text-align: center;
          background: #0d0d18; border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s ease; cursor: default;
        }
        .event-card:hover { background: rgba(201,168,76,0.05); border-color: rgba(201,168,76,0.2); }
        .event-icon { font-size: 2.2rem; margin-bottom: 14px; display: block; }
        .event-label { font-size: 0.8rem; font-weight: 500; letter-spacing: 1px; color: rgba(255,255,255,0.6); }

        /* BOOKING MODAL */
        .modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(5,5,8,0.95); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal {
          background: #0d0d18; border: 1px solid rgba(201,168,76,0.2);
          max-width: 640px; width: 100%; max-height: 90vh; overflow-y: auto;
          animation: slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1);
          scrollbar-width: thin; scrollbar-color: #C9A84C #0d0d18;
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .modal-header { padding: 36px 36px 0; position: relative; }
        .modal-close {
          position: absolute; top: 24px; right: 24px; width: 36px; height: 36px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6); font-size: 1.2rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          border-radius: 1px; transition: all 0.2s ease;
        }
        .modal-close:hover { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.4); color: #C9A84C; }
        .modal-car-name { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .modal-car-brand { font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; color: #C9A84C; margin-bottom: 24px; }
        .modal-divider { height: 1px; background: linear-gradient(90deg, #C9A84C, transparent); margin: 0 36px; opacity: 0.3; }
        .modal-body { padding: 28px 36px 36px; }
        .form-label {
          display: block; font-size: 0.68rem; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 8px;
        }
        .form-label span { color: #C9A84C; }
        .form-input, .form-select, .form-textarea {
          width: 100%; padding: 13px 16px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
          color: #fff; font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
          outline: none; transition: all 0.3s ease; border-radius: 1px;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: rgba(201,168,76,0.5); background: rgba(201,168,76,0.04);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.08);
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.2); }
        .form-select option { background: #0d0d18; color: #fff; }
        .form-textarea { resize: vertical; min-height: 80px; }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { margin-bottom: 20px; }
        .success-state {
          text-align: center; padding: 60px 36px;
          animation: fadeIn 0.5s ease;
        }
        .success-icon { font-size: 3.5rem; margin-bottom: 20px; }
        .success-title { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 700; color: #C9A84C; margin-bottom: 12px; }
        .success-text { color: rgba(255,255,255,0.5); font-size: 0.9rem; line-height: 1.7; }

        /* GOLD DIVIDER */
        .gold-divider { display: flex; align-items: center; gap: 20px; margin: 0 auto 80px; max-width: 200px; }
        .gold-divider::before, .gold-divider::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5)); }
        .gold-divider::after { background: linear-gradient(90deg, rgba(201,168,76,0.5), transparent); }

        /* WHY US */
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1px; margin-top: 64px; }
        .why-card { padding: 40px 32px; background: #0d0d18; border: 1px solid rgba(255,255,255,0.04); transition: all 0.3s ease; }
        .why-card:hover { border-color: rgba(201,168,76,0.2); background: rgba(201,168,76,0.03); }
        .why-icon { font-size: 1.8rem; margin-bottom: 20px; display: block; }
        .why-title { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .why-text { font-size: 0.85rem; color: rgba(255,255,255,0.35); line-height: 1.75; font-weight: 300; }

        /* CONTAINER */
        .container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        @media (max-width: 768px) {
          .cars-grid { grid-template-columns: 1fr; }
          .form-grid-2 { grid-template-columns: 1fr; }
          .hero-title { font-size: clamp(2.8rem, 10vw, 5rem); }
          .events-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .modal-body, .modal-header { padding-left: 24px; padding-right: 24px; }
          .modal-divider { margin: 0 24px; }
          .container { padding: 0 20px; }
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.6rem; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="elite-hero">
        <div className="elite-hero-bg" />
        <div className="elite-hero-grad" />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 140, paddingBottom: 100 }}>
          <p className="hero-eyebrow">Elite Fleet — Prestige Car Hire</p>
          <div className="gold-line" />
          <h1 className="hero-title">
            Arrive in<br />
            <em>Absolute</em><br />
            Luxury.
          </h1>
          <p className="hero-desc">
            Rolls-Royce. Jaguar. BMW. Our handpicked fleet of the world's finest motorcars — available for your wedding, event, corporate occasion, or any moment that demands something extraordinary.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#fleet" className="btn-gold">
              Explore Fleet
              <span style={{ fontSize: "1rem" }}>↓</span>
            </a>
            <a href="#booking-enquiry" className="btn-outline-gold">
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: 56, marginTop: 80,
            paddingTop: 48, borderTop: "1px solid rgba(201,168,76,0.15)",
            flexWrap: "wrap"
          }}>
            {[
              { num: "6+", label: "Prestige Vehicles" },
              { num: "500+", label: "Events Served" },
              { num: "100%", label: "Chauffeur Driven" },
              { num: "24/7", label: "Concierge Support" },
            ].map(s => (
              <div key={s.label} className="stat-block">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS WE SERVE ── */}
      <section className="events-section">
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: "center" }}>Occasions</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 8 }}>
            Every Moment, <em>Elevated</em>
          </h2>
          <p className="section-sub" style={{ textAlign: "center", margin: "0 auto 56px" }}>
            From grand weddings to intimate airport transfers — we bring prestige to every occasion
          </p>
          <div className="events-grid">
            {events.map(ev => (
              <div key={ev.label} className="event-card">
                <span className="event-icon">{ev.icon}</span>
                <p className="event-label">{ev.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section className="fleet-section" id="fleet">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
            <div>
              <p className="section-eyebrow">Our Fleet</p>
              <h2 className="section-title">Handpicked <em>Icons</em><br />of Motoring</h2>
              <p className="section-sub">Every vehicle in our fleet is maintained to showroom standard</p>
            </div>
          </div>

          {/* Filter */}
          <div className="filter-tabs">
            {brands.map(b => (
              <button
                key={b}
                className={`filter-tab ${filterBrand === b ? "active" : ""}`}
                onClick={() => setFilterBrand(b)}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="cars-grid">
            {filtered.map(car => (
              <div key={car.id} className="car-card" onClick={() => setSelectedCar(car)}>
                <div className="car-img-wrap">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="car-img"
                    loading="lazy"
                  />
                  <div className="car-img-overlay" />
                  <div className="car-badge-wrap">
                    <span className="car-badge" style={{ background: car.badgeColor }}>{car.badge}</span>
                  </div>
                  <span className="car-category-tag">{car.category}</span>
                </div>
                <div className="car-body">
                  <p className="car-brand">{car.brand}</p>
                  <h3 className="car-name">{car.name}</h3>
                  <p className="car-tagline">{car.tagline}</p>
                  <div className="car-features">
                    {car.features.map(f => <span key={f} className="car-feat">{f}</span>)}
                  </div>
                  <div className="car-footer">
                    <div>
                      <p className="car-price-label">Starting from</p>
                      <span className="car-price-val">₹{car.price.toLocaleString("en-IN")}</span>
                      <span className="car-price-unit"> /{car.priceUnit}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
                      <div className="car-seats">
                        <span>👤</span> {car.seats} seats
                      </div>
                      <button className="btn-reserve" onClick={e => { e.stopPropagation(); setSelectedCar(car); }}>
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "100px 0", background: "#050508" }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <p className="section-eyebrow">The Difference</p>
            <h2 className="section-title">The <em>Elite Fleet</em> Promise</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              We don't just provide cars — we deliver experiences that outlast the journey
            </p>
          </div>
          <div className="why-grid">
            {[
              { icon: "🎩", title: "Professional Chauffeurs", text: "Uniformed, trained, and discreet. Our drivers are more than just drivers — they're your personal concierge on wheels." },
              { icon: "✨", title: "Showroom Condition", text: "Every car is detailed, polished, and inspected before each booking. You will always receive a vehicle at its absolute best." },
              { icon: "📱", title: "White Glove Service", text: "From the moment you enquire to the final drop-off — we handle every detail so you can focus on your moment." },
              { icon: "🔒", title: "Fully Insured", text: "Complete commercial insurance, background-verified drivers, and GPS tracking on every vehicle for your peace of mind." },
              { icon: "⏰", title: "Punctual, Always", text: "We arrive 15 minutes early — every time. Your schedule is sacred and we treat it that way." },
              { icon: "📸", title: "Photo-Ready Presentation", text: "Our cars are dressed for the occasion. Perfect for wedding photography, entrance shots, and social media moments." },
            ].map(w => (
              <div key={w.title} className="why-card">
                <span className="why-icon">{w.icon}</span>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-text">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ENQUIRY SECTION ── */}
      <section id="booking-enquiry" style={{ padding: "100px 0", background: "#080810" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="section-eyebrow">Reservations</p>
            <h2 className="section-title">Request a <em>Private</em> Quote</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Our team will personally curate the perfect vehicle and package for your occasion
            </p>
          </div>
          <div style={{
            background: "#0d0d18", border: "1px solid rgba(201,168,76,0.2)",
            padding: "48px"
          }}>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3500); }}>
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">✨</div>
                  <h3 className="success-title">Enquiry Received</h3>
                  <p className="success-text">Our concierge team will contact you within 2 hours to discuss your requirements personally.</p>
                </div>
              ) : (
                <>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name <span>*</span></label>
                      <input type="text" className="form-input" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone <span>*</span></label>
                      <input type="tel" className="form-input" placeholder="+91 00000 00000" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email <span>*</span></label>
                      <input type="email" className="form-input" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Event Type <span>*</span></label>
                      <select className="form-select" required value={form.event} onChange={e => setForm({ ...form, event: e.target.value })}>
                        <option value="">Select occasion</option>
                        {events.map(ev => <option key={ev.label} value={ev.label}>{ev.icon} {ev.label}</option>)}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Event Date <span>*</span></label>
                      <input type="date" className="form-input" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Duration (Days)</label>
                      <select className="form-select" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })}>
                        {["1", "2", "3", "4", "5", "6", "7"].map(d => <option key={d} value={d}>{d} day{d !== "1" ? "s" : ""}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Requirements</label>
                    <textarea className="form-textarea form-input" placeholder="Tell us more — preferred car, special decorations, pickup location, timing details..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "18px", fontSize: "0.82rem", letterSpacing: "3px" }}>
                    Submit Enquiry ✦
                  </button>
                  <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", marginTop: 16, letterSpacing: 0.5 }}>
                    🔒 Your details are confidential. We respond within 2 hours.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── BOOKING MODAL (car-specific) ── */}
      {selectedCar && (
        <div className="modal-overlay" onClick={() => setSelectedCar(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={() => setSelectedCar(null)}>✕</button>
              <p className="modal-car-brand">{selectedCar.brand} · {selectedCar.category}</p>
              <h2 className="modal-car-name">{selectedCar.name}</h2>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
                {selectedCar.features.map(f => <span key={f} className="car-feat">{f}</span>)}
              </div>
            </div>
            <div className="modal-divider" />
            <div className="modal-body">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">✨</div>
                  <h3 className="success-title">Reservation Requested!</h3>
                  <p className="success-text">Our concierge will reach out within 2 hours to confirm your {selectedCar.name} booking.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name <span>*</span></label>
                      <input type="text" className="form-input" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone <span>*</span></label>
                      <input type="tel" className="form-input" placeholder="+91 00000 00000" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Event Date <span>*</span></label>
                      <input type="date" className="form-input" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Event Type <span>*</span></label>
                      <select className="form-select" required value={form.event} onChange={e => setForm({ ...form, event: e.target.value })}>
                        <option value="">Select occasion</option>
                        {events.map(ev => <option key={ev.label} value={ev.label}>{ev.icon} {ev.label}</option>)}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Special Requests</label>
                    <textarea className="form-textarea form-input" placeholder="Decorations, pickup point, timing, any special requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: 20 }}>
                    <div>
                      <p className="car-price-label">Estimated price</p>
                      <span className="car-price-val" style={{ fontSize: "1.6rem" }}>₹{selectedCar.price.toLocaleString("en-IN")}</span>
                      <span className="car-price-unit"> /day</span>
                    </div>
                    <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", textAlign: "right", maxWidth: 180 }}>Final price confirmed after enquiry</span>
                  </div>
                  <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "0.8rem", letterSpacing: "2.5px" }}>
                    Request Reservation ✦
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
