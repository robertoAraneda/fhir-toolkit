/**
 * Patient Medicine Change Types
 * 
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 *
 * @see http://hl7.org/fhir/ValueSet/list-item-flag
 */

export type PatientMedicineChangeTypesType = '01' | '02' | '03' | '04' | '05' | '06';

export enum PatientMedicineChangeTypesEnum {
  /** Unchanged */
  _01 = '01',
  /** Changed */
  _02 = '02',
  /** Cancelled */
  _03 = '03',
  /** Prescribed */
  _04 = '04',
  /** Ceased */
  _05 = '05',
  /** Suspended */
  _06 = '06',
}

export const PatientMedicineChangeTypesValues = ['01', '02', '03', '04', '05', '06'] as const;
