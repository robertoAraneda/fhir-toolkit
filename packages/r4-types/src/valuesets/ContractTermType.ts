/**
 * Contract Term Type Codes
 * 
 * This value set includes sample Contract Term Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/contract-term-type
 */

export type ContractTermTypeType = 'statutory' | 'subject-to';

export enum ContractTermTypeEnum {
  /** Statutory */
  Statutory = 'statutory',
  /** Subject To */
  SubjectTo = 'subject-to',
}

export const ContractTermTypeValues = ['statutory', 'subject-to'] as const;
