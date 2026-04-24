"use client";

import { motion } from "framer-motion";
import { clubInfo, navigationItems } from "@/lib/data";
import {
  ArrowUpRight,
  Anchor,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const expo = [0.19, 1, 0.22, 1];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#020617] pt-40 pb-10 overflow-hidden border-t border-white/5">
      {/* MASSIVE BACKGROUND LOGO - PRESTIGE EFFECT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none pointer-events-none">
        <h1 className="text-[25vw] font-black text-white/[0.02] tracking-tighter leading-none">
          FOURWINDS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-40">
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 text-[#D4AF37]">
              <Image
                src="/images/img/club-logo.png"
                alt="logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-normal tracking-[0.2em] uppercase">
                Fourwinds Boat Club
              </span>
            </div>
            <p className="text-slate-400 font-light text-lg leading-relaxed max-w-sm">
              West Africa&apos;s most iconic private maritime sanctuary. Defined
              by the horizon, curated for the distinguished.
            </p>
            <div className="flex gap-6 pt-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, color: "#D4AF37" }}
                  className="text-slate-600 transition-colors"
                >
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: ARCHITECTURAL NAV */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
              The Club
            </h4>
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-sm font-light"
                  >
                    <span className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all duration-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: GLOBAL ACCESS */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
              Membership
            </h4>
            <ul className="space-y-4 text-sm font-light text-white/60">
              {["Regular", "Foreign", "Corporate"].map((tier) => (
                <li key={tier}>
                  <a
                    href="#membership"
                    className="hover:text-white transition-colors"
                  >
                    {tier} Tier
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#D4AF37] group"
                >
                  Apply for Admission
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SCROLL TO TOP */}
          <div className="lg:col-span-1 flex lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:border-[#D4AF37] transition-colors"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* BOTTOM BAR: TECHNICAL DATA */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-[10px] font-mono tracking-widest text-slate-600">
            <span>© 2026 FOURWINDS BOAT CLUB</span>
            <span className="hidden md:block">
              LAT 6.4492° N / LONG 3.4736° E
            </span>
          </div>

          <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Concierge
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
