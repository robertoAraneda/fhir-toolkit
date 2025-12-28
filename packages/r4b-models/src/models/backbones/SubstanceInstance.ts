import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIdentifier,
  IQuantity,
  ISubstanceInstance,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceInstance */
const SUBSTANCE_INSTANCE_PROPERTIES = [
  'identifier',
  'expiry',
  '_expiry',
  'quantity',
] as const;

/**
 * SubstanceInstance - If this describes a specific package/container of the substance
 *
 * @see https://hl7.org/fhir/R4B/substanceinstance.html
 *
 * @example
 * const substanceInstance = new SubstanceInstance({
 *   // ... properties
 * });
 */
export class SubstanceInstance extends BackboneElement implements ISubstanceInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier of the package/container */
  identifier?: IIdentifier;

  /** When no longer valid to use */
  expiry?: string;

  /** Extension for expiry */
  _expiry?: IElement;

  /** Amount of substance in the package */
  quantity?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceInstance from a JSON object
   */
  static fromJSON(json: ISubstanceInstance): SubstanceInstance {
    return new SubstanceInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceInstance>): SubstanceInstance {
    return new SubstanceInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceInstance) => Partial<ISubstanceInstance>): SubstanceInstance {
    const currentData = this.toJSON();
    return new SubstanceInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_INSTANCE_PROPERTIES);
    return result as ISubstanceInstance;
  }

  /**
   * Create a deep clone of this SubstanceInstance
   */
  clone(): SubstanceInstance {
    return new SubstanceInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceInstance
   */
  toString(): string {
    const parts: string[] = ['SubstanceInstance'];
    return parts.join(', ');
  }
}
