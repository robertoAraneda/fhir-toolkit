/**
 * TitleType
 * 
 * Used to express the reason and specific aspect for the variant title, such as language and specific language.
 *
 * @see http://hl7.org/fhir/ValueSet/title-type
 */

export type TitleTypeType = 'primary' | 'official' | 'scientific' | 'plain-language' | 'subtitle' | 'short-title' | 'acronym' | 'earlier-title' | 'language' | 'autotranslated' | 'human-use' | 'machine-use' | 'duplicate-uid';

export enum TitleTypeEnum {
  /** Primary title */
  Primary = 'primary',
  /** Official title */
  Official = 'official',
  /** Scientific title */
  Scientific = 'scientific',
  /** Plain language title */
  PlainLanguage = 'plain-language',
  /** Subtitle */
  Subtitle = 'subtitle',
  /** Short title */
  ShortTitle = 'short-title',
  /** Acronym */
  Acronym = 'acronym',
  /** Different text in an earlier version */
  EarlierTitle = 'earlier-title',
  /** Different language */
  Language = 'language',
  /** Different language derived from autotranslation */
  Autotranslated = 'autotranslated',
  /** Human use */
  HumanUse = 'human-use',
  /** Machine use */
  MachineUse = 'machine-use',
  /** Different text for the same object with a different identifier */
  DuplicateUid = 'duplicate-uid',
}

export const TitleTypeValues = ['primary', 'official', 'scientific', 'plain-language', 'subtitle', 'short-title', 'acronym', 'earlier-title', 'language', 'autotranslated', 'human-use', 'machine-use', 'duplicate-uid'] as const;
