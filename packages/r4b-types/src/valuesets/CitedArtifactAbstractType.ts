/**
 * CitedArtifactAbstractType
 * 
 * Used to express the reason and specific aspect for the variant abstract, such as language and specific language.
 *
 * @see http://hl7.org/fhir/ValueSet/cited-artifact-abstract-type
 */

export type CitedArtifactAbstractTypeType = 'primary-human-use' | 'primary-machine-use' | 'truncated' | 'short-abstract' | 'long-abstract' | 'plain-language' | 'different-publisher' | 'language' | 'autotranslated' | 'duplicate-pmid' | 'earlier-abstract';

export enum CitedArtifactAbstractTypeEnum {
  /** Primary human use */
  PrimaryHumanUse = 'primary-human-use',
  /** Primary machine use */
  PrimaryMachineUse = 'primary-machine-use',
  /** Truncated */
  Truncated = 'truncated',
  /** Short abstract */
  ShortAbstract = 'short-abstract',
  /** Long abstract */
  LongAbstract = 'long-abstract',
  /** Plain language */
  PlainLanguage = 'plain-language',
  /** Different publisher for abstract */
  DifferentPublisher = 'different-publisher',
  /** Different language */
  Language = 'language',
  /** Different language derived from autotranslation */
  Autotranslated = 'autotranslated',
  /** Different text in additional Medline entry */
  DuplicatePmid = 'duplicate-pmid',
  /** Different text in an earlier version */
  EarlierAbstract = 'earlier-abstract',
}

export const CitedArtifactAbstractTypeValues = ['primary-human-use', 'primary-machine-use', 'truncated', 'short-abstract', 'long-abstract', 'plain-language', 'different-publisher', 'language', 'autotranslated', 'duplicate-pmid', 'earlier-abstract'] as const;
