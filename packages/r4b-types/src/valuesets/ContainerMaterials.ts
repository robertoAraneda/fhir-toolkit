/**
 * Types of material for specimen containers
 * 
 * This value set includes SNOMED CT codes for materials that specimen containers are made of
 *
 * @see http://hl7.org/fhir/ValueSet/container-material
 */

export type ContainerMaterialsType = '32039001' | '61088005' | '425620007';

export enum ContainerMaterialsEnum {
  /** glass */
  _32039001 = '32039001',
  /** plastic */
  _61088005 = '61088005',
  /** metal */
  _425620007 = '425620007',
}

export const ContainerMaterialsValues = ['32039001', '61088005', '425620007'] as const;
