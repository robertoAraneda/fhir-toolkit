/**
 * ResourceSecurityCategory
 * 
 * Provides general guidance around the kind of access Control to Read, Search, Create, Update, or Delete a resource.
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
