/**
 * UnknownContentCode
 * 
 * A code that indicates whether an application accepts unknown elements or extensions when reading resources.
 *
 * @see http://hl7.org/fhir/ValueSet/unknown-content-code
 */

export type UnknownContentCodeType = 'no' | 'extensions' | 'elements' | 'both';

export enum UnknownContentCodeEnum {
  /** Neither Elements or Extensions */
  No = 'no',
  /** Unknown Extensions */
  Extensions = 'extensions',
  /** Unknown Elements */
  Elements = 'elements',
  /** Unknown Elements and Extensions */
  Both = 'both',
}

export const UnknownContentCodeValues = ['no', 'extensions', 'elements', 'both'] as const;
