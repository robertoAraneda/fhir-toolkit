/**
 * Common UCUM Codes for Distance
 * 
 * Unified Code for Units of Measure (UCUM). This value set includes all common UCUM codes used for distance - that it is, all commonly used units which have the same canonical unit as 'm' (meter)
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
