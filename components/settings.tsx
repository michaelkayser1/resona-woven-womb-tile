"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function Settings() {
  const [kidsMode, setKidsMode] = useState(true)
  const [clinicalMode, setClinicalMode] = useState(true)
  const [theme, setTheme] = useState("cosmic")

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Settings / About QOTE</h1>
        <p className="text-muted-foreground">Learn about the system and adjust preferences</p>
      </div>

      <Card className="p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-3">What is QOTE?</h2>
          <p className="text-pretty leading-relaxed mb-4">
            QOTE (Quantum Oscillation Temporal Encoding) is a metaphorical framework for understanding identity,
            coherence, and interpersonal dynamics through the language of stellar physics.
          </p>
          <p className="text-pretty leading-relaxed">
            It's not a diagnosis, not a personality test, and not a scientific theory. It's a <em>lens</em>—a way of
            seeing patterns in how people process information, generate stability, and influence the systems around
            them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">What is a Low-Mass Star?</h2>
          <p className="text-pretty leading-relaxed mb-4">
            In astrophysics, low-mass stars are the most common stars in the universe. They burn steadily for billions
            of years, providing consistent warmth without dramatic flares or explosions.
          </p>
          <p className="text-pretty leading-relaxed">
            As a metaphor: <strong>Low-Mass Star individuals</strong> are steady, reliable presences who process
            complexity quickly (high wobble frequency) while maintaining stability (low amplitude). They become
            gravitational anchors in their families, teams, and communities—often without seeking recognition.
          </p>
        </div>

        <div className="bg-stellar-accent/10 p-6 rounded-lg border border-stellar-accent/30">
          <h3 className="font-bold mb-2 text-stellar-accent">Important Note</h3>
          <p className="text-sm text-pretty">
            This is <strong>metaphor, not diagnosis</strong>. QOTE does not replace clinical assessment, psychological
            evaluation, or medical care. It's a thinking tool, a narrative aid, and a way to appreciate the hidden
            patterns in human systems.
          </p>
        </div>
      </Card>

      <Card className="p-8 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Preferences</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Kids Mode</p>
              <p className="text-sm text-muted-foreground">Show Storybook section</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={kidsMode}
                onChange={(e) => setKidsMode(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-stellar-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stellar-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Clinical Mode</p>
              <p className="text-sm text-muted-foreground">Show Clinical Mode section</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={clinicalMode}
                onChange={(e) => setClinicalMode(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-stellar-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stellar-primary"></div>
            </label>
          </div>

          <div>
            <p className="font-medium mb-2">Theme</p>
            <div className="flex gap-2">
              {["cosmic", "light", "dark"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all ${
                    theme === t ? "bg-stellar-primary text-white" : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Low-Mass Star Observatory v1.0 • A QOTE-based console • Built with ❤️ and stardust
        </p>
      </Card>
    </div>
  )
}
