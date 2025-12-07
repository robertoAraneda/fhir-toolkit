/**
 * FHIRDeviceStatusReason
 * 
 * The availability status reason of the device.
 *
 * @see http://hl7.org/fhir/ValueSet/device-status-reason
 */

export type FHIRDeviceStatusReasonType = 'online' | 'paused' | 'standby' | 'offline' | 'not-ready' | 'transduc-discon' | 'hw-discon' | 'off';

export enum FHIRDeviceStatusReasonEnum {
  /** Online */
  Online = 'online',
  /** Paused */
  Paused = 'paused',
  /** Standby */
  Standby = 'standby',
  /** Offline */
  Offline = 'offline',
  /** Not Ready */
  NotReady = 'not-ready',
  /** Transducer Disconnected */
  TransducDiscon = 'transduc-discon',
  /** Hardware Disconnected */
  HwDiscon = 'hw-discon',
  /** Off */
  Off = 'off',
}

export const FHIRDeviceStatusReasonValues = ['online', 'paused', 'standby', 'offline', 'not-ready', 'transduc-discon', 'hw-discon', 'off'] as const;
