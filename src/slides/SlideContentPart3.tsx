import React from 'react';
import type { SlideProps } from '../content/slides';

export const Slide23_PilotStats: React.FC<SlideProps> = ({ lang }) => {
  const categories = [
    { nameEn: 'Minerals', nameTr: 'Mineraller', pct: 64.4, count: 644, color: '#00BCD4' },
    { nameEn: 'Fossils', nameTr: 'Fosiller', pct: 16.2, count: 162, color: '#4CAF50' },
    { nameEn: 'Rocks', nameTr: 'Kayaçlar', pct: 13.7, count: 137, color: '#FF9800' },
    { nameEn: 'Bio specimens', nameTr: 'Biyo Örnekler', pct: 3.9, count: 39, color: '#9C27B0' },
    { nameEn: 'Other', nameTr: 'Diğer', pct: 1.8, count: 18, color: '#9E9E9E' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%', paddingTop: '2rem' }}>
      <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '3rem' }}>
        {lang === 'en' ? 'What the Pilot Demonstrated' : 'Pilot Uygulamanın Gösterdikleri'}
      </h2>
      
      {/* Top Metrics */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', width: '100%', marginBottom: '4rem' }}>
        {[
          { num: '5', labelEn: 'Federated Nodes', labelTr: 'Federe Düğüm' },
          { num: '1,000', labelEn: 'Museum Records', labelTr: 'Müze Kaydı' },
          { num: '100', labelEn: 'Source Queries', labelTr: 'Kaynak Sorgusu' }
        ].map((metric, i) => (
          <div key={i} style={{ 
            flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px', padding: '2rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'var(--accent-color)', opacity: 0.1, filter: 'blur(30px)' }} />
            <h3 style={{ fontSize: '4.5rem', margin: '0 0 0.5rem 0', color: 'var(--accent-color)', textShadow: '0 0 20px rgba(0,188,212,0.4)', fontFamily: 'monospace' }}>
              {metric.num}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {lang === 'en' ? metric.labelEn : metric.labelTr}
            </p>
          </div>
        ))}
      </div>

      {/* Category Distribution Bar Chart */}
      <div style={{ width: '100%', maxWidth: '900px', background: 'rgba(0,0,0,0.4)', padding: '2rem 3rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h4 style={{ margin: '0 0 2rem 0', color: 'white', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          📊 {lang === 'en' ? 'Data Category Distribution' : 'Veri Kategorisi Dağılımı'}
        </h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '150px', color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'right' }}>
                {lang === 'en' ? cat.nameEn : cat.nameTr}
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', height: '24px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ 
                  width: `${cat.pct}%`, height: '100%', background: cat.color, 
                  borderRadius: '12px', boxShadow: `0 0 10px ${cat.color}80`
                }} />
              </div>
              <div style={{ width: '100px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                {cat.pct}% <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 'normal' }}>({cat.count})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Slide24_FinalVision: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%', paddingTop: '1rem' }}>
    <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '3rem' }}>
      {lang === 'en' ? 'Results & Final Vision' : 'Sonuçlar ve Vizyon'}
    </h2>
    
    <div style={{ display: 'flex', gap: '2rem', width: '100%', maxWidth: '1000px', marginBottom: '3rem' }}>
      {/* Mindat Result */}
      <div style={{ 
        flex: 1, padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', 
        border: '1px solid rgba(76, 175, 80, 0.3)', borderRadius: '16px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#4CAF50' }} />
        <h4 style={{ marginTop: 0, color: '#4CAF50', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🎯 {lang === 'en' ? 'Mindat Authority Match' : 'Mindat Otorite Eşleşmesi'}
        </h4>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', margin: '1rem 0' }}>
          &gt;90%
        </div>
        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '1rem' }}>
          {lang === 'en' ? 'Authority association success after mineral-name normalisation.' : 'Mineral ismi normalizasyonu sonrasında başarılı otorite eşleşme oranı.'}
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0, opacity: 0.7 }}>
          * {lang === 'en' ? 'This is not an end-to-end object-linking accuracy score.' : 'Bu uçtan uca bir nesne-bağlama doğruluk skoru değildir.'}
        </p>
      </div>
      
      {/* Limitations */}
      <div style={{ 
        flex: 1, padding: '2rem', background: 'rgba(255, 152, 0, 0.05)', 
        border: '1px solid rgba(255, 152, 0, 0.3)', borderRadius: '16px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#FF9800' }} />
        <h4 style={{ marginTop: 0, color: '#FFB74D', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          ⚠️ {lang === 'en' ? 'Limitations & Future Work' : 'Kısıtlılıklar ve Gelecek Çalışmalar'}
        </h4>
        <ul style={{ paddingLeft: '1.5rem', margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '0.8rem', lineHeight: 1.4 }}>
          <li>{lang === 'en' ? 'Tested on a five-node pilot only' : 'Sadece 5 düğümlü bir pilotta test edildi'}</li>
          <li>{lang === 'en' ? 'Natural-history collection dominance' : 'Doğa tarihi koleksiyonları ağırlıklı'}</li>
          <li>{lang === 'en' ? 'No national-scale evaluation yet' : 'Henüz ulusal çapta değerlendirme yapılmadı'}</li>
          <li>{lang === 'en' ? 'Curator workload evaluation is pending' : 'Küratör iş yükü değerlendirmesi gelecek aşamada'}</li>
        </ul>
      </div>
    </div>

    {/* Cinematic Vision Quote */}
    <div style={{ 
      width: '100%', maxWidth: '1000px', padding: '3rem', border: '1px solid rgba(0, 188, 212, 0.3)', 
      borderRadius: '16px', background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(0,0,0,0.5) 100%)',
      textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative'
    }}>
      <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-primary)', padding: '0 1rem', color: 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '2px' }}>
        THE VISION
      </div>
      
      <p style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'white', margin: '0 0 1.5rem 0', lineHeight: 1.4 }}>
        "{lang === 'en' 
          ? 'Museums do not need to surrender their collections to one central platform.' 
          : 'Müzelerin koleksiyonlarını tek bir merkezi platforma teslim etmelerine gerek yoktur.'}"
      </p>
      
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', margin: '0 0 2rem 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
        {lang === 'en' 
          ? 'They need a way to discover relationships, explain evidence, and govern the resulting knowledge together.' 
          : 'İlişkileri keşfetmek, kanıtları açıklamak ve ortaya çıkan bilgiyi birlikte yönetmek için bir yola ihtiyaçları var.'}
      </p>
      
      <div style={{ display: 'inline-block', padding: '0.8rem 2rem', background: 'rgba(0,188,212,0.1)', borderRadius: '30px', border: '1px solid var(--accent-color)' }}>
        <h3 style={{ margin: 0, color: 'var(--accent-color)', fontSize: '1.3rem', letterSpacing: '1px' }}>
          {lang === 'en' ? 'From metadata exchange to governed semantic interaction.' : 'Metadata değişiminden, yönetilen semantik etkileşime.'}
        </h3>
      </div>
    </div>
    
    <div style={{ marginTop: '3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <span>📧 cumaliyasar@comu.edu.tr</span>
      <span>•</span>
      <span>⭐ github.com/musedsl</span>
    </div>
  </div>
);
