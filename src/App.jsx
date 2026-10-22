
import { useState } from 'react'
import './App.css'

function LogoMark() {
  return (
    <svg viewBox="0 0 44 44" className="logo-mark" aria-hidden="true">
      <rect x="1" y="1" width="42" height="42" rx="14" fill="currentColor" />
      <path
        d="M12 15H32L17 29H32"
        fill="none"
        stroke="var(--logo-cutout)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="10" r="2.5" fill="#A9C49A" />
    </svg>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [dark, setDark] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = (page) => {
    setActiveTab(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`app ${dark ? 'dark' : 'light'}`}>
      <header className="navbar">
        <button className="brand" onClick={() => navigate('home')} aria-label="Zign home">
          <LogoMark />
          <span className="wordmark">zign<span>.</span></span>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          <button className={activeTab === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button>
          <button className={activeTab === 'translate' ? 'active' : ''} onClick={() => navigate('translate')}>Translate</button>
          <button className={activeTab === 'dictionary' ? 'active' : ''} onClick={() => navigate('dictionary')}>Dictionary</button>
          <button className={activeTab === 'about' ? 'active' : ''} onClick={() => navigate('about')}>Our purpose</button>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? '☼' : '◐'}
          </button>
          <button className="button button-dark nav-button" onClick={() => navigate('translate')}>
            Start a conversation <span>↗</span>
          </button>
        </div>
      </header>

      <main>
        {activeTab === 'home' && (
          <>
            <section className="hero">
              <div className="hero-copy reveal">
                <div className="eyebrow">
                  <span className="eyebrow-line" />
                  ACCESSIBILITY, REIMAGINED IN ZAMBIA
                </div>

                <h1>
                  A world where
                  <br />
                  <span>every sign</span>
                  <br />
                  <em>is understood.</em>
                </h1>

                <p className="hero-description">
                  Meet a new way to connect through Zambian Sign Language.
                  Technology designed to bring Deaf and hearing communities
                  closer, one conversation at a time.
                </p>

                <div className="hero-actions">
                  <button className="button button-dark" onClick={() => navigate('translate')}>
                    Explore Zign <span>↗</span>
                  </button>
                  <button className="text-button" onClick={() => navigate('dictionary')}>
                    Discover ZSL <span>→</span>
                  </button>
                </div>

                <div className="hero-footnote">
                  <span className="footnote-symbol">✳</span>
                  Created with the Zambian Deaf community in mind.
                </div>
              </div>

              <div className="hero-visual reveal reveal-later">
                <img
                  className="hero-image"
                  src="https://static.euronews.com/articles/stories/08/43/90/86/400x225_cmsv2_d14a49f7-3116-583c-9380-0dba6cbc8c96-8439086.jpg"
                  alt="A Zambian sign language interpreter signing to Deaf students during a lesson"
                />
                <div className="image-overlay" />
                <div className="image-caption">
                  <span className="caption-index">01 / 03</span>
                  <span>Real conversations begin with signing.</span>
                </div>
                <div className="floating-note">
                  <span className="note-mark"><LogoMark /></span>
                  <span>
                    <strong>Communication belongs to everyone.</strong>
                    <small>Our vision for a more accessible Zambia.</small>
                  </span>
                </div>
                <span className="visual-orbit orbit-a" />
                <span className="visual-orbit orbit-b" />
              </div>
            </section>

            <section className="manifesto">
              <div className="manifesto-label">
                <span className="section-number">01</span>
                <span>WHY WE'RE HERE</span>
              </div>
              <div className="manifesto-content">
                <h2>
                  Different ways to speak.
                  <br />
                  <span>One way to connect.</span>
                </h2>
                <div className="manifesto-aside">
                  <p>
                    Communication should never be limited by whether someone
                    knows how to sign. Zign is exploring how thoughtful design
                    and technology can help bridge that gap.
                  </p>
                  <button className="text-button" onClick={() => navigate('about')}>
                    Get to know Zign <span>→</span>
                  </button>
                </div>
              </div>
            </section>

            <section className="services">
              <div className="section-heading">
                <div>
                  <span className="section-kicker">BUILT AROUND CONNECTION</span>
                  <h2>Three ways to <em>understand.</em></h2>
                </div>
                <span className="section-counter">02 — 04</span>
              </div>

              <div className="service-grid">
                <article className="service-card">
                  <div className="service-top">
                    <span>01</span>
                    <span className="service-symbol">↗</span>
                  </div>
                  <div className="service-icon">01</div>
                  <h3>Sign to text</h3>
                  <p>
                    Explore camera based sign recognition that turns supported
                    signs into readable text and, eventually, speech.
                  </p>
                  <button onClick={() => navigate('translate')}>Explore translation <span>↗</span></button>
                </article>

                <article className="service-card service-featured">
                  <div className="service-top">
                    <span>02</span>
                    <span className="service-symbol">↗</span>
                  </div>
                  <div className="service-icon">02</div>
                  <h3>Text to sign</h3>
                  <p>
                    Discover a visual way to communicate using verified
                    Zambian Sign Language demonstrations.
                  </p>
                  <button onClick={() => navigate('translate')}>Explore translation <span>↗</span></button>
                </article>

                <article className="service-card">
                  <div className="service-top">
                    <span>03</span>
                    <span className="service-symbol">↗</span>
                  </div>
                  <div className="service-icon">03</div>
                  <h3>Learn ZSL</h3>
                  <p>
                    Discover signs, build your vocabulary and learn through
                    demonstrations validated by fluent signers.
                  </p>
                  <button onClick={() => navigate('dictionary')}>Explore dictionary <span>↗</span></button>
                </article>
              </div>
            </section>

            <section className="closing-banner">
              <span className="section-kicker">THE FUTURE IS MORE ACCESSIBLE</span>
              <h2>Let's make room<br />for <em>every conversation.</em></h2>
              <button className="button button-light" onClick={() => navigate('translate')}>
                Start exploring <span>↗</span>
              </button>
            </section>
          </>
        )}

        {activeTab === 'translate' && (
          <section className="inner-page">
            <span className="section-kicker">YOUR CONVERSATION STARTS HERE</span>
            <h1>Let's understand<br /><em>each other.</em></h1>
            <p className="page-intro">
              Choose a direction to explore. Live translation is still in development,
              so Zign will clearly identify features that are not ready yet.
            </p>

            <div className="translation-grid">
              <article className="translation-card">
                <span className="section-number">01 / CAMERA</span>
                <div className="large-symbol">↗</div>
                <h2>Sign to text</h2>
                <p>Recognise supported signs through your device camera.</p>
                <span className="status-label">AI RECOGNITION IN DEVELOPMENT</span>
              </article>
              <article className="translation-card translation-card-accent">
                <span className="section-number">02 / VISUAL</span>
                <div className="large-symbol">Aa</div>
                <h2>Text to sign</h2>
                <p>Explore how messages can be paired with verified sign videos.</p>
                <span className="status-label">SIGN VIDEO LIBRARY IN DEVELOPMENT</span>
              </article>
            </div>

            <div className="message-demo">
              <span className="section-kicker">A FUTURE FEATURE</span>
              <h2>Imagine your message in signs.</h2>
              <form onSubmit={(event) => { event.preventDefault(); setMessage('') }}>
                <label htmlFor="message">Try typing a message</label>
                <div className="message-input">
                  <input id="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type a message to explore..." />
                  <button type="submit" aria-label="Clear message">↗</button>
                </div>
                <p>This preview does not translate text yet. Verified ZSL video matching will be added in a later version.</p>
              </form>
            </div>
          </section>
        )}

        {activeTab === 'dictionary' && (
          <section className="inner-page">
            <span className="section-kicker">LEARN · PRACTISE · CONNECT</span>
            <h1>A language worth<br /><em>understanding.</em></h1>
            <p className="page-intro">
              We're building a collection of Zambian Sign Language signs
              and demonstrations with community guidance.
            </p>
            <div className="dictionary-panel">
              <span className="large-symbol">ZSL</span>
              <h2>Your sign language journey starts here.</h2>
              <p>
                Our dictionary will grow with verified signs, alphabet demonstrations
                and everyday phrases. We're working towards a resource that is
                useful, respectful and grounded in Zambian Sign Language.
              </p>
              <a className="button button-dark" href="https://zdyw.org.zm/" target="_blank" rel="noreferrer">
                Visit the ZSL Dictionary <span>↗</span>
              </a>
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <section className="inner-page">
            <span className="section-kicker">THE IDEA BEHIND ZIGN</span>
            <h1>Designed for people.<br /><em>Built for connection.</em></h1>
            <p className="page-intro">
              Zign is an accessibility project exploring how computer vision
              and thoughtful design can support communication between Deaf
              and hearing people in Zambia.
            </p>
            <div className="dictionary-panel">
              <h2>Made with the community, not just for it.</h2>
              <p>
                Fluent signers, Deaf users and interpreters need to guide the
                language, data and evaluation. Our goal is to build technology
                that supports real communication without pretending that
                translation is perfect.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <button className="brand" onClick={() => navigate('home')}>
          <LogoMark />
          <span className="wordmark">zign<span>.</span></span>
        </button>
        <p>Communication without barriers.</p>
        <span className="footer-location">AN ACCESSIBILITY PROJECT · ZAMBIA</span>
      </footer>
    </div>
  )
}

export default App
