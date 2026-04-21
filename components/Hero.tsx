'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { clubInfo } from '@/lib/data'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Image with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Fourwinds Boat Club Marina"
          fill
          priority
          className="object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/50 to-slate-950/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-amber-400 text-sm md:text-base font-light tracking-widest uppercase"
          >
            {clubInfo.tagline}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-light text-white tracking-widest text-balance leading-tight"
          >
            {clubInfo.subtitle}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {clubInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#fbbf24' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-4 bg-amber-500 text-slate-950 font-light rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30"
            >
              Explore Amenities
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 146, 60, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-4 border-2 border-amber-500 text-amber-500 font-light rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Request Brochure
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Apple Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <p className="text-xs text-slate-400 font-light tracking-widest uppercase">Scroll</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-amber-500/60"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
