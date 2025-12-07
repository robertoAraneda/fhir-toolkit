/**
 * Substance Grade
 * 
 * The quality standard, established benchmark, to which a substance complies.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-grade
 */

export type SubstanceGradeType = 'USP-NF' | 'Ph.Eur' | 'JP' | 'BP' | 'CompanyStandard';

export enum SubstanceGradeEnum {
  /** USP/NF United States Pharmacopeia (USP) and the National Formulary (NF) */
  UspNf = 'USP-NF',
  /** European Pharmacopoeia */
  PhEur = 'Ph.Eur',
  /** Japanese Pharmacopoeia */
  Jp = 'JP',
  /** British Pharmacopoeia */
  Bp = 'BP',
  /** Company Standard */
  Companystandard = 'CompanyStandard',
}

export const SubstanceGradeValues = ['USP-NF', 'Ph.Eur', 'JP', 'BP', 'CompanyStandard'] as const;
