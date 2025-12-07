/**
 * Interaction Trigger
 * 
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 *
 * @see http://hl7.org/fhir/ValueSet/interaction-trigger
 */

export type InteractionTriggerType = 'create' | 'update' | 'delete';

export enum InteractionTriggerEnum {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
}

export const InteractionTriggerValues = ['create', 'update', 'delete'] as const;
