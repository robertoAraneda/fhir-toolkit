/**
 * Basic Resource Types
 * 
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 *
 * @see http://hl7.org/fhir/ValueSet/basic-resource-type
 */

export type BasicResourceTypesType = 'consent' | 'referral' | 'advevent' | 'aptmtreq' | 'transfer' | 'diet' | 'adminact' | 'exposure' | 'investigation' | 'account' | 'invoice' | 'adjudicat' | 'predetreq' | 'predetermine' | 'study' | 'protocol';

export enum BasicResourceTypesEnum {
  /** Consent */
  Consent = 'consent',
  /** Referral */
  Referral = 'referral',
  /** Adverse Event */
  Advevent = 'advevent',
  /** Appointment Request */
  Aptmtreq = 'aptmtreq',
  /** Transfer */
  Transfer = 'transfer',
  /** Diet */
  Diet = 'diet',
  /** Administrative Activity */
  Adminact = 'adminact',
  /** Exposure */
  Exposure = 'exposure',
  /** Investigation */
  Investigation = 'investigation',
  /** Account */
  Account = 'account',
  /** Invoice */
  Invoice = 'invoice',
  /** Invoice Adjudication */
  Adjudicat = 'adjudicat',
  /** Pre-determination Request */
  Predetreq = 'predetreq',
  /** Predetermination */
  Predetermine = 'predetermine',
  /** Study */
  Study = 'study',
  /** Protocol */
  Protocol = 'protocol',
}

export const BasicResourceTypesValues = ['consent', 'referral', 'advevent', 'aptmtreq', 'transfer', 'diet', 'adminact', 'exposure', 'investigation', 'account', 'invoice', 'adjudicat', 'predetreq', 'predetermine', 'study', 'protocol'] as const;
