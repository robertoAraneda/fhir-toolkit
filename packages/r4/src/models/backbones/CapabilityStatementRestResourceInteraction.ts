import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementRestResourceInteraction,
  IElement,
  TypeRestfulInteractionType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CapabilityStatementRestResourceInteraction */
const CAPABILITY_STATEMENT_REST_RESOURCE_INTERACTION_PROPERTIES = [
  'code',
  '_code',
  'documentation',
  '_documentation',
] as const;

/**
 * CapabilityStatementRestResourceInteraction - What operations are supported?
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementrestresourceinteraction.html
 *
 * @example
 * const capabilityStatementRestResourceInteraction = new CapabilityStatementRestResourceInteraction({
 *   // ... properties
 * });
 */
export class CapabilityStatementRestResourceInteraction extends BackboneElement implements ICapabilityStatementRestResourceInteraction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type */
  code: TypeRestfulInteractionType;

  /** Extension for code */
  _code?: IElement;

  /** Anything special about operation behavior */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRestResourceInteraction>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_RESOURCE_INTERACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRestResourceInteraction from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRestResourceInteraction): CapabilityStatementRestResourceInteraction {
    return new CapabilityStatementRestResourceInteraction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRestResourceInteraction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRestResourceInteraction>): CapabilityStatementRestResourceInteraction {
    return new CapabilityStatementRestResourceInteraction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRestResourceInteraction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRestResourceInteraction) => Partial<ICapabilityStatementRestResourceInteraction>): CapabilityStatementRestResourceInteraction {
    const currentData = this.toJSON();
    return new CapabilityStatementRestResourceInteraction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRestResourceInteraction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRestResourceInteraction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_RESOURCE_INTERACTION_PROPERTIES);
    return result as ICapabilityStatementRestResourceInteraction;
  }

  /**
   * Create a deep clone of this CapabilityStatementRestResourceInteraction
   */
  clone(): CapabilityStatementRestResourceInteraction {
    return new CapabilityStatementRestResourceInteraction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRestResourceInteraction
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRestResourceInteraction'];
    return parts.join(', ');
  }
}
