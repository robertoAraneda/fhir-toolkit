/**
 * CapabilityStatementKind
 * 
 * How a capability statement is intended to be used.
 *
 * @see http://hl7.org/fhir/ValueSet/capability-statement-kind
 */

export type CapabilityStatementKindType = 'instance' | 'capability' | 'requirements';

export enum CapabilityStatementKindEnum {
  /** Instance */
  Instance = 'instance',
  /** Capability */
  Capability = 'capability',
  /** Requirements */
  Requirements = 'requirements',
}

export const CapabilityStatementKindValues = ['instance', 'capability', 'requirements'] as const;
