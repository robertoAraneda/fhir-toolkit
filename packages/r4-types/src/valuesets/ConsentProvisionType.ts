/**
 * ConsentProvisionType
 * 
 * How a rule statement is applied, such as adding additional consent or removing consent.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-provision-type
 */

export type ConsentProvisionTypeType = 'deny' | 'permit';

export enum ConsentProvisionTypeEnum {
  /** Opt Out */
  Deny = 'deny',
  /** Opt In */
  Permit = 'permit',
}

export const ConsentProvisionTypeValues = ['deny', 'permit'] as const;
