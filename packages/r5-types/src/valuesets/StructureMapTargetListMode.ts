/**
 * Structure Map Target List Mode
 * 
 * If field is a list, how to manage the production.
 *
 * @see http://hl7.org/fhir/ValueSet/map-target-list-mode
 */

export type StructureMapTargetListModeType = 'first' | 'share' | 'last' | 'single';

export enum StructureMapTargetListModeEnum {
  /** First */
  First = 'first',
  /** Share */
  Share = 'share',
  /** Last */
  Last = 'last',
  /** single */
  Single = 'single',
}

export const StructureMapTargetListModeValues = ['first', 'share', 'last', 'single'] as const;
