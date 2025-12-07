/**
 * Device Usage Adherence Code
 * 
 * A coded concept indicating the adherence of device usage.
 *
 * @see http://hl7.org/fhir/ValueSet/deviceusage-adherence-code
 */

export type DeviceUsageAdherenceCodeType = 'always' | 'never' | 'sometimes';

export enum DeviceUsageAdherenceCodeEnum {
  /** Always */
  Always = 'always',
  /** Never */
  Never = 'never',
  /** Sometimes */
  Sometimes = 'sometimes',
}

export const DeviceUsageAdherenceCodeValues = ['always', 'never', 'sometimes'] as const;
