'use client'

import { motion } from 'framer-motion'
import { exclusiveEvents } from '@/lib/data'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName]
  return Icon ? <Icon className="w-8 h-8" /> : null
}

export default function Testimonials() {
  return (
    <section id="events" className="py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6 text-balance">
            Exclusive Events
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Curated experiences and gatherings designed for our distinguished members
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
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {exclusiveEvents.map((event, index) => (
            <motion.div
              key={event.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -12 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/20 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-amber-500/5 transition-all duration-300"
                initial={false}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{ y: 0 }}
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  {getIcon(event.icon)}
                </motion.div>

                {/* Content */}
                <h4 className="text-2xl font-light text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {event.name}
                </h4>
                <p className="text-slate-400 font-light leading-relaxed text-sm">{event.description}</p>

                {/* Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-500/0"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
