'use client'

import { motion } from 'framer-motion'
import { clubInfo, navigationItems } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-slate-950/95 border-t border-slate-700 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 text-amber-500 mb-4">
              <span className="text-2xl">⚓</span>
              <span className="font-light text-xl tracking-widest">FOURWINDS</span>
            </div>
            <p className="font-light text-sm leading-relaxed">
              West Africa&apos;s most iconic private boat club offering exclusive maritime experiences and world-class amenities on Gracefield Island, Lekki.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h4 className="text-white font-light text-lg mb-4 tracking-wide">Explore</h4>
            <ul className="space-y-2 font-light">
              {navigationItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Membership */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h4 className="text-white font-light text-lg mb-4 tracking-wide">Membership</h4>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#membership" className="hover:text-amber-500 transition">
                  Regular Membership
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-amber-500 transition">
                  Foreign Membership
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-amber-500 transition">
                  Corporate Membership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition">
                  Apply Now
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h4 className="text-white font-light text-lg mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-2 font-light text-sm">
              <li>
                <p>{clubInfo.email}</p>
              </li>
              <li>
                <p>{clubInfo.phone}</p>
              </li>
              <li>
                <p>{clubInfo.contact.address}</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-light text-sm">
            <p>&copy; 2024 Fourwinds Boat Club. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                Terms
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
