import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { TriggeredBytypeType } from '../../valuesets/index.js';

/**
 * ObservationTriggeredBy Interface
 * 
 * Triggering observation(s)
 * 
 *
 * @see https://hl7.org/fhir/R4/observationtriggeredby.html
 */
export interface IObservationTriggeredBy extends IBackboneElement {
  /**
   * Triggering observation
   */
  observation: IReference<'Observation'>;

  /**
   * reflex | repeat | re-run
   */
  type: TriggeredBytypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Reason that the observation was triggered
   */
  reason?: string;
  /**
   * Extension for reason
   */
  _reason?: IElement;

}
