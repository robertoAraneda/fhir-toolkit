/**
 * Structure Definition Kind
 * 
 * Defines the type of structure that a definition is describing.
 *
 * @see http://hl7.org/fhir/ValueSet/structure-definition-kind
 */

export type StructureDefinitionKindType = 'primitive-type' | 'complex-type' | 'resource' | 'logical';

export enum StructureDefinitionKindEnum {
  /** Primitive Data Type */
  PrimitiveType = 'primitive-type',
  /** Complex Data Type */
  ComplexType = 'complex-type',
  /** Resource */
  Resource = 'resource',
  /** Logical */
  Logical = 'logical',
}

export const StructureDefinitionKindValues = ['primitive-type', 'complex-type', 'resource', 'logical'] as const;
