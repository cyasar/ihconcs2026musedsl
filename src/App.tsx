import { useState, useEffect, useCallback } from 'react'
import { slides } from './content/slides'
import { translations, EN, TR } from './content/translations'
import type { Language } from './content/translations'
import './styles/presentation.css'

function App() {
  const [lang, setLang] = useState<Language>(EN)
  
  // Read initial slide from URL hash (e.g. #15)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const index = parseInt(hash, 10) - 1
    // slides array is not defined here in initial state scope, but we know it's imported
    if (!isNaN(index) && index >= 0) {
      // we cap it at slides.length below
      return index; 
    }
    return 0
  })

  // Ensure index doesn't exceed bounds if user types a large number
  useEffect(() => {
    if (currentSlideIndex >= slides.length) {
      setCurrentSlideIndex(slides.length - 1);
    } else if (currentSlideIndex < 0) {
      setCurrentSlideIndex(0);
    }
  }, [currentSlideIndex])

  // Update URL hash when slide changes
  useEffect(() => {
    window.location.hash = `${currentSlideIndex + 1}`
  }, [currentSlideIndex])

  const t = translations[lang]

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1))
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const toggleLanguage = () => {
    setLang((prev) => (prev === EN ? TR : EN))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with the select dropdown
      if (document.activeElement?.tagName === 'SELECT') return;
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          handleNext()
          break
        case 'ArrowLeft':
          handlePrev()
          break
        case 'l':
        case 'L':
          toggleLanguage()
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev])

  const CurrentSlide = slides[currentSlideIndex] || slides[0]

  return (
    <div className="presentation-container">
      {/* Global Top Left: Logo & Paper Title */}
      <div style={{ position: 'absolute', top: '1rem', left: '2rem', zIndex: 100, opacity: currentSlideIndex === 0 ? 0 : 1, transition: 'opacity 0.3s' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          MuseDSL
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem', maxWidth: '300px', lineHeight: 1.2 }}>
          {lang === 'en' ? 'A Domain-Specific Language for Museum Interoperability' : 'Müze Birlikte Çalışabilirliği İçin Alana Özgü Bir Dil'}
        </div>
      </div>

      {/* Global Bottom Left: Authors */}
      <div style={{ position: 'absolute', bottom: '1.2rem', left: '2rem', zIndex: 100, opacity: currentSlideIndex === 0 ? 0 : 1, transition: 'opacity 0.3s', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
        <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginTop: '-0.1rem' }}>✍️</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
            Cumali Yaşar, Zafer Karadayı, Ayten Çalık, Emin Ulugergerli
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', opacity: 0.8 }}>
            Çanakkale Onsekiz Mart University, Türkiye
          </span>
        </div>
      </div>
      
      {/* Persistent Conference Header */}
      <div style={{ 
        position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 100,
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', 
        padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', 
        border: '1px solid rgba(255,255,255,0.05)',
        opacity: currentSlideIndex === 0 ? 0 : 1, transition: 'opacity 0.3s', pointerEvents: 'none'
      }}>
        <img src="/ihconcs_logo.png" alt="IHCONCS Logo" style={{ height: '30px', objectFit: 'contain' }} />
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 0.1rem 0', color: 'var(--text-primary)', fontSize: '0.9rem' }}>The International Conference on Computer Sciences (IHCONCS 2026)</h4>
          <p style={{ margin: '0', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>September 17-18, 2026 • Zagreb, Croatia (Hybrid)</p>
        </div>
        <img src="/ihconcs.png" alt="IHCONCS" style={{ height: '30px', objectFit: 'contain' }} />
      </div>

      <div className="language-toggle">
        <button onClick={toggleLanguage}>{t.languageToggle}</button>
      </div>
      
      <CurrentSlide lang={lang} />

      <div className="slide-controls" style={{ zIndex: 150 }}>
        <button onClick={handlePrev} disabled={currentSlideIndex === 0}>
          &larr;
        </button>
        <select 
          value={currentSlideIndex} 
          onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
          style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: 'none',
            padding: '0.3rem 0.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            outline: 'none',
            fontSize: '0.9rem',
            fontFamily: 'inherit'
          }}
        >
          {slides.map((_, i) => (
            <option key={i} value={i} style={{ color: 'black' }}>
              {t.slideIndicator} {i + 1} / {slides.length}
            </option>
          ))}
        </select>
        <button onClick={handleNext} disabled={currentSlideIndex === slides.length - 1}>
          &rarr;
        </button>
      </div>

      <div className="keyboard-hint">{t.pressQuestionMark}</div>
    </div>
  )
}

export default App
