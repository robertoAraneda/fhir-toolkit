import { BackboneElement } from '../base/BackboneElement.js';
import type {
  BindingStrengthType,
  IElement,
  IElementDefinitionBinding,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ElementDefinitionBinding */
const ELEMENT_DEFINITION_BINDING_PROPERTIES = [
  'strength',
  '_strength',
  'description',
  '_description',
  'valueSet',
  '_valueSet',
] as const;

/**
 * ElementDefinitionBinding - ValueSet details if this is coded
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionbinding.html
 *
 * @example
 * const elementDefinitionBinding = new ElementDefinitionBinding({
 *   // ... properties
 * });
 */
export class ElementDefinitionBinding extends BackboneElement implements IElementDefinitionBinding {

  // ============================================================================
  // Properties
  // ============================================================================

  /** required | extensible | preferred | example */
  strength: BindingStrengthType;

  /** Extension for strength */
  _strength?: IElement;

  /** Human explanation of the value set */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Source of value set */
  valueSet?: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionBinding>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_BINDING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionBinding from a JSON object
   */
  static fromJSON(json: IElementDefinitionBinding): ElementDefinitionBinding {
    return new ElementDefinitionBinding(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionBinding with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionBinding>): ElementDefinitionBinding {
    return new ElementDefinitionBinding({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionBinding by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionBinding) => Partial<IElementDefinitionBinding>): ElementDefinitionBinding {
    const currentData = this.toJSON();
    return new ElementDefinitionBinding({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionBinding)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionBinding {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_BINDING_PROPERTIES);
    return result as IElementDefinitionBinding;
  }

  /**
   * Create a deep clone of this ElementDefinitionBinding
   */
  clone(): ElementDefinitionBinding {
    return new ElementDefinitionBinding(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionBinding
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionBinding'];
    return parts.join(', ');
  }
}
