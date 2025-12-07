/**
 * ExtensionContextType
 * 
 * How an extension context is interpreted.
 *
 * @see http://hl7.org/fhir/ValueSet/extension-context-type
 */

export type ExtensionContextTypeType = 'fhirpath' | 'element' | 'extension';

export enum ExtensionContextTypeEnum {
  /** FHIRPath */
  Fhirpath = 'fhirpath',
  /** Element ID */
  Element = 'element',
  /** Extension URL */
  Extension = 'extension',
}

export const ExtensionContextTypeValues = ['fhirpath', 'element', 'extension'] as const;
