import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceDefinitionCode,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceDefinitionCode */
const SUBSTANCE_DEFINITION_CODE_PROPERTIES = [
  'code',
  'status',
  'statusDate',
  '_statusDate',
  'note',
  'source',
] as const;

/**
 * SubstanceDefinitionCode - Codes associated with the substance
 *
 * @see https://hl7.org/fhir/R4/substancedefinitioncode.html
 *
 * @example
 * const substanceDefinitionCode = new SubstanceDefinitionCode({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionCode extends BackboneElement implements ISubstanceDefinitionCode {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific code */
  code?: ICodeableConcept;

  /** Status of the code assignment, for example 'provisional', 'approved' */
  status?: ICodeableConcept;

  /** The date at which the code status was changed */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** Any comment can be provided in this field */
  note?: IAnnotation[];

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionCode>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_CODE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionCode from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionCode): SubstanceDefinitionCode {
    return new SubstanceDefinitionCode(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionCode with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionCode>): SubstanceDefinitionCode {
    return new SubstanceDefinitionCode({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionCode by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionCode) => Partial<ISubstanceDefinitionCode>): SubstanceDefinitionCode {
    const currentData = this.toJSON();
    return new SubstanceDefinitionCode({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionCode)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionCode {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_CODE_PROPERTIES);
    return result as ISubstanceDefinitionCode;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionCode
   */
  clone(): SubstanceDefinitionCode {
    return new SubstanceDefinitionCode(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionCode
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionCode'];
    return parts.join(', ');
  }
}
