/**
 * BiologicallyDerivedProductStatus
 * 
 * Biologically Derived Product Status.
 *
 * @see http://hl7.org/fhir/ValueSet/product-status
 */

export type BiologicallyDerivedProductStatusType = 'available' | 'unavailable';

export enum BiologicallyDerivedProductStatusEnum {
  /** Available */
  Available = 'available',
  /** Unavailable */
  Unavailable = 'unavailable',
}

export const BiologicallyDerivedProductStatusValues = ['available', 'unavailable'] as const;
