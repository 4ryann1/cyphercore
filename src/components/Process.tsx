
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"

export function Process() {
  const steps = [
    { title: "Discover", desc: "Understand your goals and requirements in depth." },
    { title: "Design", desc: "Craft the UI, architecture, and overall product strategy." },
    { title: "Develop", desc: "Build, test, and iterate with precision using modern stacks." },
    { title: "Deploy", desc: "Launch and maintain for long-term growth and success." }
  ]

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader label="HOW WE WORK" title="OUR PROCESS" align="center" />
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Connector Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} className="relative text-center group">
                <div className="w-24 h-24 rounded-full border border-white/10 bg-background flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(26,108,255,0.2)] transition-all duration-500">
                  <span className="font-headline text-4xl text-white group-hover:text-primary transition-colors">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{step.title}</h4>
                <p className="text-secondary text-sm leading-relaxed px-4">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
