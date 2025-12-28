import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AdditionalBindingPurposeVSType,
  IElement,
  IElementDefinitionBindingAdditional,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ElementDefinitionBindingAdditional */
const ELEMENT_DEFINITION_BINDING_ADDITIONAL_PROPERTIES = [
  'purpose',
  '_purpose',
  'valueSet',
  '_valueSet',
  'documentation',
  '_documentation',
  'shortDoco',
  '_shortDoco',
  'usage',
  'any',
  '_any',
] as const;

/**
 * ElementDefinitionBindingAdditional - Additional Bindings - more rules about the binding
 *
 * @see https://hl7.org/fhir/R5/elementdefinitionbindingadditional.html
 *
 * @example
 * const elementDefinitionBindingAdditional = new ElementDefinitionBindingAdditional({
 *   // ... properties
 * });
 */
export class ElementDefinitionBindingAdditional extends BackboneElement implements IElementDefinitionBindingAdditional {

  // ============================================================================
  // Properties
  // ============================================================================

  /** maximum | minimum | required | extensible | candidate | current | preferred | ui | starter | component */
  purpose: AdditionalBindingPurposeVSType;

  /** Extension for purpose */
  _purpose?: IElement;

  /** The value set for the additional binding */
  valueSet: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

  /** Documentation of the purpose of use of the binding */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Concise documentation - for summary tables */
  shortDoco?: string;

  /** Extension for shortDoco */
  _shortDoco?: IElement;

  /** Qualifies the usage - jurisdiction, gender, workflow status etc. */
  usage?: IUsageContext[];

  /** Whether binding can applies to all repeats, or just one */
  any?: boolean;

  /** Extension for any */
  _any?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionBindingAdditional>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_BINDING_ADDITIONAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionBindingAdditional from a JSON object
   */
  static fromJSON(json: IElementDefinitionBindingAdditional): ElementDefinitionBindingAdditional {
    return new ElementDefinitionBindingAdditional(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionBindingAdditional with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionBindingAdditional>): ElementDefinitionBindingAdditional {
    return new ElementDefinitionBindingAdditional({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionBindingAdditional by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionBindingAdditional) => Partial<IElementDefinitionBindingAdditional>): ElementDefinitionBindingAdditional {
    const currentData = this.toJSON();
    return new ElementDefinitionBindingAdditional({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionBindingAdditional)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionBindingAdditional {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_BINDING_ADDITIONAL_PROPERTIES);
    return result as IElementDefinitionBindingAdditional;
  }

  /**
   * Create a deep clone of this ElementDefinitionBindingAdditional
   */
  clone(): ElementDefinitionBindingAdditional {
    return new ElementDefinitionBindingAdditional(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionBindingAdditional
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionBindingAdditional'];
    return parts.join(', ');
  }
}
