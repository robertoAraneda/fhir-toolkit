/**
 * Relationship
 * 
 * This value set includes the Patient to subscriber relationship codes.
 *
 * @see http://hl7.org/fhir/ValueSet/relationship
 */

export type BeneficiaryRelationshipType = '1' | '2' | '3' | '4' | '5';

export enum BeneficiaryRelationshipEnum {
  /** Self */
  _1 = '1',
  /** Spouse */
  _2 = '2',
  /** Child */
  _3 = '3',
  /** Common Law Spouse */
  _4 = '4',
  /** Other */
  _5 = '5',
}

export const BeneficiaryRelationshipValues = ['1', '2', '3', '4', '5'] as const;
