/**
 * ListMode
 * 
 * The processing mode that applies to this list.
 *
 * @see http://hl7.org/fhir/ValueSet/list-mode
 */

export type ListModeType = 'working' | 'snapshot' | 'changes';

export enum ListModeEnum {
  /** Working List */
  Working = 'working',
  /** Snapshot List */
  Snapshot = 'snapshot',
  /** Change List */
  Changes = 'changes',
}

export const ListModeValues = ['working', 'snapshot', 'changes'] as const;
