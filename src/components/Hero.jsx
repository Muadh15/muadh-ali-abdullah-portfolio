// Full-screen landing section with Framer Motion entrance animations
import { motion } from 'framer-motion'
import { heroContent } from '../data/portfolioData'

// Colours the last word of the role title in accent red
function HighlightedTitle({ text }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className={i === words.length - 1 ? 'text-[#ff2a2a]' : 'text-white'}>
          {word}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ff2a2a]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#ff2a2a]/10 blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">

        {/* Greeting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/50 text-xs tracking-[0.3em] uppercase mb-6 font-medium"
        >
          {heroContent.greeting}
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black leading-none mb-6"
        >
          <HighlightedTitle text={heroContent.titleHighlight} />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/60 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {heroContent.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Primary — view work */}
          <a
            href={heroContent.ctaPrimary.href}
            className="px-8 py-3 bg-[#ff2a2a] text-white font-bold rounded-full hover:bg-[#cc2020] active:scale-95 transition-all duration-200 shadow-lg shadow-[#ff2a2a]/20"
          >
            {heroContent.ctaPrimary.text}
          </a>

          {/* Secondary — contact */}
          <a
            href={heroContent.ctaSecondary.href}
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-[#ff2a2a] hover:text-[#ff2a2a] active:scale-95 transition-all duration-200"
          >
            {heroContent.ctaSecondary.text}
          </a>

          {/* Resume download */}
          <a
            href={heroContent.ctaResume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 text-white/70 font-semibold rounded-full hover:border-white hover:text-white active:scale-95 transition-all duration-200"
          >
            {heroContent.ctaResume.text}
          </a>
        </motion.div>

        {/* Animated scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/25 text-xs tracking-[0.3em] uppercase"
          >
            scroll ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
