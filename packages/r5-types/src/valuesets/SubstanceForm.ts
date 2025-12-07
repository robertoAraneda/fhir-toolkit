/**
 * Substance Form
 * 
 * The substance form, whether it is the base form or a salt.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-form
 */

export type SubstanceFormType = 'salt' | 'base';

export enum SubstanceFormEnum {
  /** Salt of substance */
  Salt = 'salt',
  /** Base of substance */
  Base = 'base',
}

export const SubstanceFormValues = ['salt', 'base'] as const;
