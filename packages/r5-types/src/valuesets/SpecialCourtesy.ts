/**
 * Special Courtesy
 * 
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 *
 * @see http://hl7.org/fhir/ValueSet/encounter-special-courtesy
 */

export type SpecialCourtesyType = 'EXT' | 'NRM' | 'PRF' | 'STF' | 'VIP' | 'UNK';

export enum SpecialCourtesyEnum {
  Ext = 'EXT',
  Nrm = 'NRM',
  Prf = 'PRF',
  Stf = 'STF',
  Vip = 'VIP',
  Unk = 'UNK',
}

export const SpecialCourtesyValues = ['EXT', 'NRM', 'PRF', 'STF', 'VIP', 'UNK'] as const;
