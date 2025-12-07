/**
 * Device Specification Category
 * 
 * The kind of standards used by the device.
 *
 * @see http://hl7.org/fhir/ValueSet/device-specification-category
 */

export type DeviceSpecificationCategoryType = 'communication' | 'performance' | 'measurement' | 'risk-class' | 'electrical' | 'material' | 'exchange';

export enum DeviceSpecificationCategoryEnum {
  /** Communication */
  Communication = 'communication',
  /** Performance */
  Performance = 'performance',
  /** Measurement */
  Measurement = 'measurement',
  /** Risk Class */
  RiskClass = 'risk-class',
  /** Electrical */
  Electrical = 'electrical',
  /** Material */
  Material = 'material',
  /** Exchange */
  Exchange = 'exchange',
}

export const DeviceSpecificationCategoryValues = ['communication', 'performance', 'measurement', 'risk-class', 'electrical', 'material', 'exchange'] as const;
