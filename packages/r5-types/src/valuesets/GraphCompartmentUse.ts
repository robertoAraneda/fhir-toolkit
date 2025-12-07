/**
 * Graph Compartment Use
 * 
 * Defines how a compartment rule is used.
 *
 * @see http://hl7.org/fhir/ValueSet/graph-compartment-use
 */

export type GraphCompartmentUseType = 'where' | 'requires';

export enum GraphCompartmentUseEnum {
  /** Where */
  Where = 'where',
  /** requires */
  Requires = 'requires',
}

export const GraphCompartmentUseValues = ['where', 'requires'] as const;
