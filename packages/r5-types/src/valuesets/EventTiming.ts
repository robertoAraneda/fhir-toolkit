/**
 * EventTiming
 * 
 * Real-world event relating to the schedule.
 *
 * @see http://hl7.org/fhir/ValueSet/event-timing
 */

export type EventTimingType = 'MORN' | 'MORN.early' | 'MORN.late' | 'NOON' | 'AFT' | 'AFT.early' | 'AFT.late' | 'EVE' | 'EVE.early' | 'EVE.late' | 'NIGHT' | 'PHS' | 'IMD' | 'HS' | 'WAKE' | 'C' | 'CM' | 'CD' | 'CV' | 'AC' | 'ACM' | 'ACD' | 'ACV' | 'PC' | 'PCM' | 'PCD' | 'PCV';

export enum EventTimingEnum {
  /** Morning */
  Morn = 'MORN',
  /** Early Morning */
  MornEarly = 'MORN.early',
  /** Late Morning */
  MornLate = 'MORN.late',
  /** Noon */
  Noon = 'NOON',
  /** Afternoon */
  Aft = 'AFT',
  /** Early Afternoon */
  AftEarly = 'AFT.early',
  /** Late Afternoon */
  AftLate = 'AFT.late',
  /** Evening */
  Eve = 'EVE',
  /** Early Evening */
  EveEarly = 'EVE.early',
  /** Late Evening */
  EveLate = 'EVE.late',
  /** Night */
  Night = 'NIGHT',
  /** After Sleep */
  Phs = 'PHS',
  /** Immediate */
  Imd = 'IMD',
  Hs = 'HS',
  Wake = 'WAKE',
  C = 'C',
  Cm = 'CM',
  Cd = 'CD',
  Cv = 'CV',
  Ac = 'AC',
  Acm = 'ACM',
  Acd = 'ACD',
  Acv = 'ACV',
  Pc = 'PC',
  Pcm = 'PCM',
  Pcd = 'PCD',
  Pcv = 'PCV',
}

export const EventTimingValues = ['MORN', 'MORN.early', 'MORN.late', 'NOON', 'AFT', 'AFT.early', 'AFT.late', 'EVE', 'EVE.early', 'EVE.late', 'NIGHT', 'PHS', 'IMD', 'HS', 'WAKE', 'C', 'CM', 'CD', 'CV', 'AC', 'ACM', 'ACD', 'ACV', 'PC', 'PCM', 'PCD', 'PCV'] as const;
