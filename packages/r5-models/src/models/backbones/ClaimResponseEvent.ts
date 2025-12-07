import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimResponseEvent,
  ICodeableConcept,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponseEvent */
const CLAIM_RESPONSE_EVENT_PROPERTIES = [
  'type',
  'whenDateTime',
  '_whenDateTime',
  'whenPeriod',
] as const;

/**
 * ClaimResponseEvent - Event information
 *
 * @see https://hl7.org/fhir/R4/claimresponseevent.html
 *
 * @example
 * const claimResponseEvent = new ClaimResponseEvent({
 *   // ... properties
 * });
 */
export class ClaimResponseEvent extends BackboneElement implements IClaimResponseEvent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specific event */
  type: ICodeableConcept;

  /** Occurance date or period */
  whenDateTime?: string;

  /** Extension for whenDateTime */
  _whenDateTime?: IElement;

  /** Occurance date or period */
  whenPeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimResponseEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponseEvent from a JSON object
   */
  static fromJSON(json: IClaimResponseEvent): ClaimResponseEvent {
    return new ClaimResponseEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponseEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponseEvent>): ClaimResponseEvent {
    return new ClaimResponseEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponseEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponseEvent) => Partial<IClaimResponseEvent>): ClaimResponseEvent {
    const currentData = this.toJSON();
    return new ClaimResponseEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponseEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponseEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_EVENT_PROPERTIES);
    return result as IClaimResponseEvent;
  }

  /**
   * Create a deep clone of this ClaimResponseEvent
   */
  clone(): ClaimResponseEvent {
    return new ClaimResponseEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponseEvent
   */
  toString(): string {
    const parts: string[] = ['ClaimResponseEvent'];
    return parts.join(', ');
  }
}
