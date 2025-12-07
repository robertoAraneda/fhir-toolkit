import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * SpecimenProcessing Interface
 * 
 * Processing and processing step details
 * 
 *
 * @see https://hl7.org/fhir/R4/specimenprocessing.html
 */
export interface ISpecimenProcessing extends IBackboneElement {
  /**
   * Textual description of procedure
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Indicates the treatment step  applied to the specimen
   */
  method?: ICodeableConcept;

  /**
   * Material used in the processing step
   */
  additive?: IReference<'Substance'>[];

  /**
   * Date and time of specimen processing
   */
  timeDateTime?: string;
  /**
   * Extension for timeDateTime
   */
  _timeDateTime?: IElement;

  /**
   * Date and time of specimen processing
   */
  timePeriod?: IPeriod;

}
