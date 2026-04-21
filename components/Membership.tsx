"use client";

import { motion } from "framer-motion";
import { membershipTiers } from "@/lib/data";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName];
  return Icon ? <Icon className="w-5 h-5 stroke-[1.5]" /> : null;
};

const transition = { duration: 1.1, ease: [0.19, 1, 0.22, 1] };

const prices: Record<string, string> = {
  Silver: "2,500",
  Gold: "7,500",
  Platinum: "15,000",
};

export default function Membership() {
  return (
    <section id="membership" className="py-48 px-6 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto">
        {/* EDITORIAL HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={transition}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block"
            >
              The Collection
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ...transition, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-extralight tracking-tighter leading-none"
              >
                Membership <span className="text-white/20 italic">Tiers</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-slate-400 font-light text-sm max-w-xs border-l border-white/10 pl-8 leading-relaxed"
          >
            A curated selection of maritime privileges, tailored for West
            Africa's elite seafaring community.
          </motion.p>
        </div>

        {/* TIERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-700"
            >
              {/* INTERACTIVE ACCENT LINE */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D4AF37] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />

              <div className="relative z-10 flex flex-col h-full">
                {/* ICON & LEVEL */}
                <div className="flex items-center justify-between mb-24">
                  <div className="text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity">
                    {getIcon(tier.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-white/20">
                    LEVEL 0{index + 1}
                  </span>
                </div>

                {/* PRICING & IDENTITY */}
                <div className="mb-12">
                  <h3 className="text-4xl font-extralight tracking-tight mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/20 text-xl font-light">$</span>
                    <span className="text-5xl font-extralight tracking-tighter text-white">
                      {prices[tier.name] || "Contact"}
                    </span>
                    <span className="text-slate-500 text-[10px] uppercase tracking-widest pl-2">
                      / Year
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm font-light leading-relaxed mb-16 min-h-[60px]">
                  {tier.description}
                </p>

                {/* FEATURE LIST */}
                <ul className="space-y-5 mb-24 flex-grow">
                  {tier.features.slice(0, 5).map((feature, fIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + fIndex * 0.05 }}
                      className="flex items-center gap-4 text-[13px] font-light text-slate-300"
                    >
                      <div className="w-[3px] h-[3px] rounded-full bg-[#D4AF37]/50" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* INQUIRY CTA */}
                <div className="relative inline-block pt-6 group/cta cursor-pointer mt-auto">
                  <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#D4AF37] group-hover:tracking-[0.5em] transition-all duration-500">
                    Inquire Access +
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]/20 scale-x-100" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}