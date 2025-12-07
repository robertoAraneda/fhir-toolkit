/**
 * StructureMapTargetListMode
 * 
 * If field is a list, how to manage the production.
 *
 * @see http://hl7.org/fhir/ValueSet/map-target-list-mode
 */

export type StructureMapTargetListModeType = 'first' | 'share' | 'last' | 'collate';

export enum StructureMapTargetListModeEnum {
  /** First */
  First = 'first',
  /** Share */
  Share = 'share',
  /** Last */
  Last = 'last',
  /** Collate */
  Collate = 'collate',
}

export const StructureMapTargetListModeValues = ['first', 'share', 'last', 'collate'] as const;
