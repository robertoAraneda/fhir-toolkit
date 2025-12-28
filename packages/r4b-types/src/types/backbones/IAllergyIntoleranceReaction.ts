import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { AllergyIntoleranceSeverityType } from '../../valuesets/index.js';

/**
 * AllergyIntoleranceReaction Interface
 * 
 * Adverse Reaction Events linked to exposure to substance
 * 
 *
 * @see https://hl7.org/fhir/R4B/allergyintolerancereaction.html
 */
export interface IAllergyIntoleranceReaction extends IBackboneElement {
  /**
   * Specific substance or pharmaceutical product considered to be responsible for event
   */
  substance?: ICodeableConcept;

  /**
   * Clinical symptoms/signs associated with the Event
   */
  manifestation: ICodeableConcept[];

  /**
   * Description of the event as a whole
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Date(/time) when manifestations showed
   */
  onset?: string;
  /**
   * Extension for onset
   */
  _onset?: IElement;

  /**
   * mild | moderate | severe (of event as a whole)
   */
  severity?: AllergyIntoleranceSeverityType;
  /**
   * Extension for severity
   */
  _severity?: IElement;

  /**
   * How the subject was exposed to the substance
   */
  exposureRoute?: ICodeableConcept;

  /**
   * Text about event not captured in other fields
   */
  note?: IAnnotation[];

}
