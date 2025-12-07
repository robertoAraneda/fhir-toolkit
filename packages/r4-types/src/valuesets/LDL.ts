/**
 * L d l codes
 * 
 * LDL Cholesterol codes - measured or calculated
 *
 * @see http://hl7.org/fhir/ValueSet/ldlcholesterol-codes
 */

export type LDLType = '18262-6' | '13457-7';

export enum LDLEnum {
  /** LDL Cholesterol (Assay) */
  _182626 = '18262-6',
  /** Cholesterol in LDL [Mass/volume] in Serum or Plasma by calculation */
  _134577 = '13457-7',
}

export const LDLValues = ['18262-6', '13457-7'] as const;
