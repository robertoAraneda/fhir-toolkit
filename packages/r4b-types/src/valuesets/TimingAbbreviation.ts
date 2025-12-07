/**
 * TimingAbbreviation
 * 
 * Code for a known / defined timing pattern.
 *
 * @see http://hl7.org/fhir/ValueSet/timing-abbreviation
 */

export type TimingAbbreviationType = 'BID' | 'TID' | 'QID' | 'AM' | 'PM' | 'QD' | 'QOD' | 'Q1H' | 'Q2H' | 'Q3H' | 'Q4H' | 'Q6H' | 'Q8H' | 'BED' | 'WK' | 'MO';

export enum TimingAbbreviationEnum {
  /** BID */
  Bid = 'BID',
  /** TID */
  Tid = 'TID',
  /** QID */
  Qid = 'QID',
  /** AM */
  Am = 'AM',
  /** PM */
  Pm = 'PM',
  /** QD */
  Qd = 'QD',
  /** QOD */
  Qod = 'QOD',
  /** every hour */
  Q1h = 'Q1H',
  /** every 2 hours */
  Q2h = 'Q2H',
  /** every 3 hours */
  Q3h = 'Q3H',
  /** Q4H */
  Q4h = 'Q4H',
  /** Q6H */
  Q6h = 'Q6H',
  /** every 8 hours */
  Q8h = 'Q8H',
  /** at bedtime */
  Bed = 'BED',
  /** weekly */
  Wk = 'WK',
  /** monthly */
  Mo = 'MO',
}

export const TimingAbbreviationValues = ['BID', 'TID', 'QID', 'AM', 'PM', 'QD', 'QOD', 'Q1H', 'Q2H', 'Q3H', 'Q4H', 'Q6H', 'Q8H', 'BED', 'WK', 'MO'] as const;
