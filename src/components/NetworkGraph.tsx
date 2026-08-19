import React from 'react';
import type { Candidate, FossilRecord } from '../simulation/engine';
import { translations } from '../content/translations';
import type { Language } from '../content/translations';

interface Props {
  lang: Language;
  sourceObject: FossilRecord | null;
  candidates: Candidate[];
  onSelectCandidate: (c: Candidate) => void;
}

export const NetworkGraph: React.FC<Props> = ({ lang, sourceObject, candidates, onSelectCandidate }) => {
  if (!sourceObject) return <div>{translations[lang].loading || 'Loading...'}</div>;

  return (
    <div style={{ position: 'relative', width: '600px', height: '400px', border: '1px solid var(--border-color)', margin: '2rem auto', borderRadius: '8px' }}>
      {/* Center Node */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        padding: '1rem', background: 'var(--accent-color)', color: 'var(--bg-color)', borderRadius: '50%', textAlign: 'center'
      }}>
        <strong>Museum A</strong><br/>
        <small>{sourceObject.id}</small>
      </div>

      {/* Outer Nodes */}
      {candidates.map((c, idx) => {
        const angle = (idx / candidates.length) * 2 * Math.PI;
        const radius = 150;
        const top = `calc(50% + ${Math.sin(angle) * radius}px)`;
        const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
        
        let color = 'var(--bg-secondary)';
        let borderColor = 'var(--border-color)';
        if (c.decisionState === 'ACCEPT') borderColor = 'var(--state-accept)';
        if (c.decisionState === 'REVIEW') borderColor = 'var(--state-review)';
        if (c.decisionState === 'REJECT') borderColor = 'var(--state-reject)';

        return (
          <div key={c.id} 
               onClick={() => onSelectCandidate(c)}
               style={{
                 position: 'absolute', top, left, transform: 'translate(-50%, -50%)',
                 padding: '0.5rem', background: color, border: `2px solid ${borderColor}`,
                 borderRadius: '8px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.3s'
               }}>
            <strong>Museum {c.museumId}</strong><br/>
            <small>{c.id}</small>
          </div>
        )
      })}
    </div>
  );
};
