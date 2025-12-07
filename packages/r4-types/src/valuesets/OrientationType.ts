/**
 * orientationType
 * 
 * Type for orientation.
 *
 * @see http://hl7.org/fhir/ValueSet/orientation-type
 */

export type OrientationTypeType = 'sense' | 'antisense';

export enum OrientationTypeEnum {
  /** Sense orientation of referenceSeq */
  Sense = 'sense',
  /** Antisense orientation of referenceSeq */
  Antisense = 'antisense',
}

export const OrientationTypeValues = ['sense', 'antisense'] as const;
