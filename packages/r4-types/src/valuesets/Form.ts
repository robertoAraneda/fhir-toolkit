/**
 * Forms
 * 
 * This value set includes a sample set of Forms codes.
 *
 * @see http://hl7.org/fhir/ValueSet/forms
 */

export type FormType = '1' | '2';

export enum FormEnum {
  /** Form #1 */
  _1 = '1',
  /** Form #1 */
  _2 = '2',
}

export const FormValues = ['1', '2'] as const;
