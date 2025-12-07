/**
 * BiologicallyDerivedProductStorageScale
 * 
 * BiologicallyDerived Product Storage Scale.
 *
 * @see http://hl7.org/fhir/ValueSet/product-storage-scale
 */

export type BiologicallyDerivedProductStorageScaleType = 'farenheit' | 'celsius' | 'kelvin';

export enum BiologicallyDerivedProductStorageScaleEnum {
  /** Fahrenheit */
  Farenheit = 'farenheit',
  /** Celsius */
  Celsius = 'celsius',
  /** Kelvin */
  Kelvin = 'kelvin',
}

export const BiologicallyDerivedProductStorageScaleValues = ['farenheit', 'celsius', 'kelvin'] as const;
