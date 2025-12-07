import type { IElement, IReference } from '../../base/index.js';
import type { IDataRequirement } from './IDataRequirement.js';
import type { IExpression } from './IExpression.js';
import type { ITiming } from './ITiming.js';
import type { TriggerTypeType } from '../../valuesets/index.js';

/**
 * TriggerDefinition Interface
 * 
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 * 
 *
 * @see https://hl7.org/fhir/R4/triggerdefinition.html
 */
export interface ITriggerDefinition extends IElement {
  /**
   * named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended
   */
  type: TriggerTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Name or URI that identifies the event
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Timing of the event
   */
  timingTiming?: ITiming;

  /**
   * Timing of the event
   */
  timingReference?: IReference;

  /**
   * Timing of the event
   */
  timingDate?: string;
  /**
   * Extension for timingDate
   */
  _timingDate?: IElement;

  /**
   * Timing of the event
   */
  timingDateTime?: string;
  /**
   * Extension for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * Triggering data of the event (multiple = 'and')
   */
  data?: IDataRequirement[];

  /**
   * Whether the event triggers (boolean expression)
   */
  condition?: IExpression;

}
