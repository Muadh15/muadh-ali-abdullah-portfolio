import { internshipsList } from '../data/portfolioData'

// Individual internship card
function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: duration and mini badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-white/50 text-xs uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-[10px] font-bold uppercase tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-semibold tracking-wide mb-6 mt-1">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3">
              Skills Gained:
            </p>
            <ul className="space-y-2">
              {intern.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2 text-xs text-white/70 leading-relaxed"
                >
                  <span className="text-white select-none leading-none font-bold">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies bottom row */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG divider along top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-8 left-8 w-10 h-10 fill-black opacity-20 animate-pulse pointer-events-none z-0"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Hands-on technical internships where I applied core development and data analytics skills to real-world tasks.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
