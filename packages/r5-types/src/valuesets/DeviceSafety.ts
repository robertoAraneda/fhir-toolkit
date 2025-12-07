/**
 * Device Safety
 * 
 * Codes used to identify medical devices safety characteristics. These codes are taken from the [NCI Thesaurus](https://ncit.nci.nih.gov/ncitbrowser/pages/home.jsf) and are provided here as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/device-safety
 */

export type DeviceSafetyType = 'C106046' | 'C106045' | 'C106047' | 'C113844' | 'C101673' | 'C106038';

export enum DeviceSafetyEnum {
  /** Magnetic Resonance Conditional */
  C106046 = 'C106046',
  /** Magnetic Resonance Safe */
  C106045 = 'C106045',
  /** Magnetic Resonance Unsafe */
  C106047 = 'C106047',
  /** Labeling does not Contain MRI Safety Information */
  C113844 = 'C113844',
  /** Labeled as Containing Natural Rubber Latex */
  C101673 = 'C101673',
  /** Not Made with Natural Rubber Latex */
  C106038 = 'C106038',
}

export const DeviceSafetyValues = ['C106046', 'C106045', 'C106047', 'C113844', 'C101673', 'C106038'] as const;
