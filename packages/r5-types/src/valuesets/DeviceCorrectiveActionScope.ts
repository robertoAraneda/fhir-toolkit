/**
 * Device Corrective Action Scope
 * 
 * Device - Corrective action scope
 *
 * @see http://hl7.org/fhir/ValueSet/device-correctiveactionscope
 */

export type DeviceCorrectiveActionScopeType = 'model' | 'lot-numbers' | 'serial-numbers';

export enum DeviceCorrectiveActionScopeEnum {
  /** Model */
  Model = 'model',
  /** Lot Numbers */
  LotNumbers = 'lot-numbers',
  /** Serial Numbers */
  SerialNumbers = 'serial-numbers',
}

export const DeviceCorrectiveActionScopeValues = ['model', 'lot-numbers', 'serial-numbers'] as const;
