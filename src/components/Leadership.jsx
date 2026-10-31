import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full mb-12 last:mb-0">
      {/* Red glowing timeline dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.8)] z-20 border-2 border-[#0a0a0a]" />

      {/* Left side card (for even index on md+) */}
      <div
        data-aos={isEven ? 'fade-right' : 'fade-left'}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven
            ? 'md:text-right md:mr-auto'
            : 'md:text-left md:ml-auto'
        }`}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 group">
          {item.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-3 border border-red-500/20">
              {item.badge}
            </span>
          )}
          <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
            {item.title}
          </h3>
          <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">
            {item.role}
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function Leadership() {
  if (!leadershipList || leadershipList.length === 0) return null

  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Community involvement, university initiatives, and collaborative project leadership.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* 2px gradient line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 left-4 md:left-1/2 -translate-x-1/2" />

          {/* Timeline cards */}
          <div className="flex flex-col">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
