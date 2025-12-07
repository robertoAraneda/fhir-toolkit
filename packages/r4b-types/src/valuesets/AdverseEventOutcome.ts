/**
 * AdverseEventOutcome
 * 
 * TODO (and should this be required?).
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-outcome
 */

export type AdverseEventOutcomeType = 'resolved' | 'recovering' | 'ongoing' | 'resolvedWithSequelae' | 'fatal' | 'unknown';

export enum AdverseEventOutcomeEnum {
  /** Resolved */
  Resolved = 'resolved',
  /** Recovering */
  Recovering = 'recovering',
  /** Ongoing */
  Ongoing = 'ongoing',
  /** Resolved with Sequelae */
  Resolvedwithsequelae = 'resolvedWithSequelae',
  /** Fatal */
  Fatal = 'fatal',
  /** Unknown */
  Unknown = 'unknown',
}

export const AdverseEventOutcomeValues = ['resolved', 'recovering', 'ongoing', 'resolvedWithSequelae', 'fatal', 'unknown'] as const;
