/**
 * Weight Method
 * 
 * The method by which the substance weight was measured.
 *
 * @see http://hl7.org/fhir/ValueSet/substance-weight-method
 */

export type WeightMethodType = 'SDS-PAGE' | 'Calculated' | 'LighScattering' | 'Viscosity' | 'GelPermeationCentrifugation' | 'End-groupAnalysis' | 'End-groupTitration' | 'Size-ExclusionChromatography';

export enum WeightMethodEnum {
  /** SDS-PAGE (sodium dodecyl sulfate-polyacrylamide gel electrophoresis) */
  SdsPage = 'SDS-PAGE',
  /** calculated */
  Calculated = 'Calculated',
  /** light scattering */
  Lighscattering = 'LighScattering',
  /** viscosity */
  Viscosity = 'Viscosity',
  /** gel permeation centrifugation */
  Gelpermeationcentrifugation = 'GelPermeationCentrifugation',
  /** End-group analysis */
  EndGroupanalysis = 'End-groupAnalysis',
  /** End-group titration */
  EndGrouptitration = 'End-groupTitration',
  /** Size-exclusion chromatography */
  SizeExclusionchromatography = 'Size-ExclusionChromatography',
}

export const WeightMethodValues = ['SDS-PAGE', 'Calculated', 'LighScattering', 'Viscosity', 'GelPermeationCentrifugation', 'End-groupAnalysis', 'End-groupTitration', 'Size-ExclusionChromatography'] as const;
