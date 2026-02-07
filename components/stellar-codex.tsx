"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import type { StellarArchetype } from "@/types/stellar"

const archetypes: StellarArchetype[] = [
  {
    id: "lm",
    name: "Low-Mass Star",
    icon: "⭐",
    traits: ["Steady output", "Long-lived", "Supports life", "Doesn't seek attention"],
    bestRoles: ["Anchor", "Mentor", "Quiet leader", "Stabilizing presence"],
    risks: ["Under-recognized", "Over-relied upon", "Burnout from consistency demands"],
    qoteRanges: {
      tauAmplitude: "Low (0.1-0.3)",
      wobbleFrequency: "High (6-10)",
      dimensionalDeviation: "Low (0.0-0.2)",
      socialGravity: "High (8-10)",
    },
    description:
      "The steady heart of any system. Low-mass stars burn for billions of years, providing consistent warmth without drama. They are the unsung heroes of the cosmos.",
    story:
      "Dr. Sarah ran the clinic for 30 years. Nobody wrote articles about her, but every nurse knew: when chaos hit, Sarah was the calm center. Patients felt it too. She was their star.",
  },
  {
    id: "supernova",
    name: "High-Mass Supernova",
    icon: "💥",
    traits: ["Brilliant bursts", "Short-lived intensity", "Transforms systems", "Spectacular presence"],
    bestRoles: ["Catalyst", "Innovator", "Crisis leader", "Revolutionary"],
    risks: ["Burnout", "Collateral damage", "Unsustainable pace", "Legacy instability"],
    qoteRanges: {
      tauAmplitude: "Very High (0.7-1.0)",
      wobbleFrequency: "Low (1-3)",
      dimensionalDeviation: "High (0.6-1.0)",
      socialGravity: "Variable (3-10)",
    },
    description:
      "Intense, transformative forces that burn bright and fast. They change everything around them but cannot sustain indefinitely.",
    story:
      "Marcus started three companies in five years. Each one revolutionized its field, then imploded. His team loved and feared him. He was a supernova—brilliant, devastating, brief.",
  },
  {
    id: "pulsar",
    name: "Pulsar Mind",
    icon: "📡",
    traits: ["Precise rhythm", "Reliable signals", "Pattern recognition", "Structured output"],
    bestRoles: ["Systems designer", "Data analyst", "Process builder", "Quality controller"],
    risks: ["Rigidity", "Overwhelm from chaos", "Isolation", "Difficulty with ambiguity"],
    qoteRanges: {
      tauAmplitude: "Very Low (0.0-0.1)",
      wobbleFrequency: "Very High (9-10)",
      dimensionalDeviation: "Very Low (0.0-0.1)",
      socialGravity: "Medium (4-6)",
    },
    description:
      "Ultra-precise individuals who emit regular, predictable signals. Excellent at creating and maintaining systems.",
    story:
      "Every morning at 6:02 AM, Jamie published her analysis. Markets waited for it. Her rhythm was so reliable, traders set their clocks by her insights.",
  },
  {
    id: "blackhole",
    name: "Black Hole Empath",
    icon: "🌀",
    traits: ["Absorbs everything", "Deep processing", "Transforms pain", "Mysterious presence"],
    bestRoles: ["Therapist", "Mediator", "Grief counselor", "Deep listener"],
    risks: ["Emotional overload", "Invisibility", "Boundary collapse", "Isolation"],
    qoteRanges: {
      tauAmplitude: "High (0.5-0.8)",
      wobbleFrequency: "Low (0-3)",
      dimensionalDeviation: "Medium (0.3-0.5)",
      socialGravity: "Very High (9-10)",
    },
    description:
      "Individuals who absorb emotional complexity from their environment, process it internally, and transform it into something else.",
    story:
      "People told Elena things they never told anyone. She held their pain, somehow made it lighter. Nobody knew how she did it. She just... absorbed and transmuted.",
  },
  {
    id: "gasgiant",
    name: "Gas Giant Organizer",
    icon: "🪐",
    traits: ["Holds multiple moons", "Creates order", "Protective presence", "Manages complexity"],
    bestRoles: ["Project manager", "Family coordinator", "Event planner", "Operations lead"],
    risks: ["Over-responsibility", "Neglecting self", "Becoming indispensable", "Orbital dependency"],
    qoteRanges: {
      tauAmplitude: "Medium (0.3-0.5)",
      wobbleFrequency: "Medium (4-6)",
      dimensionalDeviation: "Low (0.1-0.3)",
      socialGravity: "High (7-9)",
    },
    description:
      "Natural coordinators who keep many things in orbit simultaneously. They create structure for others to thrive within.",
    story:
      "Thomas managed 12 projects, 3 kids, and his aging parents. Everyone depended on him. He made it look easy. It wasn't. But he held them all in orbit.",
  },
  {
    id: "rogue",
    name: "Rogue Planet Wanderer",
    icon: "🌑",
    traits: ["Independent path", "Self-sufficient", "Unpredictable", "Free-moving"],
    bestRoles: ["Solo creator", "Explorer", "Independent consultant", "Artist"],
    risks: ["Loneliness", "Disconnection", "Resource scarcity", "Difficult to collaborate"],
    qoteRanges: {
      tauAmplitude: "Variable",
      wobbleFrequency: "Variable",
      dimensionalDeviation: "High (0.6-0.9)",
      socialGravity: "Low (0-3)",
    },
    description:
      "Individuals who move through space without orbiting any star. Self-directed, independent, sometimes isolated.",
    story:
      "Yuki traveled for seven years, writing from coffee shops across continents. No office, no manager, no fixed address. Just her laptop and the next city.",
  },
]

