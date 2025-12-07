/**
 * Oral Prostho Material type Codes
 * 
 * This value set includes sample Oral Prosthodontic Material type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/oral-prosthodontic-material
 */

export type OralProsthoMaterialTypeType = '1' | '2' | '3' | '4';

export enum OralProsthoMaterialTypeEnum {
  /** Fixed Bridge */
  _1 = '1',
  /** Maryland Bridge */
  _2 = '2',
  /** Denture Acrylic */
  _3 = '3',
  /** Denture Chrome Cobalt */
  _4 = '4',
}

export const OralProsthoMaterialTypeValues = ['1', '2', '3', '4'] as const;
