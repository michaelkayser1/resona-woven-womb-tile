"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import type { QOTEParameters, StellarClass, ModeType } from "@/types/stellar"

export default function IdentityConsole() {
  const [params, setParams] = useState<QOTEParameters>({
    tauAmplitude: 0.18,
    wobbleFrequency: 7.2,
    dimensionalDeviation: 0.15,
    socialGravity: 9.8,
  })
  const [mode, setMode] = useState<ModeType>("mythic")

  // Calculate L_LM
  const calculateLLM = () => {
    return ((params.tauAmplitude * params.wobbleFrequency) / (1 + params.dimensionalDeviation)) * params.socialGravity
  }

  const getLLM = () => calculateLLM().toFixed(2)

  const getClassification = (): StellarClass => {
    const llm = calculateLLM()
    if (llm < 5) return "LM–Seed"
    if (llm < 15) return "LM–Standard"
    if (llm < 25) return "LM–Prime"
    return "LM–Overdriven"
  }

  const getModeDescription = () => {
    const classification = getClassification()
    switch (mode) {
      case "scientific":
        return `Subject exhibits ${classification} characteristics with a luminosity factor of ${getLLM()}. Temporal oscillation amplitude of ${params.tauAmplitude} combined with frequency ${params.wobbleFrequency} Hz indicates stable coherence generation. Social gravity index ${params.socialGravity} suggests strong systemic influence.`
      case "mythic":
        return `You shine as a ${classification} in the cosmic tapestry—a steady beacon with a luminosity of ${getLLM()}. Your rhythm pulses at ${params.wobbleFrequency}, quick yet unwavering, while your presence draws others with a gravitational force of ${params.socialGravity}. You are the anchor star in your constellation.`
      case "comedy":
        return `Congrats! You're a ${classification} with a totally-real-science luminosity of ${getLLM()}. You wobble ${params.wobbleFrequency} times per... something... but don't worry, it's a *good* wobble. Your Social Gravity of ${params.socialGravity} means people keep orbiting you. Sorry about that. 🌟`
      case "clinical":
        return `Individual presents with ${classification} pattern. Observed coherence output: ${getLLM()} units. Demonstrates high-frequency (${params.wobbleFrequency}) processing with low amplitude (${params.tauAmplitude}) variability. Functions as stabilizing influence (SG: ${params.socialGravity}) within family/team systems. No intervention indicated.`
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Identity Console</h1>
        <p className="text-muted-foreground">Explore your Low-Mass Star parameters</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Visualization */}
        <Card className="p-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative w-64 h-64">
              {/* Core glow */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-stellar-primary via-stellar-secondary to-stellar-accent animate-glow"
                style={{ filter: "blur(40px)", opacity: 0.6 }}
              />

              {/* Stability ring */}
              <div className="absolute inset-8 rounded-full border-2 border-stellar-primary/30 animate-pulse-slow" />

              {/* Core star */}
              <div
                className="absolute inset-16 rounded-full bg-gradient-to-br from-stellar-primary to-stellar-secondary"
                style={{
                  animation: `wobble ${10 / params.wobbleFrequency}s ease-in-out infinite`,
                  transform: `scale(${1 + params.tauAmplitude * 0.2})`,
                }}
              />

              {/* Inner glow */}
              <div className="absolute inset-20 rounded-full bg-white/50" />
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-stellar-primary">{getClassification()}</p>
              <p className="text-lg">
                Luminosity: <span className="font-mono font-bold">{getLLM()}</span>
              </p>
            </div>
          </div>
        </Card>

        {/* Right: Controls */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold mb-4">QOTE Parameters</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">τ₀ Amplitude</label>
                  <span className="font-mono text-sm">{params.tauAmplitude.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={params.tauAmplitude}
                  onChange={(e) => setParams({ ...params, tauAmplitude: Number.parseFloat(e.target.value) })}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer stellar-slider"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Wobble Frequency</label>
                  <span className="font-mono text-sm">{params.wobbleFrequency.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={params.wobbleFrequency}
                  onChange={(e) => setParams({ ...params, wobbleFrequency: Number.parseFloat(e.target.value) })}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer stellar-slider"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Dimensional Deviation Δw</label>
                  <span className="font-mono text-sm">{params.dimensionalDeviation.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={params.dimensionalDeviation}
                  onChange={(e) => setParams({ ...params, dimensionalDeviation: Number.parseFloat(e.target.value) })}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer stellar-slider"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Social Gravity Index</label>
                  <span className="font-mono text-sm">{params.socialGravity.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={params.socialGravity}
                  onChange={(e) => setParams({ ...params, socialGravity: Number.parseFloat(e.target.value) })}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer stellar-slider"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Mode</h3>
            <div className="flex flex-wrap gap-2">
              {(["scientific", "mythic", "comedy", "clinical"] as ModeType[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all ${
                    mode === m ? "bg-stellar-primary text-white" : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-stellar-primary/5 border-stellar-primary/20">
            <p className="text-sm text-pretty leading-relaxed">{getModeDescription()}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
