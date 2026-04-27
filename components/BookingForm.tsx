"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";

const expo = [0.19, 1, 0.22, 1];

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "regular",
    message: "",
    newsletter: false,
  });

  const [status, setStatus] = useState<Status>("idle");
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/membership-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-60 bg-[#020617] text-white relative overflow-hidden"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        INQUIRY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: expo }}
            viewport={{ once: true }}
          >
            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block">
              Admission
            </span>
            <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-tight mb-12">
              Request <br />
              <span className="text-white/20 italic">Membership</span>
            </h2>

            <div className="space-y-10 border-l border-white/10 pl-8">
              {[
                {
                  icon: Mail,
                  label: "Concierge",
                  val: "josiyi@fourwinds.club",
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
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {item.label}
                  </p>
                  <p className="text-lg font-light group-hover:translate-x-2 transition-transform duration-500">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: expo }}
            className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-sm shadow-2xl"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full text-center py-12 space-y-8"
              >
                <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center">
                  <span className="text-[#D4AF37] text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-extralight tracking-tight">
                  Thank You for Your Interest
                </h3>
                <div className="space-y-4 max-w-sm text-left border-l-2 border-[#D4AF37]/40 pl-6">
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    Thank you for your interest in joining Fourwinds Boat Club!
                    Your spot on our waitlist has been reserved.
                  </p>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    We will contact you to complete the required membership
                    application when we are closer to the launch date. All
                    membership inquiries and requests will be processed in the
                    order they are received and according to set
                    pre-qualification criteria.
                  </p>
                  <p className="text-slate-500 text-xs font-light leading-relaxed italic">
                    Thank you in advance for your patience and understanding
                    during this waiting period.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* NAME & EMAIL */}
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
                        className="peer w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors font-light"
                      />
                      <label className="absolute left-0 top-4 text-slate-500 pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest">
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>

                {/* PHONE */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setIsFocused("phone")}
                    onBlur={() => setIsFocused(null)}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-[#D4AF37] transition-colors font-light"
                  />
                  <label className="absolute left-0 top-4 text-slate-500 pointer-events-none transition-all duration-500 peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest">
                    Phone
                  </label>
                </div>

                {/* MEMBERSHIP TIER */}
                <div className="relative">
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-6">
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
                            ? "border-[#D4AF37] bg-[#D4AF37] text-black font-bold"
                            : "border-white/10 text-slate-500 hover:border-white/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 p-6 focus:outline-none focus:border-[#D4AF37] transition-all font-light text-sm resize-none"
                  />
                </div>

                {/* NEWSLETTER OPT-IN */}
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border border-white/20 peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center">
                      <motion.svg
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          formData.newsletter
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.2 }}
                        className="w-3 h-3 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                      Join the Inner Circle
                    </p>
                    <p className="text-xs text-slate-600 mt-1 font-light">
                      Receive exclusive updates, member previews, and curated
                      event invitations.
                    </p>
                  </div>
                </label>

                {/* SUBMIT */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  className="group relative w-full overflow-hidden bg-[#D4AF37] py-6 text-black flex items-center justify-center gap-4 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span className="text-[11px] font-black uppercase tracking-[0.4em] relative z-10">
                        Reserve My Spot
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: expo }}
                      />
                    </>
                  )}
                </motion.button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center tracking-widest uppercase">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
