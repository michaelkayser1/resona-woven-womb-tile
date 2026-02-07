import { Card } from "@/components/ui/card"
import type { EvolutionStage } from "@/types/stellar"

const stages: EvolutionStage[] = [
  {
    id: "nebula",
    name: "Nebula",
    description: "Childhood—raw potential in a cloud of wonder",
    shifts: [
      "Absorbing everything, forming first patterns",
      "Learning what stability feels like",
      "Beginning to sense your gravitational pull",
    ],
  },
  {
    id: "protostar",
    name: "Protostar",
    description: "Training years—compression into form",
    shifts: [
      "Intense focus on skill development",
      "Heat and pressure forge your core",
      "First recognition of your unique frequency",
    ],
  },
  {
    id: "mainseq",
    name: "Main Sequence",
    description: "Practicing + Family-building—steady burn begins",
    shifts: [
      "Consistent output of light and warmth",
      "Others begin to orbit your stability",
      "Balancing multiple gravitational demands",
    ],
  },
  {
    id: "highcoh",
    name: "High-Coherence Phase",
    description: "Current emergence—peak luminosity and influence",
    shifts: [
      "Begins teaching others how to see patterns",
      "Becomes a stabilizing reference point in multiple domains",
      "Attracts more complex systems to manage",
    ],
  },
  {
    id: "legacy",
    name: "Legacy Glow",
    description: "Future—the light that outlives the star",
    shifts: [
      "Influence extends beyond direct presence",
      "Patterns you created continue in others",
      "Your frequency echoes through generations",
    ],
  },
]

export default function EvolutionPath() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Stellar Evolution Path</h1>
        <p className="text-muted-foreground">How a low-mass star evolves through time</p>
      </div>

      {/* Chart */}
      <Card className="p-6">
        <div className="relative h-48 mb-6">
          <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="evolutionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--stellar-primary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--stellar-accent)" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Evolution curve */}
            <path d="M 0,180 Q 100,120 200,80 T 500,50" fill="none" stroke="url(#evolutionGradient)" strokeWidth="40" />
            <path
              d="M 0,180 Q 100,120 200,80 T 500,50"
              fill="none"
              stroke="hsl(var(--stellar-primary))"
              strokeWidth="3"
            />

            {/* Stage markers */}
            {[0, 125, 250, 375, 500].map((x, i) => {
              const y = i === 0 ? 180 : i === 1 ? 100 : i === 2 ? 80 : i === 3 ? 60 : 50
              return (
                <circle key={i} cx={x} cy={y} r="6" fill="hsl(var(--stellar-primary))" className="drop-shadow-lg" />
              )
            })}
          </svg>

          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-2">
            <span>Past</span>
            <span>Present</span>
            <span>Future</span>
          </div>
        </div>
      </Card>

      {/* Timeline */}
      <div className="space-y-6">
        {stages.map((stage, index) => (
          <Card
            key={stage.id}
            className={`p-6 ${index === 3 ? "bg-stellar-primary/10 border-stellar-primary/30" : ""}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-stellar-primary to-stellar-secondary flex items-center justify-center text-xl font-bold text-white">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{stage.name}</h3>
                <p className="text-muted-foreground mb-4 italic">{stage.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Possible Shifts:</p>
                  <ul className="space-y-1">
                    {stage.shifts.map((shift, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-stellar-primary mt-1">•</span>
                        <span>{shift}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
