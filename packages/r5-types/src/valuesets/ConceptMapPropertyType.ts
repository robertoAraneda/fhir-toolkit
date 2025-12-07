/**
 * ConceptMap Property Type
 * 
 * The type of a ConceptMap mapping property value.
 *
 * @see http://hl7.org/fhir/ValueSet/conceptmap-property-type
 */

export type ConceptMapPropertyTypeType = 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal' | 'code';

export enum ConceptMapPropertyTypeEnum {
  /** Coding (external reference) */
  Coding = 'Coding',
  /** string */
  String = 'string',
  /** integer */
  Integer = 'integer',
  /** boolean */
  Boolean = 'boolean',
  /** dateTime */
  Datetime = 'dateTime',
  /** decimal */
  Decimal = 'decimal',
  /** code */
  Code = 'code',
}

export const ConceptMapPropertyTypeValues = ['Coding', 'string', 'integer', 'boolean', 'dateTime', 'decimal', 'code'] as const;
