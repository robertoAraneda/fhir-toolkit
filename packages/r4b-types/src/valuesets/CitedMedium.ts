/**
 * CitedMedium
 * 
 * NLM codes Internet or Print.
 *
 * @see http://hl7.org/fhir/ValueSet/cited-medium
 */

export type CitedMediumType = 'internet' | 'print' | 'offline-digital-storage' | 'internet-without-issue' | 'print-without-issue' | 'offline-digital-storage-without-issue';

export enum CitedMediumEnum {
  /** Internet */
  Internet = 'internet',
  /** Print */
  Print = 'print',
  /** Offline Digital Storage */
  OfflineDigitalStorage = 'offline-digital-storage',
  /** Internet without issue */
  InternetWithoutIssue = 'internet-without-issue',
  /** Print without issue */
  PrintWithoutIssue = 'print-without-issue',
  /** Offline Digital Storage without issue */
  OfflineDigitalStorageWithoutIssue = 'offline-digital-storage-without-issue',
}

export const CitedMediumValues = ['internet', 'print', 'offline-digital-storage', 'internet-without-issue', 'print-without-issue', 'offline-digital-storage-without-issue'] as const;
