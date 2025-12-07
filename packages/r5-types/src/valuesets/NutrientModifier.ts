/**
 * Nutrient Modifier Codes
 * 
 * NutrientModifier :  Codes for types of nutrients that are being modified such as carbohydrate or sodium.  This value set includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 226355009 (Nutrients(substance)), and the concepts for Sodium, Potassium and Fluid. This is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/nutrient-code
 */

export type NutrientModifierType = '33463005' | '39972003' | '88480006';

export enum NutrientModifierEnum {
  /** Fluid */
  _33463005 = '33463005',
  /** Sodium */
  _39972003 = '39972003',
  /** Potassium */
  _88480006 = '88480006',
}

export const NutrientModifierValues = ['33463005', '39972003', '88480006'] as const;
