/**
 * Action Code
 * 
 * Provides examples of actions to be performed.
 *
 * @see http://hl7.org/fhir/ValueSet/action-code
 */

export type ActionCodeType = 'send-message' | 'collect-information' | 'prescribe-medication' | 'recommend-immunization' | 'order-service' | 'propose-diagnosis' | 'record-detected-issue' | 'record-inference' | 'report-flag';

export enum ActionCodeEnum {
  /** Send a message */
  SendMessage = 'send-message',
  /** Collect information */
  CollectInformation = 'collect-information',
  /** Prescribe a medication */
  PrescribeMedication = 'prescribe-medication',
  /** Recommend an immunization */
  RecommendImmunization = 'recommend-immunization',
  /** Order a service */
  OrderService = 'order-service',
  /** Propose a diagnosis */
  ProposeDiagnosis = 'propose-diagnosis',
  /** Record a detected issue */
  RecordDetectedIssue = 'record-detected-issue',
  /** Record an inference */
  RecordInference = 'record-inference',
  /** Report a flag */
  ReportFlag = 'report-flag',
}

export const ActionCodeValues = ['send-message', 'collect-information', 'prescribe-medication', 'recommend-immunization', 'order-service', 'propose-diagnosis', 'record-detected-issue', 'record-inference', 'report-flag'] as const;
