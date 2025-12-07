/**
 * CommonLanguages
 * 
 * This value set includes common codes from BCP-47 (http://tools.ietf.org/html/bcp47) for the purpose of writing; this value set (unlike the common languages value set) doesn't include dialects except where they are relevant for written languages
 *
 * @see http://hl7.org/fhir/ValueSet/written-language
 */

export type CommonLanguagesType = 'ar' | 'bn' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'fi' | 'fr' | 'fy' | 'hi' | 'hr' | 'it' | 'ja' | 'ko' | 'nl' | 'no' | 'pa' | 'pl' | 'pt' | 'ru' | 'sr' | 'sv' | 'te' | 'zh';

export enum CommonLanguagesEnum {
  /** Arabic */
  Ar = 'ar',
  /** Bengali */
  Bn = 'bn',
  /** Czech */
  Cs = 'cs',
  /** Danish */
  Da = 'da',
  /** German */
  De = 'de',
  /** Greek */
  El = 'el',
  /** English */
  En = 'en',
  /** Spanish */
  Es = 'es',
  /** Finnish */
  Fi = 'fi',
  /** French */
  Fr = 'fr',
  /** Frysian */
  Fy = 'fy',
  /** Hindi */
  Hi = 'hi',
  /** Croatian */
  Hr = 'hr',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Korean */
  Ko = 'ko',
  /** Dutch */
  Nl = 'nl',
  /** Norwegian */
  No = 'no',
  /** Punjabi */
  Pa = 'pa',
  /** Polish */
  Pl = 'pl',
  /** Portuguese */
  Pt = 'pt',
  /** Russian */
  Ru = 'ru',
  /** Serbian */
  Sr = 'sr',
  /** Swedish */
  Sv = 'sv',
  /** Telegu */
  Te = 'te',
  /** Chinese */
  Zh = 'zh',
}

export const CommonLanguagesValues = ['ar', 'bn', 'cs', 'da', 'de', 'el', 'en', 'es', 'fi', 'fr', 'fy', 'hi', 'hr', 'it', 'ja', 'ko', 'nl', 'no', 'pa', 'pl', 'pt', 'ru', 'sr', 'sv', 'te', 'zh'] as const;
