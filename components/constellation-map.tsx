"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import type { ConstellationMember } from "@/types/stellar"

const constellation: ConstellationMember[] = [
  { id: "mike", name: "Mike", class: "LM–Prime", role: "Anchor", gravity: 9.8 },
  { id: "tasha", name: "Tasha", class: "LM–Standard", role: "Tidal Stabilizer", gravity: 8.4 },
  { id: "anna", name: "Anna", class: "High-Flux Planet", role: "Bright Orbit", gravity: 7.9 },
  { id: "drew", name: "Drew", class: "Proto-Star", role: "Structured Builder", gravity: 7.5 },
  { id: "dante", name: "Dante", class: "Binary Flare Companion", role: "Narrative Mirror", gravity: 7.0 },
  { id: "rich", name: "Rich", class: "Old Neutron Pen", role: "Historical Chronicler", gravity: 8.1 },
]

export default function ConstellationMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>("mike")

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Constellation Map</h1>
        <p className="text-muted-foreground">Your family system as a stellar constellation</p>
      </div>

      {/* Visualization */}
      <Card className="p-8 bg-gradient-to-br from-background via-stellar-primary/5 to-stellar-secondary/5">
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Center star (Mike) */}
          <div
            className="absolute cursor-pointer transition-all"
            style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
            onMouseEnter={() => setHoveredId("mike")}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedId("mike")}
          >
            <div
              className={`relative ${selectedId === "mike" ? "scale-125" : hoveredId === "mike" ? "scale-110" : ""} transition-transform`}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-stellar-primary to-stellar-secondary animate-glow" />
              <div className="absolute inset-2 rounded-full bg-white/30" />
            </div>
          </div>

          {/* Orbiting members */}
          {constellation.slice(1).map((member, index) => {
            const angle = (index * 360) / 5
            const radius = 120
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <div
                key={member.id}
                className="absolute cursor-pointer transition-all"
                style={{ transform: `translate(-50%, -50%)`, left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedId(member.id)}
              >
                <div
                  className={`relative ${selectedId === member.id ? "scale-125" : hoveredId === member.id ? "scale-110" : ""} transition-transform`}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${
                      member.id === "tasha"
                        ? "from-stellar-secondary to-stellar-accent"
                        : member.id === "anna"
                          ? "from-stellar-accent to-stellar-primary"
                          : "from-stellar-primary/70 to-stellar-secondary/70"
                    }`}
                  />
                  {hoveredId === member.id && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur px-3 py-1 rounded-lg whitespace-nowrap text-sm border border-border z-10">
                      {member.name}
                    </div>
                  )}
                </div>

                {/* Connection line to center */}
                <svg
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{ width: radius + 50, height: radius + 50, transform: "translate(-50%, -50%)" }}
                >
                  <line
                    x1={(radius + 50) / 2}
                    y1={(radius + 50) / 2}
                    x2={(radius + 50) / 2 - x}
                    y2={(radius + 50) / 2 - y}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-stellar-primary/20"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Member List */}
      <Card className="p-6">
        <h3 className="font-bold mb-4">Constellation Members</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Stellar Class</th>
                <th className="text-left p-3">Role</th>
                <th className="text-left p-3">Gravity</th>
              </tr>
            </thead>
            <tbody>
              {constellation.map((member) => (
                <tr
                  key={member.id}
                  onClick={() => setSelectedId(member.id)}
                  className={`cursor-pointer transition-colors ${
                    selectedId === member.id ? "bg-stellar-primary/10" : "hover:bg-muted/50"
                  }`}
                >
                  <td className="p-3 font-medium">{member.name}</td>
                  <td className="p-3 text-sm">{member.class}</td>
                  <td className="p-3 text-sm text-muted-foreground">{member.role}</td>
                  <td className="p-3 font-mono text-sm">{member.gravity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Insight */}
      <Card className="p-6 bg-stellar-accent/10 border-stellar-accent/30">
        <h3 className="font-bold mb-2 text-stellar-accent">System Analysis</h3>
        <p className="text-pretty">
          Your constellation is anchored by a low-mass star with multiple bright orbits. System classified as "High
          Coherence, High Variability"—stable core with dynamic, expressive family members. Combined gravitational
          influence creates a resilient, adaptive system.
        </p>
      </Card>
    </div>
  )
}
