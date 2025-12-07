/**
 * ConceptMapEquivalence
 * 
 * The degree of equivalence between concepts.
 *
 * @see http://hl7.org/fhir/ValueSet/concept-map-equivalence
 */

export type ConceptMapEquivalenceType = 'relatedto' | 'equivalent' | 'equal' | 'wider' | 'subsumes' | 'narrower' | 'specializes' | 'inexact' | 'unmatched' | 'disjoint';

export enum ConceptMapEquivalenceEnum {
  /** Related To */
  Relatedto = 'relatedto',
  /** Equivalent */
  Equivalent = 'equivalent',
  /** Equal */
  Equal = 'equal',
  /** Wider */
  Wider = 'wider',
  /** Subsumes */
  Subsumes = 'subsumes',
  /** Narrower */
  Narrower = 'narrower',
  /** Specializes */
  Specializes = 'specializes',
  /** Inexact */
  Inexact = 'inexact',
  /** Unmatched */
  Unmatched = 'unmatched',
  /** Disjoint */
  Disjoint = 'disjoint',
}

export const ConceptMapEquivalenceValues = ['relatedto', 'equivalent', 'equal', 'wider', 'subsumes', 'narrower', 'specializes', 'inexact', 'unmatched', 'disjoint'] as const;
