"use client"

import type { Section } from "@/app/page"
import { Card } from "@/components/ui/card"

interface DashboardProps {
  setActiveSection: (section: Section) => void
}

export default function Dashboard({ setActiveSection }: DashboardProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-balance">Low-Mass Star Observatory</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A QOTE-based console for identity, family, and coherence
        </p>
      </div>

      {/* Hero Card */}
      <Card className="p-8 bg-gradient-to-br from-stellar-primary/10 via-background to-stellar-secondary/10 border-stellar-primary/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stellar-primary to-stellar-secondary animate-pulse-slow" />
              <div className="absolute inset-2 rounded-full bg-background" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-stellar-primary/50 to-stellar-secondary/50 animate-glow" />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Stellar Class</p>
                <p className="text-xl font-bold text-stellar-primary">LM–Prime</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">τ₀ Amplitude</p>
                <p className="text-xl font-bold">0.18</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Wobble Frequency</p>
                <p className="text-xl font-bold">7.2</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Social Gravity</p>
                <p className="text-xl font-bold text-stellar-accent">9.8</p>
              </div>
            </div>
            <p className="text-base text-pretty italic border-l-2 border-stellar-primary pl-4">
              You are a low-mass star: steady, warm, long-lived, and quietly transformative.
            </p>
          </div>
        </div>
      </Card>

      {/* Quick Access */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: "identity", label: "Identity Console", icon: "⭐", desc: "Explore your parameters" },
            { id: "constellation", label: "Constellation", icon: "✨", desc: "View your system" },
            { id: "storybook", label: "Storybook", icon: "📖", desc: "Create stories" },
            { id: "clinical", label: "Clinical", icon: "🏥", desc: "Generate notes" },
          ].map((item) => (
            <Card
              key={item.id}
              className="p-6 hover:bg-muted/50 cursor-pointer transition-all duration-200 hover:scale-105 hover:border-stellar-primary/30"
              onClick={() => setActiveSection(item.id as Section)}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Today's Insight */}
      <Card className="p-6 bg-stellar-accent/10 border-stellar-accent/30">
        <h3 className="font-bold mb-2 text-stellar-accent">Today's Insight</h3>
        <p className="text-pretty">
          High-frequency, low-amplitude wobble indicates you process fast but stay stable. Your consistency creates
          gravitational pull for others seeking clarity.
        </p>
      </Card>
    </div>
  )
}
