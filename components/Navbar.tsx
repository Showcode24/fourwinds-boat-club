'use client'

import { motion } from 'framer-motion'
import { navigationItems, clubInfo } from '@/lib/data'

interface NavbarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/50 backdrop-blur-md border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-amber-500 font-light text-lg tracking-widest hover:text-amber-400 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">⚓</span>
            <span>FOURWINDS</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-amber-500 transition text-sm font-light tracking-wide"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-light rounded-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inquire
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-500 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3 border-t border-amber-500/10"
          >
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-slate-300 hover:text-amber-500 transition text-sm font-light tracking-wide p-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-light rounded-lg transition">
              Inquire
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
