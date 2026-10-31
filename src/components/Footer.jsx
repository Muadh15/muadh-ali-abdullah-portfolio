// Footer — dark section with taglines, copyright, and TAP Academy credit
import { footerContent, personalInfo, academy, socialLinks } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Brand + taglines */}
        <div className="text-center mb-8">
          <p className="text-3xl font-black text-white">
            {personalInfo.brandName.split(' ')[0]}
            <span className="text-[#ff2a2a]">.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {footerContent.taglines.map(tag => (
              <span
                key={tag}
                className="text-white/40 text-xs font-medium px-3 py-1 border border-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs font-medium transition-colors"
            >
              GitHub
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-xs font-medium transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Copyright + TAP Academy credit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/30 text-xs">
            {footerContent.copyright}
          </p>
          {/* TAP Academy credit — required by project rules */}
          <p className="text-white/30 text-xs">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff2a2a] hover:underline font-semibold"
            >
              {academy.name}
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
