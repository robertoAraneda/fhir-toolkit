/**
 * Biologically derived product dispense - performer function
 * 
 * Biologically derived product dispense - performer function
 *
 * @see http://hl7.org/fhir/ValueSet/biologicallyderivedproductdispense-performer-function
 */

export type BiologicallyDerivedProductDispensePerformerFunctionType = 'group-and-type' | 'antibody-screen' | 'antibody-identification' | 'crossmatch' | 'release' | 'transport' | 'receipt';

export enum BiologicallyDerivedProductDispensePerformerFunctionEnum {
  /** Group and Type */
  GroupAndType = 'group-and-type',
  /** Antibody Screen */
  AntibodyScreen = 'antibody-screen',
  /** Antibody Identification */
  AntibodyIdentification = 'antibody-identification',
  /** Crossmatch */
  Crossmatch = 'crossmatch',
  /** Release */
  Release = 'release',
  /** Transport */
  Transport = 'transport',
  /** Receipt */
  Receipt = 'receipt',
}

export const BiologicallyDerivedProductDispensePerformerFunctionValues = ['group-and-type', 'antibody-screen', 'antibody-identification', 'crossmatch', 'release', 'transport', 'receipt'] as const;
