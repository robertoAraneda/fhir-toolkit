/**
 * Example Revenue Center Codes
 * 
 * This value set includes sample Revenue Center codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-revenue-center
 */

export type ExampleRevenueCenterType = '0370' | '0420' | '0421' | '0440' | '0441' | '0450' | '0451' | '0452' | '0010';

export enum ExampleRevenueCenterEnum {
  /** Anaesthesia */
  _0370 = '0370',
  /** Physical Therapy */
  _0420 = '0420',
  /** Physical Therapy -  */
  _0421 = '0421',
  /** Speech-Language Pathology */
  _0440 = '0440',
  /** Speech-Language Pathology - Visit */
  _0441 = '0441',
  /** Emergency Room */
  _0450 = '0450',
  /** Emergency Room - EM/EMTALA */
  _0451 = '0451',
  /** Emergency Room - beyond EMTALA */
  _0452 = '0452',
  /** Vision Clinic */
  _0010 = '0010',
}

export const ExampleRevenueCenterValues = ['0370', '0420', '0421', '0440', '0441', '0450', '0451', '0452', '0010'] as const;
