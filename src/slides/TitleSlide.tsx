import React from 'react';
import type { SlideProps } from '../content/slides';

export const TitleSlide: React.FC<SlideProps> = ({ lang }) => {
  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
      
      {/* Top Header - Conference Logos */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: 'auto', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src="./ihconcs_logo.png" alt="IHCONCS Logo" style={{ height: '60px', objectFit: 'contain' }} />
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>The International Conference on Computer Sciences (IHCONCS 2026)</h4>
          <p style={{ margin: '0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>September 17-18, 2026 • Zagreb, Croatia (Hybrid)</p>
        </div>
        <img src="./ihconcs.png" alt="IHCONCS" style={{ height: '60px', objectFit: 'contain' }} />
      </div>

      {/* Main Title Section */}
      <div style={{ margin: 'auto 0' }}>
        <h1 style={{ 
          fontSize: '5.5rem', 
          marginBottom: '1rem', 
          color: 'var(--accent-color)',
          textShadow: '0 0 40px rgba(0, 188, 212, 0.4)',
          letterSpacing: '-2px'
        }}>MuseDSL</h1>
        
        <h3 style={{ maxWidth: '900px', margin: '0 auto 2rem auto', lineHeight: '1.5', fontSize: '1.8rem', fontWeight: 400 }}>
          {lang === 'en' 
            ? 'A Domain-Specific Language and Federated Framework for Explainable Museum Object Linking' 
            : 'Açıklanabilir Müze Nesnesi Bağlantısı için Alana Özgü Bir Dil ve Federe Çerçeve'}
        </h3>

        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', display: 'inline-block', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Cumali Yaşar, Zafer Karadayı, Ayten Çalık, Emin Ulugergerli</p>
          <p style={{ margin: '0', color: 'var(--text-secondary)' }}>Çanakkale Onsekiz Mart University, Türkiye</p>
        </div>
      </div>

      {/* Footer - University Logos */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginTop: 'auto', padding: '2rem 0 0 0' }}>
        <img src="./gazi-logo.png" alt="Gazi University" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
        <img src="./zagreb-logo.png" alt="University of Zagreb" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
        <img src="./tvz-logo.png" alt="TVZ" style={{ height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
      </div>

    </div>
  );
};
