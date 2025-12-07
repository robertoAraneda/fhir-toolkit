/**
 * Common Languages
 * 
 * This value set includes common codes from BCP-47 (see http://tools.ietf.org/html/bcp47)
 *
 * @see http://hl7.org/fhir/ValueSet/languages
 */

export type CommonLanguagesType = 'ar' | 'bg' | 'bg-BG' | 'bn' | 'cs' | 'cs-CZ' | 'bs' | 'bs-BA' | 'da' | 'da-DK' | 'de' | 'de-AT' | 'de-CH' | 'de-DE' | 'el' | 'el-GR' | 'en' | 'en-AU' | 'en-CA' | 'en-GB' | 'en-IN' | 'en-NZ' | 'en-SG' | 'en-US' | 'es' | 'es-AR' | 'es-ES' | 'es-UY' | 'et' | 'et-EE' | 'fi' | 'fr' | 'fr-BE' | 'fr-CH' | 'fr-FR' | 'fi-FI' | 'fr-CA' | 'fy' | 'fy-NL' | 'hi' | 'hr' | 'hr-HR' | 'is' | 'is-IS' | 'it' | 'it-CH' | 'it-IT' | 'ja' | 'ko' | 'lt' | 'lt-LT' | 'lv' | 'lv-LV' | 'nl' | 'nl-BE' | 'nl-NL' | 'no' | 'no-NO' | 'pa' | 'pl' | 'pl-PL' | 'pt' | 'pt-PT' | 'pt-BR' | 'ro' | 'ro-RO' | 'ru' | 'ru-RU' | 'sk' | 'sk-SK' | 'sl' | 'sl-SI' | 'sr' | 'sr-RS' | 'sv' | 'sv-SE' | 'te' | 'zh' | 'zh-CN' | 'zh-HK' | 'zh-SG' | 'zh-TW';

