import type { FossilRecord, Candidate, EvidenceField } from './engine';

export interface ScoringWeights {
  taxonomy: number;
  subtype: number;
  geologicalAge: number;
  locality: number;
}

export interface GovernanceThresholds {
  accept: number;
  review: number;
}

export const defaultWeights: ScoringWeights = {
  taxonomy: 0.40,
  subtype: 0.20,
  geologicalAge: 0.25,
  locality: 0.15,
};

export const defaultThresholds: GovernanceThresholds = {
  accept: 0.88,
  review: 0.70,
};

export function calculateSimilarity(source: string, target: string): number {
  if (source.toLowerCase() === target.toLowerCase()) return 1.0;
  if (source.toLowerCase().includes(target.toLowerCase()) || target.toLowerCase().includes(source.toLowerCase())) return 0.8;
  return 0.4;
}

export function evaluateCandidate(
  source: FossilRecord,
  candidateRaw: any,
  weights: ScoringWeights,
  thresholds: GovernanceThresholds
): Candidate {
  const taxSim = calculateSimilarity(source.taxonomy, candidateRaw.taxonomy);
  const subSim = calculateSimilarity(source.subtype, candidateRaw.subtype);
  const geoSim = calculateSimilarity(source.geologicalAge, candidateRaw.geologicalAge);
  const locSim = calculateSimilarity(source.locality, candidateRaw.locality);

  const evidence: EvidenceField[] = [
    { field: 'Taxonomy', sourceValue: source.taxonomy, candidateValue: candidateRaw.taxonomy, similarity: taxSim, weight: weights.taxonomy, contribution: taxSim * weights.taxonomy },
    { field: 'Subtype', sourceValue: source.subtype, candidateValue: candidateRaw.subtype, similarity: subSim, weight: weights.subtype, contribution: subSim * weights.subtype },
    { field: 'Geo. Age', sourceValue: source.geologicalAge, candidateValue: candidateRaw.geologicalAge, similarity: geoSim, weight: weights.geologicalAge, contribution: geoSim * weights.geologicalAge },
    { field: 'Locality', sourceValue: source.locality, candidateValue: candidateRaw.locality, similarity: locSim, weight: weights.locality, contribution: locSim * weights.locality },
  ];

  const totalScore = evidence.reduce((acc, curr) => acc + curr.contribution, 0);

  let decisionState: 'ACCEPT' | 'REVIEW' | 'REJECT' = 'REJECT';
  let proposedRelation = undefined;

  if (totalScore >= thresholds.accept) {
    decisionState = 'ACCEPT';
    proposedRelation = 'CLOSE_MATCH';
  } else if (totalScore >= thresholds.review) {
    decisionState = 'REVIEW';
    proposedRelation = 'RELATED_TO';
  }

  return {
    id: candidateRaw.id,
    museumId: candidateRaw.museumId,
    taxonomy: candidateRaw.taxonomy,
    geologicalAge: candidateRaw.geologicalAge,
    locality: candidateRaw.locality,
    subtype: candidateRaw.subtype,
    similarityScore: totalScore,
    decisionState,
    proposedRelation,
    evidence,
  };
}
