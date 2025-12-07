/**
 * SourceMaterialType
 * 
 * A classification that provides the origin of the substance raw material.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-source-material-type
 */

export type SourceMaterialTypeType = 'Animal' | 'Plant' | 'Mineral';

export enum SourceMaterialTypeEnum {
  /** animal */
  Animal = 'Animal',
  /** plant */
  Plant = 'Plant',
  /** mineral */
  Mineral = 'Mineral',
}

export const SourceMaterialTypeValues = ['Animal', 'Plant', 'Mineral'] as const;
