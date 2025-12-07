/**
 * MaritalStatus
 * 
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 *
 * @see http://hl7.org/fhir/ValueSet/marital-status
 */

export type MaritalStatusType = 'UNK';

export enum MaritalStatusEnum {
  Unk = 'UNK',
}

export const MaritalStatusValues = ['UNK'] as const;
