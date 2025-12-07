/**
 * ExampleHierarchicalValueSet
 * 
 * Demonstration of extensions that build a hierarchical contains
 *
 * @see http://hl7.org/fhir/ValueSet/example-hierarchical
 */

export type ExampleHierarchicalValueSetType = 'undefined' | 'processing' | 'invalid' | 'transient' | 'security';

export enum ExampleHierarchicalValueSetEnum {
  /** (Most common) */
  _Empty = 'undefined',
  /** Processing Failure */
  Processing = 'processing',
  /** Invalid Content */
  Invalid = 'invalid',
  /** Transient Issue */
  Transient = 'transient',
  /** Security Problem */
  Security = 'security',
}

export const ExampleHierarchicalValueSetValues = ['undefined', 'processing', 'invalid', 'transient', 'security'] as const;
