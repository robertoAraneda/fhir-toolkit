import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IValueSetExpansionParameter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ValueSetExpansionParameter */
const VALUE_SET_EXPANSION_PARAMETER_PROPERTIES = [
  'name',
  '_name',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueDecimal',
  '_valueDecimal',
  'valueUri',
  '_valueUri',
  'valueCode',
  '_valueCode',
  'valueDateTime',
  '_valueDateTime',
] as const;

/**
 * ValueSetExpansionParameter - Parameter that controlled the expansion process
 *
 * @see https://hl7.org/fhir/R4B/valuesetexpansionparameter.html
 *
 * @example
 * const valueSetExpansionParameter = new ValueSetExpansionParameter({
 *   // ... properties
 * });
 */
export class ValueSetExpansionParameter extends BackboneElement implements IValueSetExpansionParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name as assigned by the client or server */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Value of the named parameter */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of the named parameter */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of the named parameter */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of the named parameter */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Value of the named parameter */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Value of the named parameter */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Value of the named parameter */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetExpansionParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_EXPANSION_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetExpansionParameter from a JSON object
   */
  static fromJSON(json: IValueSetExpansionParameter): ValueSetExpansionParameter {
    return new ValueSetExpansionParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetExpansionParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetExpansionParameter>): ValueSetExpansionParameter {
    return new ValueSetExpansionParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetExpansionParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetExpansionParameter) => Partial<IValueSetExpansionParameter>): ValueSetExpansionParameter {
    const currentData = this.toJSON();
    return new ValueSetExpansionParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetExpansionParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetExpansionParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_EXPANSION_PARAMETER_PROPERTIES);
    return result as IValueSetExpansionParameter;
  }

  /**
   * Create a deep clone of this ValueSetExpansionParameter
   */
  clone(): ValueSetExpansionParameter {
    return new ValueSetExpansionParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetExpansionParameter
   */
  toString(): string {
    const parts: string[] = ['ValueSetExpansionParameter'];
    return parts.join(', ');
  }
}
