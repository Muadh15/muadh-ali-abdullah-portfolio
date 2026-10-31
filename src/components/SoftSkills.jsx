// Soft skills — dark section with icon cards
import { softSkillsList } from '../data/portfolioData'

function SoftSkills() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Beyond the Code
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Soft Skills
          </h2>
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, i) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#ff2a2a]/50 transition-all duration-300"
            >
              {/* Icon */}
              <span className="text-4xl mb-4 block" role="img" aria-label={skill.name}>
                {skill.icon}
              </span>
              {/* Skill name */}
              <h3 className="text-white font-bold text-base mb-3">
                {skill.name}
              </h3>
              {/* Short example */}
              <p className="text-white/50 text-xs leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
