/**
 * Structure Map Source List Mode
 * 
 * If field is a list, how to manage the source.
 *
 * @see http://hl7.org/fhir/ValueSet/map-source-list-mode
 */

export type StructureMapSourceListModeType = 'first' | 'not_first' | 'last' | 'not_last' | 'only_one';

export enum StructureMapSourceListModeEnum {
  /** First */
  First = 'first',
  /** All but the first */
  NotFirst = 'not_first',
  /** Last */
  Last = 'last',
  /** All but the last */
  NotLast = 'not_last',
  /** Enforce only one */
  OnlyOne = 'only_one',
}

export const StructureMapSourceListModeValues = ['first', 'not_first', 'last', 'not_last', 'only_one'] as const;
