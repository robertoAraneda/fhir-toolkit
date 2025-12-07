/**
 * Related Artifact Type Expanded
 * 
 * The type of relationship to the cited artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/related-artifact-type-expanded
 */

export type RelatedArtifactTypeExpandedType = 'reprint' | 'reprint-of';

export enum RelatedArtifactTypeExpandedEnum {
  /** Reprint */
  Reprint = 'reprint',
  /** Reprint Of */
  ReprintOf = 'reprint-of',
}

export const RelatedArtifactTypeExpandedValues = ['reprint', 'reprint-of'] as const;
