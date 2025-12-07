/**
 * Biologically derived product dispense - origin relationship
 * 
 * Biologically derived product dispense - origin relationship
 *
 * @see http://hl7.org/fhir/ValueSet/biologicallyderivedproductdispense-origin-relationship
 */

export type BiologicallyDerivedProductDispenseOriginRelationshipType = 'autologous' | 'related' | 'directed' | 'allogeneic' | 'xenogenic';

export enum BiologicallyDerivedProductDispenseOriginRelationshipEnum {
  /** Autologous */
  Autologous = 'autologous',
  /** Related */
  Related = 'related',
  /** Directed */
  Directed = 'directed',
  /** Allogeneic */
  Allogeneic = 'allogeneic',
  /** Xenogenic */
  Xenogenic = 'xenogenic',
}

export const BiologicallyDerivedProductDispenseOriginRelationshipValues = ['autologous', 'related', 'directed', 'allogeneic', 'xenogenic'] as const;
