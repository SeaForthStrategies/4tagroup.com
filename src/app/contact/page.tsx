"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui";
import { SITE_CONFIG, CONTACT_PAGE, IMAGES } from "@/lib/constants";

interface FormData { name: string; email: string; phone: string; message: string; honeypot: string; }
interface FormErrors { name?: string; email?: string; message?: string; }

function validateEmail(e: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function sanitize(s: string) { return s.replace(/[<>]/g, "").trim().slice(0, 1000); }

const contactInfo = [
  {
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Office",
    value: SITE_CONFIG.address,
    href: SITE_CONFIG.mapsUrl,
    external: true,
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

const inputBase = "w-full px-4 py-3 rounded-xl border bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aviation-blue/25 focus:border-aviation-blue transition-colors duration-150";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const formSectionRef = useRef(null);
  const formSectionInView = useInView(formSectionRef, { once: true, margin: "-60px" });

  const validate = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!validateEmail(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: sanitize(value) }));
    if (errors[name as keyof FormErrors]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot || !validate()) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setStatus("success"); setForm({ name: "", email: "", phone: "", message: "", honeypot: "" }); }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden" style={{ paddingTop: "max(5rem, calc(5rem + env(safe-area-inset-top)))" }}>
        <Image src={IMAGES.terminal} alt="" fill priority className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red mb-4">Contact Us</p>
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
              {CONTACT_PAGE.headline}
            </h1>
            <p className="mt-4 text-white/60 text-base max-w-lg leading-relaxed">{CONTACT_PAGE.subheadline}</p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section ref={formSectionRef} className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={formSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="font-heading text-2xl font-bold text-navy mb-8">Get in touch</h2>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="shrink-0 w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-400 font-medium mb-0.5">Office Hours</p>
                <p className="text-sm font-semibold text-gray-800">Monday – Friday, 8:00 AM – 5:00 PM PST</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={formSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send a message</h2>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <div className="mx-auto w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-navy mb-1">Message sent</p>
                  <p className="text-sm text-gray-500">{CONTACT_PAGE.form.successMessage}</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-aviation-blue hover:text-aviation-blue-light transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">{CONTACT_PAGE.form.nameLabel} <span className="text-red-400">*</span></label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                      placeholder={CONTACT_PAGE.form.namePlaceholder}
                      className={`${inputBase} ${errors.name ? "border-red-400" : "border-gray-200"}`}
                      aria-describedby={errors.name ? "name-error" : undefined} />
                    {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">{CONTACT_PAGE.form.emailLabel} <span className="text-red-400">*</span></label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                      placeholder={CONTACT_PAGE.form.emailPlaceholder}
                      className={`${inputBase} ${errors.email ? "border-red-400" : "border-gray-200"}`}
                      aria-describedby={errors.email ? "email-error" : undefined} />
                    {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">{CONTACT_PAGE.form.phoneLabel}</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                      placeholder={CONTACT_PAGE.form.phonePlaceholder}
                      className={`${inputBase} border-gray-200`} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">{CONTACT_PAGE.form.messageLabel} <span className="text-red-400">*</span></label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange}
                      placeholder={CONTACT_PAGE.form.messagePlaceholder} rows={5}
                      className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                      aria-describedby={errors.message ? "message-error" : undefined} />
                    {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <Button type="submit" disabled={submitting} className="w-full mt-2">
                    {submitting ? (
                      <><svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>Sending...</>
                    ) : (
                      <>{CONTACT_PAGE.form.submitButton}
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
