/**
 * SynthesisType
 * 
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 *
 * @see http://hl7.org/fhir/ValueSet/synthesis-type
 */

export type SynthesisTypeType = 'std-MA' | 'IPD-MA' | 'indirect-NMA' | 'combined-NMA' | 'range' | 'classification' | 'NotApplicable';

export enum SynthesisTypeEnum {
  /** summary data meta-analysis */
  StdMa = 'std-MA',
  /** individual patient data meta-analysis */
  IpdMa = 'IPD-MA',
  /** indirect network meta-analysis */
  IndirectNma = 'indirect-NMA',
  /** combined direct plus indirect network meta-analysis */
  CombinedNma = 'combined-NMA',
  /** range of results */
  Range = 'range',
  /** classifcation of results */
  Classification = 'classification',
  /** not applicable */
  Notapplicable = 'NotApplicable',
}

export const SynthesisTypeValues = ['std-MA', 'IPD-MA', 'indirect-NMA', 'combined-NMA', 'range', 'classification', 'NotApplicable'] as const;
