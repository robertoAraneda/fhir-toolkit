import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * EvidenceVariableCharacteristicTimeFromEvent Interface
 * 
 * Timing in which the characteristic is determined
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristictimefromevent.html
 */
export interface IEvidenceVariableCharacteristicTimeFromEvent extends IBackboneElement {
  /**
   * Human readable description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * The event used as a base point (reference point) in time
   */
  eventCodeableConcept?: ICodeableConcept;

  /**
   * The event used as a base point (reference point) in time
   */
  eventReference?: IReference;

  /**
   * The event used as a base point (reference point) in time
   */
  eventDateTime?: string;
  /**
   * Extension for eventDateTime
   */
  _eventDateTime?: IElement;

  /**
   * The event used as a base point (reference point) in time
   */
  eventId?: string;
  /**
   * Extension for eventId
   */
  _eventId?: IElement;

  /**
   * Used to express the observation at a defined amount of time before or after the event
   */
  quantity?: IQuantity;

  /**
   * Used to express the observation within a period before and/or after the event
   */
  range?: IRange;

}
