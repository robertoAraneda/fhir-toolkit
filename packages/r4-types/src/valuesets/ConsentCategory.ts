/**
 * Consent Category Codes
 * 
 * This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)
 *
 * @see http://hl7.org/fhir/ValueSet/consent-category
 */

export type ConsentCategoryType = 'acd' | 'dnr' | 'emrgonly' | 'hcd' | 'npp' | 'polst' | 'research' | 'rsdid' | 'rsreid' | '59284-0' | '57016-8' | '57017-6' | '64292-6';

export enum ConsentCategoryEnum {
  /** Advance Directive */
  Acd = 'acd',
  /** Do Not Resuscitate */
  Dnr = 'dnr',
  /** Emergency Only */
  Emrgonly = 'emrgonly',
  /** Health Care Directive */
  Hcd = 'hcd',
  /** Notice of Privacy Practices */
  Npp = 'npp',
  /** POLST */
  Polst = 'polst',
  /** Research Information Access */
  Research = 'research',
  /** De-identified Information Access */
  Rsdid = 'rsdid',
  /** Re-identifiable Information Access */
  Rsreid = 'rsreid',
  /** Patient Consent  */
  _592840 = '59284-0',
  /** Privacy policy acknowledgement Document */
  _570168 = '57016-8',
  /** Privacy policy Organization Document  */
  _570176 = '57017-6',
  /** Release of information consent  */
  _642926 = '64292-6',
}

export const ConsentCategoryValues = ['acd', 'dnr', 'emrgonly', 'hcd', 'npp', 'polst', 'research', 'rsdid', 'rsreid', '59284-0', '57016-8', '57017-6', '64292-6'] as const;
