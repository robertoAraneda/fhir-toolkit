/**
 * Coverage Copay Type Codes
 * 
 * This value set includes sample Coverage Copayment Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/coverage-copay-type
 */

export type CoverageCopayTypeType = 'gpvisit' | 'spvisit' | 'emergency' | 'inpthosp' | 'televisit' | 'urgentcare' | 'copaypct' | 'copay' | 'deductible' | 'maxoutofpocket';

export enum CoverageCopayTypeEnum {
  /** GP Office Visit */
  Gpvisit = 'gpvisit',
  /** Specialist Office Visit */
  Spvisit = 'spvisit',
  /** Emergency */
  Emergency = 'emergency',
  /** Inpatient Hospital */
  Inpthosp = 'inpthosp',
  /** Tele-visit */
  Televisit = 'televisit',
  /** Urgent Care */
  Urgentcare = 'urgentcare',
  /** Copay Percentage */
  Copaypct = 'copaypct',
  /** Copay Amount */
  Copay = 'copay',
  /** Deductible */
  Deductible = 'deductible',
  /** Maximum out of pocket */
  Maxoutofpocket = 'maxoutofpocket',
}

export const CoverageCopayTypeValues = ['gpvisit', 'spvisit', 'emergency', 'inpthosp', 'televisit', 'urgentcare', 'copaypct', 'copay', 'deductible', 'maxoutofpocket'] as const;
