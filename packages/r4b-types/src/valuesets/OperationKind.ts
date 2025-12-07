/**
 * OperationKind
 * 
 * Whether an operation is a normal operation or a query.
 *
 * @see http://hl7.org/fhir/ValueSet/operation-kind
 */

export type OperationKindType = 'operation' | 'query';

export enum OperationKindEnum {
  /** Operation */
  Operation = 'operation',
  /** Query */
  Query = 'query',
}

export const OperationKindValues = ['operation', 'query'] as const;
