/**
 * Resource security category value set
 * 
 * Codes indicating how resources behave from a security perspective
 *
 * @see http://hl7.org/fhir/ValueSet/resource-security-category
 */

export type ResourceSecurityCategoryType = 'anonymous' | 'business' | 'individual' | 'patient' | 'not-classified';

export enum ResourceSecurityCategoryEnum {
  /** Anonymous READ Access Resource */
  Anonymous = 'anonymous',
  /** Business Sensitive Resource */
  Business = 'business',
  /** Individual Sensitive Resource */
  Individual = 'individual',
  /** Patient Sensitive */
  Patient = 'patient',
  /** Not classified */
  NotClassified = 'not-classified',
}

export const ResourceSecurityCategoryValues = ['anonymous', 'business', 'individual', 'patient', 'not-classified'] as const;
