import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesValidateCode,
} from '@fhir-toolkit/r4-types';

/** Properties specific to TerminologyCapabilitiesValidateCode */
const TERMINOLOGY_CAPABILITIES_VALIDATE_CODE_PROPERTIES = [
  'translations',
  '_translations',
] as const;

/**
 * TerminologyCapabilitiesValidateCode - Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiesvalidatecode.html
 *
 * @example
 * const terminologyCapabilitiesValidateCode = new TerminologyCapabilitiesValidateCode({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesValidateCode extends BackboneElement implements ITerminologyCapabilitiesValidateCode {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether translations are validated */
  translations: boolean;

  /** Extension for translations */
  _translations?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesValidateCode>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_VALIDATE_CODE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesValidateCode from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesValidateCode): TerminologyCapabilitiesValidateCode {
    return new TerminologyCapabilitiesValidateCode(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesValidateCode with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesValidateCode>): TerminologyCapabilitiesValidateCode {
    return new TerminologyCapabilitiesValidateCode({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesValidateCode by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesValidateCode) => Partial<ITerminologyCapabilitiesValidateCode>): TerminologyCapabilitiesValidateCode {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesValidateCode({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesValidateCode)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesValidateCode {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_VALIDATE_CODE_PROPERTIES);
    return result as ITerminologyCapabilitiesValidateCode;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesValidateCode
   */
  clone(): TerminologyCapabilitiesValidateCode {
    return new TerminologyCapabilitiesValidateCode(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesValidateCode
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesValidateCode'];
    return parts.join(', ');
  }
}
