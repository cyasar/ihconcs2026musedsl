import React from 'react';
import type { Candidate } from '../simulation/engine';
import type { Language } from '../content/translations';

interface Props {
  lang: Language;
  candidate: Candidate | null;
  onClose: () => void;
  onDecision: (decision: 'ACCEPT' | 'REJECT') => void;
}

export const EvidenceInspector: React.FC<Props> = ({ candidate, onClose, onDecision }) => {
  if (!candidate) return null;

  return (
    <div style={{
      position: 'absolute', top: '10%', right: '10%', width: '400px',
      background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
      padding: '1.5rem', borderRadius: '8px', zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
    }}>
      <h3 style={{ marginTop: 0 }}>Evidence Inspector</h3>
      <p>Candidate: {candidate.id}</p>
      <p>Score: {candidate.similarityScore.toFixed(2)} - State: <strong style={{ color: `var(--state-${candidate.decisionState.toLowerCase()})`}}>{candidate.decisionState}</strong></p>
      
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', marginBottom: '1rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <th>Field</th>
            <th>Sim</th>
            <th>Weight</th>
            <th>Contrib</th>
          </tr>
        </thead>
        <tbody>
          {candidate.evidence.map((e, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
              <td>{e.field}</td>
              <td>{e.similarity.toFixed(2)}</td>
              <td>{e.weight.toFixed(2)}</td>
              <td>{e.contribution.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {candidate.decisionState === 'REVIEW' && (
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button style={{ background: 'var(--state-accept)', color: 'white' }} onClick={() => onDecision('ACCEPT')}>ACCEPT</button>
          <button style={{ background: 'var(--state-reject)', color: 'white' }} onClick={() => onDecision('REJECT')}>REJECT</button>
        </div>
      )}
      
      <button style={{ marginTop: '1rem', width: '100%' }} onClick={onClose}>Close</button>
    </div>
  );
};
