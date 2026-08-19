import React from 'react';
import type { SlideProps } from '../content/slides';

export const Slide10_MIP: React.FC<SlideProps> = ({ lang }) => {
  const steps = [
    { nameEn: 'Node discovery', nameTr: 'Düğüm Keşfi', icon: '📡', descEn: 'Agents locate other museum nodes in the network.', descTr: 'Ajanların ağdaki diğer müzeleri (düğümleri) bulması.' },
    { nameEn: 'Query forwarding', nameTr: 'Sorgu İletimi', icon: '🚀', descEn: 'Routing the search parameters to relevant nodes.', descTr: 'Sorgunun ilgili ağ düğümlerine güvenli şekilde dağıtılması.' },
    { nameEn: 'Candidate retrieval', nameTr: 'Aday Getirme', icon: '📥', descEn: 'Fetching potential matching records from local DBs.', descTr: 'Olası eşleşmelerin yerel veri tabanlarından çekilmesi.' },
    { nameEn: 'Link proposal', nameTr: 'Bağlantı Teklifi', icon: '🔗', descEn: 'Suggesting a connection based on executed rules.', descTr: 'Çalıştırılan kurallara göre bir bağlantı önerilmesi.' },
    { nameEn: 'Validation-state exchange', nameTr: 'Doğrulama Durumu', icon: '🔄', descEn: 'Synchronizing curator approvals across the network.', descTr: 'Küratör onay/ret durumlarının ağa senkronize edilmesi.' },
    { nameEn: 'Lifecycle management', nameTr: 'Yaşam Döngüsü', icon: '⏳', descEn: 'Updating or decaying relationships over time.', descTr: 'Bağlantıların zamanla güncellenmesi veya çürütülmesi.' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1400px', width: '100%', paddingBottom: '2rem' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem', marginTop: '0.5rem', textShadow: '0 0 15px rgba(0, 188, 212, 0.3)' }}>
        {lang === 'en' ? 'MIP: Museum Interoperability Protocol' : 'MIP: Müze Birlikte Çalışabilirlik Protokolü'}
      </h2>
      
      <div style={{ display: 'flex', gap: '2rem', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Left: Generated Protocol Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ 
            position: 'relative', borderRadius: '16px', overflow: 'hidden', 
            boxShadow: '0 0 40px rgba(0, 188, 212, 0.2)', border: '2px solid rgba(0, 188, 212, 0.4)',
            maxWidth: '100%', maxHeight: '450px' // added constraint to prevent overflow
          }}>
            <img 
              src="/mip_protocol.jpg" 
              alt="MIP Protocol Pipeline" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', filter: 'contrast(1.1)' }} 
            />
            {/* Glowing overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,188,212,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,188,212,0.1) 100%)', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Right: Vertical Stepper Pipeline */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '2rem', top: '1.5rem', bottom: '1.5rem', width: '2px', background: 'linear-gradient(to bottom, var(--accent-color), rgba(0,188,212,0.1))', zIndex: 0 }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', position: 'relative', zIndex: 1 }}>
              {steps.map((step, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', transition: 'transform 0.3s ease' }} 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                  
                  {/* Step Number/Icon */}
                  <div style={{ 
                    width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-primary)', 
                    border: '2px solid var(--accent-color)', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', fontSize: '1rem', boxShadow: '0 0 15px rgba(0,188,212,0.4)',
                    transform: 'translateX(-19px)', flexShrink: 0 // Center on the line
                  }}>
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div style={{ 
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', 
                    padding: '0.8rem 1rem', borderRadius: '8px', flex: 1, boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                  }}>
                    <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--accent-color)', fontSize: '1.05rem' }}>
                      {index + 1}. {lang === 'en' ? step.nameEn : step.nameTr}
                    </h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.3 }}>
                      {lang === 'en' ? step.descEn : step.descTr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div style={{ 
        marginTop: '1.5rem', padding: '0.6rem 2rem', background: 'rgba(255, 152, 0, 0.1)', 
        borderLeft: '4px solid var(--state-warning)', borderRadius: '0 8px 8px 0',
        fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', maxWidth: '900px'
      }}>
        <span style={{ color: 'var(--state-warning)', fontWeight: 'bold', marginRight: '0.5rem' }}>ℹ️ Prototype Note:</span>
        {lang === 'en' 
          ? 'In the current prototype, MIP is implemented via lightweight API-based transactions rather than a finalized Internet standard.' 
          : 'Mevcut prototipte MIP, nihai bir İnternet standardından ziyade hafif API tabanlı işlemler olarak uygulanmıştır.'}
      </div>
    </div>
  );
};

