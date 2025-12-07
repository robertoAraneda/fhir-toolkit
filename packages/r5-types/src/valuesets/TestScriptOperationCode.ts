/**
 * Test Script Operation Code
 * 
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 *
 * @see http://hl7.org/fhir/ValueSet/testscript-operation-codes
 */

export type TestScriptOperationCodeType = 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history' | 'history-instance' | 'history-type' | 'history-system' | 'create' | 'search' | 'search-type' | 'search-system' | 'search-compartment' | 'capabilities' | 'transaction' | 'batch' | 'operation';

export enum TestScriptOperationCodeEnum {
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

export const TestScriptOperationCodeValues = ['read', 'vread', 'update', 'patch', 'delete', 'history', 'history-instance', 'history-type', 'history-system', 'create', 'search', 'search-type', 'search-system', 'search-compartment', 'capabilities', 'transaction', 'batch', 'operation'] as const;
