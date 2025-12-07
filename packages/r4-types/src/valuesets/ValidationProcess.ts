/**
 * Validation-process
 * 
 * The primary process by which the target is validated
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-validation-process
 */

export type ValidationProcessType = 'edit-check' | 'valueset' | 'primary' | 'multi' | 'standalone' | 'in-context';

export enum ValidationProcessEnum {
  /** edit check */
  EditCheck = 'edit-check',
  /** value set */
  Valueset = 'valueset',
  /** primary source */
  Primary = 'primary',
  /** multiple sources */
  Multi = 'multi',
  /** standalone */
  Standalone = 'standalone',
  /** in context */
  InContext = 'in-context',
}

export const ValidationProcessValues = ['edit-check', 'valueset', 'primary', 'multi', 'standalone', 'in-context'] as const;
