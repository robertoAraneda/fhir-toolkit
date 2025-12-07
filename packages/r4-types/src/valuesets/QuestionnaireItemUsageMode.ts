/**
 * QuestionnaireItemUsageMode
 * 
 * Identifies the modes of usage of a questionnaire that should enable a particular questionnaire item.
 *
 * @see http://hl7.org/fhir/ValueSet/questionnaire-usage-mode
 */

export type QuestionnaireItemUsageModeType = 'capture-display' | 'capture' | 'display' | 'display-non-empty' | 'capture-display-non-empty';

export enum QuestionnaireItemUsageModeEnum {
  /** Capture & Display */
  CaptureDisplay = 'capture-display',
  /** Capture Only */
  Capture = 'capture',
  /** Display Only */
  Display = 'display',
  /** Display when Answered */
  DisplayNonEmpty = 'display-non-empty',
  /** Capture or, if answered, Display */
  CaptureDisplayNonEmpty = 'capture-display-non-empty',
}

export const QuestionnaireItemUsageModeValues = ['capture-display', 'capture', 'display', 'display-non-empty', 'capture-display-non-empty'] as const;
