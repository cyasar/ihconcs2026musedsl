import React, { useState, useEffect } from 'react';
import type { SlideProps } from '../content/slides';

export const SimulationSlide: React.FC<SlideProps> = ({ lang }) => {
  const [state, setState] = useState<'IDLE' | 'SCANNING' | 'RESULTS'>('IDLE');
  const [scanProgress, setScanProgress] = useState(0);

  const queryEn = "Who are the siblings of a 5-million-year-old butterfly fossil from Göbeklitepe?";
  const queryTr = "5 milyon yaşında Göbeklitepe'de yaşamış bir kelebek fosilinin kardeşleri kimdir?";

  const candidates = [
    { id: 'M-IZM-442', museumEn: 'Izmir Natural History', museumTr: 'İzmir Doğa Tarihi', match: 0.92, status: 'ACCEPT', descEn: '4.8M year old butterfly wing imprint, Aegean region', descTr: '4.8M yıllık kelebek kanadı izi, Ege bölgesi', color: '#4CAF50' },
    { id: 'M-ANK-109', museumEn: 'Ankara Geology Museum', museumTr: 'Ankara Jeoloji Müzesi', match: 0.68, status: 'REVIEW', descEn: '5.5M year old moth fossil, Central Anatolia', descTr: '5.5M yıllık güve fosili, İç Anadolu', color: '#FF9800' },
    { id: 'M-IST-881', museumEn: 'Istanbul Paleo Archive', museumTr: 'İstanbul Paleo Arşivi', match: 0.35, status: 'REJECT', descEn: '2M year old beetle, Marmara region', descTr: '2M yıllık böcek fosili, Marmara bölgesi', color: '#F44336' }
  ];

  const handleSearch = () => {
    setState('SCANNING');
    setScanProgress(0);
  };

  useEffect(() => {
    if (state === 'SCANNING') {
      const interval = setInterval(() => {
        setScanProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setState('RESULTS');
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      
      <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '2rem', marginTop: '2rem' }}>
        {lang === 'en' ? 'Live Simulation: Federated Query' : 'Canlı Simülasyon: Federe Sorgu'}
      </h2>

      {/* Curator Query Terminal */}
      <div style={{ 
        width: '100%', maxWidth: '900px', background: 'rgba(0,0,0,0.6)', 
        border: '1px solid rgba(0,188,212,0.4)', borderRadius: '12px', overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)', marginBottom: '2rem'
      }}>
        <div style={{ background: 'rgba(0,188,212,0.1)', padding: '0.8rem 1.5rem', borderBottom: '1px solid rgba(0,188,212,0.2)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F44336' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF9800' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4CAF50' }} />
          </span>
          <span style={{ color: 'var(--accent-color)', fontFamily: 'monospace', fontSize: '1rem' }}>curator_terminal.exe</span>
        </div>
        
        <div style={{ padding: '2rem' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', gap: '1rem' }}>
            <span style={{ color: '#4CAF50' }}>admin@musedsl:~$</span>
            <span>{lang === 'en' ? 'Enter natural language query:' : 'Doğal dil sorgusunu girin:'}</span>
          </div>
          
          <div style={{ 
            fontSize: '1.5rem', color: 'white', background: 'rgba(255,255,255,0.05)', 
            padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)',
            fontStyle: 'italic', marginBottom: '2rem'
          }}>
            "{lang === 'en' ? queryEn : queryTr}"
          </div>

          {state === 'IDLE' && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={handleSearch} style={{ 
                background: 'var(--accent-color)', color: 'black', border: 'none', 
                padding: '1rem 3rem', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '30px',
                cursor: 'pointer', boxShadow: '0 0 20px rgba(0,188,212,0.4)', transition: 'all 0.3s ease'
              }}>
                {lang === 'en' ? 'Execute Federated Search' : 'Federe Aramayı Başlat'}
              </button>
            </div>
          )}

          {state === 'SCANNING' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color)', fontFamily: 'monospace' }}>
                &gt; Discovery Agent broadcasting to network nodes... [{scanProgress}%]
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${scanProgress}%`, height: '100%', background: 'var(--accent-color)', transition: 'width 0.1s linear' }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Area */}
      <div style={{ width: '100%', maxWidth: '1000px', opacity: state === 'RESULTS' ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: state === 'RESULTS' ? 'auto' : 'none' }}>
        <h3 style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#4CAF50' }}>✔</span> {lang === 'en' ? 'Discovery Complete. Matching Agent Results:' : 'Keşif Tamamlandı. Eşleştirme Ajanı Sonuçları:'}
        </h3>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {candidates.map(c => (
            <div key={c.id} style={{ 
              flex: 1, background: 'rgba(255,255,255,0.03)', border: `1px solid ${c.color}50`,
              borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden',
              boxShadow: `0 5px 20px ${c.color}20`
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: c.color, color: 'white', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 'bold', borderBottomLeftRadius: '8px' }}>
                {c.status}
              </div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'white', fontSize: '1.2rem' }}>{c.id}</h4>
              <div style={{ fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>🏛️ {lang === 'en' ? c.museumEn : c.museumTr}</div>
              <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {lang === 'en' ? c.descEn : c.descTr}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Score: S(q,c)</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: c.color }}>{c.match.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button onClick={() => setState('IDLE')} style={{ 
            background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--text-secondary)', 
            padding: '0.5rem 1.5rem', borderRadius: '20px', cursor: 'pointer'
          }}>
            {lang === 'en' ? 'Reset Simulation' : 'Simülasyonu Sıfırla'}
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', opacity: 0.7 }}>
        * {lang === 'en' 
            ? 'Interactive museum records used in this simulation are synthetic illustrative data.' 
            : 'Bu simülasyonda kullanılan etkileşimli müze kayıtları, sentetik ve yalnızca gösterim amaçlı verilerdir.'}
      </div>

    </div>
  );
};
