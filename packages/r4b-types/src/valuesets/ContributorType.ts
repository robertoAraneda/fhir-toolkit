/**
 * ContributorType
 * 
 * The type of contributor.
 *
 * @see http://hl7.org/fhir/ValueSet/contributor-type
 */

export type ContributorTypeType = 'author' | 'editor' | 'reviewer' | 'endorser';

export enum ContributorTypeEnum {
  /** Author */
  Author = 'author',
  /** Editor */
  Editor = 'editor',
  /** Reviewer */
  Reviewer = 'reviewer',
  /** Endorser */
  Endorser = 'endorser',
}

export const ContributorTypeValues = ['author', 'editor', 'reviewer', 'endorser'] as const;
