/**
 * Example set of Event / Bundle used Security Labels
 * 
 * A sample of security labels from [Healthcare Privacy and Security Classification System](security-labels.html#hcs) that are used on events and requests/responses (aka user context or organization context) made up of PurposeOfUse and maybe a refrain/obligation.
 *
 * @see http://hl7.org/fhir/ValueSet/security-label-event-examples
 */

export type SecurityLabelEventExamplesType = 'TREAT' | 'HPAYMT' | 'ETREAT' | 'NOAUTH' | 'DELAU' | 'NORDSCLCD';

export enum SecurityLabelEventExamplesEnum {
  Treat = 'TREAT',
  Hpaymt = 'HPAYMT',
  Etreat = 'ETREAT',
  Noauth = 'NOAUTH',
  Delau = 'DELAU',
  Nordsclcd = 'NORDSCLCD',
}

export const SecurityLabelEventExamplesValues = ['TREAT', 'HPAYMT', 'ETREAT', 'NOAUTH', 'DELAU', 'NORDSCLCD'] as const;
