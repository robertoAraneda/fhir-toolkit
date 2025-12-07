/**
 * DiscriminatorType
 * 
 * How an element value is interpreted when discrimination is evaluated.
 *
 * @see http://hl7.org/fhir/ValueSet/discriminator-type
 */

export type DiscriminatorTypeType = 'value' | 'exists' | 'pattern' | 'type' | 'profile';

export enum DiscriminatorTypeEnum {
  /** Value */
  Value = 'value',
  /** Exists */
  Exists = 'exists',
  /** Pattern */
  Pattern = 'pattern',
  /** Type */
  Type = 'type',
  /** Profile */
  Profile = 'profile',
}

export const DiscriminatorTypeValues = ['value', 'exists', 'pattern', 'type', 'profile'] as const;
