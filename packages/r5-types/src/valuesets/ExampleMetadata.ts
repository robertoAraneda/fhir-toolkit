/**
 * Metadata Example
 * 
 * This is an example value set that illustrates usage of the metadata resource elements introduced in R5
 *
 * @see http://hl7.org/fhir/ValueSet/example-metadata-2
 */

export type ExampleMetadataType = 'A' | 'B' | 'C';

export enum ExampleMetadataEnum {
  /** A */
  A = 'A',
  /** B */
  B = 'B',
  /** C */
  C = 'C',
}

export const ExampleMetadataValues = ['A', 'B', 'C'] as const;
