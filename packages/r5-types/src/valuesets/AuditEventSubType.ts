/**
 * Audit Event Sub-Type
 * 
 * More detailed code concerning the type of the audit event - defined by DICOM with some additional FHIR, HL7, and other additions.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-sub-type
 */

export type AuditEventSubTypeType = 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history' | 'history-instance' | 'history-type' | 'history-system' | 'create' | 'search' | 'search-type' | 'search-system' | 'search-compartment' | 'capabilities' | 'transaction' | 'batch' | 'operation';

export enum AuditEventSubTypeEnum {
  /** read */
  Read = 'read',
  /** vread */
  Vread = 'vread',
  /** update */
  Update = 'update',
  /** patch */
  Patch = 'patch',
  /** delete */
  Delete = 'delete',
  /** history */
  History = 'history',
  /** history-instance */
  HistoryInstance = 'history-instance',
  /** history-type */
  HistoryType = 'history-type',
  /** history-system */
  HistorySystem = 'history-system',
  /** create */
  Create = 'create',
  /** search */
  Search = 'search',
  /** search-type */
  SearchType = 'search-type',
  /** search-system */
  SearchSystem = 'search-system',
  /** search-compartment */
  SearchCompartment = 'search-compartment',
  /** capabilities */
  Capabilities = 'capabilities',
  /** transaction */
  Transaction = 'transaction',
  /** batch */
  Batch = 'batch',
  /** operation */
  Operation = 'operation',
}

export const AuditEventSubTypeValues = ['read', 'vread', 'update', 'patch', 'delete', 'history', 'history-instance', 'history-type', 'history-system', 'create', 'search', 'search-type', 'search-system', 'search-compartment', 'capabilities', 'transaction', 'batch', 'operation'] as const;
