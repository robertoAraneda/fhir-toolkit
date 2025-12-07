/**
 * ChoiceListOrientation
 * 
 * Direction in which lists of possible answers should be displayed.
 *
 * @see http://hl7.org/fhir/ValueSet/choice-list-orientation
 */

export type ChoiceListOrientationType = 'horizontal' | 'vertical';

export enum ChoiceListOrientationEnum {
  /** Horizontal */
  Horizontal = 'horizontal',
  /** Vertical */
  Vertical = 'vertical',
}

export const ChoiceListOrientationValues = ['horizontal', 'vertical'] as const;
