import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IEvidenceVariableCharacteristicTimeFromEvent,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceVariableCharacteristicTimeFromEvent */
const EVIDENCE_VARIABLE_CHARACTERISTIC_TIME_FROM_EVENT_PROPERTIES = [
  'description',
  '_description',
  'note',
  'eventCodeableConcept',
  'eventReference',
  'eventDateTime',
  '_eventDateTime',
  'eventId',
  '_eventId',
  'quantity',
  'range',
] as const;

/**
 * EvidenceVariableCharacteristicTimeFromEvent - Timing in which the characteristic is determined
 *
 * @see https://hl7.org/fhir/R5/evidencevariablecharacteristictimefromevent.html
 *
 * @example
 * const evidenceVariableCharacteristicTimeFromEvent = new EvidenceVariableCharacteristicTimeFromEvent({
 *   // ... properties
 * });
 */
export class EvidenceVariableCharacteristicTimeFromEvent extends BackboneElement implements IEvidenceVariableCharacteristicTimeFromEvent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Human readable description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  note?: IAnnotation[];

  /** The event used as a base point (reference point) in time */
  eventCodeableConcept?: ICodeableConcept;

  /** The event used as a base point (reference point) in time */
  eventReference?: IReference;

  /** The event used as a base point (reference point) in time */
  eventDateTime?: string;

  /** Extension for eventDateTime */
  _eventDateTime?: IElement;

  /** The event used as a base point (reference point) in time */
  eventId?: string;

  /** Extension for eventId */
  _eventId?: IElement;

  /** Used to express the observation at a defined amount of time before or after the event */
  quantity?: IQuantity;

  /** Used to express the observation within a period before and/or after the event */
  range?: IRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableCharacteristicTimeFromEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_CHARACTERISTIC_TIME_FROM_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableCharacteristicTimeFromEvent from a JSON object
   */
  static fromJSON(json: IEvidenceVariableCharacteristicTimeFromEvent): EvidenceVariableCharacteristicTimeFromEvent {
    return new EvidenceVariableCharacteristicTimeFromEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableCharacteristicTimeFromEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableCharacteristicTimeFromEvent>): EvidenceVariableCharacteristicTimeFromEvent {
    return new EvidenceVariableCharacteristicTimeFromEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableCharacteristicTimeFromEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableCharacteristicTimeFromEvent) => Partial<IEvidenceVariableCharacteristicTimeFromEvent>): EvidenceVariableCharacteristicTimeFromEvent {
    const currentData = this.toJSON();
    return new EvidenceVariableCharacteristicTimeFromEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableCharacteristicTimeFromEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableCharacteristicTimeFromEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_CHARACTERISTIC_TIME_FROM_EVENT_PROPERTIES);
    return result as IEvidenceVariableCharacteristicTimeFromEvent;
  }

  /**
   * Create a deep clone of this EvidenceVariableCharacteristicTimeFromEvent
   */
  clone(): EvidenceVariableCharacteristicTimeFromEvent {
    return new EvidenceVariableCharacteristicTimeFromEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableCharacteristicTimeFromEvent
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableCharacteristicTimeFromEvent'];
    return parts.join(', ');
  }
}
