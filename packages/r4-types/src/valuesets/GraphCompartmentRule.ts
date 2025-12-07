/**
 * GraphCompartmentRule
 * 
 * How a compartment must be linked.
 *
 * @see http://hl7.org/fhir/ValueSet/graph-compartment-rule
 */

export type GraphCompartmentRuleType = 'identical' | 'matching' | 'different' | 'custom';

export enum GraphCompartmentRuleEnum {
  /** Identical */
  Identical = 'identical',
  /** Matching */
  Matching = 'matching',
  /** Different */
  Different = 'different',
  /** Custom */
  Custom = 'custom',
}

export const GraphCompartmentRuleValues = ['identical', 'matching', 'different', 'custom'] as const;
