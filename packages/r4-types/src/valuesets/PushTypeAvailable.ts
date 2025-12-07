/**
 * Push-type-available
 * 
 * Type of alerts/updates the primary source can send
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-push-type-available
 */

export type PushTypeAvailableType = 'specific' | 'any' | 'source';

export enum PushTypeAvailableEnum {
  /** Specific requested changes */
  Specific = 'specific',
  /** Any changes */
  Any = 'any',
  /** As defined by source */
  Source = 'source',
}

export const PushTypeAvailableValues = ['specific', 'any', 'source'] as const;
