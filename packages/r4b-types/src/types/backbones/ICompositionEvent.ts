import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * CompositionEvent Interface
 * 
 * The clinical service(s) being documented
 * 
 *
 * @see https://hl7.org/fhir/R4B/compositionevent.html
 */
export interface ICompositionEvent extends IBackboneElement {
  /**
   * Code(s) that apply to the event being documented
   */
  code?: ICodeableConcept[];

  /**
   * The period covered by the documentation
   */
  period?: IPeriod;

  /**
   * The event(s) being documented
   */
  detail?: IReference<'Resource'>[];

}
