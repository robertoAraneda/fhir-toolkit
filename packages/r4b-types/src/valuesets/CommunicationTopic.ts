/**
 * CommunicationTopic
 * 
 * Codes describing the purpose or content of the communication.
 *
 * @see http://hl7.org/fhir/ValueSet/communication-topic
 */

export type CommunicationTopicType = 'prescription-refill-request' | 'progress-update' | 'report-labs' | 'appointment-reminder' | 'phone-consult' | 'summary-report';

export enum CommunicationTopicEnum {
  /** Prescription Refill Request */
  PrescriptionRefillRequest = 'prescription-refill-request',
  /** Progress Update */
  ProgressUpdate = 'progress-update',
  /** Report Labs */
  ReportLabs = 'report-labs',
  /** Appointment Reminder */
  AppointmentReminder = 'appointment-reminder',
  /** Phone Consult */
  PhoneConsult = 'phone-consult',
  /** Summary Report */
  SummaryReport = 'summary-report',
}

export const CommunicationTopicValues = ['prescription-refill-request', 'progress-update', 'report-labs', 'appointment-reminder', 'phone-consult', 'summary-report'] as const;
