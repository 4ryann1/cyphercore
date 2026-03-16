
export function Marquee() {
  const items = [
    "SOFTWARE DEVELOPMENT",
    "WEB DEVELOPMENT",
    "AI ADS",
    "VIDEO GENERATION",
    "DIGITAL MARKETING",
    "COURSES",
    "INTERNSHIPS",
    "CYPHERCORE"
  ]

  return (
    <div className="bg-[#111] border-y border-white/5 py-6 overflow-hidden flex items-center select-none">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <div key={j} className="flex items-center mx-12">
                <span className="font-headline text-3xl tracking-widest text-secondary/50 hover:text-primary transition-colors">
                  {item}
                </span>
                <div className="w-2 h-2 bg-primary rounded-full ml-12" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
