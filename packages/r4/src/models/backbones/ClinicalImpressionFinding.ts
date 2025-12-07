import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalImpressionFinding,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClinicalImpressionFinding */
const CLINICAL_IMPRESSION_FINDING_PROPERTIES = [
  'itemCodeableConcept',
  'itemReference',
  'basis',
  '_basis',
] as const;

/**
 * ClinicalImpressionFinding - Possible or likely findings and diagnoses
 *
 * @see https://hl7.org/fhir/R4/clinicalimpressionfinding.html
 *
 * @example
 * const clinicalImpressionFinding = new ClinicalImpressionFinding({
 *   // ... properties
 * });
 */
export class ClinicalImpressionFinding extends BackboneElement implements IClinicalImpressionFinding {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What was found */
  itemCodeableConcept?: ICodeableConcept;

  /** What was found */
  itemReference?: IReference<'Condition' | 'Observation' | 'Media'>;

  /** Which investigations support finding */
  basis?: string;

  /** Extension for basis */
  _basis?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalImpressionFinding>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_IMPRESSION_FINDING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalImpressionFinding from a JSON object
   */
  static fromJSON(json: IClinicalImpressionFinding): ClinicalImpressionFinding {
    return new ClinicalImpressionFinding(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalImpressionFinding with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalImpressionFinding>): ClinicalImpressionFinding {
    return new ClinicalImpressionFinding({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalImpressionFinding by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalImpressionFinding) => Partial<IClinicalImpressionFinding>): ClinicalImpressionFinding {
    const currentData = this.toJSON();
    return new ClinicalImpressionFinding({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalImpressionFinding)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalImpressionFinding {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_IMPRESSION_FINDING_PROPERTIES);
    return result as IClinicalImpressionFinding;
  }

  /**
   * Create a deep clone of this ClinicalImpressionFinding
   */
  clone(): ClinicalImpressionFinding {
    return new ClinicalImpressionFinding(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalImpressionFinding
   */
  toString(): string {
    const parts: string[] = ['ClinicalImpressionFinding'];
    return parts.join(', ');
  }
}
