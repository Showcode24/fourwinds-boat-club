"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { amenities, amenitiesByCategory } from "@/lib/data";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName];
  return Icon ? <Icon className="w-6 h-6 stroke-[1]" /> : null;
};

const expo = [0.19, 1, 0.22, 1];

export default function Amenities() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const currentCategory = amenitiesByCategory[selectedCategory];
  const categoryAmenities = amenities.filter((a) =>
    currentCategory.items.includes(a.title)
  );

  return (
    <section id="amenities" className="py-40 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT COLUMN: FIXED NAV & HEADER */}
          <div className="lg:w-1/3 lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: expo }}
              viewport={{ once: true }}
            >
              <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
                The Experience
              </span>
              <h2 className="text-6xl font-extralight tracking-tighter leading-[0.9] mb-12">
                Curated <br />
                <span className="text-white/20 italic">Lifestyle</span>
              </h2>

              <nav className="flex flex-col gap-6">
                {amenitiesByCategory.map((category, index) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(index)}
                    className="group flex items-center gap-4 text-left"
                  >
                    <div className="relative w-8 h-[1px] bg-white/10 overflow-hidden">
                      <motion.div
                        animate={{ x: selectedCategory === index ? 0 : "-100%" }}
                        className="absolute inset-0 bg-[#D4AF37]"
                      />
                    </div>
                    <span
                      className={`text-sm tracking-[0.2em] uppercase transition-all duration-500 ${
                        selectedCategory === index
                          ? "text-[#D4AF37] translate-x-2"
                          : "text-slate-500 group-hover:text-white"
                      }`}
                    >
                      {category.category}
                    </span>
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC LIST */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: expo }}
                className="space-y-px bg-white/5 border border-white/5"
              >
                {categoryAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-[#020617] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 flex-1">
                      <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors duration-500">
                        {getIcon(amenity.icon)}
                      </div>
                      <div className="max-w-md">
                        <h3 className="text-2xl font-extralight tracking-tight mb-2">
                          {amenity.title}
                        </h3>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>

                    <div className="overflow-hidden h-fit">
                      <motion.span 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        className="text-[10px] font-mono text-white/10 tracking-widest group-hover:text-[#D4AF37]/40 block transition-colors"
                      >
                        FACILITY_0{index + 1}
                      </motion.span>
                    </div>

                    {/* GSAP-STYLE HOVER LINE */}
                    <motion.div 
                      className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* BOTTOM DECORATIVE ELEMENT */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 flex justify-between items-center text-white/20"
            >
              <div className="text-[10px] tracking-[0.8em] uppercase font-bold">Lagos Maritime Prestige</div>
              <div className="w-20 h-px bg-white/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}