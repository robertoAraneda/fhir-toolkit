/**
 * Canonical Status Codes for FHIR Resources
 * 
 * The master set of status codes used throughout FHIR. All status codes are mapped to one of these codes.
 *
 * @see http://hl7.org/fhir/ValueSet/resource-status
 */

export type CanonicalStatusCodesForFHIRResourcesType = 'error' | 'proposed' | 'planned' | 'draft' | 'requested' | 'received' | 'declined' | 'accepted' | 'arrived' | 'active' | 'suspended' | 'failed' | 'replaced' | 'complete' | 'inactive' | 'abandoned' | 'unknown' | 'unconfirmed' | 'confirmed' | 'resolved' | 'refuted' | 'differential' | 'partial' | 'busy-unavailable' | 'free' | 'on-target' | 'ahead-of-target' | 'behind-target' | 'not-ready' | 'transduc-discon' | 'hw-discon';

export enum CanonicalStatusCodesForFHIRResourcesEnum {
  /** error */
  Error = 'error',
  /** proposed */
  Proposed = 'proposed',
  /** planned */
  Planned = 'planned',
  /** draft */
  Draft = 'draft',
  /** requested */
  Requested = 'requested',
  /** received */
  Received = 'received',
  /** declined */
  Declined = 'declined',
  /** accepted */
  Accepted = 'accepted',
  /** arrived */
  Arrived = 'arrived',
  /** active */
  Active = 'active',
  /** suspended */
  Suspended = 'suspended',
  /** failed */
  Failed = 'failed',
  /** replaced */
  Replaced = 'replaced',
  /** complete */
  Complete = 'complete',
  /** inactive */
  Inactive = 'inactive',
  /** abandoned */
  Abandoned = 'abandoned',
  /** unknown */
  Unknown = 'unknown',
  /** unconfirmed */
  Unconfirmed = 'unconfirmed',
  /** confirmed */
  Confirmed = 'confirmed',
  /** resolved */
  Resolved = 'resolved',
  /** refuted */
  Refuted = 'refuted',
  /** differential */
  Differential = 'differential',
  /** partial */
  Partial = 'partial',
  /** busy-unavailable */
  BusyUnavailable = 'busy-unavailable',
  /** free */
  Free = 'free',
  /** on-target */
  OnTarget = 'on-target',
  /** ahead-of-target */
  AheadOfTarget = 'ahead-of-target',
  /** behind-target */
  BehindTarget = 'behind-target',
  /** not-ready */
  NotReady = 'not-ready',
  /** transduc-discon */
  TransducDiscon = 'transduc-discon',
  /** hw-discon */
  HwDiscon = 'hw-discon',
}

export const CanonicalStatusCodesForFHIRResourcesValues = ['error', 'proposed', 'planned', 'draft', 'requested', 'received', 'declined', 'accepted', 'arrived', 'active', 'suspended', 'failed', 'replaced', 'complete', 'inactive', 'abandoned', 'unknown', 'unconfirmed', 'confirmed', 'resolved', 'refuted', 'differential', 'partial', 'busy-unavailable', 'free', 'on-target', 'ahead-of-target', 'behind-target', 'not-ready', 'transduc-discon', 'hw-discon'] as const;
