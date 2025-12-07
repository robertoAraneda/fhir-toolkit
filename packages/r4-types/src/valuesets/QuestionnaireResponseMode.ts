/**
 * Questionnaire Response Mode
 * 
 * Codes describing how the QuestionnaireResponse was populated
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaireresponse-mode
 */

export type QuestionnaireResponseModeType = 'ELECTRONIC' | 'VERBAL' | 'WRITTEN';

export enum QuestionnaireResponseModeEnum {
  Electronic = 'ELECTRONIC',
  Verbal = 'VERBAL',
  Written = 'WRITTEN',
}

export const QuestionnaireResponseModeValues = ['ELECTRONIC', 'VERBAL', 'WRITTEN'] as const;
