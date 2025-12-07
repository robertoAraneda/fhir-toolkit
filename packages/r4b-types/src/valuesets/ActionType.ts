/**
 * ActionType
 * 
 * The type of action to be performed.
 *
 * @see http://hl7.org/fhir/ValueSet/action-type
 */

export type ActionTypeType = 'create' | 'update' | 'remove' | 'fire-event';

export enum ActionTypeEnum {
  /** Create */
  Create = 'create',
  /** Update */
  Update = 'update',
  /** Remove */
  Remove = 'remove',
  /** Fire Event */
  FireEvent = 'fire-event',
}

export const ActionTypeValues = ['create', 'update', 'remove', 'fire-event'] as const;
