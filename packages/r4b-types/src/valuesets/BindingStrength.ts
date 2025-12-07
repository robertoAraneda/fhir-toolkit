/**
 * BindingStrength
 * 
 * Indication of the degree of conformance expectations associated with a binding.
 *
 * @see http://hl7.org/fhir/ValueSet/binding-strength
 */

export type BindingStrengthType = 'required' | 'extensible' | 'preferred' | 'example';

export enum BindingStrengthEnum {
  /** Required */
  Required = 'required',
  /** Extensible */
  Extensible = 'extensible',
  /** Preferred */
  Preferred = 'preferred',
  /** Example */
  Example = 'example',
}

export const BindingStrengthValues = ['required', 'extensible', 'preferred', 'example'] as const;
