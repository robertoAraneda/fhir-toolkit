/**
 * DeviceDispense Status Reason Codes
 * 
 * DeviceDispense Status Reason Codes
 *
 * @see http://hl7.org/fhir/ValueSet/devicedispense-status-reason
 */

export type DeviceDispenseStatusReasonType = 'out-of-stock' | 'off-market' | 'contraindication' | 'incompatible-device' | 'order-expired' | 'verbal-order';

export enum DeviceDispenseStatusReasonEnum {
  /** Out of Stock */
  OutOfStock = 'out-of-stock',
  /** Off market */
  OffMarket = 'off-market',
  /** Contraindication */
  Contraindication = 'contraindication',
  /** Incompatible device */
  IncompatibleDevice = 'incompatible-device',
  /** Order expired */
  OrderExpired = 'order-expired',
  /** Verbal order */
  VerbalOrder = 'verbal-order',
}

export const DeviceDispenseStatusReasonValues = ['out-of-stock', 'off-market', 'contraindication', 'incompatible-device', 'order-expired', 'verbal-order'] as const;
