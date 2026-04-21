'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { clubInfo } from '@/lib/data'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'regular',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Membership inquiry submitted:', formData)
    setFormData({ name: '', email: '', phone: '', membershipType: 'regular', message: '' })
  }

  return (
    <section id="contact" className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6 text-balance">
            Request Membership Information
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light">
            Join West Africa&apos;s most iconic private club. Submit your inquiry to our membership team.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-800/20 border border-slate-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all duration-300 font-light"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all duration-300 font-light"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all duration-300 font-light"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-all duration-300 font-light appearance-none"
            >
              <option value="regular">Regular Membership</option>
              <option value="foreign">Foreign Membership</option>
              <option value="corporate">Corporate Membership</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your interest in Fourwinds"
              rows={6}
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-all duration-300 font-light resize-none"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: '#fbbf24' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-4 bg-amber-500 text-slate-950 font-light rounded-lg transition-all duration-300 text-lg shadow-lg shadow-amber-500/30"
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
