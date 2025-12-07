/**
 * Knowledge Representation Level
 * 
 * A knowledge representation level, narrative, semi-structured, structured, and executable
 *
 * @see http://hl7.org/fhir/ValueSet/knowledge-representation-level
 */

export type KnowledgeRepresentationLevelType = 'narrative' | 'semi-structured' | 'structured' | 'executable';

export enum KnowledgeRepresentationLevelEnum {
  /** Narrative */
  Narrative = 'narrative',
  /** Semi-Structured */
  SemiStructured = 'semi-structured',
  /** Structured */
  Structured = 'structured',
  /** Executable */
  Executable = 'executable',
}

export const KnowledgeRepresentationLevelValues = ['narrative', 'semi-structured', 'structured', 'executable'] as const;
