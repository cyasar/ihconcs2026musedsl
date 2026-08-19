export const SimulationState = {
  IDLE: 'IDLE',
  OBJECT_REGISTERED: 'OBJECT_REGISTERED',
  QUERY_CREATED: 'QUERY_CREATED',
  DISCOVERY_RUNNING: 'DISCOVERY_RUNNING',
  CANDIDATES_RECEIVED: 'CANDIDATES_RECEIVED',
  NORMALISING: 'NORMALISING',
  MATCHING: 'MATCHING',
  EXPLAINING: 'EXPLAINING',
  DECISION_READY: 'DECISION_READY',
  CURATOR_REVIEW: 'CURATOR_REVIEW',
  RELATIONSHIP_VALIDATED: 'RELATIONSHIP_VALIDATED',
} as const;

export type SimulationState = typeof SimulationState[keyof typeof SimulationState];

export interface FossilRecord {
  id: string;
  category: string;
  taxonomy: string;
  subtype: string;
  geologicalAge: string;
  locality: string;
}

export interface Candidate {
  id: string;
  museumId: string;
  taxonomy: string;
  geologicalAge: string;
  locality: string;
  subtype: string;
  similarityScore: number;
  decisionState: 'ACCEPT' | 'REVIEW' | 'REJECT' | 'PENDING';
  proposedRelation?: string;
  evidence: EvidenceField[];
}

export interface EvidenceField {
  field: string;
  sourceValue: string;
  candidateValue: string;
  similarity: number;
  weight: number;
  contribution: number;
}
