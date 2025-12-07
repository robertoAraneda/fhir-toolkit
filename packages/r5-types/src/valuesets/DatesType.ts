/**
 * Dates Type Codes
 * 
 * This value set includes sample Dates Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/datestype
 */

export type DatesTypeType = 'card-issued' | 'claim-received' | 'service-expected';

export enum DatesTypeEnum {
  /** Card Issued */
  CardIssued = 'card-issued',
  /** Claim Received */
  ClaimReceived = 'claim-received',
  /** Service Expected */
  ServiceExpected = 'service-expected',
}

export const DatesTypeValues = ['card-issued', 'claim-received', 'service-expected'] as const;
