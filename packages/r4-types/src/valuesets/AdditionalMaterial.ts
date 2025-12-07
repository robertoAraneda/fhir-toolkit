/**
 * Additional Material Codes
 * 
 * This value set includes sample additional material type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/additionalmaterials
 */

export type AdditionalMaterialType = 'xray' | 'image' | 'email' | 'model' | 'document' | 'other';

export enum AdditionalMaterialEnum {
  /** XRay */
  Xray = 'xray',
  /** Image */
  Image = 'image',
  /** Email */
  Email = 'email',
  /** Model */
  Model = 'model',
  /** Document */
  Document = 'document',
  /** Other */
  Other = 'other',
}

export const AdditionalMaterialValues = ['xray', 'image', 'email', 'model', 'document', 'other'] as const;
