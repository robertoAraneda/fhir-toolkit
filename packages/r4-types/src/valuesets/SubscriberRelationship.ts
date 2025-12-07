/**
 * SubscriberPolicyholder Relationship Codes
 * 
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 *
 * @see http://hl7.org/fhir/ValueSet/subscriber-relationship
 */

export type SubscriberRelationshipType = 'child' | 'parent' | 'spouse' | 'common' | 'other' | 'self' | 'injured';

export enum SubscriberRelationshipEnum {
  /** Child */
  Child = 'child',
  /** Parent */
  Parent = 'parent',
  /** Spouse */
  Spouse = 'spouse',
  /** Common Law Spouse */
  Common = 'common',
  /** Other */
  Other = 'other',
  /** Self */
  Self = 'self',
  /** Injured Party */
  Injured = 'injured',
}

export const SubscriberRelationshipValues = ['child', 'parent', 'spouse', 'common', 'other', 'self', 'injured'] as const;
