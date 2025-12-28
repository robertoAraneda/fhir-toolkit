import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementImplementation,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CapabilityStatementImplementation */
const CAPABILITY_STATEMENT_IMPLEMENTATION_PROPERTIES = [
  'description',
  '_description',
  'url',
  '_url',
  'custodian',
] as const;

/**
 * CapabilityStatementImplementation - If this describes a specific instance
 *
 * @see https://hl7.org/fhir/R5/capabilitystatementimplementation.html
 *
 * @example
 * const capabilityStatementImplementation = new CapabilityStatementImplementation({
 *   // ... properties
 * });
 */
export class CapabilityStatementImplementation extends BackboneElement implements ICapabilityStatementImplementation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Describes this specific instance */
  description: string;

  /** Extension for description */
  _description?: IElement;

  /** Base URL for the installation */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Organization that manages the data */
  custodian?: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementImplementation>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_IMPLEMENTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementImplementation from a JSON object
   */
  static fromJSON(json: ICapabilityStatementImplementation): CapabilityStatementImplementation {
    return new CapabilityStatementImplementation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementImplementation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementImplementation>): CapabilityStatementImplementation {
    return new CapabilityStatementImplementation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementImplementation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementImplementation) => Partial<ICapabilityStatementImplementation>): CapabilityStatementImplementation {
    const currentData = this.toJSON();
    return new CapabilityStatementImplementation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementImplementation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementImplementation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_IMPLEMENTATION_PROPERTIES);
    return result as ICapabilityStatementImplementation;
  }

  /**
   * Create a deep clone of this CapabilityStatementImplementation
   */
  clone(): CapabilityStatementImplementation {
    return new CapabilityStatementImplementation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementImplementation
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementImplementation'];
    return parts.join(', ');
  }
}
