/**
 * Unit Type Codes
 * 
 * This value set includes a smattering of Unit type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/benefit-unit
 */

export type UnitTypeType = 'individual' | 'family';

export enum UnitTypeEnum {
  /** Individual */
  Individual = 'individual',
  /** Family */
  Family = 'family',
}

export const UnitTypeValues = ['individual', 'family'] as const;
