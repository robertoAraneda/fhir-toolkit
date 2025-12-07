/**
 * Evidence Variable Handling
 * 
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 *
 * @see http://hl7.org/fhir/ValueSet/variable-handling
 */

export type EvidenceVariableHandlingType = 'continuous' | 'dichotomous' | 'ordinal' | 'polychotomous';

export enum EvidenceVariableHandlingEnum {
  /** continuous variable */
  Continuous = 'continuous',
  /** dichotomous variable */
  Dichotomous = 'dichotomous',
  /** ordinal variable */
  Ordinal = 'ordinal',
  /** polychotomous variable */
  Polychotomous = 'polychotomous',
}

export const EvidenceVariableHandlingValues = ['continuous', 'dichotomous', 'ordinal', 'polychotomous'] as const;
