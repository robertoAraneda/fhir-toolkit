import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesExpansionParameter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesExpansionParameter */
const TERMINOLOGY_CAPABILITIES_EXPANSION_PARAMETER_PROPERTIES = [
  'name',
  '_name',
  'documentation',
  '_documentation',
] as const;

/**
 * TerminologyCapabilitiesExpansionParameter - Supported expansion parameter
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiesexpansionparameter.html
 *
 * @example
 * const terminologyCapabilitiesExpansionParameter = new TerminologyCapabilitiesExpansionParameter({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesExpansionParameter extends BackboneElement implements ITerminologyCapabilitiesExpansionParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Expansion Parameter name */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Description of support for parameter */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesExpansionParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_EXPANSION_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesExpansionParameter from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesExpansionParameter): TerminologyCapabilitiesExpansionParameter {
    return new TerminologyCapabilitiesExpansionParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesExpansionParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesExpansionParameter>): TerminologyCapabilitiesExpansionParameter {
    return new TerminologyCapabilitiesExpansionParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesExpansionParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesExpansionParameter) => Partial<ITerminologyCapabilitiesExpansionParameter>): TerminologyCapabilitiesExpansionParameter {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesExpansionParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesExpansionParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesExpansionParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_EXPANSION_PARAMETER_PROPERTIES);
    return result as ITerminologyCapabilitiesExpansionParameter;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesExpansionParameter
   */
  clone(): TerminologyCapabilitiesExpansionParameter {
    return new TerminologyCapabilitiesExpansionParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesExpansionParameter
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesExpansionParameter'];
    return parts.join(', ');
  }
}
