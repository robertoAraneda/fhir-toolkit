/**
 * Regulated Authorization Case Type
 * 
 * The type of a case involved in an application.
 *
 * @see http://hl7.org/fhir/ValueSet/regulated-authorization-case-type
 */

export type RegulatedAuthorizationCaseTypeType = 'InitialMAA' | 'Variation' | 'LineExtension' | 'PSUR' | 'Renewal' | 'Follow-up' | '100000155699' | 'AnnualReassessment' | 'UrgentSafetyRestriction' | 'PaediatricSubmission' | 'TransferMA' | 'LiftingSuspension' | 'Withdrawal' | 'Reformatting' | 'RMP' | 'ReviewSuspension' | 'SupplementalInformation' | 'RepeatUse' | 'SignalDetection' | 'FLU' | 'PANDEMIC' | 'Orphan';

export enum RegulatedAuthorizationCaseTypeEnum {
  /** Initial Marketing Authorization Application */
  Initialmaa = 'InitialMAA',
  /** Variation */
  Variation = 'Variation',
  /** Line Extension */
  Lineextension = 'LineExtension',
  /** Periodic Safety Update Report */
  Psur = 'PSUR',
  /** Renewal */
  Renewal = 'Renewal',
  /** Follow-up Measure */
  FollowUp = 'Follow-up',
  /** Specific Obligation */
  _100000155699 = '100000155699',
  /** Annual Reassessment */
  Annualreassessment = 'AnnualReassessment',
  /** Urgent Safety Restriction */
  Urgentsafetyrestriction = 'UrgentSafetyRestriction',
  /** Paediatric Submission */
  Paediatricsubmission = 'PaediatricSubmission',
  /** Transfer of a marketing authorization */
  Transferma = 'TransferMA',
  /** Lifting of a Suspension */
  Liftingsuspension = 'LiftingSuspension',
  /** Withdrawal */
  Withdrawal = 'Withdrawal',
  /** Reformatting */
  Reformatting = 'Reformatting',
  /** Risk Management Plan */
  Rmp = 'RMP',
  /** Review of a Suspension of MA */
  Reviewsuspension = 'ReviewSuspension',
  /** Supplemental Information */
  Supplementalinformation = 'SupplementalInformation',
  /** Repeat Use Procedure */
  Repeatuse = 'RepeatUse',
  /** Signal detection */
  Signaldetection = 'SignalDetection',
  /** FLU STRAIN UPDATE */
  Flu = 'FLU',
  /** PANDEMIC UPDATE */
  Pandemic = 'PANDEMIC',
  /** Orphan Designation Application */
  Orphan = 'Orphan',
}

export const RegulatedAuthorizationCaseTypeValues = ['InitialMAA', 'Variation', 'LineExtension', 'PSUR', 'Renewal', 'Follow-up', '100000155699', 'AnnualReassessment', 'UrgentSafetyRestriction', 'PaediatricSubmission', 'TransferMA', 'LiftingSuspension', 'Withdrawal', 'Reformatting', 'RMP', 'ReviewSuspension', 'SupplementalInformation', 'RepeatUse', 'SignalDetection', 'FLU', 'PANDEMIC', 'Orphan'] as const;
