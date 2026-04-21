"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clubInfo } from "@/lib/data";

export default function Hero() {
  const GOLDBEAM = "#D4AF37"; // Authentic Metallic Gold

  const revealVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Layer: Slow Cinematic Expansion */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/img/Boat Club Night View-2.png"
          alt="Fourwinds Boat Club"
          fill
          priority
          className="object-cover object-center brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="max-w-6xl w-full text-center space-y-10"
        >
          {/* Tagline Reveal */}
          <div className="overflow-hidden">
            <motion.p
              variants={revealVariant}
              className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-[#D4AF37]"
            >
              {clubInfo.tagline}
            </motion.p>
          </div>

          {/* Headline Reveal */}
          <div className="overflow-hidden">
            <motion.h1
              variants={revealVariant}
              className="text-5xl md:text-8xl lg:text-9xl font-extralight text-white leading-none tracking-tighter"
            >
              {clubInfo.subtitle}
            </motion.h1>
          </div>

          {/* Description & CTA Group */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1.2 },
              },
            }}
            className="flex flex-col items-center space-y-12"
          >
            <p className="max-w-xl text-slate-300/80 text-sm md:text-lg font-light leading-relaxed tracking-wide">
              {clubInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Primary: Tangible & Heavy */}
              <button className="relative group px-12 py-5 bg-white text-slate-950 overflow-hidden transition-transform active:scale-95">
                <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Explore Amenities
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
              </button>

              {/* Secondary: Minimalist Border */}
              <button className="px-12 py-5 border border-white/20 text-white hover:border-white transition-colors duration-500 active:scale-95">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Request Brochure
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Scroll Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>

      {/* Edge Vignette for depth */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </section>
  );
}
