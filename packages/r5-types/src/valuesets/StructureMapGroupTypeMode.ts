/**
 * Structure Map Group Type Mode
 * 
 * If this is the default rule set to apply for the source type, or this combination of types.
 *
 * @see http://hl7.org/fhir/ValueSet/map-group-type-mode
 */

export type StructureMapGroupTypeModeType = 'types' | 'type-and-types';

export enum StructureMapGroupTypeModeEnum {
  /** Default for Type Combination */
  Types = 'types',
  /** Default for type + combination */
  TypeAndTypes = 'type-and-types',
}

export const StructureMapGroupTypeModeValues = ['types', 'type-and-types'] as const;
