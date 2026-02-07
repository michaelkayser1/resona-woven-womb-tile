"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type OutputStyle = "narrative" | "clinical" | "research"

export default function ClinicalMode() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("parent")
  const [traits, setTraits] = useState<string[]>([])
  const [outputStyle, setOutputStyle] = useState<OutputStyle>("narrative")
  const [generated, setGenerated] = useState(false)

  const availableTraits = [
    "Responds well to structure",
    "High sensitivity to others' distress",
    "Takes on stabilizing role in family/system",
    "Processes information quickly",
    "Maintains calm under pressure",
    "Creates order from complexity",
    "Acts as emotional anchor for others",
  ]

  const toggleTrait = (trait: string) => {
    if (traits.includes(trait)) {
      setTraits(traits.filter((t) => t !== trait))
    } else {
      setTraits([...traits, trait])
    }
  }

  const getOutput = () => {
    const personName = name || "Individual"
    const selectedTraits = traits.length > 0 ? traits : ["demonstrated stable patterns"]

    switch (outputStyle) {
      case "narrative":
        return `${personName} is a highly stable, coherence-generating presence within their family and clinical systems. They tend to absorb complexity, metabolize it internally, and return structured, understandable information to others.\n\nObserved patterns include: ${selectedTraits.join(", ").toLowerCase()}. These characteristics suggest a low-mass star profile—consistent output, high social gravity, and sustained influence over time.\n\n${personName} functions as an anchoring force, particularly valuable in multi-stress environments. Their presence appears to reduce ambient anxiety and improve information flow within their system.`

      case "clinical":
        return `The ${role} appears to function as a stabilizing influence in family dynamics, with a high capacity to process complex information and communicate it clearly. This may reduce distress in other family members and improve adherence to care plans.\n\nObserved characteristics: ${selectedTraits.join("; ").toLowerCase()}. Pattern consistent with high-coherence, low-volatility profile.\n\nNo clinical intervention indicated. Consider leveraging this individual's natural strengths in family-centered care planning. They may serve effectively as a communication liaison or information integrator for the treatment team.`

      case "research":
        return `Research Hypothesis: Individuals with low τ₀ amplitude (stable baseline) and high social gravity (systemic influence) may serve as protective stabilizers in multi-stress environments, warranting further study.\n\nOperational Definition: "Low-Mass Star Profile" characterized by ${selectedTraits.join(", ").toLowerCase()}. Preliminary observation suggests correlation with improved family system coherence and reduced caregiver burden.\n\nProposed Study: Longitudinal assessment of family systems containing at least one LM-profile individual versus matched controls. Primary outcome: system stress response during acute medical events. Secondary outcomes: communication quality, adherence rates, caregiver mental health indicators.`
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getOutput())
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Clinical Mode</h1>
        <p className="text-muted-foreground">EMR-compatible narrative generation (observational only)</p>
      </div>

      <Card className="p-6 bg-stellar-accent/10 border-stellar-accent/30">
        <p className="text-sm">
          <strong>Important:</strong> This tool generates <em>observational language only</em>. It does not diagnose,
          prescribe, or offer medical advice. Use professional judgment when incorporating into clinical documentation.
        </p>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Inputs */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Optional"
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-stellar-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-stellar-primary"
              >
                <option value="parent">Parent</option>
                <option value="patient">Patient</option>
                <option value="caregiver">Caregiver</option>
                <option value="trainee">Trainee</option>
                <option value="colleague">Colleague</option>
              </select>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Observed Traits</h3>
            <div className="space-y-2">
              {availableTraits.map((trait) => (
                <label key={trait} className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={traits.includes(trait)}
                    onChange={() => toggleTrait(trait)}
                    className="mt-0.5 w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm">{trait}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Output Style</h3>
            <div className="space-y-2">
              {[
                { value: "narrative", label: "Narrative Summary", desc: "Story-like, detailed" },
                { value: "clinical", label: "Clinical Note Snippet", desc: "EMR-ready, concise" },
                { value: "research", label: "Research Hypothesis", desc: "Academic, formal" },
              ].map((style) => (
                <button
                  key={style.value}
                  onClick={() => setOutputStyle(style.value as OutputStyle)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    outputStyle === style.value ? "bg-stellar-primary text-white" : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  <div className="font-medium">{style.label}</div>
                  <div className={`text-xs ${outputStyle === style.value ? "text-white/70" : "text-muted-foreground"}`}>
                    {style.desc}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Button onClick={() => setGenerated(true)} className="w-full bg-stellar-primary hover:bg-stellar-primary/90">
            Generate
          </Button>
        </div>

        {/* Right: Output */}
        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold">Generated Output</h3>
            {generated && (
              <Button onClick={copyToClipboard} variant="outline" size="sm">
                Copy
              </Button>
            )}
          </div>

          {generated ? (
            <div className="bg-muted/50 p-4 rounded-lg min-h-[400px]">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">{getOutput()}</pre>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[400px] text-center text-muted-foreground">
              <div>
                <div className="text-6xl mb-4">🏥</div>
                <p>Fill in the details and click Generate</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
