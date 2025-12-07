/**
 * ExposureState
 * 
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 *
 * @see http://hl7.org/fhir/ValueSet/exposure-state
 */

export type ExposureStateType = 'exposure' | 'exposure-alternative';

export enum ExposureStateEnum {
  /** Exposure */
  Exposure = 'exposure',
  /** Exposure Alternative */
  ExposureAlternative = 'exposure-alternative',
}

export const ExposureStateValues = ['exposure', 'exposure-alternative'] as const;
