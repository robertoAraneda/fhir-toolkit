/**
 * RejectionCriterion
 * 
 * Criterion for rejection of the specimen by laboratory.
 *
 * @see http://hl7.org/fhir/ValueSet/rejection-criteria
 */

export type RejectionCriterionType = 'hemolized' | 'insufficient' | 'broken' | 'clotted' | 'wrong-temperature';

export enum RejectionCriterionEnum {
  /** hemolized specimen */
  Hemolized = 'hemolized',
  /** insufficient specimen volume */
  Insufficient = 'insufficient',
  /** broken specimen container */
  Broken = 'broken',
  /** specimen clotted */
  Clotted = 'clotted',
  /** specimen temperature inappropriate */
  WrongTemperature = 'wrong-temperature',
}

export const RejectionCriterionValues = ['hemolized', 'insufficient', 'broken', 'clotted', 'wrong-temperature'] as const;
