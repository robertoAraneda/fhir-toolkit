/**
 * PackageCharacteristic
 * 
 * A characteristic of a package.
 *
 * @see http://hl7.org/fhir/ValueSet/package-characteristic
 */

export type PackageCharacteristicType = 'HospitalPack' | 'NursePrescribable' | 'CalendarPack';

export enum PackageCharacteristicEnum {
  /** Hospital pack */
  Hospitalpack = 'HospitalPack',
  /** Nurse prescribable */
  Nurseprescribable = 'NursePrescribable',
  /** Calendar pack */
  Calendarpack = 'CalendarPack',
}

export const PackageCharacteristicValues = ['HospitalPack', 'NursePrescribable', 'CalendarPack'] as const;
