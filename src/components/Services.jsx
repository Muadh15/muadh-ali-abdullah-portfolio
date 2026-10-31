import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Hanging Tag Card with active color shift triggered by line progress
function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay = 0,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Track the animated stroke tip and turn active when it passes the card
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const containerHeight = containerRef.current.offsetHeight || 1350
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const lineTip = latest * containerHeight
    setIsActive(lineTip >= cardTopRelativeToContainer + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 select-none ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_35px_rgba(255,42,42,0.35)] text-white scale-[1.02]'
          : 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 text-black'
      } ${className}`}
    >
      {/* Punched hole circle at the top */}
      <div
        className={`w-5 h-5 rounded-full mx-auto shadow-inner transition-colors duration-700 ${
          isActive
            ? 'bg-red-900 border border-white/30'
            : 'bg-gray-200 border border-gray-300'
        }`}
      />

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive
            ? 'bg-red-700/50 text-white'
            : 'bg-[#f4f4f4] text-gray-700'
        }`}
      >
        <div>
          <span className="text-3xl font-serif italic font-black mb-1 block opacity-80">
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-3 leading-tight ${
              isActive ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </h3>
          <p className="text-sm leading-relaxed opacity-90">{text}</p>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const containerRef = useRef(null)

  // Scroll measurement over container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const cardPositions = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="mb-16 md:mb-0 md:absolute md:top-10 md:left-0 md:w-[450px] z-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black">
              {skillsContent.heading}
            </h2>
            {/* Small hand-drawn arrow at bottom-right */}
            <svg
              className="absolute -bottom-6 -right-6 w-8 h-8 text-[#ff2a2a] stroke-current fill-none stroke-2 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Animated SVG Path (3 layers) */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* 1. Faint guide path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />

          {/* 2. Mask revealing real path */}
          <mask id="path-mask">
            <motion.path
              d={desktopD}
              fill="none"
              stroke="white"
              strokeWidth={20}
              style={{ pathLength }}
            />
          </mask>

          {/* 3. Real dashed path */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated SVG Path (3 layers) */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* 1. Faint guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Mask revealing real path */}
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth={10}
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>

          {/* 3. Real dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const pos = cardPositions[index] || {}
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={pos.className}
                aosType={pos.aosType}
                aosDelay={pos.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Hand-written end note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
