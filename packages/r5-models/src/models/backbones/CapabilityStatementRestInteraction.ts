import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementRestInteraction,
  IElement,
  SystemRestfulInteractionType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CapabilityStatementRestInteraction */
const CAPABILITY_STATEMENT_REST_INTERACTION_PROPERTIES = [
  'code',
  '_code',
  'documentation',
  '_documentation',
] as const;

/**
 * CapabilityStatementRestInteraction - What operations are supported?
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementrestinteraction.html
 *
 * @example
 * const capabilityStatementRestInteraction = new CapabilityStatementRestInteraction({
 *   // ... properties
 * });
 */
export class CapabilityStatementRestInteraction extends BackboneElement implements ICapabilityStatementRestInteraction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** transaction | batch | search-system | history-system */
  code: SystemRestfulInteractionType;

  /** Extension for code */
  _code?: IElement;

  /** Anything special about operation behavior */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRestInteraction>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_INTERACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRestInteraction from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRestInteraction): CapabilityStatementRestInteraction {
    return new CapabilityStatementRestInteraction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRestInteraction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRestInteraction>): CapabilityStatementRestInteraction {
    return new CapabilityStatementRestInteraction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRestInteraction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRestInteraction) => Partial<ICapabilityStatementRestInteraction>): CapabilityStatementRestInteraction {
    const currentData = this.toJSON();
    return new CapabilityStatementRestInteraction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRestInteraction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRestInteraction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_INTERACTION_PROPERTIES);
    return result as ICapabilityStatementRestInteraction;
  }

  /**
   * Create a deep clone of this CapabilityStatementRestInteraction
   */
  clone(): CapabilityStatementRestInteraction {
    return new CapabilityStatementRestInteraction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRestInteraction
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRestInteraction'];
    return parts.join(', ');
  }
}
