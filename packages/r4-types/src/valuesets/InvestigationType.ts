/**
 * Investigation Type
 * 
 * Example value set for investigation type.
 *
 * @see http://hl7.org/fhir/ValueSet/investigation-sets
 */

export type InvestigationTypeType = '271336007' | '160237006';

export enum InvestigationTypeEnum {
  /** Examination / signs */
  _271336007 = '271336007',
  /** History/symptoms */
  _160237006 = '160237006',
}

export const InvestigationTypeValues = ['271336007', '160237006'] as const;
