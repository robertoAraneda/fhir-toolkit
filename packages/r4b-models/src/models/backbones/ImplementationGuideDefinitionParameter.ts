import { BackboneElement } from '../base/BackboneElement.js';
import type {
  GuideParameterCodeType,
  IElement,
  IImplementationGuideDefinitionParameter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideDefinitionParameter */
const IMPLEMENTATION_GUIDE_DEFINITION_PARAMETER_PROPERTIES = [
  'code',
  '_code',
  'value',
  '_value',
] as const;

/**
 * ImplementationGuideDefinitionParameter - Defines how IG is built by tools
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitionparameter.html
 *
 * @example
 * const implementationGuideDefinitionParameter = new ImplementationGuideDefinitionParameter({
 *   // ... properties
 * });
 */
export class ImplementationGuideDefinitionParameter extends BackboneElement implements IImplementationGuideDefinitionParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
  code: GuideParameterCodeType;

  /** Extension for code */
  _code?: IElement;

  /** Value for named type */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDefinitionParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEFINITION_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDefinitionParameter from a JSON object
   */
  static fromJSON(json: IImplementationGuideDefinitionParameter): ImplementationGuideDefinitionParameter {
    return new ImplementationGuideDefinitionParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDefinitionParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDefinitionParameter>): ImplementationGuideDefinitionParameter {
    return new ImplementationGuideDefinitionParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDefinitionParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDefinitionParameter) => Partial<IImplementationGuideDefinitionParameter>): ImplementationGuideDefinitionParameter {
    const currentData = this.toJSON();
    return new ImplementationGuideDefinitionParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDefinitionParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDefinitionParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEFINITION_PARAMETER_PROPERTIES);
    return result as IImplementationGuideDefinitionParameter;
  }

  /**
   * Create a deep clone of this ImplementationGuideDefinitionParameter
   */
  clone(): ImplementationGuideDefinitionParameter {
    return new ImplementationGuideDefinitionParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDefinitionParameter
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDefinitionParameter'];
    return parts.join(', ');
  }
}
