/**
 * Location Characteristic
 * 
 * Example Set of Location Characteristics
 *
 * @see http://hl7.org/fhir/ValueSet/location-characteristic
 */

export type LocationCharacteristicType = 'wheelchair' | 'has-translation' | 'has-oxy-nitro' | 'has-neg-press' | 'has-iso-ward' | 'has-icu';

export enum LocationCharacteristicEnum {
  /** Wheelchair accessible */
  Wheelchair = 'wheelchair',
  /** translation services available */
  HasTranslation = 'has-translation',
  /** oxygen/nitrogen available */
  HasOxyNitro = 'has-oxy-nitro',
  /** negative pressure rooms available */
  HasNegPress = 'has-neg-press',
  /** isolation ward */
  HasIsoWard = 'has-iso-ward',
  /** has ICU */
  HasIcu = 'has-icu',
}

export const LocationCharacteristicValues = ['wheelchair', 'has-translation', 'has-oxy-nitro', 'has-neg-press', 'has-iso-ward', 'has-icu'] as const;
