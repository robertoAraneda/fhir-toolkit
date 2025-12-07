/**
 * Imaging Selection Status
 * 
 * The status of the ImagingSelection.
 *
 * @see http://hl7.org/fhir/ValueSet/imagingselection-status
 */

export type ImagingSelectionStatusType = 'available' | 'entered-in-error' | 'unknown';

export enum ImagingSelectionStatusEnum {
  /** Available */
  Available = 'available',
  /** Entered in Error */
  EnteredInError = 'entered-in-error',
  /** Unknown */
  Unknown = 'unknown',
}

export const ImagingSelectionStatusValues = ['available', 'entered-in-error', 'unknown'] as const;
