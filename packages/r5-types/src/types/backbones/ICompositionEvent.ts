import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * CompositionEvent Interface
 * 
 * The clinical service(s) being documented
 * 
 *
 * @see https://hl7.org/fhir/R5/compositionevent.html
 */
export interface ICompositionEvent extends IBackboneElement {
  /**
   * The period covered by the documentation
   */
  period?: IPeriod;

  /**
   * The event(s) being documented, as code(s), reference(s), or both
   */
  detail?: ICodeableReference[];

}
