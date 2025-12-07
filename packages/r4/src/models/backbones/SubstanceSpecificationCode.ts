import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceSpecificationCode,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationCode */
const SUBSTANCE_SPECIFICATION_CODE_PROPERTIES = [
  'code',
  'status',
  'statusDate',
  '_statusDate',
  'comment',
  '_comment',
  'source',
] as const;

/**
 * SubstanceSpecificationCode - Codes associated with the substance
 *
 * @see https://hl7.org/fhir/R4/substancespecificationcode.html
 *
 * @example
 * const substanceSpecificationCode = new SubstanceSpecificationCode({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationCode extends BackboneElement implements ISubstanceSpecificationCode {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific code */
  code?: ICodeableConcept;

  /** Status of the code assignment */
  status?: ICodeableConcept;

  /** The date at which the code status is changed as part of the terminology maintenance */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** Any comment can be provided in this field, if necessary */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationCode>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_CODE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationCode from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationCode): SubstanceSpecificationCode {
    return new SubstanceSpecificationCode(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationCode with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationCode>): SubstanceSpecificationCode {
    return new SubstanceSpecificationCode({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationCode by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationCode) => Partial<ISubstanceSpecificationCode>): SubstanceSpecificationCode {
    const currentData = this.toJSON();
    return new SubstanceSpecificationCode({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationCode)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationCode {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_CODE_PROPERTIES);
    return result as ISubstanceSpecificationCode;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationCode
   */
  clone(): SubstanceSpecificationCode {
    return new SubstanceSpecificationCode(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationCode
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationCode'];
    return parts.join(', ');
  }
}
