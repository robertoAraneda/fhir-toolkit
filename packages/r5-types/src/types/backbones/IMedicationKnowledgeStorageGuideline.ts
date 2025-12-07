import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IMedicationKnowledgeStorageGuidelineEnvironmentalSetting } from './IMedicationKnowledgeStorageGuidelineEnvironmentalSetting.js';

/**
 * MedicationKnowledgeStorageGuideline Interface
 * 
 * How the medication should be stored
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgestorageguideline.html
 */
export interface IMedicationKnowledgeStorageGuideline extends IBackboneElement {
  /**
   * Reference to additional information
   */
  reference?: string;
  /**
   * Extension for reference
   */
  _reference?: IElement;

  /**
   * Additional storage notes
   */
  note?: IAnnotation[];

  /**
   * Duration remains stable
   */
  stabilityDuration?: IDuration;

  /**
   * Setting or value of environment for adequate storage
   */
  environmentalSetting?: IMedicationKnowledgeStorageGuidelineEnvironmentalSetting[];

}
