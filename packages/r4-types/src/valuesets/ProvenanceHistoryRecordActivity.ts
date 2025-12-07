/**
 * Provenance History Record Activity Codes
 * 
 * Codes for Provenance activities that are relevant when capturing event history for resources.
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-history-record-activity
 */

export type ProvenanceHistoryRecordActivityType = 'CREATE' | 'UPDATE' | 'DELETE' | 'ABORT' | 'HOLD' | 'RELEASE' | 'CANCEL' | 'ACTIVATE' | 'SUSPEND' | 'RESUME' | 'COMPLETE' | 'NULLIFY' | 'OBSOLETE' | 'REACTIVATE';

export enum ProvenanceHistoryRecordActivityEnum {
  /** Created */
  Create = 'CREATE',
  /** Updated */
  Update = 'UPDATE',
  /** Deleted */
  Delete = 'DELETE',
  /** Stopped/Ended/Aborted */
  Abort = 'ABORT',
  /** Held */
  Hold = 'HOLD',
  /** Released */
  Release = 'RELEASE',
  /** Cancelled */
  Cancel = 'CANCEL',
  /** Activated */
  Activate = 'ACTIVATE',
  /** Suspended */
  Suspend = 'SUSPEND',
  Resume = 'RESUME',
  /** Completed */
  Complete = 'COMPLETE',
  /** Mark Entered-in-error */
  Nullify = 'NULLIFY',
  /** Replaced */
  Obsolete = 'OBSOLETE',
  /** Reactivated */
  Reactivate = 'REACTIVATE',
}

export const ProvenanceHistoryRecordActivityValues = ['CREATE', 'UPDATE', 'DELETE', 'ABORT', 'HOLD', 'RELEASE', 'CANCEL', 'ACTIVATE', 'SUSPEND', 'RESUME', 'COMPLETE', 'NULLIFY', 'OBSOLETE', 'REACTIVATE'] as const;
