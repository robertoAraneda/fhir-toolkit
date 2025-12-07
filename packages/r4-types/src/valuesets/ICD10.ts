/**
 * ICD-10 Codes
 * 
 * This value set includes sample ICD-10 codes.
 *
 * @see http://hl7.org/fhir/ValueSet/icd-10
 */

export type ICD10Type = '123456' | '123457' | '987654' | '123987' | '112233' | '997755' | '321789';

export enum ICD10Enum {
  /** DIAG-1 */
  _123456 = '123456',
  /** DIAG-1a */
  _123457 = '123457',
  /** DIAG-2 */
  _987654 = '987654',
  /** DIAG-3 */
  _123987 = '123987',
  /** DIAG-4 */
  _112233 = '112233',
  /** DIAG-5 */
  _997755 = '997755',
  /** DIAG-6 */
  _321789 = '321789',
}

export const ICD10Values = ['123456', '123457', '987654', '123987', '112233', '997755', '321789'] as const;
