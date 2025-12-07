/**
 * Transport Status Reason
 * 
 * Status reason of the transport.
 *
 * @see http://hl7.org/fhir/ValueSet/transport-status-reason
 */

export type TransportStatusReasonType = 'declined-by-patient' | 'refused-by-recipient' | 'patient-not-available' | 'specimen-not-available' | 'wrong-request-data' | 'in-route-accident' | 'request-not-acknowledged';

export enum TransportStatusReasonEnum {
  /** Declined by patient */
  DeclinedByPatient = 'declined-by-patient',
  /** Refused by recipient */
  RefusedByRecipient = 'refused-by-recipient',
  /** Patient not available */
  PatientNotAvailable = 'patient-not-available',
  /** Specimen not available */
  SpecimenNotAvailable = 'specimen-not-available',
  /** Wrong request data */
  WrongRequestData = 'wrong-request-data',
  /** In route accident */
  InRouteAccident = 'in-route-accident',
  /** Request not acknowledged */
  RequestNotAcknowledged = 'request-not-acknowledged',
}

export const TransportStatusReasonValues = ['declined-by-patient', 'refused-by-recipient', 'patient-not-available', 'specimen-not-available', 'wrong-request-data', 'in-route-accident', 'request-not-acknowledged'] as const;
