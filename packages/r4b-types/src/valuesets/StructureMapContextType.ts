/**
 * StructureMapContextType
 * 
 * How to interpret the context.
 *
 * @see http://hl7.org/fhir/ValueSet/map-context-type
 */

export type StructureMapContextTypeType = 'type' | 'variable';

export enum StructureMapContextTypeEnum {
  /** Type */
  Type = 'type',
  /** Variable */
  Variable = 'variable',
}

export const StructureMapContextTypeValues = ['type', 'variable'] as const;
