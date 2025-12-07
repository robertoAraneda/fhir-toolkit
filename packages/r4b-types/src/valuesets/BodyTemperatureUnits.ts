/**
 * Body Temperature Units
 * 
 * UCUM units for recording Body Temperature
 *
 * @see http://hl7.org/fhir/ValueSet/ucum-bodytemp
 */

export type BodyTemperatureUnitsType = 'Cel' | '[degF]';

export enum BodyTemperatureUnitsEnum {
  Cel = 'Cel',
  Degf = '[degF]',
}

export const BodyTemperatureUnitsValues = ['Cel', '[degF]'] as const;
