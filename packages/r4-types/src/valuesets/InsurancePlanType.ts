/**
 * Insurance plan type
 * 
 * This example value set defines a set of codes that can be used to indicate a type of insurance plan.
 *
 * @see http://hl7.org/fhir/ValueSet/insuranceplan-type
 */

export type InsurancePlanTypeType = 'medical' | 'dental' | 'mental' | 'subst-ab' | 'vision' | 'Drug' | 'short-term' | 'long-term' | 'hospice' | 'home';

export enum InsurancePlanTypeEnum {
  /** Medical */
  Medical = 'medical',
  /** Dental */
  Dental = 'dental',
  /** Mental Health */
  Mental = 'mental',
  /** Substance Abuse */
  SubstAb = 'subst-ab',
  /** Vision */
  Vision = 'vision',
  /** Drug */
  Drug = 'Drug',
  /** Short Term */
  ShortTerm = 'short-term',
  /** Long Term Care */
  LongTerm = 'long-term',
  /** Hospice */
  Hospice = 'hospice',
  /** Home Health */
  Home = 'home',
}

export const InsurancePlanTypeValues = ['medical', 'dental', 'mental', 'subst-ab', 'vision', 'Drug', 'short-term', 'long-term', 'hospice', 'home'] as const;
