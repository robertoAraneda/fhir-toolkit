/**
 * Goal status reason
 * 
 * Example codes indicating the reason for a current status.  Note that these are in no way complete and might not even be appropriate for some uses.
 *
 * @see http://hl7.org/fhir/ValueSet/goal-status-reason
 */

export type GoalStatusReasonType = 'surgery' | 'life-event' | 'replaced' | 'patient-request' | 'temp-not-attainable' | 'permanent-not-attainable' | 'financial-barrier' | 'lack-of-transportation' | 'lack-of-social-support';

export enum GoalStatusReasonEnum {
  /** Surgery */
  Surgery = 'surgery',
  /** Life Event */
  LifeEvent = 'life-event',
  /** Replaced */
  Replaced = 'replaced',
  /** Patient Request */
  PatientRequest = 'patient-request',
  /** Goal Not Attainable Temporarily */
  TempNotAttainable = 'temp-not-attainable',
  /** Goal Not Attainable Permanently */
  PermanentNotAttainable = 'permanent-not-attainable',
  /** Financial Reason */
  FinancialBarrier = 'financial-barrier',
  /** Lack Of Transportation */
  LackOfTransportation = 'lack-of-transportation',
  /** Lack Of Social Support */
  LackOfSocialSupport = 'lack-of-social-support',
}

export const GoalStatusReasonValues = ['surgery', 'life-event', 'replaced', 'patient-request', 'temp-not-attainable', 'permanent-not-attainable', 'financial-barrier', 'lack-of-transportation', 'lack-of-social-support'] as const;
