import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Background parallax movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    // Basic client validation
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: trigger native email client
      const subject = encodeURIComponent(
        `Portfolio Contact from ${firstName} ${lastName}`.trim()
      )
      const body = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax "Contact" Word */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-1/4 pointer-events-none z-0 flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04]"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front Aligned Red Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Column: Underline Inputs */}
            <div className="flex-1 flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Right Column: Underline Textarea */}
            <div className="flex-1 flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] h-full"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Note, and Submit Pill */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-xs text-white/80 select-none">
              <input
                type="checkbox"
                required
                className="mt-0.5 rounded border-white/40 text-black focus:ring-0"
              />
              <span>
                I agree that my submitted information will be used to respond to
                my inquiry.
              </span>
            </label>

            {/* Guarantee Note & Urgent Direct Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/70">
              <p className="italic">
                Your message will be sent directly to my inbox. I typically
                respond within 24-48 hours.
              </p>
              <p>
                Urgent?{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline hover:text-white font-medium"
                >
                  Email me directly
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`rounded-full px-8 py-3.5 border text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                  status === 'sending'
                    ? 'bg-white/30 border-white/30 text-white/70 cursor-wait'
                    : status === 'success'
                    ? 'bg-emerald-600 border-emerald-500 text-white'
                    : status === 'error'
                    ? 'bg-red-950 border-red-800 text-white'
                    : 'bg-transparent border-white text-white hover:bg-white hover:text-[#ff2a2a]'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && <span>Sent Successfully ✓</span>}
                {status === 'error' && <span>Failed — Try Again</span>}
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      →
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
