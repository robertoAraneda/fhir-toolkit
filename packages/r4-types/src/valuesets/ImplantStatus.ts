/**
 * Implant Status
 * 
 * A set codes that define the functional status of an implanted device.
 *
 * @see http://hl7.org/fhir/ValueSet/implantStatus
 */

export type ImplantStatusType = 'functional' | 'non-functional' | 'disabled' | 'unknown';

export enum ImplantStatusEnum {
  /** Functional */
  Functional = 'functional',
  /** Non-Functional */
  NonFunctional = 'non-functional',
  /** Disabled */
  Disabled = 'disabled',
  /** Unknown */
  Unknown = 'unknown',
}

export const ImplantStatusValues = ['functional', 'non-functional', 'disabled', 'unknown'] as const;
