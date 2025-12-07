/**
 * ConceptMapRelationship
 * 
 * The relationship between concepts.
 *
 * @see http://hl7.org/fhir/ValueSet/concept-map-relationship
 */

export type ConceptMapRelationshipType = 'related-to' | 'equivalent' | 'source-is-narrower-than-target' | 'source-is-broader-than-target' | 'not-related-to';

export enum ConceptMapRelationshipEnum {
  /** Related To */
  RelatedTo = 'related-to',
  /** Equivalent */
  Equivalent = 'equivalent',
  /** Source Is Narrower Than Target */
  SourceIsNarrowerThanTarget = 'source-is-narrower-than-target',
  /** Source Is Broader Than Target */
  SourceIsBroaderThanTarget = 'source-is-broader-than-target',
  /** Not Related To */
  NotRelatedTo = 'not-related-to',
}

export const ConceptMapRelationshipValues = ['related-to', 'equivalent', 'source-is-narrower-than-target', 'source-is-broader-than-target', 'not-related-to'] as const;
