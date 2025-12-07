/**
 * VisionEyes
 * 
 * A coded concept listing the eye codes.
 *
 * @see http://hl7.org/fhir/ValueSet/vision-eye-codes
 */

export type VisionEyesType = 'right' | 'left';

export enum VisionEyesEnum {
  /** Right Eye */
  Right = 'right',
  /** Left Eye */
  Left = 'left',
}

export const VisionEyesValues = ['right', 'left'] as const;
