/**
 * StructureMapGroupTypeMode
 * 
 * If this is the default rule set to apply for the source type, or this combination of types.
 *
 * @see http://hl7.org/fhir/ValueSet/map-group-type-mode
 */

export type StructureMapGroupTypeModeType = 'none' | 'types' | 'type-and-types';

export enum StructureMapGroupTypeModeEnum {
  /** Not a Default */
  None = 'none',
  /** Default for Type Combination */
  Types = 'types',
  /** Default for type + combination */
  TypeAndTypes = 'type-and-types',
}

export const StructureMapGroupTypeModeValues = ['none', 'types', 'type-and-types'] as const;
