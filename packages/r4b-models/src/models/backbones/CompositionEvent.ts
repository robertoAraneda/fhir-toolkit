import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICompositionEvent,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CompositionEvent */
const COMPOSITION_EVENT_PROPERTIES = [
  'code',
  'period',
  'detail',
] as const;

/**
 * CompositionEvent - The clinical service(s) being documented
 *
 * @see https://hl7.org/fhir/R4B/compositionevent.html
 *
 * @example
 * const compositionEvent = new CompositionEvent({
 *   // ... properties
 * });
 */
export class CompositionEvent extends BackboneElement implements ICompositionEvent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code(s) that apply to the event being documented */
  code?: ICodeableConcept[];

  /** The period covered by the documentation */
  period?: IPeriod;

  /** The event(s) being documented */
  detail?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICompositionEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPOSITION_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CompositionEvent from a JSON object
   */
  static fromJSON(json: ICompositionEvent): CompositionEvent {
    return new CompositionEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CompositionEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICompositionEvent>): CompositionEvent {
    return new CompositionEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CompositionEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICompositionEvent) => Partial<ICompositionEvent>): CompositionEvent {
    const currentData = this.toJSON();
    return new CompositionEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICompositionEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICompositionEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMPOSITION_EVENT_PROPERTIES);
    return result as ICompositionEvent;
  }

  /**
   * Create a deep clone of this CompositionEvent
   */
  clone(): CompositionEvent {
    return new CompositionEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CompositionEvent
   */
  toString(): string {
    const parts: string[] = ['CompositionEvent'];
    return parts.join(', ');
  }
}
