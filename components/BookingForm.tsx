"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const expo = [0.19, 1, 0.22, 1];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "regular",
    message: "",
  });

  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Membership inquiry submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-60 bg-[#dee3e8] text-[#4c6c84] relative overflow-hidden"
    >
      {/* DECORATIVE BACKGROUND TEXT */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-black text-[#4c6c84]/[0.04] whitespace-nowrap pointer-events-none select-none">
        INQUIRY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* LEFT SIDE: THE PITCH */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: expo }}
            viewport={{ once: true }}
          >
            <span className="text-[#af8f47] text-[10px] font-extrabold tracking-[0.6em] uppercase mb-6 block">
              Admission
            </span>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-tight mb-12 text-[#4c6c84]">
              Request <br />{" "}
              <span className="text-[#4c6c84]/20 italic">Membership</span>
            </h2>

            <div className="space-y-10 border-l border-[#4c6c84]/15 pl-8">
              {[
                {
                  icon: Mail,
                  label: "Concierge",
                  val: "membership@fourwinds.club",
                },
                {
                  icon: Phone,
                  label: "Direct Line",
                  val: "+234 (0) 800 FOURWINDS",
                },
                {
                  icon: MapPin,
                  label: "The Club",
                  val: "Victoria Island, Lagos, Nigeria",
                },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[#4c6c84]/40 mb-1 group-hover:text-[#af8f47] transition-colors">
                    {item.label}
                  </p>
                  <p className="text-lg font-normal text-[#4c6c84] group-hover:translate-x-2 transition-transform duration-500">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE FORM PORTAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: expo }}
            className="relative bg-[#4c6c84]/[0.05] backdrop-blur-xl border border-[#4c6c84]/10 p-12 md:p-16 rounded-sm shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* INPUT GROUP: NAME & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { name: "name", type: "text", label: "Full Name" },
                  { name: "email", type: "email", label: "Email" },
                ].map((field) => (
                  <div key={field.name} className="relative group">
                    <input
                      type={field.type}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      onFocus={() => setIsFocused(field.name)}
                      onBlur={() => setIsFocused(null)}
                      required
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-[#4c6c84]/20 py-4 focus:outline-none focus:border-[#af8f47] transition-colors font-normal text-[#4c6c84]"
                    />
                    <label className="absolute left-0 top-4 text-[#4c6c84]/40 pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-[#af8f47] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-semibold">
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* MEMBERSHIP TYPE SELECTOR */}
              <div className="relative">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#af8f47] mb-6">
                  Tier of Interest
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {["regular", "foreign", "corporate"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          membershipType: type,
                        }))
                      }
                      className={`py-3 px-2 text-[10px] uppercase tracking-tighter border transition-all duration-500 ${
                        formData.membershipType === type
                          ? "border-[#af8f47] bg-[#af8f47] text-white font-black"
                          : "border-[#4c6c84]/15 text-[#4c6c84]/50 hover:border-[#4c6c84]/40 font-semibold"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* MESSAGE AREA */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest..."
                  rows={4}
                  className="w-full bg-[#4c6c84]/5 border border-[#4c6c84]/10 p-6 focus:outline-none focus:border-[#af8f47] transition-all font-normal text-sm resize-none text-[#4c6c84] placeholder:text-[#4c6c84]/30"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden bg-[#af8f47] py-6 text-white flex items-center justify-center gap-4"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em] relative z-10">
                  Begin Application
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 relative z-10" />

                {/* Swipe Overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#4c6c84]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: expo }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
