/**
 * Consent Provision Type
 * 
 * How a rule statement is applied, such as adding additional consent or removing consent.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-provision-type
 */

export type ConsentProvisionTypeType = 'deny' | 'permit';

export enum ConsentProvisionTypeEnum {
  /** Deny */
  Deny = 'deny',
  /** Permit */
  Permit = 'permit',
}

export const ConsentProvisionTypeValues = ['deny', 'permit'] as const;
