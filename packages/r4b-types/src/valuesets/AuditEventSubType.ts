/**
 * Audit Event Sub-Type
 * 
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-sub-type
 */

export type AuditEventSubTypeType = '110120' | '110121' | '110122' | '110123' | '110124' | '110125' | '110126' | '110127' | '110128' | '110129' | '110130' | '110131' | '110132' | '110133' | '110134' | '110135' | '110136' | '110137' | '110138' | '110139' | '110140' | '110141' | '110142' | 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history' | 'history-instance' | 'history-type' | 'history-system' | 'create' | 'search' | 'search-type' | 'search-system' | 'capabilities' | 'transaction' | 'batch' | 'operation';

export enum AuditEventSubTypeEnum {
  _110120 = '110120',
  _110121 = '110121',
  _110122 = '110122',
  _110123 = '110123',
  _110124 = '110124',
  _110125 = '110125',
  _110126 = '110126',
  _110127 = '110127',
  _110128 = '110128',
  _110129 = '110129',
  _110130 = '110130',
  _110131 = '110131',
  _110132 = '110132',
  _110133 = '110133',
  _110134 = '110134',
  _110135 = '110135',
  _110136 = '110136',
  _110137 = '110137',
  _110138 = '110138',
  _110139 = '110139',
  _110140 = '110140',
  _110141 = '110141',
  _110142 = '110142',
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
  /** capabilities */
  Capabilities = 'capabilities',
  /** transaction */
  Transaction = 'transaction',
  /** batch */
  Batch = 'batch',
  /** operation */
  Operation = 'operation',
}

export const AuditEventSubTypeValues = ['110120', '110121', '110122', '110123', '110124', '110125', '110126', '110127', '110128', '110129', '110130', '110131', '110132', '110133', '110134', '110135', '110136', '110137', '110138', '110139', '110140', '110141', '110142', 'read', 'vread', 'update', 'patch', 'delete', 'history', 'history-instance', 'history-type', 'history-system', 'create', 'search', 'search-type', 'search-system', 'capabilities', 'transaction', 'batch', 'operation'] as const;
