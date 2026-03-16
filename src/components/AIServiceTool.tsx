
"use client"

import { useState } from "react"
import { aiServiceConceptGenerator, AiServiceConceptGeneratorOutput } from "@/ai/flows/ai-service-concept-generator-flow"
import { ScrollReveal } from "./ScrollReveal"
import { SectionHeader } from "./SectionHeader"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Sparkles, Loader2, CheckCircle2 } from "lucide-react"

export function AIServiceTool() {
  const [needs, setNeeds] = useState("")
  const [goals, setGoals] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AiServiceConceptGeneratorOutput | null>(null)

  const handleGenerate = async () => {
    if (!needs || !goals) return
    setLoading(true)
    try {
      const output = await aiServiceConceptGenerator({
        businessNeeds: needs,
        businessGoals: goals
      })
      setResult(output)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeader 
            label="AI INNOVATION" 
            title="GET YOUR AI STRATEGY" 
            className="mb-8"
          />
          <p className="text-secondary mb-12 max-w-2xl">
            Describe your business challenges, and our AI will draft a high-level conceptual recommendation tailored to your growth goals.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <ScrollReveal className="space-y-6">
            <div className="space-y-2">
              <label className="font-code text-[10px] uppercase tracking-widest text-secondary">Your Business Needs</label>
              <Textarea 
                placeholder="E.g., We need to increase our social media engagement for a new clothing line launch..."
                className="bg-white/[0.02] border-white/10 rounded-none h-32 focus:border-primary transition-all resize-none"
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="font-code text-[10px] uppercase tracking-widest text-secondary">Desired Business Goals</label>
              <Textarea 
                placeholder="E.g., Achieve 20% conversion rate and establish a futuristic brand identity."
                className="bg-white/[0.02] border-white/10 rounded-none h-32 focus:border-primary transition-all resize-none"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleGenerate} 
              disabled={loading || !needs || !goals}
              className="w-full h-14 bg-primary hover:bg-white hover:text-black rounded-none uppercase font-code tracking-widest clip-path-angled"
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
              Generate AI Concept
            </Button>
          </ScrollReveal>

          {/* Result */}
          <div className="relative">
            {!result && !loading && (
              <div className="absolute inset-0 border border-dashed border-white/10 flex items-center justify-center p-12 text-center">
                <span className="text-white/20 font-code text-sm uppercase tracking-widest">
                  Awaiting input to generate your conceptual draft...
                </span>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-4 border border-primary/20">
                <Loader2 className="animate-spin text-primary w-12 h-12" />
                <span className="font-code text-xs uppercase tracking-[0.2em]">Processing with CypherCore AI...</span>
              </div>
            )}

            {result && (
              <ScrollReveal className="bg-white/[0.03] border border-primary/30 p-8 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary text-white rounded-none uppercase font-code text-[10px]">{result.serviceType}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">{result.conceptTitle}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-code text-[10px] uppercase text-secondary mb-2 tracking-widest">// RECOMMENDATION</h4>
                    <p className="text-sm text-foreground leading-relaxed">{result.recommendation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-code text-[10px] uppercase text-secondary mb-2 tracking-widest">// KEY FEATURES</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {result.keyFeatures.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                          <CheckCircle2 className="w-3 h-3 text-primary" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <h4 className="font-code text-[10px] uppercase text-secondary mb-2 tracking-widest">// POTENTIAL IMPACT</h4>
                    <p className="text-sm italic text-accent">{result.potentialImpact}</p>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
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
