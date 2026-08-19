import React from 'react';
import type { SlideProps } from '../content/slides';

export const Slide02_Hook: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', textAlign: 'left', maxWidth: '1400px', width: '100%', height: '100%' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--accent-color)', margin: '0 0 1rem 0' }}>{lang === 'en' ? 'Context & Purpose' : 'Çalışmanın Amacı ve Bağlamı'}</h2>
      
      <div style={{ padding: '1.5rem', background: 'rgba(255, 152, 0, 0.05)', borderLeft: '4px solid var(--state-review)', borderRadius: '0 8px 8px 0' }}>
        <h4 style={{ color: 'var(--state-review)', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{lang === 'en' ? 'The Problem' : 'Sorun Nedir?'}</h4>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
          {lang === 'en' 
            ? 'When a new object (like a fossil) enters a museum, finding scientifically related specimens in other autonomous museums is practically impossible without a central database.' 
            : 'Yeni bir eser (örneğin bir fosil) müzeye girdiğinde, merkezi bir veritabanı olmadan diğer özerk müzelerdeki bilimsel olarak ilişkili örnekleri bulmak pratikte imkansızdır.'}
        </p>
      </div>

      <div style={{ padding: '1.5rem', background: 'rgba(0, 188, 212, 0.05)', borderLeft: '4px solid var(--accent-color)', borderRadius: '0 8px 8px 0' }}>
        <h4 style={{ color: 'var(--accent-color)', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{lang === 'en' ? 'The Purpose' : 'Çalışmanın Amacı'}</h4>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
          {lang === 'en' 
            ? 'To establish a framework where museums can query each other\'s collections intelligently, while maintaining institutional sovereignty over their data.' 
            : 'Müzelerin kendi verileri üzerindeki kurumsal egemenliklerini korurken, birbirlerinin koleksiyonlarını akıllıca sorgulayabilecekleri bir çerçeve oluşturmak.'}
        </p>
      </div>

      <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--state-accept)', borderRadius: '0 8px 8px 0' }}>
        <h4 style={{ color: 'var(--state-accept)', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{lang === 'en' ? 'The Solution (MuseDSL)' : 'Çalışma Neyi Çözümlüyor?'}</h4>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
          {lang === 'en' 
            ? 'A domain-specific language and federated architecture that allows explainable, rule-governed semantic discovery between distributed museum networks.' 
            : 'Dağıtık müze ağları arasında açıklanabilir, kurala dayalı semantik keşfe olanak tanıyan alana özgü bir dil (DSL) ve federe bir mimari sunar.'}
        </p>
      </div>
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="./diagram_concept.jpg" alt="Fossil Network Concept Diagram" style={{ width: '100%', maxWidth: '600px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)' }} />
    </div>
  </div>
);

export const Slide03_InvisibleProblem: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1200px', width: '100%' }}>
    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', margin: '0' }}>{lang === 'en' ? 'The Invisible Relationship Problem & Our Approach' : 'Görünmez İlişki Problemi ve Yaklaşımımız'}</h2>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'center' }}>
      
      {/* Left Side: The Problem */}
      <div style={{ background: 'rgba(244, 67, 54, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(244, 67, 54, 0.2)' }}>
        <h3 style={{ color: 'var(--state-reject)', marginTop: 0, fontSize: '1.4rem' }}>{lang === 'en' ? 'The Problem' : 'Problem'}</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {['Museum A', 'Museum B', 'Museum C', 'Museum D', 'Museum E'].map(m => (
            <div key={m} style={{ padding: '0.8rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>{m}</strong><br/><small style={{ color: 'var(--text-secondary)' }}>Local Inventory</small>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>
          "{lang === 'en' 
            ? 'Publishing data does not automatically create interoperable relationships.' 
            : 'Veri yayınlamak otomatik olarak birlikte çalışabilir ilişkiler yaratmaz.'}"
        </p>
      </div>

      {/* Right Side: What we did & Method */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
        <div style={{ padding: '1.5rem', background: 'rgba(0, 188, 212, 0.05)', borderLeft: '4px solid var(--accent-color)', borderRadius: '0 8px 8px 0' }}>
          <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{lang === 'en' ? 'What Did We Do?' : 'Çalışmada Ne Yaptık?'}</h4>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
            {lang === 'en' 
              ? 'We proposed a federated framework (MuseDSL) that discovers semantically related museum objects across autonomous institutions.' 
              : 'Özerk kurumlar arasında semantik olarak ilişkili müze nesnelerini keşfeden federe bir çerçeve (MuseDSL) önerdik.'}
          </p>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderLeft: '4px solid var(--state-accept)', borderRadius: '0 8px 8px 0' }}>
          <h4 style={{ color: 'var(--state-accept)', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{lang === 'en' ? 'What is Our Method?' : 'Metodumuz Nedir?'}</h4>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
            {lang === 'en' 
              ? 'Our method relies on a Domain-Specific Language (DSL) to define object-specific matching rules, and lightweight software agents that calculate explainable similarity scores without centralizing data.' 
              : 'Metodumuz, nesneye özgü eşleştirme kurallarını tanımlamak için Alana Özgü Bir Dil\'e (DSL) ve verileri tek bir merkezde toplamadan açıklanabilir benzerlik puanları hesaplayan hafif yazılım ajanlarına dayanmaktadır.'}
          </p>
        </div>
      </div>

    </div>
  </div>
);

export const Slide04_CuratorQuestion: React.FC<SlideProps> = ({ lang }) => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 3000);
    const timer4 = setTimeout(() => setStep(4), 4000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); clearTimeout(timer4); };
  }, []);

  const criteria = [
    { id: 1, en: 'Taxonomic', tr: 'Taksonomik', icon: '🧬', descEn: 'Same group', descTr: 'Aynı grup' },
    { id: 2, en: 'Geological', tr: 'Jeolojik', icon: '⏳', descEn: 'Same period', descTr: 'Aynı dönem' },
    { id: 3, en: 'Material', tr: 'Materyal', icon: '💎', descEn: 'Same class', descTr: 'Aynı sınıf' },
    { id: 4, en: 'Provenance', tr: 'Köken', icon: '🗺️', descEn: 'Same context', descTr: 'Aynı bağlam' },
    { id: 5, en: 'Scientific', tr: 'Bilimsel', icon: '🔬', descEn: 'Neighbourhood', descTr: 'Yakınlık' }
  ];

  const positions = [10, 30, 50, 70, 90]; // X percentages for the 5 nodes

  return (
    <div className="slide-content" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style>{`
        @keyframes scanline { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes float { 0% { transform: translate(-50%, 0px); } 50% { transform: translate(-50%, -10px); } 100% { transform: translate(-50%, 0px); } }
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}</style>
      
      <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem', zIndex: 10, marginTop: '2rem' }}>
        {lang === 'en' ? 'The Practical Curator Question' : 'Pratik Küratör Sorusu'}
      </h2>

      {/* Main Question Box (No Animation) */}
      <div style={{ 
        position: 'relative', padding: '1.5rem', background: 'rgba(0, 188, 212, 0.05)', 
        border: '1px solid var(--accent-color)', borderRadius: '12px', zIndex: 10,
        boxShadow: '0 0 20px rgba(0, 188, 212, 0.15)',
        width: '100%', maxWidth: '1000px'
      }}>
        <p style={{ fontSize: '1.6rem', margin: 0, fontStyle: 'italic', fontWeight: 'bold' }}>
          {lang === 'en' 
            ? 'Which museums hold objects that are taxonomically, materially, historically or scientifically related to this object?' 
            : 'Hangi müzeler bu nesneyle taksonomik, materyal, tarihsel veya bilimsel olarak ilişkili nesneler barındırıyor?'}
        </p>
      </div>

      {/* Analysis Network Area */}
      <div style={{ position: 'relative', flex: 1, width: '100%', maxWidth: '1200px', marginTop: '2rem' }}>
        
        {/* SVG Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
          {criteria.map((c, index) => {
            const isVisible = step > 1 + (index * 0.2);
            return (
              <line 
                key={`line-${c.id}`}
                x1="50%" y1="50" 
                x2={`${positions[index]}%`} y2="200" 
                stroke="var(--accent-color)" 
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset={isVisible ? 0 : 1000}
                style={{ transition: 'stroke-dashoffset 1s ease-in-out', opacity: isVisible ? 0.5 : 0 }}
              />
            );
          })}
        </svg>

        {/* Central Object */}
        <div style={{ 
          position: 'absolute', top: '0', left: '50%', width: '90px', height: '90px', 
          background: 'var(--bg-primary)', border: '2px solid var(--accent-color)', borderRadius: '50%', 
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 0 30px var(--accent-color)', zIndex: 5, animation: 'float 4s infinite ease-in-out'
        }}>
          <span style={{ fontSize: '2.5rem' }}>🦴</span>
        </div>

        {/* Distributed Nodes */}
        {criteria.map((c, index) => {
          const isVisible = step > 1 + (index * 0.2);
          return (
            <div key={c.id} style={{
              position: 'absolute', top: '200px', left: `${positions[index]}%`, transform: 'translate(-50%, 0)',
              width: '180px', padding: '1.2rem 0.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
              borderRadius: '12px', opacity: isVisible ? 1 : 0, 
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', zIndex: 2,
              boxShadow: isVisible ? '0 10px 30px rgba(0,0,0,0.4)' : 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{c.icon}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{lang === 'en' ? c.en : c.tr}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>{lang === 'en' ? c.descEn : c.descTr}</div>
            </div>
          );
        })}
      </div>
      
      {/* Footer text */}
      <div style={{ 
        zIndex: 10, opacity: step > 3 ? 1 : 0, transition: 'opacity 1s ease', 
        padding: '1rem 3rem', background: 'rgba(76, 175, 80, 0.1)', border: '1px solid var(--state-accept)', 
        borderRadius: '30px', marginBottom: '2rem'
      }}>
        <h4 style={{ margin: 0, color: 'var(--state-accept)', fontSize: '1.2rem', letterSpacing: '1px' }}>
          {lang === 'en' ? 'Analysis Complete: 5 Semantic Dimensions Identified' : 'Analiz Tamamlandı: 5 Semantik Boyut Belirlendi'}
        </h4>
      </div>
    </div>
  );
};

export const Slide05_ExistingFoundations: React.FC<SlideProps> = ({ lang }) => {
  const [expandedSystem, setExpandedSystem] = React.useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = React.useState<string | null>(null);

  const existingSystems = [
    { name: 'CIDOC CRM', descEn: 'A conceptual reference model for cultural heritage data.', descTr: 'Kültürel miras verileri için kavramsal bir referans modeli.' },
    { name: 'LIDO', descEn: 'An XML harvesting schema for delivering museum object metadata.', descTr: 'Müze nesnesi meta verilerini iletmek için bir XML harmanlama şeması.' },
    { name: 'OAI-PMH', descEn: 'A protocol for harvesting metadata descriptions from repositories.', descTr: 'Veri havuzlarından meta veri açıklamalarını harmanlamak için bir protokol.' },
    { name: 'IIIF', descEn: 'A set of APIs for standardized image delivery.', descTr: 'Standartlaştırılmış görüntü sunumu için bir dizi API.' }
  ];

  const museDslFeatures = [
    { nameEn: 'Executable Rules (DSL)', nameTr: 'Çalıştırılabilir Kurallar (DSL)', icon: '⚙️', descEn: 'Allows curators to define precise semantic matching logic in a human-readable format.', descTr: 'Küratörlerin hassas semantik eşleştirme mantığını insan okuyabilir formatta tanımlamasına olanak tanır.' },
    { nameEn: 'Active Discovery Agents', nameTr: 'Aktif Keşif Ajanları', icon: '🤖', descEn: 'Software that autonomously traverses networks to find related objects without centralization.', descTr: 'Merkezileştirme olmadan ilişkili nesneleri bulmak için ağlarda özerk olarak gezinen akıllı yazılımlar.' },
    { nameEn: 'Explainable Scoring', nameTr: 'Açıklanabilir Skorlama', icon: '📊', descEn: 'Provides a transparent, weighted score explaining exactly why objects were linked.', descTr: 'Nesnelerin neden eşleştirildiğini tam olarak açıklayan şeffaf ve ağırlıklı bir skor sunar.' },
    { nameEn: 'Decentralized Network', nameTr: 'Dağıtık Mimari', icon: '🕸️', descEn: 'Evaluates similarities directly at the source museum, preserving data sovereignty.', descTr: 'Veri egemenliğini koruyarak benzerlikleri doğrudan kaynak müzenin kendisinde değerlendirir.' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '3rem', marginTop: '1rem' }}>
        {lang === 'en' ? 'Existing Systems vs. MuseDSL' : 'Mevcut Sistemler ve MuseDSL Farkı'}
      </h2>

      {/* Graphic Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 1fr', gap: '2rem', width: '100%', alignItems: 'stretch', flex: 1 }}>
        
        {/* Existing Systems */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' 
        }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', textAlign: 'center', margin: '0 0 1.5rem 0' }}>
            {lang === 'en' ? 'Existing Systems' : 'Mevcut Sistemler'}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
            {existingSystems.map(sys => {
              const isExpanded = expandedSystem === sys.name;
              return (
                <div key={sys.name} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', border: isExpanded ? '1px solid var(--text-secondary)' : '1px solid transparent', transition: 'all 0.3s ease' }}>
                  <button onClick={() => setExpandedSystem(isExpanded ? null : sys.name)} style={{ width: '100%', textAlign: 'left', padding: '0.8rem 1rem', background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>{sys.name}</strong>
                    <span style={{ fontSize: '0.8rem', transition: 'transform 0.3s ease', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                  </button>
                  <div style={{ maxHeight: isExpanded ? '100px' : '0', opacity: isExpanded ? 1 : 0, transition: 'all 0.3s ease', padding: isExpanded ? '0 1rem 1rem 1rem' : '0 1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {lang === 'en' ? sys.descEn : sys.descTr}
                  </div>
                </div>
              );
            })}
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ fontSize: '1.2rem' }}>🗄️</span> {lang === 'en' ? 'Passive Storage' : 'Pasif Depolama'}</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ fontSize: '1.2rem' }}>📥</span> {lang === 'en' ? 'Centralized Harvesting' : 'Merkezi Toplama (Harvesting)'}</li>
          </ul>
        </div>

        {/* Center Arrow Graphic */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 10px var(--accent-color))' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>

        {/* MuseDSL Difference */}
        <div style={{ 
          background: 'rgba(0, 188, 212, 0.05)', border: '2px solid var(--accent-color)', 
          borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column',
          boxShadow: '0 0 30px rgba(0, 188, 212, 0.15)'
        }}>
          <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5rem', borderBottom: '1px solid rgba(0, 188, 212, 0.2)', paddingBottom: '1rem', textAlign: 'center', margin: '0 0 1.5rem 0' }}>
            {lang === 'en' ? 'Our Difference (MuseDSL)' : 'Bizim Farkımız (MuseDSL)'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
            {museDslFeatures.map(feat => {
              const name = lang === 'en' ? feat.nameEn : feat.nameTr;
              const isExpanded = expandedFeature === feat.nameEn;
              return (
                <div key={feat.nameEn} style={{ background: 'rgba(0, 188, 212, 0.1)', borderRadius: '8px', overflow: 'hidden', border: isExpanded ? '1px solid var(--accent-color)' : '1px solid transparent', transition: 'all 0.3s ease' }}>
                  <button onClick={() => setExpandedFeature(isExpanded ? null : feat.nameEn)} style={{ width: '100%', textAlign: 'left', padding: '0.8rem 1rem', background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><span style={{ marginRight: '0.5rem' }}>{feat.icon}</span> <strong>{name}</strong></span>
                    <span style={{ fontSize: '0.8rem', transition: 'transform 0.3s ease', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', color: 'var(--accent-color)' }}>▼</span>
                  </button>
                  <div style={{ maxHeight: isExpanded ? '120px' : '0', opacity: isExpanded ? 1 : 0, transition: 'all 0.3s ease', padding: isExpanded ? '0 1rem 1rem 2.8rem' : '0 1rem 0 2.8rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {lang === 'en' ? feat.descEn : feat.descTr}
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>

      </div>

      {/* Footer Conclusion */}
      <div style={{ marginTop: '3rem', padding: '1rem 2rem', background: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)', width: '100%', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--state-accept)', fontWeight: 'bold' }}>
          {lang === 'en' 
            ? 'MuseDSL uses existing standards (like LIDO) as a baseline, but transforms passive data into an active federated network.' 
            : 'MuseDSL mevcut standartları (LIDO vb.) temel alır, ancak pasif verileri aktif bir federe ağa dönüştürür.'}
        </p>
      </div>
    </div>
  );
};

export const Slide06_RemainingGap: React.FC<SlideProps> = ({ lang }) => {
  const [step, setStep] = React.useState(0);

  // Auto-advance simulation steps
  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev < 4 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const gaps = [
    { en: '1. Discovery Gap', tr: '1. Keşif Boşluğu', qEn: 'How can autonomous museums discover related objects?', qTr: 'Özerk müzeler ilişkili nesneleri nasıl keşfedebilir?' },
    { en: '2. Evaluation Gap', tr: '2. Değerlendirme Boşluğu', qEn: 'How can candidate links be evaluated?', qTr: 'Aday bağlantılar nasıl değerlendirilebilir?' },
    { en: '3. Explanation Gap', tr: '3. Açıklanabilirlik Boşluğu', qEn: 'How can the system explain why a link was suggested?', qTr: 'Sistem bir bağlantının neden önerildiğini nasıl açıklayabilir?' },
    { en: '4. Governance Gap', tr: '4. Yönetişim Boşluğu', qEn: 'How can curators govern the relationship over time?', qTr: 'Küratörler ilişkiyi zaman içinde nasıl yönetebilir?' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--state-error)', marginBottom: '1rem', marginTop: '1rem' }}>
        {lang === 'en' ? 'The Remaining Gap' : 'Çözüm Bekleyen Kalan Boşluk'}
      </h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        {lang === 'en' ? 'Despite existing standards, 4 critical challenges remain in decentralized networks.' : 'Mevcut standartlara rağmen, dağıtık ağlarda 4 kritik zorluk devam etmektedir.'}
      </p>

      {/* Interactive Simulation Area */}
      <div style={{ display: 'flex', width: '100%', gap: '2rem', flex: 1, alignItems: 'stretch' }}>
        
        {/* Left: SVG Simulation */}
        <div style={{ 
          flex: 1.5, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', 
          borderRadius: '16px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <svg width="100%" height="100%" viewBox="0 0 800 400" style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}>
            {/* Museum A */}
            <g transform="translate(150, 200)">
              <rect x="-60" y="-40" width="120" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--text-secondary)" strokeWidth="2" />
              <text x="0" y="0" fill="white" textAnchor="middle" fontSize="18" fontWeight="bold">Museum A</text>
              <circle cx="60" cy="0" r="6" fill="var(--accent-color)" />
            </g>

            {/* Museum B */}
            <g transform="translate(650, 200)">
              <rect x="-60" y="-40" width="120" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="var(--text-secondary)" strokeWidth="2" />
              <text x="0" y="0" fill="white" textAnchor="middle" fontSize="18" fontWeight="bold">Museum B</text>
              <circle cx="-60" cy="0" r="6" fill="var(--accent-color)" />
            </g>

            {/* Step 1: Discovery (Broken Line) */}
            <g style={{ opacity: step === 1 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
              <path d="M 210 200 Q 400 100 590 200" fill="none" stroke="var(--state-error)" strokeWidth="3" strokeDasharray="10,10" />
              <circle cx="400" cy="150" r="20" fill="var(--state-error)" />
              <text x="400" y="156" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold">?</text>
              <text x="400" y="110" fill="var(--state-error)" textAnchor="middle" fontSize="16">{lang === 'en' ? 'Cannot Find' : 'Bulunamıyor'}</text>
            </g>

            {/* Step 2: Evaluation (Questionable Link) */}
            <g style={{ opacity: step === 2 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
              <path d="M 210 200 L 590 200" fill="none" stroke="var(--state-warning)" strokeWidth="4" />
              <rect x="350" y="180" width="100" height="40" rx="20" fill="var(--bg-primary)" stroke="var(--state-warning)" strokeWidth="2" />
              <text x="400" y="206" fill="var(--state-warning)" textAnchor="middle" fontSize="18" fontWeight="bold">Score: ???</text>
            </g>

            {/* Step 3: Explanation (Black Box) */}
            <g style={{ opacity: step === 3 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
              <path d="M 210 200 Q 400 300 590 200" fill="none" stroke="var(--state-accept)" strokeWidth="4" />
              <rect x="360" y="230" width="80" height="80" fill="#111" stroke="var(--text-secondary)" strokeWidth="2" />
              <text x="400" y="265" fill="var(--state-accept)" textAnchor="middle" fontSize="14">Black Box</text>
              <text x="400" y="285" fill="var(--state-error)" textAnchor="middle" fontSize="16" fontWeight="bold">WHY?</text>
            </g>

            {/* Step 4: Governance (Fading Link) */}
            <g style={{ opacity: step === 4 ? 1 : 0.1, transition: 'opacity 0.5s' }}>
              <path d="M 210 200 L 590 200" fill="none" stroke="var(--text-secondary)" strokeWidth="4" strokeDasharray="5,15" />
              <text x="400" y="190" fill="var(--text-secondary)" textAnchor="middle" fontSize="16">Connection Decaying...</text>
              <text x="400" y="220" fill="white" textAnchor="middle" fontSize="20">⏳</text>
            </g>

            {/* Center Curator/System */}
            <g transform="translate(400, 200)">
              <circle cx="0" cy="0" r="40" fill="rgba(0,0,0,0.8)" stroke="var(--accent-color)" strokeWidth="2" />
              <text x="0" y="6" fill="var(--accent-color)" textAnchor="middle" fontSize="24">🏛️</text>
            </g>
          </svg>
        </div>

        {/* Right: Question List */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
          {gaps.map((gap, index) => {
            const isActive = step === index + 1;
            const isPassed = step > index + 1;
            return (
              <div 
                key={index} 
                onClick={() => setStep(index + 1)}
                style={{ 
                  padding: '1.5rem', 
                  background: isActive ? 'rgba(244, 67, 54, 0.1)' : 'rgba(255,255,255,0.02)', 
                  border: `2px solid ${isActive ? 'var(--state-error)' : (isPassed ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)')}`, 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 20px rgba(244, 67, 54, 0.2)' : 'none'
                }}
              >
                <h4 style={{ margin: '0 0 0.5rem 0', color: isActive ? 'var(--state-error)' : 'var(--text-secondary)', fontSize: '1.2rem' }}>
                  {lang === 'en' ? gap.en : gap.tr}
                </h4>
                <p style={{ margin: 0, color: isActive ? 'white' : 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.4 }}>
                  {lang === 'en' ? gap.qEn : gap.qTr}
                </p>
              </div>
            );
          })}
          {step === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--accent-color)', marginTop: '1rem', fontStyle: 'italic', animation: 'pulse 2s infinite' }}>
              {lang === 'en' ? 'Click steps or wait for simulation...' : 'Adımlara tıklayın veya simülasyonu bekleyin...'}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export const Slide07_MuseDSLIdea: React.FC<SlideProps> = ({ lang }) => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const concepts = [
    { en: 'Federated discovery network', tr: 'Federe Keşif Ağı', icon: '🌐', descEn: 'Connects museums without centralizing data.', descTr: 'Verileri merkezileştirmeden müzeleri birbirine bağlar.' },
    { en: 'Museum Interoperability Protocol (MIP)', tr: 'Müze Birlikte Çalışabilirlik Protokolü (MIP)', icon: '📜', descEn: 'A standard protocol for agents to communicate across museums.', descTr: 'Ajanların müzeler arası iletişim kurması için standart bir protokol.' },
    { en: 'Central Ontology Core (M-CORE)', tr: 'Merkezi Ontoloji Çekirdeği (M-CORE)', icon: '🏛️', descEn: 'A lightweight vocabulary that aligns different schemas.', descTr: 'Farklı müze şemalarını hizalayan hafif bir ontoloji.' },
    { en: 'Executable MuseDSL rules', tr: 'Çalıştırılabilir MuseDSL Kuralları', icon: '⚙️', descEn: 'Human-readable rules defining exactly how objects are matched.', descTr: 'Nesnelerin tam olarak nasıl eşleştirileceğini tanımlayan kurallar.' },
    { en: 'Autonomous Software Agents', tr: 'Özerk Yazılım Ajanları', icon: '🤖', descEn: 'Programs that travel the network to find and evaluate links.', descTr: 'Aday bağlantıları bulmak ve değerlendirmek için ağda dolaşan programlar.' },
    { en: 'Explanation Artefacts', tr: 'Açıklama Çıktıları', icon: '📊', descEn: 'Transparent reports explaining the reasoning behind a link.', descTr: 'Önerilen bir bağlantının arkasındaki mantığı açıklayan şeffaf raporlar.' },
    { en: 'Curator Validation', tr: 'Küratör Onayı', icon: '✅', descEn: 'The final step where human experts approve the findings.', descTr: 'İnsan uzmanların ajanın bulgularını onayladığı son adım.' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1400px', width: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '2rem', marginTop: '1rem' }}>
        {lang === 'en' ? 'The MuseDSL Idea' : 'MuseDSL Fikri ve Mimarisi'}
      </h2>

      <div style={{ display: 'flex', gap: '4rem', width: '100%', alignItems: 'stretch', flex: 1 }}>
        
        {/* Left: Generated Architecture Sketch Image */}
        <div style={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ 
            position: 'relative', borderRadius: '16px', overflow: 'hidden', 
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255,255,255,0.2)',
            maxHeight: '100%', display: 'flex', justifyContent: 'center'
          }}>
            <img 
              src="./musedsl_sketch.jpg" 
              alt="MuseDSL Architecture Sketch" 
              style={{ maxWidth: '100%', maxHeight: '65vh', objectFit: 'contain', display: 'block' }} 
            />
            {/* Subtle vintage overlay to blend with dark mode */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.05) 100%)', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Right: Architecture Components */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem', justifyContent: 'center' }}>
          <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            {lang === 'en' ? 'Core Components' : 'Temel Bileşenler'}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {concepts.map((concept, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div 
                  key={index}
                  style={{ 
                    background: isExpanded ? 'rgba(0, 188, 212, 0.1)' : 'rgba(255,255,255,0.03)', 
                    border: '1px solid',
                    borderColor: isExpanded ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)',
                    borderRadius: '8px', overflow: 'hidden', transition: 'all 0.3s ease'
                  }}
                >
                  <button 
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    style={{ 
                      width: '100%', textAlign: 'left', padding: '0.8rem 1rem', background: 'transparent', 
                      border: 'none', color: 'var(--text-primary)', cursor: 'pointer', 
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
                    }}
                    onMouseEnter={(e) => { if (!isExpanded) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{concept.icon}</span>
                      <strong style={{ fontSize: '1.1rem' }}>{lang === 'en' ? concept.en : concept.tr}</strong>
                    </span>
                    <span style={{ fontSize: '0.8rem', transition: 'transform 0.3s ease', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', color: isExpanded ? 'var(--accent-color)' : 'var(--text-secondary)' }}>▼</span>
                  </button>
                  <div style={{ 
                    maxHeight: isExpanded ? '100px' : '0', opacity: isExpanded ? 1 : 0, 
                    transition: 'all 0.3s ease', padding: isExpanded ? '0 1rem 0.8rem 2.8rem' : '0 1rem 0 2.8rem', 
                    fontSize: '0.9rem', color: 'var(--text-secondary)' 
                  }}>
                    {lang === 'en' ? concept.descEn : concept.descTr}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export const Slide08_Federation: React.FC<SlideProps> = ({ lang }) => {
  const [isFederated, setIsFederated] = React.useState(true);

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      <h2 style={{ fontSize: '2.2rem', color: isFederated ? 'var(--accent-color)' : 'var(--state-warning)', marginBottom: '0.5rem', marginTop: '0', transition: 'color 0.5s ease' }}>
        {lang === 'en' ? 'From Centralisation to Federation' : 'Merkezileşmeden Federasyona'}
      </h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.1rem', color: !isFederated ? 'var(--state-warning)' : 'var(--text-secondary)', fontWeight: !isFederated ? 'bold' : 'normal', transition: 'all 0.3s' }}>
          {lang === 'en' ? 'Centralised (Old)' : 'Merkezi (Eski)'}
        </span>
        
        {/* Toggle Switch */}
        <div 
          onClick={() => setIsFederated(!isFederated)}
          style={{ 
            width: '50px', height: '26px', background: isFederated ? 'var(--accent-color)' : 'var(--state-warning)', 
            borderRadius: '13px', position: 'relative', cursor: 'pointer', transition: 'background 0.3s ease'
          }}
        >
          <div style={{ 
            width: '22px', height: '22px', background: '#fff', borderRadius: '50%', 
            position: 'absolute', top: '2px', left: isFederated ? '26px' : '2px', 
            transition: 'left 0.3s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' 
          }} />
        </div>

        <span style={{ fontSize: '1.1rem', color: isFederated ? 'var(--accent-color)' : 'var(--text-secondary)', fontWeight: isFederated ? 'bold' : 'normal', transition: 'all 0.3s' }}>
          {lang === 'en' ? 'Federated (MuseDSL)' : 'Federe (MuseDSL)'}
        </span>
      </div>

      <div style={{ padding: '0.5rem 2rem', background: isFederated ? 'rgba(0, 188, 212, 0.1)' : 'rgba(255, 152, 0, 0.1)', border: `2px solid ${isFederated ? 'var(--accent-color)' : 'var(--state-warning)'}`, borderRadius: '12px', marginBottom: '1rem', transition: 'all 0.5s ease' }}>
        <h3 style={{ margin: 0, color: isFederated ? 'var(--accent-color)' : 'var(--state-warning)', fontSize: '1.6rem', transition: 'color 0.5s ease' }}>
          {isFederated 
            ? (lang === 'en' ? 'Move the query, not the museum.' : 'Müzeyi değil, sorguyu hareket ettir.')
            : (lang === 'en' ? 'Moving massive data to a central hub.' : 'Devasa verileri merkezi bir havuza taşımak.')}
        </h3>
      </div>

      {/* Interactive Simulation Area */}
      <div style={{ flex: 1, width: '100%', display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
        
        {/* Left: SVG Simulation */}
        <div style={{ flex: 2, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
          {/* CSS Animations for the simulation */}
          <style>
            {`
              @keyframes moveDataCentral {
                0% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(350px); opacity: 0; }
              }
              @keyframes moveAgent {
                0% { transform: translate(150px, 200px); }
                25% { transform: translate(150px, 60px); }
                50% { transform: translate(400px, 60px); }
                75% { transform: translate(650px, 60px); }
                100% { transform: translate(150px, 200px); }
              }
            `}
          </style>

          <svg width="100%" height="100%" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet">
            
            {/* --- CENTRALIZED SIMULATION --- */}
            <g style={{ opacity: !isFederated ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: !isFederated ? 'auto' : 'none' }}>
              {/* Museums */}
              {[60, 140, 220].map((y, i) => (
                <g key={`cent-mus-${i}`} transform={`translate(150, ${y})`}>
                  <rect x="-40" y="-25" width="80" height="50" rx="4" fill="rgba(255,255,255,0.1)" stroke="var(--state-warning)" strokeWidth="2" />
                  <text x="0" y="5" fill="white" textAnchor="middle" fontSize="12">Museum {i+1}</text>
                  
                  {/* Heavy Data moving */}
                  <rect x="50" y="-12" width="40" height="24" fill="var(--state-warning)" opacity="0.6" style={{ animation: `moveDataCentral 3s infinite linear ${i * 0.5}s` }} />
                  <path d="M 50 0 L 400 0" stroke="var(--state-warning)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                </g>
              ))}

              {/* Central Server */}
              <g transform="translate(600, 140)">
                <rect x="-80" y="-90" width="160" height="180" rx="8" fill="rgba(255, 152, 0, 0.2)" stroke="var(--state-warning)" strokeWidth="4" />
                <text x="0" y="-100" fill="var(--state-warning)" textAnchor="middle" fontSize="16" fontWeight="bold">Central Aggregator</text>
                <text x="0" y="-10" fill="white" textAnchor="middle" fontSize="14">Massive DB</text>
                <text x="0" y="20" fill="white" textAnchor="middle" fontSize="12">(Slow, Heavy)</text>
              </g>
            </g>

            {/* --- FEDERATED SIMULATION --- */}
            <g style={{ opacity: isFederated ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: isFederated ? 'auto' : 'none' }}>
              {/* Museums (Spread out) */}
              {[150, 400, 650].map((x, i) => (
                <g key={`fed-mus-${i}`} transform={`translate(${x}, 60)`}>
                  <rect x="-50" y="-35" width="100" height="70" rx="8" fill="rgba(0, 188, 212, 0.1)" stroke="var(--accent-color)" strokeWidth="2" />
                  <text x="0" y="-45" fill="var(--accent-color)" textAnchor="middle" fontSize="14" fontWeight="bold">Museum {i+1}</text>
                  <text x="0" y="5" fill="white" textAnchor="middle" fontSize="12">Local DB</text>
                </g>
              ))}

              {/* Network Paths */}
              <path d="M 150 200 L 150 95" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
              <path d="M 150 60 L 400 60" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
              <path d="M 400 60 L 650 60" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
              <path d="M 650 60 L 150 200" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

              {/* User / Curator */}
              <g transform="translate(150, 200)">
                <circle cx="0" cy="0" r="30" fill="rgba(255,255,255,0.1)" stroke="var(--accent-color)" strokeWidth="2" />
                <text x="0" y="45" fill="white" textAnchor="middle" fontSize="14">Curator Query</text>
              </g>

              {/* Example Query Bubble */}
              <g transform="translate(200, 150)">
                <rect x="0" y="0" width="380" height="40" rx="8" fill="rgba(0,0,0,0.8)" stroke="var(--accent-color)" strokeWidth="1" />
                <polygon points="0,20 -10,25 0,30" fill="rgba(0,0,0,0.8)" stroke="var(--accent-color)" strokeWidth="1" />
                {/* Cover inner line of the polygon */}
                <line x1="0" y1="21" x2="0" y2="29" stroke="rgba(0,0,0,0.8)" strokeWidth="2" />
                <text x="15" y="24" fill="var(--text-primary)" fontSize="13" fontStyle="italic">
                  {lang === 'en' 
                    ? '"Who are the siblings of a 5-million-year-old butterfly from Göbeklitepe?"' 
                    : '"5 milyon yaşında Göbeklitepe\'de yaşamış bir kelebek fosilinin kardeşleri kimdir?"'}
                </text>
              </g>

              {/* Fast Agent Orb */}
              <g style={{ animation: 'moveAgent 6s infinite ease-in-out' }}>
                <circle cx="0" cy="0" r="10" fill="var(--accent-color)" style={{ filter: 'drop-shadow(0 0 10px var(--accent-color))' }} />
                <text x="0" y="-15" fill="var(--accent-color)" textAnchor="middle" fontSize="12" fontWeight="bold">Agent</text>
              </g>
            </g>

          </svg>
        </div>

        {/* Right: Query Form (Only visible in Federated mode for impact, or faded in Centralized) */}
        <div style={{ 
          flex: 1, background: 'rgba(0,0,0,0.5)', border: `1px solid ${isFederated ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}`, 
          borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          opacity: isFederated ? 1 : 0.3, transition: 'all 0.5s ease'
        }}>
          <h4 style={{ margin: 0, color: 'white', fontSize: '1.3rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            {lang === 'en' ? 'M-CORE Agent Query Form' : 'M-CORE Ajan Sorgu Formu'}
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <label style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Target Object' : 'Hedef Nesne'}</label>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem 1rem', borderRadius: '6px', color: 'var(--accent-color)', fontFamily: 'monospace' }}>
                {lang === 'en' ? 'Fossil (Butterfly)' : 'Fosil (Kelebek)'}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <label style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Age Constraint' : 'Zaman Kısıtı'}</label>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem 1rem', borderRadius: '6px', color: 'var(--accent-color)', fontFamily: 'monospace' }}>
                {lang === 'en' ? '~ 5,000,000 years' : '~ 5.000.000 yıl'}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <label style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Location Context' : 'Lokasyon Bağlamı'}</label>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem 1rem', borderRadius: '6px', color: 'var(--accent-color)', fontFamily: 'monospace' }}>
                Göbeklitepe
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <label style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Semantic Relation' : 'Semantik İlişki'}</label>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem 1rem', borderRadius: '6px', color: 'var(--accent-color)', fontFamily: 'monospace' }}>
                {lang === 'en' ? 'Siblings (Same period/clade)' : 'Kardeşleri (Aynı dönem/tür)'}
              </div>
            </div>
          </div>

          <div style={{ 
            marginTop: 'auto', background: isFederated ? 'rgba(0, 188, 212, 0.2)' : 'rgba(255,255,255,0.05)', 
            color: isFederated ? 'var(--accent-color)' : 'var(--text-secondary)', padding: '0.8rem', 
            borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem',
            animation: isFederated ? 'pulse 2s infinite' : 'none'
          }}>
            {isFederated 
              ? (lang === 'en' ? '▶ Dispatching Agent to Network...' : '▶ Ajan Ağa Gönderiliyor...')
              : (lang === 'en' ? 'System Centralised (Agent Offline)' : 'Sistem Merkezi (Ajan Devre Dışı)')}
          </div>
        </div>

      </div>

      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '1rem auto 0 auto', textAlign: 'center', lineHeight: 1.4 }}>
        {isFederated 
          ? (lang === 'en' ? 'Instead of central aggregators, each museum retains its database, and lightweight intelligent queries (agents) move across the network.' : 'Merkezi toplayıcılar yerine her müze kendi veritabanını tutar ve hafif, akıllı sorgular (ajanlar) ağ üzerinde hareket eder.')
          : (lang === 'en' ? 'Centralization requires massive data duplication, syncing issues, and loss of institutional sovereignty.' : 'Merkezileştirme; devasa veri kopyalama, senkronizasyon sorunları ve kurumsal egemenlik kaybı gerektirir.')}
      </p>
    </div>
  );
};

export const Slide09_Sovereignty: React.FC<SlideProps> = ({ lang }) => {
  const benefits = [
    {
      icon: '🏛️',
      en: 'Maintains local ownership',
      tr: 'Yerel Mülkiyeti Korur',
      descEn: 'Museums keep full physical and digital custody of their collections without surrendering data to third parties.',
      descTr: 'Müzeler, veritabanlarını üçüncü şahıslara veya merkezi platformlara devretmeden tam mülkiyeti ellerinde tutar.'
    },
    {
      icon: '🎛️',
      en: 'Selective Exposure',
      tr: 'Seçici Veri Paylaşımı',
      descEn: 'Institutions decide exactly which records, fields, and metadata are exposed to the federated network.',
      descTr: 'Kurumlar, federe ağa hangi kayıtların, alanların ve meta verilerin açılacağına tam olarak kendileri karar verir.'
    },
    {
      icon: '🚫☁️',
      en: 'No Mass Uploads',
      tr: 'Merkezi Yükleme Yok',
      descEn: 'Eliminates the risk and cost of uploading entire databases to a monolithic central server.',
      descTr: 'Tüm veritabanlarını devasa bir merkezi sunucuya yükleme riskini, iş yükünü ve maliyetini ortadan kaldırır.'
    },
    {
      icon: '✅',
      en: 'Authoritative Accountability',
      tr: 'Kayıt Sorumluluğu',
      descEn: 'The originating museum remains the sole authoritative source and responsible party for its own records.',
      descTr: 'Veriyi üreten müze, kendi kayıtları için tek yetkili kaynak ve sorumlu taraf olmaya devam eder.'
    }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '2.8rem', color: 'var(--accent-color)', marginBottom: '1rem', textShadow: '0 0 20px rgba(0, 188, 212, 0.4)' }}>
          {lang === 'en' ? 'Institutional Sovereignty' : 'Kurumsal Egemenlik'}
        </h2>
        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          {lang === 'en' 
            ? 'How MuseDSL empowers museums by keeping them in full control of their data.' 
            : 'MuseDSL, müzelerin kendi verileri üzerinde tam kontrol sahibi olmasını nasıl sağlar?'}
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem', 
        width: '100%', 
        maxWidth: '1000px',
        flex: 1 
      }}>
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 188, 212, 0.08)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 188, 212, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
              <div style={{ 
                fontSize: '2rem', background: 'rgba(0,0,0,0.5)', width: '60px', height: '60px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' 
              }}>
                {benefit.icon}
              </div>
              <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.4rem' }}>
                {lang === 'en' ? benefit.en : benefit.tr}
              </h3>
            </div>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              {lang === 'en' ? benefit.descEn : benefit.descTr}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
