/**
 * CompositionAttestationMode
 * 
 * The way in which a person authenticated a composition.
 *
 * @see http://hl7.org/fhir/ValueSet/composition-attestation-mode
 */

export type CompositionAttestationModeType = 'personal' | 'professional' | 'legal' | 'official';

export enum CompositionAttestationModeEnum {
  /** Personal */
  Personal = 'personal',
  /** Professional */
  Professional = 'professional',
  /** Legal */
  Legal = 'legal',
  /** Official */
  Official = 'official',
}

export const CompositionAttestationModeValues = ['personal', 'professional', 'legal', 'official'] as const;
