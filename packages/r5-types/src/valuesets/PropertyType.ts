/**
 * Property Type
 * 
 * The type of a property value.
 *
 * @see http://hl7.org/fhir/ValueSet/concept-property-type
 */

export type PropertyTypeType = 'code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal';

export enum PropertyTypeEnum {
  /** code (internal reference) */
  Code = 'code',
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
}

export const PropertyTypeValues = ['code', 'Coding', 'string', 'integer', 'boolean', 'dateTime', 'decimal'] as const;
