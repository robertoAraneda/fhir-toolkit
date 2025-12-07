/**
 * Biologically Derived Product Codes
 * 
 * This value set enumerates ISBT 128 Product Description Codes© published by ICCBBA as a part of the ISBT 128 standard. These codes support characterization and classification of medical products of human origin inclusive of processing conditions such as additives, volumes and handling conditions.
 *
 * @see http://hl7.org/fhir/ValueSet/biologicallyderived-productcodes
 */

export type BiologicallyDerivedProductType = 'e0398' | 's1128' | 's1194' | 's1195' | 's1310' | 's1398' | 's2598' | 'e4377' | 't1396';

export enum BiologicallyDerivedProductEnum {
  /** RED BLOOD CELLS|CPD>AS5/450mL/refg|Irr|ResLeu */
  E0398 = 'e0398',
  /** HPC, APHERESIS/Citrate/XX/refg/Mobilized */
  S1128 = 's1128',
  /** HPC, APHERESIS|NS/XX/<=-120C|10% DMSO|Cryopreserved|Mobilized */
  S1194 = 's1194',
  /** HPC, APHERESIS|NS/XX/<=-120C|5% DMSO|Cryopreserved|Mobilized */
  S1195 = 's1195',
  /** HPC, APHERESIS|None/XX/refg|3rd Party Comp:Yes|Other Additives:Yes|Mobilized|CD34 enriched */
  S1310 = 's1310',
  /** HPC, MARROW|NS/XX/rt|Plasma reduced */
  S1398 = 's1398',
  /** HPC, MARROW|NS/XX/<=-150C|10% DMSO|3rd Party Comp:Yes|Cryopreserved|RBC reduced */
  S2598 = 's2598',
  /** Apheresis RED BLOOD CELLS|ACD-A/XX/refg|Irradiated|1st container */
  E4377 = 'e4377',
  /** BONE, FEMUR|Frozen|Right|Radiation sterilization */
  T1396 = 't1396',
}

export const BiologicallyDerivedProductValues = ['e0398', 's1128', 's1194', 's1195', 's1310', 's1398', 's2598', 'e4377', 't1396'] as const;
