// Technical skills — dark section with category cards
import { technicalSkills } from '../data/portfolioData'

function TechnicalSkills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What I Work With
          </h2>
        </div>

        {/* Category grid — 4 columns on large screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.categories.map((cat, i) => (
            <div
              key={cat.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ff2a2a]/50 transition-all duration-300"
            >
              {/* Category label */}
              <h3 className="text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-5">
                {cat.title}
              </h3>

              {/* Skill list */}
              <ul className="flex flex-col gap-2">
                {cat.skills.map(skill => (
                  <li
                    key={skill.name}
                    className="text-white/80 text-sm font-medium py-1.5 px-3 bg-white/5 rounded-lg"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
