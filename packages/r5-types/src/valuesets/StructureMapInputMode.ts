/**
 * Structure Map Input Mode
 * 
 * Mode for this instance of data.
 *
 * @see http://hl7.org/fhir/ValueSet/map-input-mode
 */

export type StructureMapInputModeType = 'source' | 'target';

export enum StructureMapInputModeEnum {
  /** Source Instance */
  Source = 'source',
  /** Target Instance */
  Target = 'target',
}

export const StructureMapInputModeValues = ['source', 'target'] as const;
