/**
 * SourceMaterialPart
 * 
 * An anatomical origin of the source material within an organism.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-source-material-part
 */

export type SourceMaterialPartType = 'Animal' | 'Plant' | 'Mineral';

export enum SourceMaterialPartEnum {
  /** animal */
  Animal = 'Animal',
  /** plant */
  Plant = 'Plant',
  /** mineral */
  Mineral = 'Mineral',
}

export const SourceMaterialPartValues = ['Animal', 'Plant', 'Mineral'] as const;
