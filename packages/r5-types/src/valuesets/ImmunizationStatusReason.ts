/**
 * Immunization Status Reason Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-status-reason
 */

export type ImmunizationStatusReasonType = 'IMMUNE' | 'MEDPREC' | 'OSTOCK' | 'PATOBJ' | 'PHILISOP' | 'RELIG' | 'VACEFF' | 'VACSAF';

export enum ImmunizationStatusReasonEnum {
  Immune = 'IMMUNE',
  Medprec = 'MEDPREC',
  Ostock = 'OSTOCK',
  Patobj = 'PATOBJ',
  Philisop = 'PHILISOP',
  Relig = 'RELIG',
  Vaceff = 'VACEFF',
  Vacsaf = 'VACSAF',
}

export const ImmunizationStatusReasonValues = ['IMMUNE', 'MEDPREC', 'OSTOCK', 'PATOBJ', 'PHILISOP', 'RELIG', 'VACEFF', 'VACSAF'] as const;
