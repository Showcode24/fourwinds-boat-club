'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import YachtGallery from '@/components/YachtGallery'
import Membership from '@/components/Membership'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <main className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Hero />
      <YachtGallery />
      <Membership />
      <Services />
      <Testimonials />
      <BookingForm />
      <Footer />
    </main>
  )
}
