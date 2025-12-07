/**
 * Flag Category
 * 
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 *
 * @see http://hl7.org/fhir/ValueSet/flag-category
 */

export type FlagCategoryType = 'diet' | 'drug' | 'lab' | 'admin' | 'contact' | 'clinical' | 'behavioral' | 'research' | 'advance-directive' | 'safety';

export enum FlagCategoryEnum {
  /** Diet */
  Diet = 'diet',
  /** Drug */
  Drug = 'drug',
  /** Lab */
  Lab = 'lab',
  /** Administrative */
  Admin = 'admin',
  /** Subject Contact */
  Contact = 'contact',
  /** Clinical */
  Clinical = 'clinical',
  /** Behavioral */
  Behavioral = 'behavioral',
  /** Research */
  Research = 'research',
  /** Advance Directive */
  AdvanceDirective = 'advance-directive',
  /** Safety */
  Safety = 'safety',
}

export const FlagCategoryValues = ['diet', 'drug', 'lab', 'admin', 'contact', 'clinical', 'behavioral', 'research', 'advance-directive', 'safety'] as const;
