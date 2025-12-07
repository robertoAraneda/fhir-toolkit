/**
 * RelatedArtifactType
 * 
 * The type of relationship to the related artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/related-artifact-type
 */

export type RelatedArtifactTypeType = 'documentation' | 'justification' | 'citation' | 'predecessor' | 'successor' | 'derived-from' | 'depends-on' | 'composed-of';

export enum RelatedArtifactTypeEnum {
  /** Documentation */
  Documentation = 'documentation',
  /** Justification */
  Justification = 'justification',
  /** Citation */
  Citation = 'citation',
  /** Predecessor */
  Predecessor = 'predecessor',
  /** Successor */
  Successor = 'successor',
  /** Derived From */
  DerivedFrom = 'derived-from',
  /** Depends On */
  DependsOn = 'depends-on',
  /** Composed Of */
  ComposedOf = 'composed-of',
}

export const RelatedArtifactTypeValues = ['documentation', 'justification', 'citation', 'predecessor', 'successor', 'derived-from', 'depends-on', 'composed-of'] as const;