export default function StellarCodex() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedArchetype, setSelectedArchetype] = useState<StellarArchetype | null>(null)

  const filteredArchetypes = archetypes.filter((arch) => {
    const matchesSearch =
      arch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      arch.traits.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = selectedType === "all" || arch.id === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Stellar Codex</h1>
        <p className="text-muted-foreground">A library of human archetypes as stellar types</p>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search archetypes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-stellar-primary"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-stellar-primary"
          >
            <option value="all">All Types</option>
            <option value="lm">Low-Mass Star</option>
            <option value="supernova">High-Mass Supernova</option>
            <option value="pulsar">Pulsar Mind</option>
            <option value="blackhole">Black Hole Empath</option>
            <option value="gasgiant">Gas Giant Organizer</option>
            <option value="rogue">Rogue Planet Wanderer</option>
          </select>
        </div>
      </Card>

      {/* Archetype Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArchetypes.map((archetype) => (
          <Card
            key={archetype.id}
            className="p-6 hover:bg-muted/50 cursor-pointer transition-all duration-200 hover:scale-105 hover:border-stellar-primary/30"
            onClick={() => setSelectedArchetype(archetype)}
          >
            <div className="text-5xl mb-4">{archetype.icon}</div>
            <h3 className="text-xl font-bold mb-2">{archetype.name}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium mb-1">Core Traits:</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  {archetype.traits.slice(0, 2).map((trait, i) => (
                    <li key={i}>• {trait}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Best Roles:</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  {archetype.bestRoles.slice(0, 2).map((role, i) => (
                    <li key={i}>• {role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedArchetype && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedArchetype(null)}
        >
          <Card className="max-w-2xl max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-6xl mb-2">{selectedArchetype.icon}</div>
                <h2 className="text-3xl font-bold">{selectedArchetype.name}</h2>
              </div>
              <button
                onClick={() => setSelectedArchetype(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <p className="text-pretty mb-6">{selectedArchetype.description}</p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-bold mb-2">Core Traits</h3>
                <ul className="space-y-1">
                  {selectedArchetype.traits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-stellar-primary">•</span>
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Best Roles</h3>
                <ul className="space-y-1">
                  {selectedArchetype.bestRoles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-stellar-primary">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 text-stellar-accent">Risks</h3>
                <ul className="space-y-1">
                  {selectedArchetype.risks.map((risk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-stellar-accent">⚠</span>
                      <span className="text-muted-foreground">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">QOTE Parameters</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>τ₀ Amplitude: {selectedArchetype.qoteRanges.tauAmplitude}</div>
                  <div>Wobble: {selectedArchetype.qoteRanges.wobbleFrequency}</div>
                  <div>Δw: {selectedArchetype.qoteRanges.dimensionalDeviation}</div>
                  <div>Social Gravity: {selectedArchetype.qoteRanges.socialGravity}</div>
                </div>
              </div>
            </div>

            <div className="bg-stellar-primary/10 p-4 rounded-lg border border-stellar-primary/20">
              <h3 className="font-bold mb-2">Field Example</h3>
              <p className="text-sm text-pretty italic">{selectedArchetype.story}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
