/**
 * StructureMapModelMode
 * 
 * How the referenced structure is used in this mapping.
 *
 * @see http://hl7.org/fhir/ValueSet/map-model-mode
 */

export type StructureMapModelModeType = 'source' | 'queried' | 'target' | 'produced';

export enum StructureMapModelModeEnum {
  /** Source Structure Definition */
  Source = 'source',
  /** Queried Structure Definition */
  Queried = 'queried',
  /** Target Structure Definition */
  Target = 'target',
  /** Produced Structure Definition */
  Produced = 'produced',
}

export const StructureMapModelModeValues = ['source', 'queried', 'target', 'produced'] as const;
