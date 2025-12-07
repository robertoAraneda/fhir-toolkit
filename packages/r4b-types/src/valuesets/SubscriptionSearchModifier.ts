/**
 * Subscription Search Modifier
 * 
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 *
 * @see http://hl7.org/fhir/ValueSet/subscription-search-modifier
 */

export type SubscriptionSearchModifierType = '=' | 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap' | 'above' | 'below' | 'in' | 'not-in' | 'of-type';

export enum SubscriptionSearchModifierEnum {
  /** = */
  _Empty = '=',
  /** Equal */
  Eq = 'eq',
  /** Not Equal */
  Ne = 'ne',
  /** Greater Than */
  Gt = 'gt',
  /** Less Than */
  Lt = 'lt',
  /** Greater Than or Equal */
  Ge = 'ge',
  /** Less Than or Equal */
  Le = 'le',
  /** Starts After */
  Sa = 'sa',
  /** Ends Before */
  Eb = 'eb',
  /** Approximately */
  Ap = 'ap',
  /** Above */
  Above = 'above',
  /** Below */
  Below = 'below',
  /** In */
  In = 'in',
  /** Not In */
  NotIn = 'not-in',
  /** Of Type */
  OfType = 'of-type',
}

export const SubscriptionSearchModifierValues = ['=', 'eq', 'ne', 'gt', 'lt', 'ge', 'le', 'sa', 'eb', 'ap', 'above', 'below', 'in', 'not-in', 'of-type'] as const;
