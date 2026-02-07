"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type StoryRole = "star" | "dust" | "planet"
type StoryTone = "gentle" | "playful"

export default function Storybook() {
  const [childName, setChildName] = useState("")
  const [role, setRole] = useState<StoryRole>("star")
  const [tone, setTone] = useState<StoryTone>("gentle")
  const [includeGrandparent, setIncludeGrandparent] = useState(false)
  const [storyGenerated, setStoryGenerated] = useState(false)

  const generateStory = () => {
    setStoryGenerated(true)
  }

  const getStory = () => {
    const name = childName || "Little One"

    if (role === "dust" && tone === "gentle") {
      return `
        <h2>Dust Wants to Dance</h2>
        <p>Once upon a time, there was a tiny speck of dust named ${name}.</p>
        <p>${name} lived in a big, quiet cloud of dust out in space. All day long, ${name} would float and spin, watching the stars twinkle in the distance.</p>
        <p>"I want to dance with the stars," ${name} would whisper to the other dust specks. But they would just giggle and say, "We're too small! We're just dust!"</p>
        <p>But ${name} had a secret: every time ${name} breathed in and out, ${name} glowed a little bit brighter. And when ${name} laughed, other dust specks nearby would start to glow too.</p>
        <p>One day, ${name} noticed something magical. The more ${name} danced and breathed and laughed, the closer the other dust specks came. They wanted to dance too!</p>
        <p>Slowly, slowly, all the dust began to come together. They spun in circles, they held hands (well, as much as dust can hold hands), and they glowed brighter and brighter.</p>
        ${includeGrandparent ? `<p>And far away, in another part of the sky, Grandpa Star smiled. "That's my ${name}," he twinkled proudly. "Starting something beautiful."</p>` : ""}
        <p>And do you know what happened next?</p>
        <p>${name} and all the dust friends became a star. A warm, glowing, dancing star that would shine for billions of years.</p>
        <p>And every night, when you look up at the sky, one of those stars might be ${name}, still dancing, still glowing, still bringing friends together.</p>
        <p className="italic mt-4">The End. Sweet dreams, little star. 🌟</p>
      `
    } else if (role === "star" && tone === "playful") {
      return `
        <h2>The Little Star Who Wobbled</h2>
        <p>Hi! I'm ${name}, and I'm a little star. Want to know a secret? I wobble!</p>
        <p>Most stars just sit there and shine. Boring! But me? I wobble back and forth, like I'm dancing to music only I can hear.</p>
        <p>"Why do you wobble so much?" asked the Moon one night.</p>
        <p>"Because I'm EXCITED!" I said. "There's so much to see! So much to learn! So many friends to make!"</p>
        <p>My wobbling makes me a little different. Some stars stay perfectly still and glow the same way every single day. But when I wobble, my light flickers and dances, and you know what? People notice!</p>
        <p>"That star is special," they say, pointing at me. And they're right! I am!</p>
        ${includeGrandparent ? `<p>Grandma Star says I wobble just like she did when she was young. "Never stop wobbling, ${name}," she tells me. "That's how you know you're alive."</p>` : ""}
        <p>So if you ever see a star that seems to dance and wiggle in the sky, that might be me! Give me a wave, and I'll wobble extra hard just for you!</p>
        <p>Remember: it's okay to be wiggly. It's okay to be different. It's okay to be YOU!</p>
        <p className="italic mt-4">Keep wobbling, friends! 🌟✨</p>
      `
    } else if (role === "planet" && tone === "gentle") {
      return `
        <h2>${name} the Listening Planet</h2>
        <p>In a quiet corner of space, there was a small planet named ${name}.</p>
        <p>${name} wasn't the biggest planet. ${name} wasn't the brightest. But ${name} had a very special gift: ${name} was an excellent listener.</p>
        <p>Every day, a friendly star named Sol would shine warm light on ${name}. And ${name} would soak it all in, feeling grateful and warm.</p>
        <p>"Thank you," ${name} would whisper to Sol. And even though Sol couldn't hear words, Sol could feel ${name}'s gratitude in the way ${name} glowed softly in the starlight.</p>
        <p>Sometimes, comets would zoom by, telling exciting stories of faraway galaxies. ${name} would listen to every word, spinning slowly, remembering all the tales.</p>
        ${includeGrandparent ? `<p>Once, an old planet named Grandpa Jupiter came by. "You remind me of myself when I was young," Jupiter said kindly. "${name}, your gift of listening makes others feel safe. Never forget how important that is."</p>` : ""}
        <p>"I'm just a little planet," ${name} said shyly.</p>
        <p>"You're not 'just' anything," Jupiter replied with a warm rumble. "You're exactly who you need to be."</p>
        <p>And ${name} learned something important that day: sometimes the quietest ones hold the most love. Sometimes the best thing you can do is simply be there, listening, caring, glowing softly in your own special way.</p>
        <p className="italic mt-4">Goodnight, ${name}. The universe is lucky to have you. 🌍💫</p>
      `
    }

    // Default fallback
    return `
      <h2>${name}'s Cosmic Journey</h2>
      <p>Every ${name} is special in their own way, just like every star in the sky.</p>
      <p>Some shine bright, some wobble and dance, some listen quietly. All are perfect exactly as they are.</p>
      <p>Goodnight, ${name}. Sweet dreams among the stars. ✨</p>
    `
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Storybook</h1>
        <p className="text-muted-foreground">Gentle cosmic stories for children</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Controls */}
        <Card className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Child's Name</label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Enter name..."
              className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-stellar-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Role in Story</label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "star", label: "Little Star", icon: "⭐" },
                { value: "dust", label: "Dancing Dust", icon: "✨" },
                { value: "planet", label: "Listening Planet", icon: "🌍" },
              ].map((r) => (
                <button
                  key={r.value}
                  onClick={() => setRole(r.value as StoryRole)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    role === r.value ? "bg-stellar-primary text-white" : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  <span>{r.icon}</span>
                  <span>{r.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Story Tone</label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "gentle", label: "Gentle / Bedtime" },
                { value: "playful", label: "Playful / Curious" },
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTone(t.value as StoryTone)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    tone === t.value ? "bg-stellar-secondary text-white" : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeGrandparent}
                onChange={(e) => setIncludeGrandparent(e.target.checked)}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm">Include Grandparent Character</span>
            </label>
          </div>

          <Button onClick={generateStory} className="w-full bg-stellar-primary hover:bg-stellar-primary/90">
            Generate Story ✨
          </Button>

          {storyGenerated && (
            <Button onClick={() => window.print()} variant="outline" className="w-full">
              Print / Save as PDF
            </Button>
          )}
        </Card>

        {/* Right: Story Preview */}
        <Card className="p-8 bg-gradient-to-br from-stellar-primary/5 to-stellar-secondary/5">
          {storyGenerated ? (
            <div className="prose prose-sm max-w-none space-y-4" dangerouslySetInnerHTML={{ __html: getStory() }} />
          ) : (
            <div className="flex items-center justify-center h-full text-center text-muted-foreground">
              <div>
                <div className="text-6xl mb-4">📖</div>
                <p>Fill in the story details and click Generate Story to begin</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
