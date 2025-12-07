import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IElementDefinitionBase,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ElementDefinitionBase */
const ELEMENT_DEFINITION_BASE_PROPERTIES = [
  'path',
  '_path',
  'min',
  '_min',
  'max',
  '_max',
] as const;

/**
 * ElementDefinitionBase - Base definition information for tools
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionbase.html
 *
 * @example
 * const elementDefinitionBase = new ElementDefinitionBase({
 *   // ... properties
 * });
 */
export class ElementDefinitionBase extends BackboneElement implements IElementDefinitionBase {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Path that identifies the base element */
  path: string;

  /** Extension for path */
  _path?: IElement;

  /** Min cardinality of the base element */
  min: number;

  /** Extension for min */
  _min?: IElement;

  /** Max cardinality of the base element */
  max: string;

  /** Extension for max */
  _max?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionBase>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_BASE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionBase from a JSON object
   */
  static fromJSON(json: IElementDefinitionBase): ElementDefinitionBase {
    return new ElementDefinitionBase(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionBase with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionBase>): ElementDefinitionBase {
    return new ElementDefinitionBase({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionBase by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionBase) => Partial<IElementDefinitionBase>): ElementDefinitionBase {
    const currentData = this.toJSON();
    return new ElementDefinitionBase({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionBase)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionBase {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_BASE_PROPERTIES);
    return result as IElementDefinitionBase;
  }

  /**
   * Create a deep clone of this ElementDefinitionBase
   */
  clone(): ElementDefinitionBase {
    return new ElementDefinitionBase(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionBase
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionBase'];
    return parts.join(', ');
  }
}
