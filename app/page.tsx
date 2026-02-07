"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Dashboard from "@/components/dashboard"
import IdentityConsole from "@/components/identity-console"
import ConstellationMap from "@/components/constellation-map"
import EvolutionPath from "@/components/evolution-path"
import StellarCodex from "@/components/stellar-codex"
import Storybook from "@/components/storybook"
import ClinicalMode from "@/components/clinical-mode"
import Settings from "@/components/settings"

export type Section =
  | "dashboard"
  | "identity"
  | "constellation"
  | "evolution"
  | "codex"
  | "storybook"
  | "clinical"
  | "settings"

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="lg:pl-72">
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="container mx-auto p-4 md:p-8 max-w-7xl">
          {activeSection === "dashboard" && <Dashboard setActiveSection={setActiveSection} />}
          {activeSection === "identity" && <IdentityConsole />}
          {activeSection === "constellation" && <ConstellationMap />}
          {activeSection === "evolution" && <EvolutionPath />}
          {activeSection === "codex" && <StellarCodex />}
          {activeSection === "storybook" && <Storybook />}
          {activeSection === "clinical" && <ClinicalMode />}
          {activeSection === "settings" && <Settings />}
        </div>
      </main>
    </div>
  )
}