export const Slide11_MCORE: React.FC<SlideProps> = ({ lang }) => {
  const fields = [
    { en: 'Title', tr: 'Başlık' },
    { en: 'Category', tr: 'Kategori' },
    { en: 'Subtype', tr: 'Alt Tür' },
    { en: 'Material', tr: 'Materyal' },
    { en: 'Provenance', tr: 'Köken' },
    { en: 'Locality', tr: 'Lokasyon' },
    { en: 'Taxonomic descriptors', tr: 'Taksonomik Tanımlar' },
    { en: 'Geological age', tr: 'Jeolojik Yaş' }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          {lang === 'en' ? 'Different Metadata, Common Operational Representation' : 'Farklı Meta Veriler, Ortak Operasyonel Temsil'}
        </h2>
        <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', textShadow: '0 0 20px rgba(0, 188, 212, 0.4)', margin: 0 }}>
          M-CORE
        </h3>
      </div>

      {/* Main Diagram Area */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flex: 1, position: 'relative' }}>
        
        {/* Left: Diverse Museum Databases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', zIndex: 2 }}>
          {/* Museum 1 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', width: '260px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Museum A</div>
            <div style={{ color: '#E91E63', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1.1rem' }}>LIDO XML</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem', opacity: 0.7 }}>&lt;lido:objectPublishedID&gt;<br/>&lt;lido:eventDate&gt;</div>
          </div>
          {/* Museum 2 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', width: '260px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Museum B</div>
            <div style={{ color: '#4CAF50', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1.1rem' }}>CIDOC-CRM (RDF)</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem', opacity: 0.7 }}>crm:E22_Man-Made_Object<br/>crm:P43_has_dimension</div>
          </div>
          {/* Museum 3 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', width: '260px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Museum C</div>
            <div style={{ color: '#FFC107', fontWeight: 'bold', fontFamily: 'monospace', fontSize: '1.1rem' }}>Custom SQL DB</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem', opacity: 0.7 }}>SELECT item_name, year <br/>FROM artifacts_table</div>
          </div>
        </div>

        {/* Center: SVG Connecting Lines + M-CORE Engine */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <style>
              {`
                @keyframes pulseDash {
                  to { stroke-dashoffset: -20; }
                }
              `}
            </style>
            {/* Lines from Left to Center */}
            <path d="M 260 120 C 400 120, 450 250, 500 250" fill="none" stroke="rgba(0,188,212,0.4)" strokeWidth="3" strokeDasharray="5,5" style={{ animation: 'pulseDash 1s linear infinite' }} />
            <path d="M 260 250 L 500 250" fill="none" stroke="rgba(0,188,212,0.4)" strokeWidth="3" strokeDasharray="5,5" style={{ animation: 'pulseDash 1s linear infinite' }} />
            <path d="M 260 380 C 400 380, 450 250, 500 250" fill="none" stroke="rgba(0,188,212,0.4)" strokeWidth="3" strokeDasharray="5,5" style={{ animation: 'pulseDash 1s linear infinite' }} />
            
            {/* Line from Center to Right */}
            <path d="M 700 250 L 850 250" fill="none" stroke="rgba(0,188,212,0.8)" strokeWidth="4" strokeDasharray="10,5" style={{ animation: 'pulseDash 0.8s linear infinite' }} />
          </svg>
          
          <div style={{ 
            width: '200px', height: '200px', borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(0,188,212,0.2) 0%, rgba(0,0,0,0.8) 100%)',
            border: '2px solid var(--accent-color)', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 50px rgba(0,188,212,0.4)',
            zIndex: 2, backdropFilter: 'blur(5px)'
          }}>
            <span style={{ fontSize: '3rem' }}>⚙️</span>
            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.4rem', marginTop: '0.5rem', letterSpacing: '2px' }}>M-CORE</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Normalization</span>
          </div>
        </div>

        {/* Right: Standardized Output Fields */}
        <div style={{ zIndex: 2, width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0, 188, 212, 0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(0,188,212,0.3)' }}>
          <h4 style={{ margin: '0 0 1rem 0', color: 'white', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            {lang === 'en' ? 'Standardized Fields' : 'Standartlaştırılmış Alanlar'}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
            {fields.map(field => (
              <span key={field.en} style={{ 
                padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.6)', borderRadius: '20px', 
                border: '1px solid var(--accent-color)', color: 'var(--accent-color)',
                fontSize: '0.9rem', boxShadow: '0 0 10px rgba(0,188,212,0.2)'
              }}>
                {lang === 'en' ? field.en : field.tr}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div style={{ 
        marginTop: '2rem', padding: '1rem 2rem', background: 'rgba(255,255,255,0.02)', 
        borderLeft: '4px solid #9E9E9E', borderRadius: '0 8px 8px 0',
        fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '900px', textAlign: 'center',
        lineHeight: 1.5
      }}>
        {lang === 'en' 
          ? 'M-CORE is not a universal ontology replacement. It is a lightweight operational representation exclusively for fields required by the active MuseDSL rule.' 
          : 'M-CORE evrensel bir ontoloji ikamesi (yerine geçen bir standart) değildir. Sadece etkin kuralın gerektirdiği alanlar için çalışan hafif ve operasyonel bir temsildir.'}
      </div>
    </div>
  );
};

export const Slide12_Agents: React.FC<SlideProps> = ({ lang }) => {
  const agents = [
    { 
      title: 'Discovery Agent', 
      icon: '🕵️‍♂️', 
      color: '#00BCD4',
      roleEn: 'Search & Locate', roleTr: 'Arama & Bulma',
      desc: lang === 'en' ? 'Autonomously traverses the federated network to locate candidate records across distributed museum nodes.' : 'Ağ üzerinde bağımsız gezinerek dağıtık müze düğümlerinde potansiyel eşleşme adaylarını tespit eder.' 
    },
    { 
      title: 'Normalisation Agent', 
      icon: '⚙️', 
      color: '#4CAF50',
      roleEn: 'Data Harmonization', roleTr: 'Veri Uyumlaştırma',
      desc: lang === 'en' ? 'Dynamically maps heterogeneous, messy local database fields into the standardized M-CORE format.' : 'Müzelerin karmaşık ve heterojen yerel veri yapılarını anında standart M-CORE formatına dönüştürür.' 
    },
    { 
      title: 'Matching Agent', 
      icon: '⚖️', 
      color: '#FF9800',
      roleEn: 'Logic Execution', roleTr: 'Mantık İşletimi',
      desc: lang === 'en' ? 'Evaluates candidates against the active MuseDSL rule, computing semantic similarity and temporal overlap.' : 'Adayları aktif MuseDSL kuralına göre değerlendirir, anlamsal benzerlik ve zaman örtüşmelerini hesaplar.' 
    },
    { 
      title: 'Explanation Agent', 
      icon: '📜', 
      color: '#E91E63',
      roleEn: 'Governance', roleTr: 'Yönetişim & Onay',
      desc: lang === 'en' ? 'Generates human-readable decision artifacts (why a link was made) and routes them to curators for validation.' : 'İki eserin neden bağlandığını açıklayan kanıt raporları üretir ve son onay için insan küratörlere iletir.' 
    }
  ];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '1400px', width: '100%', paddingBottom: '2rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem', letterSpacing: '2px' }}>
          {lang === 'en' ? 'Meet the Agents' : 'Ajanlarla Tanışın'}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          {lang === 'en' ? 'The autonomous microservices that power the MuseDSL federated network.' : 'MuseDSL federe ağını hayatta tutan ve birbirleriyle konuşan otonom mikroservisler.'}
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', width: '100%' }}>
        {agents.map((agent, i) => (
          <div key={i} style={{ 
            background: 'rgba(255, 255, 255, 0.02)',
            border: `1px solid rgba(255,255,255,0.05)`,
            borderRadius: '16px',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `rgba(${parseInt(agent.color.slice(1,3), 16)}, ${parseInt(agent.color.slice(3,5), 16)}, ${parseInt(agent.color.slice(5,7), 16)}, 0.05)`;
            e.currentTarget.style.borderColor = agent.color;
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = `0 15px 40px rgba(${parseInt(agent.color.slice(1,3), 16)}, ${parseInt(agent.color.slice(3,5), 16)}, ${parseInt(agent.color.slice(5,7), 16)}, 0.3)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}>
            
            {/* Top glowing line */}
            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px', background: agent.color, opacity: 0.8, borderRadius: '0 0 10px 10px' }} />

            {/* Avatar */}
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', 
              border: `2px solid ${agent.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem', marginBottom: '1.5rem', boxShadow: `0 0 20px ${agent.color}40`,
              position: 'relative'
            }}>
              {agent.icon}
              {/* Online indicator */}
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '15px', height: '15px', background: '#00E676', borderRadius: '50%', border: '3px solid #1e1e1e' }} />
            </div>

            <h3 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{agent.title}</h3>
            
            <div style={{ 
              background: `${agent.color}20`, color: agent.color, padding: '0.3rem 0.8rem', 
              borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1.5rem',
              letterSpacing: '1px', textTransform: 'uppercase'
            }}>
              {lang === 'en' ? agent.roleEn : agent.roleTr}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
              {agent.desc}
            </p>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '3rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', 
        borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center'
      }}>
        <span style={{ color: '#FFC107', marginRight: '0.5rem' }}>⚠️ Disclaimer:</span>
        {lang === 'en' 
            ? 'The term "Agent" is used purely in the software engineering and distributed systems sense (Software Agents). It does not imply Artificial General Intelligence (AGI) or LLMs.' 
            : '"Ajan" (Agent) terimi tamamen dağıtık sistemler ve yazılım mühendisliği bağlamında kullanılmıştır. AGI (Yapay Genel Zeka) veya YZ sohbet botlarını ima etmez.'}
      </div>
    </div>
  );
};

export const Slide13_WhyDSL: React.FC<SlideProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = React.useState<'Mineral' | 'Rock' | 'Fossil'>('Mineral');

  const tabs = [
    { id: 'Mineral', labelEn: 'Mineral', labelTr: 'Mineral', icon: '💎' },
    { id: 'Rock', labelEn: 'Rock', labelTr: 'Kayaç', icon: '🪨' },
    { id: 'Fossil', labelEn: 'Fossil', labelTr: 'Fosil', icon: '🐌' }
  ];

  const content = {
    Mineral: {
      evidenceEn: ['Chemical Formula', 'Crystal System', 'Hardness'],
      evidenceTr: ['Kimyasal Formül', 'Kristal Sistemi', 'Sertlik'],
      code: `RULE Match_Minerals
MATCH a AS Mineral WITH b AS Mineral
WHERE a.chemical_formula == b.chemical_formula
AND a.crystal_system == b.crystal_system
YIELD "Same mineral species"`
    },
    Rock: {
      evidenceEn: ['Mineral Assemblage', 'Texture', 'Lithology'],
      evidenceTr: ['Mineral Bileşimi', 'Doku', 'Litoloji'],
      code: `RULE Match_Rocks
MATCH a AS Rock WITH b AS Rock
WHERE semantic_sim(a.lithology, b.lithology) > 0.85
AND a.texture == b.texture
YIELD "Similar rock formation"`
    },
    Fossil: {
      evidenceEn: ['Taxonomy (Class/Order)', 'Geological Age', 'Paleoenvironment'],
      evidenceTr: ['Taksonomi (Sınıf/Takım)', 'Jeolojik Yaş', 'Paleoçevre'],
      code: `RULE Match_Fossils
MATCH a AS Fossil WITH b AS Fossil
WHERE a.taxonomy.order == b.taxonomy.order
AND overlap(a.geological_age, b.geological_age)
YIELD "Related fossil taxa"`
    }
  };

  const activeContent = content[activeTab];

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '1.5rem', marginTop: '1rem', letterSpacing: '1px' }}>
        {lang === 'en' ? 'Why a Domain-Specific Language?' : 'Neden Bir Alana Özgü Dil?'}
      </h2>

      {/* Warning Box */}
      <div style={{ 
        padding: '1rem 2rem', background: 'rgba(255, 152, 0, 0.15)', 
        borderLeft: '4px solid #FF9800', borderRadius: '0 8px 8px 0', 
        marginBottom: '2.5rem', width: '100%', maxWidth: '900px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.1rem', color: '#FFB74D', textAlign: 'center' }}>
          {lang === 'en' 
            ? 'One universal opaque similarity function is not sufficient for every museum domain. Different object types require different evidence.' 
            : 'Her müze alanı için evrensel, opak (kara kutu) bir yapay zeka fonksiyonu yeterli değildir. Farklı nesne türleri farklı kanıtlar gerektirir.'}
        </p>
      </div>

      <div style={{ display: 'flex', width: '100%', gap: '2rem', flex: 1, minHeight: '350px' }}>
        
        {/* Left: Interactive Tabs */}
        <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                background: activeTab === tab.id ? 'rgba(0, 188, 212, 0.2)' : 'rgba(255,255,255,0.05)',
                border: `2px solid ${activeTab === tab.id ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}`,
                padding: '1.2rem', borderRadius: '12px', color: 'white', fontSize: '1.2rem',
                cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab.id ? '0 0 20px rgba(0,188,212,0.3)' : 'none',
                transform: activeTab === tab.id ? 'translateX(10px)' : 'none'
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>{tab.icon}</span>
              <span style={{ fontWeight: activeTab === tab.id ? 'bold' : 'normal' }}>
                {lang === 'en' ? tab.labelEn : tab.labelTr}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Dynamic Content Panel */}
        <div style={{ 
          flex: 1, background: 'rgba(0,0,0,0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
          padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'
        }}>
          {/* Subtle background icon */}
          <div style={{ position: 'absolute', right: '-20px', top: '-20px', fontSize: '15rem', opacity: 0.05, pointerEvents: 'none' }}>
            {tabs.find(t => t.id === activeTab)?.icon}
          </div>

          <div style={{ display: 'flex', gap: '2rem', height: '100%', position: 'relative', zIndex: 1 }}>
            
            {/* Required Evidence */}
            <div style={{ flex: 1 }}>
              <h4 style={{ color: '#4CAF50', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🔍</span> {lang === 'en' ? 'Required Evidence' : 'Gerekli Kanıtlar'}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {(lang === 'en' ? activeContent.evidenceEn : activeContent.evidenceTr).map((ev, i) => (
                  <li key={i} style={{ 
                    background: 'rgba(76, 175, 80, 0.1)', borderLeft: '3px solid #4CAF50', 
                    padding: '0.8rem 1rem', borderRadius: '0 8px 8px 0', color: 'white' 
                  }}>
                    {ev}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider */}
            <div style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)' }} />

            {/* MuseDSL Code Snippet */}
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>💻</span> {lang === 'en' ? 'MuseDSL Implementation' : 'MuseDSL Uygulaması'}
              </h4>
              <pre style={{ 
                background: '#1e1e1e', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(0,188,212,0.3)',
                color: '#e0e0e0', fontSize: '0.9rem', overflowX: 'auto', whiteSpace: 'pre-wrap',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
              }}>
                <code style={{ fontFamily: 'monospace', color: '#64B5F6' }}>
                  {activeContent.code}
                </code>
              </pre>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export const Slide14_RuleStructure: React.FC<SlideProps> = ({ lang }) => (
  <div className="slide-content">
    <h2>{lang === 'en' ? 'How a MuseDSL Rule Works' : 'Bir MuseDSL Kuralı Nasıl Çalışır'}</h2>
    <p style={{ color: 'var(--text-secondary)' }}>{lang === 'en' ? 'Illustrative MuseDSL rule' : 'Temsili MuseDSL kuralı'}</p>
    <pre style={{ textAlign: 'left', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '8px', display: 'inline-block', fontSize: '1.1rem', border: '1px solid var(--border-color)' }}>
      <code style={{ fontFamily: 'var(--font-mono)' }}>
{`rule FossilRelationship {

    scope category == "Fossil"

    compare taxonomy
        weight 0.40

    compare subtype
        weight 0.20

    compare geologicalAge
        weight 0.25

    compare locality
        weight 0.15

    propose CLOSE_MATCH
}`}
      </code>
    </pre>
  </div>
);

export const Slide15_Scoring: React.FC<SlideProps> = ({ lang }) => {
  const [f1W, setF1W] = React.useState(50);
  const [f2W, setF2W] = React.useState(30);
  const [f3W, setF3W] = React.useState(20);

  const [f1S, setF1S] = React.useState(0.90);
  const [f2S, setF2S] = React.useState(0.40);
  const [f3S, setF3S] = React.useState(0.85);

  const totalW = f1W + f2W + f3W;
  const nw1 = totalW > 0 ? f1W / totalW : 0;
  const nw2 = totalW > 0 ? f2W / totalW : 0;
  const nw3 = totalW > 0 ? f3W / totalW : 0;

  const score = (nw1 * f1S) + (nw2 * f2S) + (nw3 * f3S);

  // Status calculation
  let statusStr = "REJECT";
  let statusColor = "var(--state-reject)"; // red
  if (score >= 0.75) {
    statusStr = "ACCEPT";
    statusColor = "var(--state-accept)"; // green
  } else if (score >= 0.50) {
    statusStr = "REVIEW";
    statusColor = "var(--state-review)"; // orange
  }

  return (
    <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '1200px', width: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem', marginTop: '1rem' }}>
        {lang === 'en' ? 'Interactive Scoring Model' : 'Etkileşimli Puanlama Modeli'}
      </h2>

      <div style={{ display: 'flex', gap: '3rem', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Left Side: Math & Legend */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
          <div style={{ 
            background: 'rgba(0,188,212,0.1)', border: '2px solid var(--accent-color)', 
            padding: '2rem', borderRadius: '16px', textAlign: 'center',
            boxShadow: '0 0 30px rgba(0,188,212,0.2)'
          }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--accent-color)', fontFamily: 'serif', fontStyle: 'italic', marginBottom: '1rem', textShadow: '0 0 10px rgba(0,188,212,0.5)' }}>
              S(q,c) = Σ w<sub style={{ fontSize: '1.5rem' }}>i</sub> s<sub style={{ fontSize: '1.5rem' }}>i</sub>
            </div>
            <div style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
              Σ w<sub style={{ fontSize: '1rem' }}>i</sub> = 1
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong style={{ color: 'white' }}>q</strong> = {lang === 'en' ? 'Source object' : 'Kaynak nesne (Sorgu)'}</li>
              <li><strong style={{ color: 'white' }}>c</strong> = {lang === 'en' ? 'Candidate object' : 'Aday nesne (Hedef)'}</li>
              <li><strong style={{ color: '#64B5F6' }}>s<sub>i</sub></strong> = {lang === 'en' ? 'Similarity score' : 'Benzerlik skoru'} (0.0 - 1.0)</li>
              <li><strong style={{ color: '#FFB74D' }}>w<sub>i</sub></strong> = {lang === 'en' ? 'Evidence weight' : 'Kanıt ağırlığı'}</li>
            </ul>
          </div>
        </div>

        {/* Center: Interactive Sliders */}
        <div style={{ flex: 1.5, background: 'rgba(0,0,0,0.4)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {[
            { id: 1, label: lang === 'en' ? 'F1: Taxonomy Match' : 'F1: Taksonomi', w: f1W, setW: setF1W, nw: nw1, s: f1S, setS: setF1S },
            { id: 2, label: lang === 'en' ? 'F2: Age Overlap' : 'F2: Yaş Örtüşmesi', w: f2W, setW: setF2W, nw: nw2, s: f2S, setS: setF2S },
            { id: 3, label: lang === 'en' ? 'F3: Spatial Sim' : 'F3: Konum Benzerliği', w: f3W, setW: setF3W, nw: nw3, s: f3S, setS: setF3S },
          ].map((feature) => (
            <div key={feature.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid rgba(255,255,255,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'white' }}>{feature.label}</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {lang === 'en' ? 'Contribution:' : 'Katkı:'} <strong style={{ color: 'white' }}>{(feature.nw * feature.s).toFixed(3)}</strong>
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {/* Weight Slider */}
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#FFB74D', marginBottom: '0.3rem' }}>
                    <span>w<sub>{feature.id}</sub> (Weight: {feature.w})</span>
                    <span>Norm: {feature.nw.toFixed(2)}</span>
                  </label>
                  <input type="range" min="0" max="100" value={feature.w} onChange={(e) => feature.setW(parseInt(e.target.value))} style={{ width: '100%', accentColor: '#FFB74D' }} />
                </div>
                
                {/* Similarity Slider */}
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64B5F6', marginBottom: '0.3rem' }}>
                    <span>s<sub>{feature.id}</sub> (Similarity)</span>
                    <span>{feature.s.toFixed(2)}</span>
                  </label>
                  <input type="range" min="0" max="100" value={feature.s * 100} onChange={(e) => feature.setS(parseInt(e.target.value)/100)} style={{ width: '100%', accentColor: '#64B5F6' }} />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Right: Real-time Output */}
        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          
          <div style={{ 
            width: '200px', height: '200px', borderRadius: '50%', 
            border: `6px solid ${statusColor}`, 
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 0 40px ${statusColor}40`,
            background: 'rgba(0,0,0,0.5)', transition: 'all 0.3s ease'
          }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>S(q, c)</span>
            <span style={{ color: 'white', fontSize: '3.5rem', fontWeight: 'bold' }}>
              {score.toFixed(3)}
            </span>
          </div>
          
          <div style={{ 
            marginTop: '2rem', padding: '0.5rem 1.5rem', borderRadius: '20px', 
            background: `${statusColor}20`, color: statusColor, fontWeight: 'bold',
            fontSize: '1.2rem', letterSpacing: '2px', border: `1px solid ${statusColor}`,
            transition: 'all 0.3s ease'
          }}>
            {statusStr}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'center', opacity: 0.7 }}>
            {lang === 'en' ? '≥ 0.75 : ACCEPT' : '≥ 0.75 : KABUL'}<br/>
            {lang === 'en' ? '0.50 - 0.74 : REVIEW' : '0.50 - 0.74 : İNCELE'}<br/>
            {lang === 'en' ? '< 0.50 : REJECT' : '< 0.50 : RED'}
          </div>

        </div>

      </div>

      {/* Governance Note */}
      <div style={{ 
        marginTop: '2rem', padding: '1rem', background: 'rgba(255, 152, 0, 0.1)', 
        borderLeft: '4px solid var(--state-review)', borderRadius: '0 8px 8px 0',
        fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', maxWidth: '800px',
        textAlign: 'center'
      }}>
        {lang === 'en' 
          ? '"REVIEW" is a deliberate governance band. The system must not force uncertain relationships into a binary decision.' 
          : '"İNCELE" kararı bilinçli bir yönetişim bandıdır. Sistem, belirsiz ilişkileri zorla 1 veya 0 gibi ikili bir karara zorlamamalıdır.'}
      </div>

    </div>
  );
};
