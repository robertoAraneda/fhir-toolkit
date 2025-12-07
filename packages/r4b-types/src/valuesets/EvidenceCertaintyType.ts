/**
 * EvidenceCertaintyType
 * 
 * The aspect of quality, confidence, or certainty.
 *
 * @see http://hl7.org/fhir/ValueSet/certainty-type
 */

export type EvidenceCertaintyTypeType = 'Overall' | 'RiskOfBias' | 'Inconsistency' | 'Indirectness' | 'Imprecision' | 'PublicationBias' | 'DoseResponseGradient' | 'PlausibleConfounding' | 'LargeEffect';

export enum EvidenceCertaintyTypeEnum {
  /** Overall certainty */
  Overall = 'Overall',
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

export const EvidenceCertaintyTypeValues = ['Overall', 'RiskOfBias', 'Inconsistency', 'Indirectness', 'Imprecision', 'PublicationBias', 'DoseResponseGradient', 'PlausibleConfounding', 'LargeEffect'] as const;
