"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import YachtGallery from "@/components/YachtGallery";
import Membership from "@/components/Membership";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import LocationSection from "@/components/Location";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(true);

  return (
    <main className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* COMING SOON OVERLAY */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 px-6 text-center"
          >
            {/* Background blur effect to tease the site */}
            <div className="absolute inset-0 bg-[url('/images/img/Boat-Club-Night-View-2.png')] bg-cover bg-center opacity-20 blur-sm" />

            <div className="relative z-10 space-y-8">
              <motion.span
                initial={{ opacity: 0, tracking: "0.2em" }}
                animate={{ opacity: 1, tracking: "0.5em" }}
                transition={{ duration: 2 }}
                className="text-[#D4AF37] text-xs font-bold uppercase"
              >
                Horizon in Sight
              </motion.span>

              <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tighter">
                Coming <span className="italic text-white/40">Soon</span>
              </h1>

              <p className="max-w-md mx-auto text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Our physical clubhouse at Gracefield Island is currently under
                construction. In the meantime, explore our digital home and
                membership tiers.
              </p>

              <button
                onClick={() => setShowComingSoon(false)}
                className="group relative px-10 py-4 border border-[#D4AF37] text-[#D4AF37] overflow-hidden transition-all hover:text-slate-950"
              >
                <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Enter Website
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT - Always rendered, but hidden behind overlay initially */}
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Hero />
      <YachtGallery />
      <Membership />
      <Services />
      <Testimonials />
      <LocationSection />
      <BookingForm />
      <Footer />
    </main>
  );
}
