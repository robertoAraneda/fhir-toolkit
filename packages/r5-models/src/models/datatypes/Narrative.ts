import { Element } from '../base/Element.js';
import type {
  IElement,
  INarrative,
  NarrativeStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Narrative */
const NARRATIVE_PROPERTIES = [
  'status',
  '_status',
  'div',
  '_div',
] as const;

/**
 * Narrative - A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 *
 * @see https://hl7.org/fhir/R4/narrative.html
 *
 * @example
 * const narrative = new Narrative({
 *   // ... properties
 * });
 */
export class Narrative extends Element implements INarrative {

  // ============================================================================
  // Properties
  // ============================================================================

  /** generated | extensions | additional | empty */
  status: NarrativeStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Limited xhtml content */
  div: string;

  /** Extension for div */
  _div?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INarrative>) {
    super(data);
    if (data) {
      this.assignProps(data, NARRATIVE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Narrative from a JSON object
   */
  static fromJSON(json: INarrative): Narrative {
    return new Narrative(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Narrative with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INarrative>): Narrative {
    return new Narrative({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Narrative by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INarrative) => Partial<INarrative>): Narrative {
    const currentData = this.toJSON();
    return new Narrative({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INarrative)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INarrative {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, NARRATIVE_PROPERTIES);
    return result as INarrative;
  }

  /**
   * Create a deep clone of this Narrative
   */
  clone(): Narrative {
    return new Narrative(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Narrative
   */
  toString(): string {
    const parts: string[] = ['Narrative'];
    return parts.join(', ');
  }
}
