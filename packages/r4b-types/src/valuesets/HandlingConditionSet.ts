/**
 * HandlingConditionSet
 * 
 * Set of handling instructions prior testing of the specimen.
 *
 * @see http://hl7.org/fhir/ValueSet/handling-condition
 */

export type HandlingConditionSetType = 'room' | 'refrigerated' | 'frozen';

export enum HandlingConditionSetEnum {
  /** room temperature */
  Room = 'room',
  /** refrigerated */
  Refrigerated = 'refrigerated',
  /** frozen */
  Frozen = 'frozen',
}

export const HandlingConditionSetValues = ['room', 'refrigerated', 'frozen'] as const;
