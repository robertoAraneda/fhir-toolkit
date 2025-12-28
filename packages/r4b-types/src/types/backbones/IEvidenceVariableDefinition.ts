import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';

/**
 * EvidenceVariableDefinition Interface
 * 
 * Evidence variable such as population, exposure, or outcome
 * 
 *
 * @see https://hl7.org/fhir/R4B/evidencevariabledefinition.html
 */
export interface IEvidenceVariableDefinition extends IBackboneElement {
  /**
   * A text description or summary of the variable
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Footnotes and/or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * population | subpopulation | exposure | referenceExposure | measuredVariable | confounder
   */
  variableRole: ICodeableConcept;

  /**
   * Definition of the actual variable related to the statistic(s)
   */
  observed?: IReference<'Group' | 'EvidenceVariable'>;

  /**
   * Definition of the intended variable related to the Evidence
   */
  intended?: IReference<'Group' | 'EvidenceVariable'>;

  /**
   * low | moderate | high | exact
   */
  directnessMatch?: ICodeableConcept;

}
