// Internships / experience — white section (hidden if list is empty)
import { internshipsList } from '../data/portfolioData'

function Internships() {
  // Don't render the section if there are no internships
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            Internship
          </h2>
        </div>

        {/* Internship cards */}
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {internshipsList.map((item, i) => (
            <div
              key={`${item.organization}-${i}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group border-2 border-black rounded-2xl p-8 hover:bg-black transition-all duration-300"
            >
              {/* Role + duration row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-black text-black group-hover:text-white transition-colors duration-300">
                    {item.role}
                  </h3>
                  <p className="text-[#ff2a2a] font-semibold text-base mt-0.5">
                    {item.organization}
                  </p>
                </div>
                <span className="px-4 py-1.5 border border-black group-hover:border-white/30 text-black group-hover:text-white/70 text-xs font-semibold rounded-full transition-colors duration-300">
                  {item.duration}
                </span>
              </div>

              {/* Skills gained */}
              <div className="mb-4">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white/40 mb-2 transition-colors duration-300">
                  Skills Gained
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map(s => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-gray-100 group-hover:bg-white/10 text-gray-700 group-hover:text-white/70 text-xs font-medium rounded-full transition-colors duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies used */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white/40 mb-2 transition-colors duration-300">
                  Tech Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-black group-hover:bg-white text-white group-hover:text-black text-xs font-semibold rounded-full transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
