/**
 * CertaintySubcomponentType
 * 
 * The subcomponent classification of quality of evidence rating systems.
 *
 * @see http://hl7.org/fhir/ValueSet/certainty-subcomponent-type
 */

export type CertaintySubcomponentTypeType = 'RiskOfBias' | 'Inconsistency' | 'Indirectness' | 'Imprecision' | 'PublicationBias' | 'DoseResponseGradient' | 'PlausibleConfounding' | 'LargeEffect';

export enum CertaintySubcomponentTypeEnum {
  /** Risk of bias */
  Riskofbias = 'RiskOfBias',
  /** Inconsistency */
  Inconsistency = 'Inconsistency',
  /** Indirectness */
  Indirectness = 'Indirectness',
  /** Imprecision */
  Imprecision = 'Imprecision',
  /** Publication bias */
  Publicationbias = 'PublicationBias',
  /** Dose response gradient */
  Doseresponsegradient = 'DoseResponseGradient',
  /** Plausible confounding */
  Plausibleconfounding = 'PlausibleConfounding',
  /** Large effect */
  Largeeffect = 'LargeEffect',
}

export const CertaintySubcomponentTypeValues = ['RiskOfBias', 'Inconsistency', 'Indirectness', 'Imprecision', 'PublicationBias', 'DoseResponseGradient', 'PlausibleConfounding', 'LargeEffect'] as const;
