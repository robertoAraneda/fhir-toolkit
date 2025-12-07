/**
 * USCLS Codes
 * 
 * This value set includes a smattering of USCLS codes.
 *
 * @see http://hl7.org/fhir/ValueSet/service-uscls
 */

export type USCLSType = '1101' | '1102' | '1103' | '1201' | '1205' | '2101' | '2102' | '2141' | '2601' | '11101' | '11102' | '11103' | '11104' | '21211' | '21212' | '27211' | '67211' | '99111' | '99333' | '99555';

export enum USCLSEnum {
  /** Exam, comp, primary */
  _1101 = '1101',
  /** Exam, comp, mixed */
  _1102 = '1102',
  /** Exam, comp, permanent */
  _1103 = '1103',
  /** Exam, recall */
  _1201 = '1201',
  /** Exam, emergency */
  _1205 = '1205',
  /** Radiograph, series (12) */
  _2101 = '2101',
  /** Radiograph, series (16) */
  _2102 = '2102',
  /** Radiograph, bitewing */
  _2141 = '2141',
  /** Radiograph, panoramic */
  _2601 = '2601',
  /** Polishing, 1 unit */
  _11101 = '11101',
  /** Polishing, 2 unit */
  _11102 = '11102',
  /** Polishing, 3 unit */
  _11103 = '11103',
  /** Polishing, 4 unit */
  _11104 = '11104',
  /** Amalgam, 1 surface */
  _21211 = '21211',
  /** Amalgam, 2 surface */
  _21212 = '21212',
  /** Crown, PFM */
  _27211 = '27211',
  /** Maryland Bridge */
  _67211 = '67211',
  /** Lab, commercial */
  _99111 = '99111',
  /** Lab, in office */
  _99333 = '99333',
  /** Expense */
  _99555 = '99555',
}

export const USCLSValues = ['1101', '1102', '1103', '1201', '1205', '2101', '2102', '2141', '2601', '11101', '11102', '11103', '11104', '21211', '21212', '27211', '67211', '99111', '99333', '99555'] as const;
