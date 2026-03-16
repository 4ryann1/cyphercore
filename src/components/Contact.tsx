
"use client"

import { useState } from "react"
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Check } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => setStatus("sent"), 1500)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <div>
            <ScrollReveal>
              <SectionHeader label="GET IN TOUCH" title="LET'S BUILD SOMETHING GREAT" />
              <p className="text-secondary mb-12 max-w-md leading-relaxed">
                Ready to elevate your business? Contact us for a consultation or to start a project with CypherCore today.
              </p>
            </ScrollReveal>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", val: "cyphercoretech@gmail.com" },
                { icon: Phone, label: "Call Us", val: "+91 86258 53569" },
                { icon: MapPin, label: "Visit Us", val: "Akurdi, Pune, India" }
              ].map((item, idx) => (
                <ScrollReveal key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-code text-[10px] uppercase text-secondary tracking-widest">{item.label}</h4>
                    <p className="font-bold text-lg">{item.val}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/5 p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-code text-[10px] uppercase tracking-widest text-secondary">First Name</label>
                  <Input required placeholder="John" className="bg-background border-white/10 focus:border-primary rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <label className="font-code text-[10px] uppercase tracking-widest text-secondary">Last Name</label>
                  <Input required placeholder="Doe" className="bg-background border-white/10 focus:border-primary rounded-none h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-code text-[10px] uppercase tracking-widest text-secondary">Email Address</label>
                <Input required type="email" placeholder="john@example.com" className="bg-background border-white/10 focus:border-primary rounded-none h-12" />
              </div>
              
              <div className="space-y-2">
                <label className="font-code text-[10px] uppercase tracking-widest text-secondary">Service Needed</label>
                <Select>
                  <SelectTrigger className="bg-background border-white/10 focus:border-primary rounded-none h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-white/10 text-white rounded-none">
                    <SelectItem value="soft">Software Development</SelectItem>
                    <SelectItem value="ai">AI Ads & Marketing</SelectItem>
                    <SelectItem value="vid">Video Creation</SelectItem>
                    <SelectItem value="course">Courses/Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="font-code text-[10px] uppercase tracking-widest text-secondary">Your Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-background border-white/10 focus:border-primary rounded-none h-32 resize-none" />
              </div>
              
              <Button 
                type="submit" 
                disabled={status !== "idle"}
                className="w-full h-14 bg-primary hover:bg-white hover:text-black rounded-none uppercase font-code tracking-widest clip-path-angled"
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && <span className="flex items-center">Message Sent <Check className="ml-2 w-4 h-4" /></span>}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
      
      <style jsx>{`
        .clip-path-angled {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }
      `}</style>
    </section>
  )
}
