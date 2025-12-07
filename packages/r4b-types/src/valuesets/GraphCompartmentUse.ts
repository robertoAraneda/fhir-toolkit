/**
 * GraphCompartmentUse
 * 
 * Defines how a compartment rule is used.
 *
 * @see http://hl7.org/fhir/ValueSet/graph-compartment-use
 */

export type GraphCompartmentUseType = 'condition' | 'requirement';

export enum GraphCompartmentUseEnum {
  /** Condition */
  Condition = 'condition',
  /** Requirement */
  Requirement = 'requirement',
}

export const GraphCompartmentUseValues = ['condition', 'requirement'] as const;
