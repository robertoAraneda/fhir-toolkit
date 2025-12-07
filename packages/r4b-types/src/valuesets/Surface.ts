/**
 * Surface Codes
 * 
 * This value set includes a smattering of FDI tooth surface codes.
 *
 * @see http://hl7.org/fhir/ValueSet/surface
 */

export type SurfaceType = 'M' | 'O' | 'I' | 'D' | 'B' | 'V' | 'L' | 'MO' | 'DO' | 'DI' | 'MOD';

export enum SurfaceEnum {
  /** Mesial */
  M = 'M',
  /** Occlusal */
  O = 'O',
  /** Incisal */
  I = 'I',
  /** Distal */
  D = 'D',
  /** Buccal */
  B = 'B',
  /** Ventral */
  V = 'V',
  /** Lingual */
  L = 'L',
  /** Mesioclusal */
  Mo = 'MO',
  /** Distoclusal */
  Do = 'DO',
  /** Distoincisal */
  Di = 'DI',
  /** Mesioclusodistal */
  Mod = 'MOD',
}

export const SurfaceValues = ['M', 'O', 'I', 'D', 'B', 'V', 'L', 'MO', 'DO', 'DI', 'MOD'] as const;
