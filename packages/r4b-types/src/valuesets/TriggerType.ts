/**
 * TriggerType
 * 
 * The type of trigger.
 *
 * @see http://hl7.org/fhir/ValueSet/trigger-type
 */

export type TriggerTypeType = 'named-event' | 'periodic' | 'data-changed' | 'data-added' | 'data-modified' | 'data-removed' | 'data-accessed' | 'data-access-ended';

export enum TriggerTypeEnum {
  /** Named Event */
  NamedEvent = 'named-event',
  /** Periodic */
  Periodic = 'periodic',
  /** Data Changed */
  DataChanged = 'data-changed',
  /** Data Added */
  DataAdded = 'data-added',
  /** Data Updated */
  DataModified = 'data-modified',
  /** Data Removed */
  DataRemoved = 'data-removed',
  /** Data Accessed */
  DataAccessed = 'data-accessed',
  /** Data Access Ended */
  DataAccessEnded = 'data-access-ended',
}

export const TriggerTypeValues = ['named-event', 'periodic', 'data-changed', 'data-added', 'data-modified', 'data-removed', 'data-accessed', 'data-access-ended'] as const;
