/**
 * Claim Information Category Codes
 * 
 * This value set includes sample Information Category codes.
 *
 * @see http://hl7.org/fhir/ValueSet/claim-informationcategory
 */

export type ClaimInformationCategoryType = 'info' | 'discharge' | 'onset' | 'related' | 'exception' | 'material' | 'attachment' | 'missingtooth' | 'prosthesis' | 'other' | 'hospitalized' | 'employmentimpacted' | 'externalcause' | 'patientreasonforvisit';

export enum ClaimInformationCategoryEnum {
  /** Information */
  Info = 'info',
  /** Discharge */
  Discharge = 'discharge',
  /** Onset */
  Onset = 'onset',
  /** Related Services */
  Related = 'related',
  /** Exception */
  Exception = 'exception',
  /** Materials Forwarded */
  Material = 'material',
  /** Attachment */
  Attachment = 'attachment',
  /** Missing Tooth */
  Missingtooth = 'missingtooth',
  /** Prosthesis */
  Prosthesis = 'prosthesis',
  /** Other */
  Other = 'other',
  /** Hospitalized */
  Hospitalized = 'hospitalized',
  /** EmploymentImpacted */
  Employmentimpacted = 'employmentimpacted',
  /** External Caause */
  Externalcause = 'externalcause',
  /** Patient Reason for Visit */
  Patientreasonforvisit = 'patientreasonforvisit',
}

export const ClaimInformationCategoryValues = ['info', 'discharge', 'onset', 'related', 'exception', 'material', 'attachment', 'missingtooth', 'prosthesis', 'other', 'hospitalized', 'employmentimpacted', 'externalcause', 'patientreasonforvisit'] as const;
