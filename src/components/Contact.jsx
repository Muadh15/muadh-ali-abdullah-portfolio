// Contact section — white background with EmailJS form
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData'

function Contact() {
  // Form field values
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  // idle | sending | success | error
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: personalInfo.emails.primary,
        },
        emailjsConfig.publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            Contact Me
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-base">
            Open to entry-level Data Analyst opportunities — let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {/* Contact info column */}
          <div data-aos="fade-right">
            <h3 className="text-xl font-black mb-6">Let's Talk</h3>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="flex items-center gap-3 text-gray-600 hover:text-[#ff2a2a] transition-colors"
              >
                <span className="text-xl">✉️</span>
                <span className="text-sm font-medium">{personalInfo.emails.primary}</span>
              </a>
              <p className="flex items-center gap-3 text-gray-600">
                <span className="text-xl">📍</span>
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </p>
              {personalInfo.phone && (
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#ff2a2a] transition-colors"
                >
                  <span className="text-xl">📞</span>
                  <span className="text-sm font-medium">{personalInfo.phone}</span>
                </a>
              )}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-[#ff2a2a] transition-colors duration-200"
                >
                  GitHub
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors duration-200"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {/* Contact form */}
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-[#ff2a2a] disabled:opacity-50 active:scale-95 transition-all duration-200"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {/* Status feedback */}
            {status === 'success' && (
              <p className="text-green-600 text-sm font-medium text-center">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm font-medium text-center">
                ❌ Something went wrong. Please email me directly.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
