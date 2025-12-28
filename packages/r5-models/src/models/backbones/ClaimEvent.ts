import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimEvent,
  ICodeableConcept,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimEvent */
const CLAIM_EVENT_PROPERTIES = [
  'type',
  'whenDateTime',
  '_whenDateTime',
  'whenPeriod',
] as const;

/**
 * ClaimEvent - Event information
 *
 * @see https://hl7.org/fhir/R5/claimevent.html
 *
 * @example
 * const claimEvent = new ClaimEvent({
 *   // ... properties
 * });
 */
export class ClaimEvent extends BackboneElement implements IClaimEvent {

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

  constructor(data?: Partial<IClaimEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimEvent from a JSON object
   */
  static fromJSON(json: IClaimEvent): ClaimEvent {
    return new ClaimEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimEvent>): ClaimEvent {
    return new ClaimEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimEvent) => Partial<IClaimEvent>): ClaimEvent {
    const currentData = this.toJSON();
    return new ClaimEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_EVENT_PROPERTIES);
    return result as IClaimEvent;
  }

  /**
   * Create a deep clone of this ClaimEvent
   */
  clone(): ClaimEvent {
    return new ClaimEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimEvent
   */
  toString(): string {
    const parts: string[] = ['ClaimEvent'];
    return parts.join(', ');
  }
}
