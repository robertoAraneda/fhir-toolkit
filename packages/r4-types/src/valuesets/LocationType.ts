/**
 * Location type
 * 
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 *
 * @see http://hl7.org/fhir/ValueSet/location-physical-type
 */

export type LocationTypeType = 'si' | 'bu' | 'wi' | 'wa' | 'lvl' | 'co' | 'ro' | 'bd' | 've' | 'ho' | 'ca' | 'rd' | 'area' | 'jdn';

export enum LocationTypeEnum {
  /** Site */
  Si = 'si',
  /** Building */
  Bu = 'bu',
  /** Wing */
  Wi = 'wi',
  /** Ward */
  Wa = 'wa',
  /** Level */
  Lvl = 'lvl',
  /** Corridor */
  Co = 'co',
  /** Room */
  Ro = 'ro',
  /** Bed */
  Bd = 'bd',
  /** Vehicle */
  Ve = 've',
  /** House */
  Ho = 'ho',
  /** Cabinet */
  Ca = 'ca',
  /** Road */
  Rd = 'rd',
  /** Area */
  Area = 'area',
  /** Jurisdiction */
  Jdn = 'jdn',
}

export const LocationTypeValues = ['si', 'bu', 'wi', 'wa', 'lvl', 'co', 'ro', 'bd', 've', 'ho', 'ca', 'rd', 'area', 'jdn'] as const;
