/**
 * Immunization Route Codes
 * 
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/immunization-route
 */

export type ImmunizationRouteType = 'IDINJ' | 'IM' | 'NASINHLC' | 'IVINJ' | 'PO' | 'SQ' | 'TRNSDERM';

export enum ImmunizationRouteEnum {
  /** Injection, intradermal */
  Idinj = 'IDINJ',
  /** Injection, intramuscular */
  Im = 'IM',
  /** Inhalation, nasal */
  Nasinhlc = 'NASINHLC',
  /** Injection, intravenous */
  Ivinj = 'IVINJ',
  /** Swallow, oral */
  Po = 'PO',
  /** Injection, subcutaneous */
  Sq = 'SQ',
  /** Transdermal */
  Trnsderm = 'TRNSDERM',
}

export const ImmunizationRouteValues = ['IDINJ', 'IM', 'NASINHLC', 'IVINJ', 'PO', 'SQ', 'TRNSDERM'] as const;
