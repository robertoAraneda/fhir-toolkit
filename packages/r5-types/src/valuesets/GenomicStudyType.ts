/**
 * Genomic Study Type
 * 
 * The type of the GenomicStudy.
 *
 * @see http://hl7.org/fhir/ValueSet/genomicstudy-type
 */

export type GenomicStudyTypeType = 'alt-splc' | 'chromatin' | 'cnv' | 'epi-alt-hist' | 'epi-alt-dna' | 'fam-var-segr' | 'func-var' | 'gene-expression' | 'post-trans-mod' | 'snp' | 'str' | 'struc-var';

export enum GenomicStudyTypeEnum {
  /** Alternative splicing detection */
  AltSplc = 'alt-splc',
  /** Chromatin conformation */
  Chromatin = 'chromatin',
  /** CNV detection */
  Cnv = 'cnv',
  /** Epigenetic Alterations - histone modifications */
  EpiAltHist = 'epi-alt-hist',
  /** Epigenetic Alterations -DNA methylation */
  EpiAltDna = 'epi-alt-dna',
  /** Familial variant segregation */
  FamVarSegr = 'fam-var-segr',
  /** Functional variation detection */
  FuncVar = 'func-var',
  /** Gene expression profiling */
  GeneExpression = 'gene-expression',
  /** Post-translational Modification Identification */
  PostTransMod = 'post-trans-mod',
  /** SNP Detection */
  Snp = 'snp',
  /** STR count */
  Str = 'str',
  /** Structural variation detection */
  StrucVar = 'struc-var',
}

export const GenomicStudyTypeValues = ['alt-splc', 'chromatin', 'cnv', 'epi-alt-hist', 'epi-alt-dna', 'fam-var-segr', 'func-var', 'gene-expression', 'post-trans-mod', 'snp', 'str', 'struc-var'] as const;
