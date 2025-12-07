/**
 * ContactPointSystem
 * 
 * Telecommunications form for contact point.
 *
 * @see http://hl7.org/fhir/ValueSet/contact-point-system
 */

export type ContactPointSystemType = 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';

export enum ContactPointSystemEnum {
  /** Phone */
  Phone = 'phone',
  /** Fax */
  Fax = 'fax',
  /** Email */
  Email = 'email',
  /** Pager */
  Pager = 'pager',
  /** URL */
  Url = 'url',
  /** SMS */
  Sms = 'sms',
  /** Other */
  Other = 'other',
}

export const ContactPointSystemValues = ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'] as const;
