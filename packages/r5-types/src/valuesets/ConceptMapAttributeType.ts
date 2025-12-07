/**
 * ConceptMap Attribute Type
 * 
 * The type of a ConceptMap mapping attribute value.
 *
 * @see http://hl7.org/fhir/ValueSet/conceptmap-attribute-type
 */

export type ConceptMapAttributeTypeType = 'code' | 'Coding' | 'string' | 'boolean' | 'Quantity';

export enum ConceptMapAttributeTypeEnum {
  /** code */
  Code = 'code',
  /** Coding */
  Coding = 'Coding',
  /** string */
  String = 'string',
  /** boolean */
  Boolean = 'boolean',
  /** Quantity */
  Quantity = 'Quantity',
}

export const ConceptMapAttributeTypeValues = ['code', 'Coding', 'string', 'boolean', 'Quantity'] as const;
