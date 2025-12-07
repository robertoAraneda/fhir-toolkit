/**
 * FHIR Device Category
 * 
 * The association state of the device.
 *
 * @see http://hl7.org/fhir/ValueSet/device-category
 */

export type FHIRDeviceCategoryType = 'active' | 'communicating' | 'dme' | 'home-use' | 'implantable' | 'in-vitro' | 'point-of-care' | 'single-use' | 'reusable' | 'software';

export enum FHIRDeviceCategoryEnum {
  /** Active */
  Active = 'active',
  /** communicating */
  Communicating = 'communicating',
  /** Durable Medical Equipment */
  Dme = 'dme',
  /** Maintenance */
  HomeUse = 'home-use',
  /** Implantable */
  Implantable = 'implantable',
  /** In vitro */
  InVitro = 'in-vitro',
  /** Point of Care */
  PointOfCare = 'point-of-care',
  /** Single Use */
  SingleUse = 'single-use',
  /** Reusable */
  Reusable = 'reusable',
  /** Software */
  Software = 'software',
}

export const FHIRDeviceCategoryValues = ['active', 'communicating', 'dme', 'home-use', 'implantable', 'in-vitro', 'point-of-care', 'single-use', 'reusable', 'software'] as const;
