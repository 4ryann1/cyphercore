
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"
import { Star } from "lucide-react"

export function Testimonials() {
  const reviews = [
    {
      text: "CypherCore transformed our digital presence completely. Their AI-powered ad campaigns yielded a 3X ROI in just two months.",
      name: "Aryan Sharma",
      role: "CEO, TechFlow",
      initials: "AS"
    },
    {
      text: "The software development team is world-class. They built our scalable SaaS platform ahead of schedule with perfect execution.",
      name: "Jessica Miller",
      role: "Founder, Zenith Media",
      initials: "JM"
    },
    {
      text: "Their video generation services are futuristic. We received cinematic content that set us apart from every competitor.",
      name: "Rohit Verma",
      role: "Marketing Head, Luxe",
      initials: "RV"
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader label="WHAT THEY SAY" title="CLIENT REVIEWS" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <ScrollReveal key={idx} className="bg-white/[0.02] border border-white/5 p-10 relative group transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-8 right-8 text-6xl text-primary/10 font-serif group-hover:text-primary/20">"</div>
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="italic text-secondary leading-loose mb-10">
                "{rev.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-bold text-primary">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">{rev.name}</h4>
                  <p className="text-[10px] uppercase text-white/30 tracking-widest">{rev.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
