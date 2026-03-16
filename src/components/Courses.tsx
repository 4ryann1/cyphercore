
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    title: "Full Stack Web Development",
    desc: "Master the MERN stack with industry standards.",
    meta: "6 Months • Live Sessions",
    emoji: "🚀",
    badge: "Enrolling"
  },
  {
    title: "AI & Machine Learning",
    desc: "Dive deep into neural networks and LLMs.",
    meta: "4 Months • Self-paced",
    emoji: "🧠",
    badge: "Popular"
  },
  {
    title: "Digital Marketing Mastery",
    desc: "Advanced growth strategies and AI-powered ads.",
    meta: "3 Months • Internship Incl.",
    emoji: "📊",
    badge: "Enrolling"
  },
  {
    title: "Video Production & Editing",
    desc: "Cinematic story telling with modern tools.",
    meta: "3 Months • Agency Projects",
    emoji: "🎬",
    badge: "Enrolling"
  },
  {
    title: "UI/UX Design",
    desc: "User-centric design systems and Figma mastery.",
    meta: "4 Months • Portfolio Focused",
    emoji: "✨",
    badge: "Live"
  },
  {
    title: "Business Internship Program",
    desc: "Real-world tech-agency operations experience.",
    meta: "2 Months • Remote/Hybrid",
    emoji: "💼",
    badge: "Certificate"
  }
]

export function Courses() {
  return (
    <section id="courses" className="py-24 px-6 md:px-12 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader label="LEARN & GROW" title="COURSES & INTERNSHIPS" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <ScrollReveal key={idx} className="group relative bg-[#111] border border-white/5 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(26,108,255,0.1)]">
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{course.emoji}</span>
                <Badge className="bg-primary/10 text-primary border-primary/20 rounded-none uppercase font-code text-[10px]">
                  {course.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
              <p className="text-secondary text-sm mb-6 leading-relaxed">{course.desc}</p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-code text-[10px] uppercase tracking-widest text-white/30">{course.meta}</span>
                <button className="text-primary hover:text-white transition-colors text-xs uppercase font-code font-bold tracking-widest">Enroll Now</button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
