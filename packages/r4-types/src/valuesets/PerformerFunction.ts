/**
 * PerformerFunction
 * 
 * The types of involvement of the performer in the Event.
 *
 * @see http://hl7.org/fhir/ValueSet/performer-function
 */

export type PerformerFunctionType = 'TRANS' | 'PART' | 'ATND' | 'CON' | 'AUT' | 'INF' | 'ENT' | 'WIT' | 'PPRF' | 'SPRF' | 'RESP' | 'VRF' | 'AUTHEN' | 'LA';

export enum PerformerFunctionEnum {
  Trans = 'TRANS',
  Part = 'PART',
  Atnd = 'ATND',
  Con = 'CON',
  Aut = 'AUT',
  Inf = 'INF',
  Ent = 'ENT',
  Wit = 'WIT',
  Pprf = 'PPRF',
  Sprf = 'SPRF',
  Resp = 'RESP',
  Vrf = 'VRF',
  Authen = 'AUTHEN',
  La = 'LA',
}

export const PerformerFunctionValues = ['TRANS', 'PART', 'ATND', 'CON', 'AUT', 'INF', 'ENT', 'WIT', 'PPRF', 'SPRF', 'RESP', 'VRF', 'AUTHEN', 'LA'] as const;
