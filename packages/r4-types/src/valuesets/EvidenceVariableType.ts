/**
 * EvidenceVariableType
 * 
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 *
 * @see http://hl7.org/fhir/ValueSet/variable-type
 */

export type EvidenceVariableTypeType = 'dichotomous' | 'continuous' | 'descriptive';

export enum EvidenceVariableTypeEnum {
  /** Dichotomous */
  Dichotomous = 'dichotomous',
  /** Continuous */
  Continuous = 'continuous',
  /** Descriptive */
  Descriptive = 'descriptive',
}

export const EvidenceVariableTypeValues = ['dichotomous', 'continuous', 'descriptive'] as const;
