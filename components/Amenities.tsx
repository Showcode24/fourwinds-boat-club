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
    currentCategory.items.includes(a.title),
  );

  return (
    <section id="amenities" className="py-40 bg-[#dee3e8] text-[#4c6c84]">
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
              <span className="text-[#af8f47] text-[10px] font-extrabold tracking-[0.5em] uppercase mb-4 block">
                The Experience
              </span>
              <h2 className="text-6xl font-light tracking-tighter leading-[0.9] mb-12 text-[#4c6c84]">
                Curated <br />
                <span className="text-[#4c6c84] italic">Lifestyle</span>
              </h2>

              <nav className="flex flex-col gap-6">
                {amenitiesByCategory.map((category, index) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(index)}
                    className="group flex items-center gap-4 text-left"
                  >
                    <div className="relative w-8 h-[1px] bg-[#4c6c84]/20 overflow-hidden">
                      <motion.div
                        animate={{
                          x: selectedCategory === index ? 0 : "-100%",
                        }}
                        className="absolute inset-0 bg-[#af8f47]"
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-500 ${
                        selectedCategory === index
                          ? "text-[#af8f47] translate-x-2"
                          : "text-[#4c6c84]/40 group-hover:text-[#4c6c84]"
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
                className="space-y-px bg-[#4c6c84]/5 border border-[#4c6c84]/10"
              >
                {categoryAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-[#dee3e8] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-[#4c6c84]/[0.04] transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 flex-1">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#4c6c84]/20 rounded-full text-[#af8f47] group-hover:border-[#af8f47]/50 transition-colors duration-500">
                        {getIcon(amenity.icon)}
                      </div>
                      <div className="max-w-md">
                        <h3 className="text-2xl font-normal tracking-tight mb-2 text-[#4c6c84]">
                          {amenity.title}
                        </h3>
                        <p className="text-[#af8f47] text-sm font-normal leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>

                    <div className="overflow-hidden h-fit">
                      <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        className="text-[10px] font-mono font-semibold text-[#4c6c84] tracking-widest group-hover:text-[#af8f47]/60 block transition-colors"
                      >
                        FACILITY_0{index + 1}
                      </motion.span>
                    </div>

                    {/* HOVER LINE */}
                    <motion.div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#af8f47]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* BOTTOM DECORATIVE ELEMENT */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 flex justify-between items-center text-[#4c6c84]"
            >
              <div className="text-[10px] tracking-[0.8em] uppercase font-bold">
                Lagos Maritime Prestige
              </div>
              <div className="w-20 h-px bg-[#4c6c84]/15" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
