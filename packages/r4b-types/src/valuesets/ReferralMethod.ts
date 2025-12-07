/**
 * ReferralMethod
 * 
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 *
 * @see http://hl7.org/fhir/ValueSet/service-referral-method
 */

export type ReferralMethodType = 'fax' | 'phone' | 'elec' | 'semail' | 'mail';

export enum ReferralMethodEnum {
  /** Fax */
  Fax = 'fax',
  /** Phone */
  Phone = 'phone',
  /** Secure Messaging */
  Elec = 'elec',
  /** Secure Email */
  Semail = 'semail',
  /** Mail */
  Mail = 'mail',
}

export const ReferralMethodValues = ['fax', 'phone', 'elec', 'semail', 'mail'] as const;
