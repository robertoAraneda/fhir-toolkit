/**
 * ContributorSummaryType
 * 
 * Used to code author list statement, contributorship statement, and such.
 *
 * @see http://hl7.org/fhir/ValueSet/contributor-summary-type
 */

export type ContributorSummaryTypeType = 'author-string' | 'contributorship-list' | 'contributorship-statement' | 'acknowledgement-list' | 'acknowledgment-statement' | 'funding-statement' | 'competing-interests-statement';

export enum ContributorSummaryTypeEnum {
  /** Author string */
  AuthorString = 'author-string',
  /** Contributorship list */
  ContributorshipList = 'contributorship-list',
  /** Contributorship statement */
  ContributorshipStatement = 'contributorship-statement',
  /** Acknowledgment list */
  AcknowledgementList = 'acknowledgement-list',
  /** Acknowledgment statement */
  AcknowledgmentStatement = 'acknowledgment-statement',
  /** Funding statement */
  FundingStatement = 'funding-statement',
  /** Competing interests statement */
  CompetingInterestsStatement = 'competing-interests-statement',
}

export const ContributorSummaryTypeValues = ['author-string', 'contributorship-list', 'contributorship-statement', 'acknowledgement-list', 'acknowledgment-statement', 'funding-statement', 'competing-interests-statement'] as const;
