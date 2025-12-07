/**
 * qualityType
 * 
 * Type for quality report.
 *
 * @see http://hl7.org/fhir/ValueSet/quality-type
 */

export type QualityTypeType = 'indel' | 'snp' | 'unknown';

export enum QualityTypeEnum {
  /** INDEL Comparison */
  Indel = 'indel',
  /** SNP Comparison */
  Snp = 'snp',
  /** UNKNOWN Comparison */
  Unknown = 'unknown',
}

export const QualityTypeValues = ['indel', 'snp', 'unknown'] as const;
