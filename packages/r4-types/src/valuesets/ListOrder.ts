/**
 * List Order Codes
 * 
 * Base values for the order of the items in a list resource.
 *
 * @see http://hl7.org/fhir/ValueSet/list-order
 */

export type ListOrderType = 'user' | 'system' | 'event-date' | 'entry-date' | 'priority' | 'alphabetic' | 'category' | 'patient';

export enum ListOrderEnum {
  /** Sorted by User */
  User = 'user',
  /** Sorted by System */
  System = 'system',
  /** Sorted by Event Date */
  EventDate = 'event-date',
  /** Sorted by Item Date */
  EntryDate = 'entry-date',
  /** Sorted by Priority */
  Priority = 'priority',
  /** Sorted Alphabetically */
  Alphabetic = 'alphabetic',
  /** Sorted by Category */
  Category = 'category',
  /** Sorted by Patient */
  Patient = 'patient',
}

export const ListOrderValues = ['user', 'system', 'event-date', 'entry-date', 'priority', 'alphabetic', 'category', 'patient'] as const;
