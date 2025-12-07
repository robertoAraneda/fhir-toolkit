/**
 * CatalogType
 * 
 * The type of catalog.
 *
 * @see http://hl7.org/fhir/ValueSet/catalogType
 */

export type CatalogTypeType = 'medication' | 'device' | 'protocol';

export enum CatalogTypeEnum {
  /** Medication Catalog */
  Medication = 'medication',
  /** Device Catalog */
  Device = 'device',
  /** Protocol List */
  Protocol = 'protocol',
}

export const CatalogTypeValues = ['medication', 'device', 'protocol'] as const;
