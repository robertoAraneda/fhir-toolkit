import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitEvent,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitEvent */
const EXPLANATION_OF_BENEFIT_EVENT_PROPERTIES = [
  'type',
  'whenDateTime',
  '_whenDateTime',
  'whenPeriod',
] as const;

/**
 * ExplanationOfBenefitEvent - Event information
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitevent.html
 *
 * @example
 * const explanationOfBenefitEvent = new ExplanationOfBenefitEvent({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitEvent extends BackboneElement implements IExplanationOfBenefitEvent {

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

  constructor(data?: Partial<IExplanationOfBenefitEvent>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitEvent from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitEvent): ExplanationOfBenefitEvent {
    return new ExplanationOfBenefitEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitEvent>): ExplanationOfBenefitEvent {
    return new ExplanationOfBenefitEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitEvent) => Partial<IExplanationOfBenefitEvent>): ExplanationOfBenefitEvent {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitEvent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_EVENT_PROPERTIES);
    return result as IExplanationOfBenefitEvent;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitEvent
   */
  clone(): ExplanationOfBenefitEvent {
    return new ExplanationOfBenefitEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitEvent
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitEvent'];
    return parts.join(', ');
  }
}
