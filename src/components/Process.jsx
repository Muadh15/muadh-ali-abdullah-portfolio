// My process — white section with 4 numbered step cards (hover flips to black)
import { skillsContent } from '../data/portfolioData'

function Process() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            {skillsContent.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            {skillsContent.heading}
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            {skillsContent.description}
          </p>
        </div>

        {/* Step cards — hover inverts colours */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsContent.cards.map((card, i) => (
            <div
              key={card.number}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group p-6 border-2 border-black rounded-2xl hover:bg-black transition-all duration-300 cursor-default"
            >
              {/* Step number */}
              <p className="text-5xl font-black text-[#ff2a2a] mb-4 leading-none">
                {card.number}
              </p>
              {/* Step title */}
              <h3 className="text-xl font-black mb-3 text-black group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>
              {/* Step description */}
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* End tag */}
        <p
          data-aos="fade-up"
          className="text-center mt-10 text-[#ff2a2a] font-bold tracking-widest text-sm"
        >
          — {skillsContent.endText} —
        </p>
      </div>
    </section>
  )
}

export default Process
