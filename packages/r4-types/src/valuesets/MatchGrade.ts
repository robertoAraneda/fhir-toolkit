/**
 * MatchGrade
 * 
 * A Master Patient Index (MPI) assessment of whether a candidate patient record is a match or not.
 *
 * @see http://hl7.org/fhir/ValueSet/match-grade
 */

export type MatchGradeType = 'certain' | 'probable' | 'possible' | 'certainly-not';

export enum MatchGradeEnum {
  /** Certain Match */
  Certain = 'certain',
  /** Probable Match */
  Probable = 'probable',
  /** Possible Match */
  Possible = 'possible',
  /** Certainly Not a Match */
  CertainlyNot = 'certainly-not',
}

export const MatchGradeValues = ['certain', 'probable', 'possible', 'certainly-not'] as const;
