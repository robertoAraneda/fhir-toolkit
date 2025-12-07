/**
 * Source Material Genus
 * 
 * The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-source-material-genus
 */

export type SourceMaterialGenusType = 'Mycobacterium' | 'InfluenzavirusA' | 'Ginkgo';

export enum SourceMaterialGenusEnum {
  /** Mycobacterium */
  Mycobacterium = 'Mycobacterium',
  /** Influenza A virus */
  Influenzavirusa = 'InfluenzavirusA',
  /** Ginkgo */
  Ginkgo = 'Ginkgo',
}

export const SourceMaterialGenusValues = ['Mycobacterium', 'InfluenzavirusA', 'Ginkgo'] as const;
