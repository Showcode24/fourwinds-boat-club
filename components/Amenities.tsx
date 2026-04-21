'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { amenities, amenitiesByCategory } from '@/lib/data'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName]
  return Icon ? <Icon className="w-6 h-6" /> : null
}

export default function Amenities() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const currentCategory = amenitiesByCategory[selectedCategory]
  const categoryAmenities = amenities.filter((a) => currentCategory.items.includes(a.title))

  return (
    <section id="amenities" className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6 text-balance">
            World-Class Amenities
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Discover our comprehensive facilities designed for luxury maritime living
          </p>
        </motion.div>

        {/* Category Tabs - Apple Style */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {amenitiesByCategory.map((category, index) => (
              <motion.button
                key={category.category}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-light transition-all duration-300 ${
                  selectedCategory === index
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                {category.category}
              </motion.button>
            ))}
          </motion.div>

          {/* Amenities Grid with smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categoryAmenities.map((amenity, index) => (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredItem(amenity.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                    hoveredItem === amenity.title
                      ? 'bg-slate-800/80 border-amber-500/60 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                  }`}
                >
                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      y: hoveredItem === amenity.title ? -8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/10 flex items-center justify-center mb-6 text-amber-400 group-hover:text-amber-300 transition-colors"
                  >
                    {getIcon(amenity.icon)}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white tracking-wide mb-3 group-hover:text-amber-400 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{amenity.description}</p>

                  {/* Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredItem === amenity.title ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-500/0"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-slate-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '16',
                label: 'Premium Amenities',
                description: 'Curated facilities for every lifestyle need',
              },
              {
                number: '24/7',
                label: 'Concierge Service',
                description: 'Round-the-clock support for our members',
              },
              {
                number: '5-Star',
                label: 'Member Experience',
                description: 'Luxury hospitality in every detail',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-light text-amber-400 mb-2">{stat.number}</p>
                <h4 className="text-white font-light text-lg mb-1">{stat.label}</h4>
                <p className="text-slate-400 font-light text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
