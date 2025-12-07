/**
 * Example set of Data Security Labels
 * 
 * A sample of security labels from [Healthcare Privacy and Security Classification System](security-labels.html#hcs) used on data (.meta.security) to indicate confidentialityCode classification and maybe sensitivity codes.
 *
 * @see http://hl7.org/fhir/ValueSet/security-label-data-examples
 */

export type SecurityLabelDataExamplesType = 'N' | 'R' | 'ETH' | 'PSY' | 'STD';

export enum SecurityLabelDataExamplesEnum {
  N = 'N',
  R = 'R',
  Eth = 'ETH',
  Psy = 'PSY',
  Std = 'STD',
}

export const SecurityLabelDataExamplesValues = ['N', 'R', 'ETH', 'PSY', 'STD'] as const;
