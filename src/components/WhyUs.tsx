
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"
import { CheckCircle2 } from "lucide-react"

export function WhyUs() {
  const points = [
    { title: "Innovation First", desc: "We use the latest AI and tech stacks to stay ahead." },
    { title: "End-to-End Solutions", desc: "From idea to deployment, we handle the entire lifecycle." },
    { title: "Trained Talent", desc: "Our interns and developers are industry-ready professionals." },
    { title: "Results-Driven", desc: "Every project is tied to measurable business outcomes." }
  ]

  return (
    <section id="why-us" className="py-24 px-6 md:px-12 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Floating Boxes Visual */}
        <div className="relative h-[400px] hidden lg:block">
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary/10 border border-primary/20 p-6 flex flex-col justify-center animate-bounce [animation-duration:4s]">
            <span className="font-headline text-5xl">99%</span>
            <span className="font-code text-xs uppercase text-secondary">Reliability</span>
          </div>
          <div className="absolute top-20 right-20 w-56 h-56 bg-white/[0.02] border border-white/5 p-6 flex flex-col justify-center animate-bounce [animation-duration:6s] [animation-delay:1s]">
            <span className="font-headline text-5xl">10X</span>
            <span className="font-code text-xs uppercase text-secondary">Scaling Speed</span>
          </div>
          <div className="absolute bottom-0 left-20 w-44 h-44 bg-primary/5 border border-primary/10 p-6 flex flex-col justify-center animate-bounce [animation-duration:5s] [animation-delay:2s]">
            <span className="font-headline text-5xl">24/7</span>
            <span className="font-code text-xs uppercase text-secondary">AI Support</span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <ScrollReveal>
            <SectionHeader label="WHY US" title="THE CYPHERCORE EDGE" />
          </ScrollReveal>
          
          <div className="space-y-10">
            {points.map((point, idx) => (
              <ScrollReveal key={idx} className="flex gap-6 group">
                <div className="shrink-0 w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{point.title}</h4>
                  <p className="text-secondary leading-relaxed">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
