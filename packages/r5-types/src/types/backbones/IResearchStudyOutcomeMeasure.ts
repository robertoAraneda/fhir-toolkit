import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ResearchStudyOutcomeMeasure Interface
 * 
 * A variable measured during the study
 * 
 *
 * @see https://hl7.org/fhir/R4/researchstudyoutcomemeasure.html
 */
export interface IResearchStudyOutcomeMeasure extends IBackboneElement {
  /**
   * Label for the outcome
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * primary | secondary | exploratory
   */
  type?: ICodeableConcept[];

  /**
   * Description of the outcome
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Structured outcome definition
   */
  reference?: IReference<'EvidenceVariable'>;

}
