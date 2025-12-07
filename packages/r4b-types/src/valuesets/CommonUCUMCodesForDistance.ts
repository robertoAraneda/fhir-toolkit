/**
 * Common UCUM Codes for Distance
 * 
 * Unified Code for Units of Measure (UCUM). This value set includes common UCUM codes for units of distance
 *
 * @see http://hl7.org/fhir/ValueSet/distance-units
 */

export type CommonUCUMCodesForDistanceType = 'nm' | 'um' | 'mm' | 'm' | 'km';

export enum CommonUCUMCodesForDistanceEnum {
  /** nanometers */
  Nm = 'nm',
  /** micrometers */
  Um = 'um',
  /** millimeters */
  Mm = 'mm',
  /** meters */
  M = 'm',
  /** kilometers */
  Km = 'km',
}

export const CommonUCUMCodesForDistanceValues = ['nm', 'um', 'mm', 'm', 'km'] as const;
