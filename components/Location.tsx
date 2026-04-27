"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { MapPin, Navigation, Anchor } from "lucide-react";

const transition: Transition = {
  duration: 1.1,
  ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
};

export default function LocationSection() {
  const details = [
    {
      icon: Anchor,
      label: "The Club",
      val: "Fourwinds Boat Club",
    },
    {
      icon: MapPin,
      label: "Address",
      val: "Gracefield Island, Lekki Peninsula, Lagos, Nigeria",
    },
    {
      icon: Navigation,
      label: "Nearest Landmark",
      val: "Chevron Drive, Lekki Peninsula II",
    },
  ];

  return (
    <section className="py-48 px-6 bg-[#dee3e8] text-[#4c6c84] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* EDITORIAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
              viewport={{ once: true }}
              className="text-[#af8f47] text-[10px] font-extrabold tracking-[0.6em] uppercase mb-6 block"
            >
              Find Us
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ...transition, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-light tracking-tighter leading-none text-[#4c6c84]"
              >
                The{" "}
                <span className="text-[#4c6c84]/30 italic">Club</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-[#af8f47] font-normal text-sm max-w-xs border-l border-[#4c6c84]/20 pl-8 leading-relaxed"
          >
            Nestled on the shores of Gracefield Island, Lekki Peninsula —
            Lagos' most distinguished waterfront address.
          </motion.p>
        </div>

        {/* MAP + DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#4c6c84]/15">

          {/* MAP — spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 border-b md:border-b-0 md:border-r border-[#4c6c84]/15 hover:bg-[#4c6c84]/4 transition-colors duration-700"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-[#af8f47] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />

            <div className="relative p-12 lg:p-16 h-full flex flex-col">
              <span className="text-[10px] font-semibold font-mono text-[#4c6c84]/40 mb-8 block">
                COORDINATES — 6.4744N, 3.5244E
              </span>

              <div className="relative overflow-hidden flex-1 min-h-[400px]">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#af8f47] z-10 pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#af8f47] z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717!2d3.5244!3d6.4744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjgnMjcuOCJOIDPCsDMxJzI3LjgiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    // Filter removed to restore original map colors
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* LOCATION DETAILS — 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.25 }}
            viewport={{ once: true }}
            className="group relative p-12 lg:p-16 hover:bg-[#4c6c84]/4 transition-colors duration-700 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-[#af8f47] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />

            <div className="space-y-12">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...transition, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="group/item cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-3 h-3 text-[#af8f47]/60 group-hover/item:text-[#af8f47] transition-colors" />
                    <p className="text-[10px] uppercase tracking-widest text-[#4c6c84]/40 group-hover/item:text-[#af8f47] transition-colors">
                      {item.label}
                    </p>
                  </div>
                  <p className="text-base font-normal text-[#4c6c84] group-hover/item:translate-x-2 transition-transform duration-500 leading-snug">
                    {item.val}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* DIRECTIONS CTA */}
            <a 
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta relative inline-block pt-6 cursor-pointer mt-16"
            >
              <span className="text-[11px] font-black tracking-[0.4em] uppercase text-[#af8f47] group-hover/cta:tracking-[0.5em] transition-all duration-500">
                Get Directions +
              </span>
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#af8f47]/20" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#af8f47] scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}