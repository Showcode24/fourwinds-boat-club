"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { exclusiveEvents } from "@/lib/data";
import * as Icons from "lucide-react";
import { useRef } from "react";

type IconName = keyof typeof Icons;

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName];
  return Icon ? <Icon className="w-6 h-6 stroke-[1]" /> : null;
};

const expo = [0.19, 1, 0.22, 1];

export default function ExclusiveEvents() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      id="events"
      className="py-60 bg-[#020617] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER: CINEMATIC REVEAL */}
        <div className="mb-40 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, tracking: "0.2em" }}
            whileInView={{ opacity: 1, tracking: "0.8em" }}
            transition={{ duration: 1.5, ease: expo }}
            className="text-[#D4AF37] text-[10px] font-bold uppercase mb-8 block"
          >
            The Calendar
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1.2, ease: expo }}
              className="text-7xl md:text-9xl font-extralight tracking-tighter leading-none"
            >
              Exclusive <span className="text-white/20 italic">Events</span>
            </motion.h2>
          </div>
        </div>

        {/* TIMELINE LIST */}
        <div className="relative">
          {/* Vertical Timeline Path */}
          <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-white/5 -translate-x-1/2" />

          <div className="space-y-32">
            {exclusiveEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: expo }}
                  viewport={{ margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center justify-between gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CENTRAL INDICATOR */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-3 h-3 bg-[#D4AF37] rounded-full -translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_20px_#D4AF37]" />

                  {/* CONTENT SIDE */}
                  <div
                    className={`w-full md:w-[42%] ${isEven ? "md:text-right" : "md:text-left"} group`}
                  >
                    <span className="text-[10px] font-mono text-[#D4AF37] mb-4 block tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                      EVENT_SESSION_0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">
                      {event.name}
                    </h3>
                    <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base max-w-md ml-auto mr-0">
                      {event.description}
                    </p>
                  </div>

                  {/* VISUAL/ICON SIDE */}
                  <div className="w-full md:w-[42%] flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: isEven ? 5 : -5 }}
                      className="w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full flex items-center justify-center relative group cursor-crosshair"
                    >
                      <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative z-10 text-white/20 group-hover:text-[#D4AF37] transition-colors duration-500">
                        {getIcon(event.icon)}
                      </div>

                      {/* Rotating Ring on Hover */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="48%"
                          stroke="#D4AF37"
                          strokeWidth="1"
                          fill="none"
                          strokeDasharray="10 5"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION: BRUTALIST STYLE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-60 pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-left">
            <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-white/40 mb-2">
              Membership Access
            </h4>
            <p className="text-xl font-light text-white">
              Reserved for Platinum & Gold Tiers Only.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-500 cursor-pointer"
          >
            Request Invitation
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
