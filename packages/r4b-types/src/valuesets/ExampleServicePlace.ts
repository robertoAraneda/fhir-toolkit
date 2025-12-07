/**
 * Example Service Place Codes
 * 
 * This value set includes a smattering of Service Place codes.
 *
 * @see http://hl7.org/fhir/ValueSet/service-place
 */

export type ExampleServicePlaceType = '01' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '11' | '12' | '13' | '14' | '15' | '19' | '20' | '21' | '41';

export enum ExampleServicePlaceEnum {
  /** Pharmacy */
  _01 = '01',
  /** School */
  _03 = '03',
  /** Homeless Shelter */
  _04 = '04',
  /** Indian Health Service Free-standing Facility */
  _05 = '05',
  /** Indian Health Service Provider-based Facility */
  _06 = '06',
  /** Tribal 638 Free-Standing Facility */
  _07 = '07',
  /** Tribal 638 Provider-Based Facility */
  _08 = '08',
  /** Prison/Correctional Facility */
  _09 = '09',
  /** Office */
  _11 = '11',
  /** Home */
  _12 = '12',
  /** Assisted Living Fa */
  _13 = '13',
  /** Group Home */
  _14 = '14',
  /** Mobile Unit */
  _15 = '15',
  /** Off Campus-Outpatient Hospital */
  _19 = '19',
  /** Urgent Care Facility */
  _20 = '20',
  /** Inpatient Hospital */
  _21 = '21',
  /** Ambulance—Land */
  _41 = '41',
}

export const ExampleServicePlaceValues = ['01', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '19', '20', '21', '41'] as const;
