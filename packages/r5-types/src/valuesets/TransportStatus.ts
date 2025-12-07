/**
 * Transport Status
 * 
 * Status of the transport
 *
 * @see http://hl7.org/fhir/ValueSet/transport-status
 */

export type TransportStatusType = 'in-progress' | 'completed' | 'abandoned' | 'cancelled' | 'planned' | 'entered-in-error';

export enum TransportStatusEnum {
  /** In Progress */
  InProgress = 'in-progress',
  /** Completed */
  Completed = 'completed',
  /** Abandoned */
  Abandoned = 'abandoned',
  /** Cancelled */
  Cancelled = 'cancelled',
  /** Planned */
  Planned = 'planned',
  /** Entered In Error */
  EnteredInError = 'entered-in-error',
}

export const TransportStatusValues = ['in-progress', 'completed', 'abandoned', 'cancelled', 'planned', 'entered-in-error'] as const;
