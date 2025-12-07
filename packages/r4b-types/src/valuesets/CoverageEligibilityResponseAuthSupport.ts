/**
 * CoverageEligibilityResponse Auth Support Codes
 * 
 * This value set includes CoverageEligibilityResponse Auth Support codes.
 *
 * @see http://hl7.org/fhir/ValueSet/coverageeligibilityresponse-ex-auth-support
 */

export type CoverageEligibilityResponseAuthSupportType = 'laborder' | 'labreport' | 'diagnosticimageorder' | 'diagnosticimagereport' | 'professionalreport' | 'accidentreport' | 'model' | 'picture';

export enum CoverageEligibilityResponseAuthSupportEnum {
  /** Lab Order */
  Laborder = 'laborder',
  /** Lab Report */
  Labreport = 'labreport',
  /** Diagnostic Image Order */
  Diagnosticimageorder = 'diagnosticimageorder',
  /** Diagnostic Image Report */
  Diagnosticimagereport = 'diagnosticimagereport',
  /** Professional Report */
  Professionalreport = 'professionalreport',
  /** Accident Report */
  Accidentreport = 'accidentreport',
  /** Model */
  Model = 'model',
  /** Picture */
  Picture = 'picture',
}

export const CoverageEligibilityResponseAuthSupportValues = ['laborder', 'labreport', 'diagnosticimageorder', 'diagnosticimagereport', 'professionalreport', 'accidentreport', 'model', 'picture'] as const;
