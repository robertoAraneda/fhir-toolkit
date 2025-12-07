/**
 * SpecialArrangements
 * 
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-special-arrangements
 */

export type SpecialArrangementsType = 'wheel' | 'add-bed' | 'int' | 'att' | 'dog';

export enum SpecialArrangementsEnum {
  /** Wheelchair */
  Wheel = 'wheel',
  /** Additional bedding */
  AddBed = 'add-bed',
  /** Interpreter */
  Int = 'int',
  /** Attendant */
  Att = 'att',
  /** Guide dog */
  Dog = 'dog',
}

export const SpecialArrangementsValues = ['wheel', 'add-bed', 'int', 'att', 'dog'] as const;
