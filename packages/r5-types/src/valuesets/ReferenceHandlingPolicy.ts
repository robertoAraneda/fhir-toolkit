/**
 * Reference Handling Policy
 * 
 * A set of flags that defines how references are supported.
 *
 * @see http://hl7.org/fhir/ValueSet/reference-handling-policy
 */

export type ReferenceHandlingPolicyType = 'literal' | 'logical' | 'resolves' | 'enforced' | 'local';

export enum ReferenceHandlingPolicyEnum {
  /** Literal References */
  Literal = 'literal',
  /** Logical References */
  Logical = 'logical',
  /** Resolves References */
  Resolves = 'resolves',
  /** Reference Integrity Enforced */
  Enforced = 'enforced',
  /** Local References Only */
  Local = 'local',
}

export const ReferenceHandlingPolicyValues = ['literal', 'logical', 'resolves', 'enforced', 'local'] as const;
