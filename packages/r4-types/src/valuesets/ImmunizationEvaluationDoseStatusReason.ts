/**
 * Immunization Evaluation Dose Status Reason codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status-reason
 */

export type ImmunizationEvaluationDoseStatusReasonType = 'advstorage' | 'coldchbrk' | 'explot' | 'outsidesched' | 'prodrecall';

export enum ImmunizationEvaluationDoseStatusReasonEnum {
  /** Adverse storage condition */
  Advstorage = 'advstorage',
  /** Cold chain break */
  Coldchbrk = 'coldchbrk',
  /** Expired lot */
  Explot = 'explot',
  /** Administered outside recommended schedule */
  Outsidesched = 'outsidesched',
  /** Product recall */
  Prodrecall = 'prodrecall',
}

export const ImmunizationEvaluationDoseStatusReasonValues = ['advstorage', 'coldchbrk', 'explot', 'outsidesched', 'prodrecall'] as const;
