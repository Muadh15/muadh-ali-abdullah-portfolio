// Projects showcase — dark section with 3 project cards
import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured Projects
          </h2>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`flex flex-col bg-white/5 border rounded-2xl p-6 hover:border-[#ff2a2a]/60 transition-all duration-300 ${
                project.isFlagship ? 'border-[#ff2a2a]/40' : 'border-white/10'
              }`}
            >
              {/* Flagship badge */}
              {project.badge && (
                <span className="text-xs font-bold text-[#ff2a2a] mb-3 tracking-wide">
                  {project.badge}
                </span>
              )}

              {/* Number + Title */}
              <p className="text-white/15 text-5xl font-black leading-none mb-2 select-none">
                {project.number}
              </p>
              <h3 className="text-xl font-black text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techTags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white/70 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links — always render at bottom */}
              <div className="flex gap-3 mt-auto">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-[#ff2a2a] hover:text-white transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-white/70 text-xs font-medium rounded-full hover:border-white hover:text-white transition-colors duration-200"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="px-4 py-2 border border-white/10 text-white/25 text-xs font-medium rounded-full cursor-default">
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
