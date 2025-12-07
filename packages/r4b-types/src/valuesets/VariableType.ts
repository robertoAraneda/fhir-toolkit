/**
 * VariableType
 * 
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 *
 * @see http://hl7.org/fhir/ValueSet/variable-type
 */

export type VariableTypeType = 'dichotomous' | 'continuous' | 'descriptive';

export enum VariableTypeEnum {
  /** Dichotomous */
  Dichotomous = 'dichotomous',
  /** Continuous */
  Continuous = 'continuous',
  /** Descriptive */
  Descriptive = 'descriptive',
}

export const VariableTypeValues = ['dichotomous', 'continuous', 'descriptive'] as const;
