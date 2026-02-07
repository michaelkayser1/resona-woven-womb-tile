export interface QOTEParameters {
  tauAmplitude: number // 0.0 - 1.0
  wobbleFrequency: number // 0 - 10
  dimensionalDeviation: number // 0 - 1.0
  socialGravity: number // 0 - 10
}

export type StellarClass = "LM–Seed" | "LM–Standard" | "LM–Prime" | "LM–Overdriven"

export type ModeType = "scientific" | "mythic" | "comedy" | "clinical"

export interface ConstellationMember {
  id: string
  name: string
  class: string
  role: string
  gravity: number
}

export interface StellarArchetype {
  id: string
  name: string
  icon: string
  traits: string[]
  bestRoles: string[]
  risks: string[]
  qoteRanges: {
    tauAmplitude: string
    wobbleFrequency: string
    dimensionalDeviation: string
    socialGravity: string
  }
  description: string
  story: string
}

export interface EvolutionStage {
  id: string
  name: string
  description: string
  shifts: string[]
}
