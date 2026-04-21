"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { Anchor, Menu, X, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const expo = [0.19, 1, 0.22, 1];

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll logic for the floating "dock" effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] transition-all duration-700 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-10">
          <div className="flex items-center justify-between pointer-events-auto">
            {/* LOGO SECTION */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 text-white group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: expo }}
            >
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#D4AF37] transition-colors duration-500">
                <Image
                  src="/images/img/club-logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <span className="font-bold tracking-[0.5em] text-xs uppercase hidden sm:block group-hover:tracking-[0.6em] transition-all duration-500">
                Fourwinds Boat Club
              </span>
            </motion.a>

            {/* DESKTOP NAVIGATION: FLOATING CAPSULE */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-700 ${
                scrolled
                  ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  : "bg-transparent border-transparent"
              }`}
            >
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-6 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group font-bold"
                >
                  {item}
                  <motion.span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-1/2 transition-all duration-500" />
                </a>
              ))}

              {/* PRIMARY CALL TO ACTION */}
              <button className="ml-4 px-8 py-2.5 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:scale-105 transition-all duration-500 shadow-lg shadow-[#D4AF37]/20">
                Inquire
              </button>
            </motion.nav>

            {/* MENU TOGGLE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[110] w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white hover:border-[#D4AF37] transition-colors overflow-hidden"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.6, ease: expo }}
              >
                {isOpen ? (
                  <X className="w-5 h-5 stroke-[1.5]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#020617] flex flex-col justify-center items-center"
          >
            {/* BACKGROUND DECORATIVE GRID */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "100px 100px",
              }}
            />

            {/* NAV LINKS */}
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10">
              {navigationItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: i * 0.1, ease: expo, duration: 0.8 }}
                  className="group relative"
                >
                  <span className="text-5xl md:text-9xl font-bold tracking-tighter text-white/10 group-hover:text-[#D4AF37] transition-all duration-700 block">
                    {item}
                  </span>

                  {/* FLOATING INDEX NUMBER */}
                  <motion.span className="absolute -top-2 -right-10 text-xs md:text-sm font-mono font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500">
                    / 0{i + 1}
                  </motion.span>

                  {/* STRIKE-THROUGH HOVER EFFECT */}
                  <motion.div className="absolute top-1/2 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-700 pointer-events-none" />
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 px-12 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Request Access
              </motion.button>
            </div>

            {/* OVERLAY FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex flex-col items-center gap-6"
            >
              <div className="flex gap-10">
                <a
                  href="#"
                  className="text-white/40 hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/40 hover:text-[#D4AF37] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[9px] tracking-[0.6em] uppercase text-white/20 font-bold">
                Lagos Maritime Elite
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
