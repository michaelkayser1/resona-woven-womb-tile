"use client"

import type { Section } from "@/app/page"

interface SidebarProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "🌟" },
  { id: "identity", label: "Identity Console", icon: "⭐" },
  { id: "constellation", label: "Constellation Map", icon: "✨" },
  { id: "evolution", label: "Stellar Evolution", icon: "🌠" },
  { id: "codex", label: "Stellar Codex", icon: "📚" },
  { id: "storybook", label: "Storybook", icon: "📖" },
  { id: "clinical", label: "Clinical Mode", icon: "🏥" },
  { id: "settings", label: "Settings", icon: "⚙️" },
]

export default function Sidebar({ activeSection, setActiveSection, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-72 bg-card/50 backdrop-blur-xl border-r border-border
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-balance bg-gradient-to-r from-stellar-primary to-stellar-secondary bg-clip-text text-transparent">
              Low-Mass Star Observatory
            </h1>
            <p className="text-sm text-muted-foreground mt-1">QOTE Stellar Console</p>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 text-left
                  ${
                    activeSection === item.id
                      ? "bg-stellar-primary/20 text-stellar-primary border border-stellar-primary/30"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">Metaphor, not diagnosis</p>
          </div>
        </div>
      </aside>
    </>
  )
}
