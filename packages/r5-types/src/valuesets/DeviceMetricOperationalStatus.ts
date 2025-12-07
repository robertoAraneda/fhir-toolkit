/**
 * Device Metric Operational Status
 * 
 * Describes the operational status of the DeviceMetric.
 *
 * @see http://hl7.org/fhir/ValueSet/metric-operational-status
 */

export type DeviceMetricOperationalStatusType = 'on' | 'off' | 'standby' | 'entered-in-error';

export enum DeviceMetricOperationalStatusEnum {
  /** On */
  On = 'on',
  /** Off */
  Off = 'off',
  /** Standby */
  Standby = 'standby',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const DeviceMetricOperationalStatusValues = ['on', 'off', 'standby', 'entered-in-error'] as const;
