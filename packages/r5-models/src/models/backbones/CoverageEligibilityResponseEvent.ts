import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseEvent,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageEligibilityResponseEvent */
const COVERAGE_ELIGIBILITY_RESPONSE_EVENT_PROPERTIES = [
  'type',
  'whenDateTime',
  '_whenDateTime',
  'whenPeriod',
] as const;

/**
 * CoverageEligibilityResponseEvent - Event information
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityresponseevent.html
 *
 * @example
 * const coverageEligibilityResponseEvent = new CoverageEligibilityResponseEvent({
 *   // ... properties
 * });
 */
export class CoverageEligibilityResponseEvent extends BackboneElement implements ICoverageEligibilityResponseEvent {

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

  constructor(data?: Partial<ICoverageEligibilityResponseEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_RESPONSE_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityResponseEvent from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityResponseEvent): CoverageEligibilityResponseEvent {
    return new CoverageEligibilityResponseEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityResponseEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityResponseEvent>): CoverageEligibilityResponseEvent {
    return new CoverageEligibilityResponseEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityResponseEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityResponseEvent) => Partial<ICoverageEligibilityResponseEvent>): CoverageEligibilityResponseEvent {
    const currentData = this.toJSON();
    return new CoverageEligibilityResponseEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityResponseEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityResponseEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_RESPONSE_EVENT_PROPERTIES);
    return result as ICoverageEligibilityResponseEvent;
  }

  /**
   * Create a deep clone of this CoverageEligibilityResponseEvent
   */
  clone(): CoverageEligibilityResponseEvent {
    return new CoverageEligibilityResponseEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityResponseEvent
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityResponseEvent'];
    return parts.join(', ');
  }
}
