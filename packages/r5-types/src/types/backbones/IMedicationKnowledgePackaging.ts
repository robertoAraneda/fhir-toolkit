import type { IBackboneElement, IReference } from '../../base/index.js';
import type { IMedicationKnowledgeCost } from './IMedicationKnowledgeCost.js';

/**
 * MedicationKnowledgePackaging Interface
 * 
 * Details about packaged medications
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgepackaging.html
 */
export interface IMedicationKnowledgePackaging extends IBackboneElement {
  /**
   * Cost of the packaged medication
   */
  cost?: IMedicationKnowledgeCost[];

  /**
   * The packaged medication that is being priced
   */
  packagedProduct?: IReference<'PackagedProductDefinition'>;

}
