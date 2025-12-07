/**
 * Type Derivation Rule
 * 
 * How a type relates to its baseDefinition.
 *
 * @see http://hl7.org/fhir/ValueSet/type-derivation-rule
 */

export type TypeDerivationRuleType = 'specialization' | 'constraint';

export enum TypeDerivationRuleEnum {
  /** Specialization */
  Specialization = 'specialization',
  /** Constraint */
  Constraint = 'constraint',
}

export const TypeDerivationRuleValues = ['specialization', 'constraint'] as const;
