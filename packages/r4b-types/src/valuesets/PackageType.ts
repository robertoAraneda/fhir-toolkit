/**
 * PackageType
 * 
 * A high level categorisation of a package.
 *
 * @see http://hl7.org/fhir/ValueSet/package-type
 */

export type PackageTypeType = 'MedicinalProductPack' | 'RawMaterialPackage' | 'Shipping-TransportContainer';

export enum PackageTypeEnum {
  /** Medicinal product pack */
  Medicinalproductpack = 'MedicinalProductPack',
  /** Raw material package */
  Rawmaterialpackage = 'RawMaterialPackage',
  /** Shipping or transport container */
  ShippingTransportcontainer = 'Shipping-TransportContainer',
}

export const PackageTypeValues = ['MedicinalProductPack', 'RawMaterialPackage', 'Shipping-TransportContainer'] as const;
