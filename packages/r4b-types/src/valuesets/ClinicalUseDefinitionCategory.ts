/**
 * ClinicalUseDefinitionCategory
 * 
 * A categorisation for a clinical use information item.
 *
 * @see http://hl7.org/fhir/ValueSet/clinical-use-definition-category
 */

export type ClinicalUseDefinitionCategoryType = 'Pregnancy' | 'Overdose' | 'DriveAndMachines';

export enum ClinicalUseDefinitionCategoryEnum {
  /** Pregnancy and Lactation */
  Pregnancy = 'Pregnancy',
  /** Overdose */
  Overdose = 'Overdose',
  /** Effects on Ability to Drive and Use Machines */
  Driveandmachines = 'DriveAndMachines',
}

export const ClinicalUseDefinitionCategoryValues = ['Pregnancy', 'Overdose', 'DriveAndMachines'] as const;
