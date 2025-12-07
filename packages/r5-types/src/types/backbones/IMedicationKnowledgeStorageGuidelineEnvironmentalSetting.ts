import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * MedicationKnowledgeStorageGuidelineEnvironmentalSetting Interface
 * 
 * Setting or value of environment for adequate storage
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgestorageguidelineenvironmentalsetting.html
 */
export interface IMedicationKnowledgeStorageGuidelineEnvironmentalSetting extends IBackboneElement {
  /**
   * Categorization of the setting
   */
  type: ICodeableConcept;

  /**
   * Value of the setting
   */
  valueQuantity?: IQuantity;

  /**
   * Value of the setting
   */
  valueRange?: IRange;

  /**
   * Value of the setting
   */
  valueCodeableConcept?: ICodeableConcept;

}
