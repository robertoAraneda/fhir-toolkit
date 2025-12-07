/**
 * ContributorRole
 * 
 * Used to code the format of the display string.
 *
 * @see http://hl7.org/fhir/ValueSet/contributor-role
 */

export type ContributorRoleType = 'publisher' | 'author' | 'reviewer' | 'endorser' | 'editor' | 'informant' | 'funder';

export enum ContributorRoleEnum {
  /** Publisher */
  Publisher = 'publisher',
  /** Author/Creator */
  Author = 'author',
  /** Reviewer */
  Reviewer = 'reviewer',
  /** Endorser */
  Endorser = 'endorser',
  /** Editor */
  Editor = 'editor',
  /** Informant */
  Informant = 'informant',
  /** Funder */
  Funder = 'funder',
}

export const ContributorRoleValues = ['publisher', 'author', 'reviewer', 'endorser', 'editor', 'informant', 'funder'] as const;
