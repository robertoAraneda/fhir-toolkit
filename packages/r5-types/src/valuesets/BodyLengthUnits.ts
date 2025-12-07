/**
 * Body Length Units
 * 
 * UCUM units for recording body length measures such as height and head circumference
 *
 * @see http://hl7.org/fhir/ValueSet/ucum-bodylength
 */

export type BodyLengthUnitsType = 'cm' | '[in_i]';

export enum BodyLengthUnitsEnum {
  Cm = 'cm',
  InI = '[in_i]',
}

export const BodyLengthUnitsValues = ['cm', '[in_i]'] as const;
