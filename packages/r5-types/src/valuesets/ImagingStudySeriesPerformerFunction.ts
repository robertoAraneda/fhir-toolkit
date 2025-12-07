/**
 * ImagingStudy series performer function
 * 
 * Performer function of an agent in an imaging study series
 *
 * @see http://hl7.org/fhir/ValueSet/series-performer-function
 */

export type ImagingStudySeriesPerformerFunctionType = 'CON' | 'VRF' | 'PRF' | 'SPRF' | 'REF';

export enum ImagingStudySeriesPerformerFunctionEnum {
  /** consultant */
  Con = 'CON',
  /** verifier */
  Vrf = 'VRF',
  /** performer */
  Prf = 'PRF',
  /** secondary performer */
  Sprf = 'SPRF',
  /** referrer */
  Ref = 'REF',
}

export const ImagingStudySeriesPerformerFunctionValues = ['CON', 'VRF', 'PRF', 'SPRF', 'REF'] as const;
