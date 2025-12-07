import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityRequestEvent,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageEligibilityRequestEvent */
const COVERAGE_ELIGIBILITY_REQUEST_EVENT_PROPERTIES = [
  'type',
  'whenDateTime',
  '_whenDateTime',
  'whenPeriod',
] as const;

/**
 * CoverageEligibilityRequestEvent - Event information
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequestevent.html
 *
 * @example
 * const coverageEligibilityRequestEvent = new CoverageEligibilityRequestEvent({
 *   // ... properties
 * });
 */
export class CoverageEligibilityRequestEvent extends BackboneElement implements ICoverageEligibilityRequestEvent {

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

  constructor(data?: Partial<ICoverageEligibilityRequestEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_REQUEST_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityRequestEvent from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityRequestEvent): CoverageEligibilityRequestEvent {
    return new CoverageEligibilityRequestEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityRequestEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityRequestEvent>): CoverageEligibilityRequestEvent {
    return new CoverageEligibilityRequestEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityRequestEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityRequestEvent) => Partial<ICoverageEligibilityRequestEvent>): CoverageEligibilityRequestEvent {
    const currentData = this.toJSON();
    return new CoverageEligibilityRequestEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityRequestEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityRequestEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_REQUEST_EVENT_PROPERTIES);
    return result as ICoverageEligibilityRequestEvent;
  }

  /**
   * Create a deep clone of this CoverageEligibilityRequestEvent
   */
  clone(): CoverageEligibilityRequestEvent {
    return new CoverageEligibilityRequestEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityRequestEvent
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityRequestEvent'];
    return parts.join(', ');
  }
}