export enum CommonLanguagesEnum {
  /** Arabic */
  Ar = 'ar',
  /** Bulgarian */
  Bg = 'bg',
  /** Bulgarian (Bulgaria) */
  BgBg = 'bg-BG',
  /** Bengali */
  Bn = 'bn',
  /** Czech */
  Cs = 'cs',
  /** Czech (Czechia) */
  CsCz = 'cs-CZ',
  /** Bosnian */
  Bs = 'bs',
  /** Bosnian (Bosnia and Herzegovina) */
  BsBa = 'bs-BA',
  /** Danish */
  Da = 'da',
  /** Danish (Denmark) */
  DaDk = 'da-DK',
  /** German */
  De = 'de',
  /** German (Austria) */
  DeAt = 'de-AT',
  /** German (Switzerland) */
  DeCh = 'de-CH',
  /** German (Germany) */
  DeDe = 'de-DE',
  /** Greek */
  El = 'el',
  /** Greek (Greece) */
  ElGr = 'el-GR',
  /** English */
  En = 'en',
  /** English (Australia) */
  EnAu = 'en-AU',
  /** English (Canada) */
  EnCa = 'en-CA',
  /** English (Great Britain) */
  EnGb = 'en-GB',
  /** English (India) */
  EnIn = 'en-IN',
  /** English (New Zealand) */
  EnNz = 'en-NZ',
  /** English (Singapore) */
  EnSg = 'en-SG',
  /** English (United States) */
  EnUs = 'en-US',
  /** Spanish */
  Es = 'es',
  /** Spanish (Argentina) */
  EsAr = 'es-AR',
  /** Spanish (Spain) */
  EsEs = 'es-ES',
  /** Spanish (Uruguay) */
  EsUy = 'es-UY',
  /** Estonian */
  Et = 'et',
  /** Estonian (Estonia) */
  EtEe = 'et-EE',
  /** Finnish */
  Fi = 'fi',
  /** French */
  Fr = 'fr',
  /** French (Belgium) */
  FrBe = 'fr-BE',
  /** French (Switzerland) */
  FrCh = 'fr-CH',
  /** French (France) */
  FrFr = 'fr-FR',
  /** Finnish (Finland) */
  FiFi = 'fi-FI',
  /** French (Canada) */
  FrCa = 'fr-CA',
  /** Frisian */
  Fy = 'fy',
  /** Frisian (Netherlands) */
  FyNl = 'fy-NL',
  /** Hindi */
  Hi = 'hi',
  /** Croatian */
  Hr = 'hr',
  /** Croatian (Croatia) */
  HrHr = 'hr-HR',
  /** Icelandic */
  Is = 'is',
  /** Icelandic (Iceland) */
  IsIs = 'is-IS',
  /** Italian */
  It = 'it',
  /** Italian (Switzerland) */
  ItCh = 'it-CH',
  /** Italian (Italy) */
  ItIt = 'it-IT',
  /** Japanese */
  Ja = 'ja',
  /** Korean */
  Ko = 'ko',
  /** Lithuanian */
  Lt = 'lt',
  /** Lithuanian (Lithuania) */
  LtLt = 'lt-LT',
  /** Latvian */
  Lv = 'lv',
  /** Latvian (Latvia) */
  LvLv = 'lv-LV',
  /** Dutch */
  Nl = 'nl',
  /** Dutch (Belgium) */
  NlBe = 'nl-BE',
  /** Dutch (Netherlands) */
  NlNl = 'nl-NL',
  /** Norwegian */
  No = 'no',
  /** Norwegian (Norway) */
  NoNo = 'no-NO',
  /** Punjabi */
  Pa = 'pa',
  /** Polish */
  Pl = 'pl',
  /** Polish (Poland) */
  PlPl = 'pl-PL',
  /** Portuguese */
  Pt = 'pt',
  /** Portuguese (Portugal) */
  PtPt = 'pt-PT',
  /** Portuguese (Brazil) */
  PtBr = 'pt-BR',
  /** Romanian */
  Ro = 'ro',
  /** Romanian (Romania) */
  RoRo = 'ro-RO',
  /** Russian */
  Ru = 'ru',
  /** Russian (Russia) */
  RuRu = 'ru-RU',
  /** Slovakian */
  Sk = 'sk',
  /** Slovakian (Slovakia) */
  SkSk = 'sk-SK',
  /** Slovenian */
  Sl = 'sl',
  /** Slovenian (Slovenia) */
  SlSi = 'sl-SI',
  /** Serbian */
  Sr = 'sr',
  /** Serbian (Serbia) */
  SrRs = 'sr-RS',
  /** Swedish */
  Sv = 'sv',
  /** Swedish (Sweden) */
  SvSe = 'sv-SE',
  /** Telugu */
  Te = 'te',
  /** Chinese */
  Zh = 'zh',
  /** Chinese (China) */
  ZhCn = 'zh-CN',
  /** Chinese (Hong Kong) */
  ZhHk = 'zh-HK',
  /** Chinese (Singapore) */
  ZhSg = 'zh-SG',
  /** Chinese (Taiwan) */
  ZhTw = 'zh-TW',
}

export const CommonLanguagesValues = ['ar', 'bg', 'bg-BG', 'bn', 'cs', 'cs-CZ', 'bs', 'bs-BA', 'da', 'da-DK', 'de', 'de-AT', 'de-CH', 'de-DE', 'el', 'el-GR', 'en', 'en-AU', 'en-CA', 'en-GB', 'en-IN', 'en-NZ', 'en-SG', 'en-US', 'es', 'es-AR', 'es-ES', 'es-UY', 'et', 'et-EE', 'fi', 'fr', 'fr-BE', 'fr-CH', 'fr-FR', 'fi-FI', 'fr-CA', 'fy', 'fy-NL', 'hi', 'hr', 'hr-HR', 'is', 'is-IS', 'it', 'it-CH', 'it-IT', 'ja', 'ko', 'lt', 'lt-LT', 'lv', 'lv-LV', 'nl', 'nl-BE', 'nl-NL', 'no', 'no-NO', 'pa', 'pl', 'pl-PL', 'pt', 'pt-PT', 'pt-BR', 'ro', 'ro-RO', 'ru', 'ru-RU', 'sk', 'sk-SK', 'sl', 'sl-SI', 'sr', 'sr-RS', 'sv', 'sv-SE', 'te', 'zh', 'zh-CN', 'zh-HK', 'zh-SG', 'zh-TW'] as const;
