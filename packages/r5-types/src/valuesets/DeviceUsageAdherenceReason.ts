/**
 * Device Usage Adherence Reason
 * 
 * A coded concept indicating the adherence of device usage.
 *
 * @see http://hl7.org/fhir/ValueSet/deviceusage-adherence-reason
 */

export type DeviceUsageAdherenceReasonType = 'lost' | 'stolen' | 'prescribed' | 'broken' | 'burned' | 'forgot';

export enum DeviceUsageAdherenceReasonEnum {
  /** Lost */
  Lost = 'lost',
  /** Stolen */
  Stolen = 'stolen',
  /** Prescribed */
  Prescribed = 'prescribed',
  /** Broken */
  Broken = 'broken',
  /** Burned */
  Burned = 'burned',
  /** Forgot */
  Forgot = 'forgot',
}

export const DeviceUsageAdherenceReasonValues = ['lost', 'stolen', 'prescribed', 'broken', 'burned', 'forgot'] as const;
