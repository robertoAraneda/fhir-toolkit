/**
 * SlicingRules
 * 
 * How slices are interpreted when evaluating an instance.
 *
 * @see http://hl7.org/fhir/ValueSet/resource-slicing-rules
 */

export type SlicingRulesType = 'closed' | 'open' | 'openAtEnd';

export enum SlicingRulesEnum {
  /** Closed */
  Closed = 'closed',
  /** Open */
  Open = 'open',
  /** Open at End */
  Openatend = 'openAtEnd',
}

export const SlicingRulesValues = ['closed', 'open', 'openAtEnd'] as const;
