import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * BiologicallyDerivedProductProcessing Interface
 * 
 * Any processing of the product during collection
 * 
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproductprocessing.html
 */
export interface IBiologicallyDerivedProductProcessing extends IBackboneElement {
  /**
   * Description of of processing
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Procesing code
   */
  procedure?: ICodeableConcept;

  /**
   * Substance added during processing
   */
  additive?: IReference<'Substance'>;

  /**
   * Time of processing
   */
  timeDateTime?: string;
  /**
   * Extension for timeDateTime
   */
  _timeDateTime?: IElement;

  /**
   * Time of processing
   */
  timePeriod?: IPeriod;

}
