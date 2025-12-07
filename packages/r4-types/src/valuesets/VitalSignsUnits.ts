/**
 * Vital Signs Units
 * 
 * Common UCUM units for recording Vital Signs
 *
 * @see http://hl7.org/fhir/ValueSet/ucum-vitals-common
 */

export type VitalSignsUnitsType = '%' | 'cm' | '[in_i]' | 'kg' | 'g' | '[lb_av]' | 'Cel' | '[degF]' | 'mm[Hg]' | '/min' | 'kg/m2' | 'm2';

export enum VitalSignsUnitsEnum {
  /** percent */
  _Empty = '%',
  /** centimeter */
  Cm = 'cm',
  /** inch (international) */
  InI = '[in_i]',
  /** kilogram */
  Kg = 'kg',
  /** gram */
  G = 'g',
  /** pound (US and British) */
  LbAv = '[lb_av]',
  /** degree Celsius */
  Cel = 'Cel',
  /** degree Fahrenheit */
  Degf = '[degF]',
  /** millimeter of mercury */
  MmHg = 'mm[Hg]',
  /** per minute */
  Min = '/min',
  /** kilogram / (meter ^ 2) */
  KgM2 = 'kg/m2',
  /** square meter */
  M2 = 'm2',
}

export const VitalSignsUnitsValues = ['%', 'cm', '[in_i]', 'kg', 'g', '[lb_av]', 'Cel', '[degF]', 'mm[Hg]', '/min', 'kg/m2', 'm2'] as const;
