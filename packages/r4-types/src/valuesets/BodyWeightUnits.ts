/**
 * Body Weight Units
 * 
 * UCUM units for recording Body Weight
 *
 * @see http://hl7.org/fhir/ValueSet/ucum-bodyweight
 */

export type BodyWeightUnitsType = 'kg' | '[lb_av]' | 'g';

export enum BodyWeightUnitsEnum {
  Kg = 'kg',
  LbAv = '[lb_av]',
  G = 'g',
}

export const BodyWeightUnitsValues = ['kg', '[lb_av]', 'g'] as const;
