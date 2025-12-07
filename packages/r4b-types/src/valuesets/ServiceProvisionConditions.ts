/**
 * ServiceProvisionConditions
 * 
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 *
 * @see http://hl7.org/fhir/ValueSet/service-provision-conditions
 */

export type ServiceProvisionConditionsType = 'free' | 'disc' | 'cost';

export enum ServiceProvisionConditionsEnum {
  /** Free */
  Free = 'free',
  /** Discounts Available */
  Disc = 'disc',
  /** Fees apply */
  Cost = 'cost',
}

export const ServiceProvisionConditionsValues = ['free', 'disc', 'cost'] as const;
