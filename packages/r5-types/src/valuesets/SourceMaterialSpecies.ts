/**
 * Source Material Species
 * 
 * A species of origin a substance raw material.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-source-material-species
 */

export type SourceMaterialSpeciesType = 'GinkgoBiloba' | 'OleaEuropaea';

export enum SourceMaterialSpeciesEnum {
  /** Ginkgo biloba */
  Ginkgobiloba = 'GinkgoBiloba',
  /** Olea europaea */
  Oleaeuropaea = 'OleaEuropaea',
}

export const SourceMaterialSpeciesValues = ['GinkgoBiloba', 'OleaEuropaea'] as const;
