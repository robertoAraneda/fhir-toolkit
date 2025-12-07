/**
 * Vital Signs
 * 
 * This value set indicates the allowed vital sign result types.   The LOINC code for Vitals Signs panel (85353-1) is a grouping structure for a set of vital signs and includes related links (with type=has-member) to the Observations in this set (e.g. respiratory rate, heart rate, BP).  The Blood pressure panel (85354-9) is used to group the component observations Systolic blood pressure (8480-6) and Diastolic blood pressure (8462-4).
 *
 * @see http://hl7.org/fhir/ValueSet/observation-vitalsignresult
 */

export type VitalSignsType = '85353-1' | '9279-1' | '8867-4' | '2708-6' | '8310-5' | '8302-2' | '9843-4' | '29463-7' | '39156-5' | '85354-9' | '8480-6' | '8462-4' | '8478-0';

export enum VitalSignsEnum {
  _853531 = '85353-1',
  _92791 = '9279-1',
  _88674 = '8867-4',
  _27086 = '2708-6',
  _83105 = '8310-5',
  _83022 = '8302-2',
  _98434 = '9843-4',
  _294637 = '29463-7',
  _391565 = '39156-5',
  _853549 = '85354-9',
  _84806 = '8480-6',
  _84624 = '8462-4',
  _84780 = '8478-0',
}

export const VitalSignsValues = ['85353-1', '9279-1', '8867-4', '2708-6', '8310-5', '8302-2', '9843-4', '29463-7', '39156-5', '85354-9', '8480-6', '8462-4', '8478-0'] as const;
