/**
 * SubstanceNameAuthority
 * 
 * An authority that officates substance names.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-name-authority
 */

export type SubstanceNameAuthorityType = 'BAN' | 'COSING' | 'Ph.Eur.' | 'FCC' | 'INCI' | 'INN' | 'JAN' | 'JECFA' | 'MARTINDALE' | 'USAN' | 'USP' | 'PHF' | 'HAB' | 'PhF' | 'IUIS';

export enum SubstanceNameAuthorityEnum {
  /** BAN */
  Ban = 'BAN',
  /** COSING */
  Cosing = 'COSING',
  /** Ph.Eur. */
  PhEur = 'Ph.Eur.',
  /** FCC */
  Fcc = 'FCC',
  /** INCI */
  Inci = 'INCI',
  /** INN */
  Inn = 'INN',
  /** JAN */
  Jan = 'JAN',
  /** JECFA */
  Jecfa = 'JECFA',
  /** MARTINDALE */
  Martindale = 'MARTINDALE',
  /** USAN */
  Usan = 'USAN',
  /** USP */
  Usp = 'USP',
  /** PHF */
  Phf = 'PHF',
  /** HAB */
  Hab = 'HAB',
  /** PhF (Pharmacopée française) */
  Phf1 = 'PhF',
  /** IUIS */
  Iuis = 'IUIS',
}

export const SubstanceNameAuthorityValues = ['BAN', 'COSING', 'Ph.Eur.', 'FCC', 'INCI', 'INN', 'JAN', 'JECFA', 'MARTINDALE', 'USAN', 'USP', 'PHF', 'HAB', 'PhF', 'IUIS'] as const;
