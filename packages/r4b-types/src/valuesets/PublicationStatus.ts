/**
 * PublicationStatus
 * 
 * The lifecycle status of an artifact.
 *
 * @see http://hl7.org/fhir/ValueSet/publication-status
 */

export type PublicationStatusType = 'draft' | 'active' | 'retired' | 'unknown';

export enum PublicationStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Active */
  Active = 'active',
  /** Retired */
  Retired = 'retired',
  /** Unknown */
  Unknown = 'unknown',
}

export const PublicationStatusValues = ['draft', 'active', 'retired', 'unknown'] as const;
