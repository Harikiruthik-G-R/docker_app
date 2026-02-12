import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [concepts, setConcepts] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  
  const dockerConcepts = [
    { icon: '📦', title: 'Containers', desc: 'Isolated execution environments that run anywhere' },
    { icon: '🎯', title: 'Images', desc: 'Immutable snapshots of your application stack' },
    { icon: '📝', title: 'Dockerfile', desc: 'Code-as-infrastructure for reproducible builds' },
    { icon: '🌐', title: 'Registries', desc: 'Distributed storage for container images' },
  ]

  return (
    <div className="app-container">
      <div className="grid-background" />
      <div className="noise-overlay" />
      
      <header className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="terminal-header">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot green" />
        </div>
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="DOCKER">
            DOCKER
          </h1>
        </div>
        <div className="subtitle">
          <span className="bracket">{'{ '}</span>
          <span className="name">HARIKIRUTHIK</span>
          <span className="bracket">{' }'}</span>
        </div>
        <p className="tagline">Container orchestration reimagined</p>
      </header>

      <main className={`content ${isVisible ? 'visible' : ''}`}>
        <section className="intro-section">
          <div className="command-line">
            <span className="prompt">$</span>
            <span className="command">docker run --interactive --tty learning/intro</span>
          </div>
          <p className="description">
            Docker transforms software into standardized units called containers.
            Each container includes everything: code, runtime, libraries, dependencies.
            <span className="highlight"> Ship consistently. Deploy anywhere.</span>
          </p>
        </section>

        <div className="concepts-grid">
          {dockerConcepts.map((concept, idx) => (
            <div 
              key={concept.title} 
              className="concept-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="concept-icon">{concept.icon}</div>
              <h3>{concept.title}</h3>
              <p>{concept.desc}</p>
            </div>
          ))}
        </div>

        <div className="counter-section">
          <button 
            className="cyber-button" 
            onClick={() => setConcepts(concepts + 1)}
          >
            <span className="button-content">
              <span className="button-label">CONCEPTS MASTERED</span>
              <span className="button-counter">{String(concepts).padStart(3, '0')}</span>
            </span>
            <span className="button-glow" />
          </button>
        </div>

        <footer className="status-bar">
          <div className="status-item">
            <span className="status-indicator" />
            <span>Container Runtime: Active</span>
          </div>
          <div className="status-item">
            <span className="status-icon">⚡</span>
            <span>Hot Module Reload: Enabled</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
