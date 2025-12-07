import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesImplementation,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesImplementation */
const TERMINOLOGY_CAPABILITIES_IMPLEMENTATION_PROPERTIES = [
  'description',
  '_description',
  'url',
  '_url',
] as const;

/**
 * TerminologyCapabilitiesImplementation - If this describes a specific instance
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiesimplementation.html
 *
 * @example
 * const terminologyCapabilitiesImplementation = new TerminologyCapabilitiesImplementation({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesImplementation extends BackboneElement implements ITerminologyCapabilitiesImplementation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Describes this specific instance */
  description: string;

  /** Extension for description */
  _description?: IElement;

  /** Base URL for the implementation */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesImplementation>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_IMPLEMENTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesImplementation from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesImplementation): TerminologyCapabilitiesImplementation {
    return new TerminologyCapabilitiesImplementation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesImplementation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesImplementation>): TerminologyCapabilitiesImplementation {
    return new TerminologyCapabilitiesImplementation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesImplementation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesImplementation) => Partial<ITerminologyCapabilitiesImplementation>): TerminologyCapabilitiesImplementation {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesImplementation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesImplementation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesImplementation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_IMPLEMENTATION_PROPERTIES);
    return result as ITerminologyCapabilitiesImplementation;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesImplementation
   */
  clone(): TerminologyCapabilitiesImplementation {
    return new TerminologyCapabilitiesImplementation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesImplementation
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesImplementation'];
    return parts.join(', ');
  }
}
