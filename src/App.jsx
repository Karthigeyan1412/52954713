
import { useState } from 'react'
import './App.css'
import DeveloperAvatar from './components/DeveloperAvatar'
import VillageMap from './components/VillageMap'

function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(true)

  return (
    <main className="game-screen">
      <VillageMap />

      <header className="game-header">
        <a className="brand" href="#home">✦ Dev Realm</a>
        <button
          className="journal-button"
          onClick={() => setWelcomeOpen(true)}
        >
          📖 Journal
        </button>
      </header>

      {welcomeOpen && (
        <div className="welcome-overlay">
          <section
            className="welcome-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
          >
            <button
              className="popup-close"
              aria-label="Close welcome panel"
              onClick={() => setWelcomeOpen(false)}
            >
              ×
            </button>

            <p className="eyebrow">✦ ADVENTURER'S JOURNAL ✦</p>

            <h1 id="welcome-title">
              Welcome to My
              <span>Developer Realm</span>
            </h1>

            <p className="intro">
              Hello, adventurer! I'm Karthigeyan, a developer who enjoys
              building applications and exploring new technologies.
              Come discover my projects, skills, and journey.
            </p>

            <div className="popup-avatar">
              <DeveloperAvatar />
            </div>

            <button
              className="primary-button"
              onClick={() => setWelcomeOpen(false)}
            >
              Begin Adventure →
            </button>

            <p className="popup-hint">
              Explore the village to discover my work.
            </p>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
