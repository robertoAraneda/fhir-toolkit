/**
 * UndesirablEffectFrequency
 * 
 * A categorisation for a frequency of occurence of an undesirable effect.
 *
 * @see http://hl7.org/fhir/ValueSet/undesirable-effect-frequency
 */

export type UndesirablEffectFrequencyType = 'Common' | 'Uncommon' | 'Rare';

export enum UndesirablEffectFrequencyEnum {
  /** Common */
  Common = 'Common',
  /** Uncommon */
  Uncommon = 'Uncommon',
  /** Rare */
  Rare = 'Rare',
}

export const UndesirablEffectFrequencyValues = ['Common', 'Uncommon', 'Rare'] as const;
