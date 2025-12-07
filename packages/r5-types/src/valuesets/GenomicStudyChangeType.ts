/**
 * Genomic Study Change Type
 * 
 * The change type of the GenomicStudy analysis.
 *
 * @see http://hl7.org/fhir/ValueSet/genomicstudy-changetype
 */

export type GenomicStudyChangeTypeType = 'DNA' | 'RNA' | 'AA' | 'CHR' | 'CNV';

export enum GenomicStudyChangeTypeEnum {
  /** DNA change */
  Dna = 'DNA',
  /** RNA change */
  Rna = 'RNA',
  /** Protein/amino Acids change  */
  Aa = 'AA',
  /** Chromosomal changes */
  Chr = 'CHR',
  /** Copy number variations */
  Cnv = 'CNV',
}

export const GenomicStudyChangeTypeValues = ['DNA', 'RNA', 'AA', 'CHR', 'CNV'] as const;
