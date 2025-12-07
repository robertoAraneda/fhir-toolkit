/**
 * Focal Subject Codes
 * 
 * Example value set composed from SNOMED CT and HL7 V3 codes for observation targets such as donor, fetus or spouse. As use cases are discovered, more values may be added.
 *
 * @see http://hl7.org/fhir/ValueSet/focal-subject
 */

export type FocalSubjectType = '83418008' | 'DON' | 'SPS';

export enum FocalSubjectEnum {
  /** Fetus */
  _83418008 = '83418008',
  /** donor */
  Don = 'DON',
  /** spouse */
  Sps = 'SPS',
}

export const FocalSubjectValues = ['83418008', 'DON', 'SPS'] as const;
