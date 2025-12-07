/**
 * Biologically Derived Product Property Type Codes
 * 
 * This value set can enumerate ISBT 128 Codes published by ICCBBA as a part of the ISBT 128 standard. These example codes represent data elements defined in ST-027 ISBT 128 Dictionary of Standard Data Elements and are used to define data structure and format expectations for electronic exchange with the ISBT 128 standard.
 *
 * @see http://hl7.org/fhir/ValueSet/biologicallyderived-product-property-type-codes
 */

export type BiologicallyDerivedProductPropertyTypeType = 'collectiontype' | 'aborhd' | 'singleeuropeancode' | 'redcellantigen';

export enum BiologicallyDerivedProductPropertyTypeEnum {
  /** Collection Type */
  Collectiontype = 'collectiontype',
  /** ABORhD */
  Aborhd = 'aborhd',
  /** Single European Code */
  Singleeuropeancode = 'singleeuropeancode',
  /** Red Cell Antigen */
  Redcellantigen = 'redcellantigen',
}

export const BiologicallyDerivedProductPropertyTypeValues = ['collectiontype', 'aborhd', 'singleeuropeancode', 'redcellantigen'] as const;
