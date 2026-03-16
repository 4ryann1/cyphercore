"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <polygon points="50,10 90,32 50,54 10,32" fill="#ffffff" stroke="#050505" strokeWidth="2"/>
    <polygon points="10,32 50,54 50,90 10,68" fill="#cccccc" stroke="#050505" strokeWidth="2"/>
    <polygon points="90,32 50,54 50,90 90,68" fill="#888888" stroke="#050505" strokeWidth="2"/>
  </svg>
)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Logo />
          <span className="font-headline text-2xl tracking-tighter">
            CYPHER<span className="text-primary">CORE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="font-code text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="font-code text-xs uppercase tracking-widest bg-primary hover:bg-white hover:text-black rounded-none px-6 clip-path-angled">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Panel */}
      <div className={cn(
        "fixed inset-0 top-[72px] bg-background md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 z-40",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-headline text-4xl uppercase tracking-widest hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button className="font-code text-sm uppercase tracking-widest bg-primary hover:bg-white hover:text-black rounded-none px-10 h-14 clip-path-angled">
          Get Started
        </Button>
      </div>

      <style jsx>{`
        .clip-path-angled {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }
      `}</style>
    </nav>
  )
}
