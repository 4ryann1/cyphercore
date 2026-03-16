
import Link from "next/link"
import { Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Github, href: "#" }
  ]

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <Link href="/" className="font-headline text-3xl tracking-tighter">
              CYPHER<span className="text-primary">CORE</span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              Leading the next wave of digital innovation with premium software, AI marketing, and industrial education.
            </p>
            <h4 className="font-headline text-2xl text-primary tracking-widest">
              INNOVATE. ELEVATE. UPGRADE.
            </h4>
          </div>
          
          <div>
            <h5 className="font-code text-xs uppercase tracking-[0.2em] text-white mb-8">Services</h5>
            <ul className="space-y-4 text-secondary text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Software Dev</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">AI Ads</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Video Creation</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-code text-xs uppercase tracking-[0.2em] text-white mb-8">Company</h5>
            <ul className="space-y-4 text-secondary text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-code text-xs uppercase tracking-[0.2em] text-white mb-8">Contact Info</h5>
            <ul className="space-y-4 text-secondary text-sm">
              <li>hello@cyphercore.com</li>
              <li>+91 99887 76655</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[10px] uppercase font-code tracking-widest">
            © 2024 CYPHERCORE TECHNOLOGIES PVT. LTD. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <Link 
                key={idx} 
                href={social.href}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all"
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
