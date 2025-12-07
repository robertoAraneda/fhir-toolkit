/**
 * ClinicalUseDefinitionType
 * 
 * Overall defining type of this clinical use definition.
 *
 * @see http://hl7.org/fhir/ValueSet/clinical-use-definition-type
 */

export type ClinicalUseDefinitionTypeType = 'indication' | 'contraindication' | 'interaction' | 'undesirable-effect' | 'warning';

export enum ClinicalUseDefinitionTypeEnum {
  /** Indication */
  Indication = 'indication',
  /** Contraindication */
  Contraindication = 'contraindication',
  /** Interaction */
  Interaction = 'interaction',
  /** Undesirable Effect */
  UndesirableEffect = 'undesirable-effect',
  /** Warning */
  Warning = 'warning',
}

export const ClinicalUseDefinitionTypeValues = ['indication', 'contraindication', 'interaction', 'undesirable-effect', 'warning'] as const;
