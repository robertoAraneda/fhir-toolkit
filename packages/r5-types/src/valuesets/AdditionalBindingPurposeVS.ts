/**
 * Additional Binding Purpose ValueSet
 * 
 * Additional Binding Purpose
 *
 * @see http://hl7.org/fhir/ValueSet/additional-binding-purpose
 */

export type AdditionalBindingPurposeVSType = 'maximum' | 'minimum' | 'required' | 'extensible' | 'candidate' | 'current' | 'preferred' | 'ui' | 'starter' | 'component';

export enum AdditionalBindingPurposeVSEnum {
  /** Maximum Binding */
  Maximum = 'maximum',
  /** Minimum Binding */
  Minimum = 'minimum',
  /** Required Binding */
  Required = 'required',
  /** Conformance Binding */
  Extensible = 'extensible',
  /** Candidate Binding */
  Candidate = 'candidate',
  /** Current Binding */
  Current = 'current',
  /** Preferred Binding */
  Preferred = 'preferred',
  /** UI Suggested Binding */
  Ui = 'ui',
  /** Starter Binding */
  Starter = 'starter',
  /** Component Binding */
  Component = 'component',
}

export const AdditionalBindingPurposeVSValues = ['maximum', 'minimum', 'required', 'extensible', 'candidate', 'current', 'preferred', 'ui', 'starter', 'component'] as const;
