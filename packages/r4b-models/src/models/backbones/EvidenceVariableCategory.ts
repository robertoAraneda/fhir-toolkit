import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IEvidenceVariableCategory,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceVariableCategory */
const EVIDENCE_VARIABLE_CATEGORY_PROPERTIES = [
  'name',
  '_name',
  'valueCodeableConcept',
  'valueQuantity',
  'valueRange',
] as const;

/**
 * EvidenceVariableCategory - A grouping for ordinal or polychotomous variables
 *
 * @see https://hl7.org/fhir/R4B/evidencevariablecategory.html
 *
 * @example
 * const evidenceVariableCategory = new EvidenceVariableCategory({
 *   // ... properties
 * });
 */
export class EvidenceVariableCategory extends BackboneElement implements IEvidenceVariableCategory {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of the grouping */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Definition of the grouping */
  valueCodeableConcept?: ICodeableConcept;

  /** Definition of the grouping */
  valueQuantity?: IQuantity;

  /** Definition of the grouping */
  valueRange?: IRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceVariableCategory>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_VARIABLE_CATEGORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceVariableCategory from a JSON object
   */
  static fromJSON(json: IEvidenceVariableCategory): EvidenceVariableCategory {
    return new EvidenceVariableCategory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceVariableCategory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceVariableCategory>): EvidenceVariableCategory {
    return new EvidenceVariableCategory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceVariableCategory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceVariableCategory) => Partial<IEvidenceVariableCategory>): EvidenceVariableCategory {
    const currentData = this.toJSON();
    return new EvidenceVariableCategory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceVariableCategory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceVariableCategory {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_VARIABLE_CATEGORY_PROPERTIES);
    return result as IEvidenceVariableCategory;
  }

  /**
   * Create a deep clone of this EvidenceVariableCategory
   */
  clone(): EvidenceVariableCategory {
    return new EvidenceVariableCategory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceVariableCategory
   */
  toString(): string {
    const parts: string[] = ['EvidenceVariableCategory'];
    return parts.join(', ');
  }
}
