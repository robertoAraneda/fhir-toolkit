/**
 * Observation Data Type
 * 
 * Permitted data type for observation value.
 *
 * @see http://hl7.org/fhir/ValueSet/permitted-data-type
 */

export type ObservationDataTypeType = 'Quantity' | 'CodeableConcept' | 'string' | 'boolean' | 'integer' | 'Range' | 'Ratio' | 'SampledData' | 'time' | 'dateTime' | 'Period';

export enum ObservationDataTypeEnum {
  /** Quantity */
  Quantity = 'Quantity',
  /** CodeableConcept */
  Codeableconcept = 'CodeableConcept',
  /** string */
  String = 'string',
  /** boolean */
  Boolean = 'boolean',
  /** integer */
  Integer = 'integer',
  /** Range */
  Range = 'Range',
  /** Ratio */
  Ratio = 'Ratio',
  /** SampledData */
  Sampleddata = 'SampledData',
  /** time */
  Time = 'time',
  /** dateTime */
  Datetime = 'dateTime',
  /** Period */
  Period = 'Period',
}

export const ObservationDataTypeValues = ['Quantity', 'CodeableConcept', 'string', 'boolean', 'integer', 'Range', 'Ratio', 'SampledData', 'time', 'dateTime', 'Period'] as const;
