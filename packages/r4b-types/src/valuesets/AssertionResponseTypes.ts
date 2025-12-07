/**
 * AssertionResponseTypes
 * 
 * The type of response code to use for assertion.
 *
 * @see http://hl7.org/fhir/ValueSet/assert-response-code-types
 */

export type AssertionResponseTypesType = 'okay' | 'created' | 'noContent' | 'notModified' | 'bad' | 'forbidden' | 'notFound' | 'methodNotAllowed' | 'conflict' | 'gone' | 'preconditionFailed' | 'unprocessable';

export enum AssertionResponseTypesEnum {
  /** okay */
  Okay = 'okay',
  /** created */
  Created = 'created',
  /** noContent */
  Nocontent = 'noContent',
  /** notModified */
  Notmodified = 'notModified',
  /** bad */
  Bad = 'bad',
  /** forbidden */
  Forbidden = 'forbidden',
  /** notFound */
  Notfound = 'notFound',
  /** methodNotAllowed */
  Methodnotallowed = 'methodNotAllowed',
  /** conflict */
  Conflict = 'conflict',
  /** gone */
  Gone = 'gone',
  /** preconditionFailed */
  Preconditionfailed = 'preconditionFailed',
  /** unprocessable */
  Unprocessable = 'unprocessable',
}

export const AssertionResponseTypesValues = ['okay', 'created', 'noContent', 'notModified', 'bad', 'forbidden', 'notFound', 'methodNotAllowed', 'conflict', 'gone', 'preconditionFailed', 'unprocessable'] as const;
