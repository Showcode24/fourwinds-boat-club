'use client'

import { motion } from 'framer-motion'
import { membershipTiers } from '@/lib/data'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName]
  return Icon ? <Icon className="w-8 h-8" /> : null
}

export default function Membership() {
  return (
    <section id="membership" className="py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6 text-balance">
            Membership Tiers
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Choose the perfect membership to suit your maritime lifestyle
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
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {membershipTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -12 }}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 overflow-hidden ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-amber-500/20 to-amber-500/5 border-amber-500/60 shadow-2xl shadow-amber-500/20'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Gradient background on hover */}
              {tier.highlighted && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              )}

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all ${
                    tier.highlighted
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-slate-700/50 text-slate-300 group-hover:bg-slate-700'
                  }`}
                >
                  {getIcon(tier.icon)}
                </motion.div>

                {/* Header */}
                <h3 className="text-3xl font-light text-white tracking-wide mb-2 group-hover:text-amber-400 transition-colors">
                  {tier.name}
                </h3>
                <p className="text-amber-500 text-sm font-light mb-1">{tier.type}</p>

                {/* Badge */}
                {tier.highlighted && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-light rounded-full mb-4"
                  >
                    Recommended
                  </motion.span>
                )}

                <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-amber-500 pt-1 flex-shrink-0">+</span>
                      <span className="text-slate-300 font-light text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-light transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg shadow-amber-500/30'
                      : 'border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500'
                  }`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
