
"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(26, 108, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 108, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px' 
        }} 
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="flex flex-col text-7xl md:text-[10rem] font-bold leading-tight md:leading-[0.85] select-none">
            <span className="animate-slide-up [animation-delay:0.2s] opacity-0">WE BUILD</span>
            <span className="animate-slide-up [animation-delay:0.4s] opacity-0">DIGITAL</span>
            <span className="animate-slide-up [animation-delay:0.6s] opacity-0 text-primary text-glow">FUTURES</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-secondary max-w-2xl mx-auto animate-slide-up [animation-delay:0.8s] opacity-0">
            Premium Software Development, AI-powered Ads, Video Creation, and Digital Marketing solutions for modern businesses.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up [animation-delay:1s] opacity-0">
            <Button size="lg" className="bg-primary hover:bg-white hover:text-black rounded-none px-10 h-14 font-code tracking-widest uppercase clip-path-angled">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:border-primary rounded-none px-10 h-14 font-code tracking-widest uppercase">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 border border-white/10 rounded-full animate-spin [animation-duration:10s]" />
          <div className="absolute inset-2 border border-primary/20 rounded-full animate-ping" />
          <span className="font-code text-[10px] tracking-tighter text-secondary text-center">
            EST. 2024<br/>INDIA
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-12 flex flex-col items-center gap-4">
        <span className="font-code text-[10px] uppercase tracking-widest vertical-rl rotate-180">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        .clip-path-angled {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite ease-in-out;
        }
        .vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  )
}
