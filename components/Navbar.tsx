"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { Instagram, Linkedin, X } from "lucide-react";
import { useState, useEffect } from "react";

const expo = [0.19, 1, 0.22, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled
            ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: expo,
                  }}
                  className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* desktop CTA */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: expo,
              }}
              className="hidden md:block"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-2.5 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Complete Form
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              </a>
            </motion.div>

            {/* mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden ml-auto relative z-[200] w-10 h-10 flex flex-col justify-center items-center gap-[6px]"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: expo,
                }}
                className="block w-6 h-[2px] bg-white rounded-full"
              />

              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-[2px] bg-white/50 rounded-full"
              />

              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: expo,
                }}
                className="block w-6 h-[2px] bg-white rounded-full"
              />
            </button>
          </div>
        </div>

        <ScrollProgress />
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#020617] md:hidden"
          >
            {/* close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center text-white/40"
            >
              <X className="w-5 h-5" />
            </button>

            {/* menu */}
            <div className="h-full flex flex-col justify-center px-5 sm:px-8">
              <nav className="space-y-3 sm:space-y-4 max-h-[60vh] overflow-y-auto">
                {[...navigationItems].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    className="block px-4 py-3 sm:py-4 rounded-lg border border-white/10 hover:border-[#D4AF37]/40 group transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.1em] text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}

                {/* Complete form */}
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navigationItems.length * 0.08,
                  }}
                  className="block px-4 py-3 sm:py-4 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/60 group transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.1em] text-[#D4AF37] group-hover:text-white transition-colors">
                    Complete Form
                  </span>
                </motion.a>
              </nav>
            </div>

            {/* footer */}
            <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-bold">
                Lagos Maritime Elite
              </p>

              <div className="flex gap-5">
                <a href="#" className="text-white/30 hover:text-[#D4AF37]">
                  <Instagram className="w-4 h-4" />
                </a>

                <a href="#" className="text-white/30 hover:text-[#D4AF37]">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* scroll progress */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;

      const current = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;

      setProgress(max > 0 ? current / max : 0);
    };

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.03]">
      <motion.div
        className="h-full bg-[#D4AF37]"
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
