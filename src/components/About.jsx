// About me — white section for contrast after the dark hero
import { aboutContent, socialLinks } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            {aboutContent.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Bio — 3 of 5 columns */}
          <div className="md:col-span-3" data-aos="fade-right" data-aos-delay="100">
            {/* dangerouslySetInnerHTML is safe here — the bio text is your own trusted content */}
            <div
              className="text-gray-700 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mt-8">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-[#ff2a2a] transition-colors duration-200"
                >
                  GitHub ↗
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 border-2 border-black text-black text-sm font-semibold rounded-full hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors duration-200"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>

          {/* Tech stack + quick stats — 2 of 5 columns */}
          <div className="md:col-span-2" data-aos="fade-left" data-aos-delay="150">
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">
              Tech I Work With
            </h3>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-3">
              {aboutContent.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick stat cards */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-3xl font-black text-[#ff2a2a]">3+</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Projects Built</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-3xl font-black text-[#ff2a2a]">2</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Internships</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
