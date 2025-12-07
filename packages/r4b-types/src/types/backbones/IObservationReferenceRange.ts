import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * ObservationReferenceRange Interface
 * 
 * Provides guide for interpretation
 * 
 *
 * @see https://hl7.org/fhir/R4/observationreferencerange.html
 */
export interface IObservationReferenceRange extends IBackboneElement {
  /**
   * Low Range, if relevant
   */
  low?: IQuantity;

  /**
   * High Range, if relevant
   */
  high?: IQuantity;

  /**
   * Reference range qualifier
   */
  type?: ICodeableConcept;

  /**
   * Reference range population
   */
  appliesTo?: ICodeableConcept[];

  /**
   * Applicable age range, if relevant
   */
  age?: IRange;

  /**
   * Text based reference range in an observation
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
