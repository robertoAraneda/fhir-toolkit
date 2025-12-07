/**
 * Vision Base
 * 
 * A coded concept listing the base codes.
 *
 * @see http://hl7.org/fhir/ValueSet/vision-base-codes
 */

export type VisionBaseType = 'up' | 'down' | 'in' | 'out';

export enum VisionBaseEnum {
  /** Up */
  Up = 'up',
  /** Down */
  Down = 'down',
  /** In */
  In = 'in',
  /** Out */
  Out = 'out',
}

export const VisionBaseValues = ['up', 'down', 'in', 'out'] as const;
