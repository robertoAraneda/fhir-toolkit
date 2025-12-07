import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * EncounterReason Interface
 * 
 * The list of medical reasons that are expected to be addressed during the episode of care
 * 
 *
 * @see https://hl7.org/fhir/R4/encounterreason.html
 */
export interface IEncounterReason extends IBackboneElement {
  /**
   * What the reason value should be used for/as
   */
  use?: ICodeableConcept[];

  /**
   * Reason the encounter takes place (core or reference)
   */
  value?: ICodeableReference[];

}
