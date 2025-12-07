/**
 * Specimen Role
 * 
 * Codes providing the role of a specimen.
 *
 * @see http://hl7.org/fhir/ValueSet/specimen-role
 */

export type SpecimenRoleType = 'b' | 'c' | 'e' | 'f' | 'o' | 'p' | 'q' | 'r' | 'v';

export enum SpecimenRoleEnum {
  /** Blind Sample */
  B = 'b',
  /** Calibrator */
  C = 'c',
  /** Electronic QC */
  E = 'e',
  /** Filler Organization Proficiency */
  F = 'f',
  /** Operator Proficiency */
  O = 'o',
  /** Patient */
  P = 'p',
  /** Control specimen */
  Q = 'q',
  /** Replicate (of patient sample as a control) */
  R = 'r',
  /** Verifying Calibrator */
  V = 'v',
}

export const SpecimenRoleValues = ['b', 'c', 'e', 'f', 'o', 'p', 'q', 'r', 'v'] as const;
