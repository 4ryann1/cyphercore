
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    num: "01",
    title: "Software Development",
    desc: "Custom web & mobile apps, scalable architecture, and full-cycle development.",
    tags: ["React", "Node.js", "Python"],
    icon: "💻"
  },
  {
    num: "02",
    title: "AI Ads & Digital Marketing",
    desc: "AI-powered ad creation, targeting, and intelligent campaign management.",
    tags: ["AI", "Meta Ads", "Google Ads"],
    icon: "🎯"
  },
  {
    num: "03",
    title: "Video Editing",
    desc: "Professional post-production, color grading, and cinematic motion design.",
    tags: ["Premiere", "After Effects"],
    icon: "✂️"
  },
  {
    num: "04",
    title: "Video Generation & Creation",
    desc: "AI-generated video content, brand films, and high-impact social reels.",
    tags: ["AI Video", "Sora", "RunwayML"],
    icon: "🎬"
  },
  {
    num: "05",
    title: "Industry Courses",
    desc: "Industry-ready courses in tech, design, and marketing with live mentorship.",
    tags: ["Self-paced", "Certification"],
    icon: "🎓"
  },
  {
    num: "06",
    title: "Tech Internships",
    desc: "Real-world experience with professional mentorship on live agency projects.",
    tags: ["Paid", "Remote", "Certificate"],
    icon: "🤝"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader label="WHAT WE DO" title="OUR SERVICES" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/5">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} className="group relative border-r border-b border-white/5 p-12 transition-all duration-500 hover:bg-white/[0.02]">
              {/* Hover Glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl">{service.icon}</span>
                <span className="font-headline text-3xl text-white/10 group-hover:text-primary/20 transition-colors">
                  {service.num}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-secondary mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="font-code text-[10px] tracking-widest text-white/40 border-white/10 rounded-none uppercase">
                    {tag}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
