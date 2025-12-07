/**
 * FocusCharacteristicCode
 * 
 * Evidence focus characteristic code.
 *
 * @see http://hl7.org/fhir/ValueSet/focus-characteristic-code
 */

export type FocusCharacteristicCodeType = 'citation' | 'clinical-outcomes-observed' | 'population' | 'exposure' | 'comparator' | 'outcome' | 'medication-exposures' | 'study-type';

export enum FocusCharacteristicCodeEnum {
  /** Citation */
  Citation = 'citation',
  /** Observed outcomes are clinical outcomes */
  ClinicalOutcomesObserved = 'clinical-outcomes-observed',
  /** Population */
  Population = 'population',
  /** Exposure */
  Exposure = 'exposure',
  /** Comparator */
  Comparator = 'comparator',
  /** Outcome */
  Outcome = 'outcome',
  /** Medication exposures */
  MedicationExposures = 'medication-exposures',
  /** Study type */
  StudyType = 'study-type',
}

export const FocusCharacteristicCodeValues = ['citation', 'clinical-outcomes-observed', 'population', 'exposure', 'comparator', 'outcome', 'medication-exposures', 'study-type'] as const;
