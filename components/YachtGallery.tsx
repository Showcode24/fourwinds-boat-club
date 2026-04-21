'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { gallery } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function YachtGallery() {
  return (
    <section id="the-club" className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6 text-balance">
            The Fourwinds Experience
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Elegant spaces and world-class facilities designed for the discerning member
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {gallery.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden rounded-2xl mb-6 bg-slate-800">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay with gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Button appears on hover */}
                <motion.div
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-light rounded-lg transition-all duration-300 shadow-lg"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>

              {/* Text Content */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-light text-white tracking-wide group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-amber-500/80 font-light text-sm group-hover:text-amber-400 transition-colors">
                  {item.category}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
