/**
 * RequestIntent
 * 
 * Codes indicating the degree of authority/intentionality associated with a request.
 *
 * @see http://hl7.org/fhir/ValueSet/request-intent
 */

export type RequestIntentType = 'proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';

export enum RequestIntentEnum {
  /** Proposal */
  Proposal = 'proposal',
  /** Plan */
  Plan = 'plan',
  /** Directive */
  Directive = 'directive',
  /** Order */
  Order = 'order',
  /** Original Order */
  OriginalOrder = 'original-order',
  /** Reflex Order */
  ReflexOrder = 'reflex-order',
  /** Filler Order */
  FillerOrder = 'filler-order',
  /** Instance Order */
  InstanceOrder = 'instance-order',
  /** Option */
  Option = 'option',
}

export const RequestIntentValues = ['proposal', 'plan', 'directive', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'] as const;
