/**
 * DefinitionStatus
 * 
 * Codes identifying the lifecycle stage of a definition.
 *
 * @see http://hl7.org/fhir/ValueSet/definition-status
 */

export type DefinitionStatusType = 'draft' | 'active' | 'withdrawn' | 'unknown';

export enum DefinitionStatusEnum {
  /** Draft */
  Draft = 'draft',
  /** Active */
  Active = 'active',
  /** Withdrawn */
  Withdrawn = 'withdrawn',
  /** Unknown */
  Unknown = 'unknown',
}

export const DefinitionStatusValues = ['draft', 'active', 'withdrawn', 'unknown'] as const;
