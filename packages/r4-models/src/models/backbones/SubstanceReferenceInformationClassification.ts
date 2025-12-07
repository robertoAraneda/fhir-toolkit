import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceReferenceInformationClassification,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceReferenceInformationClassification */
const SUBSTANCE_REFERENCE_INFORMATION_CLASSIFICATION_PROPERTIES = [
  'domain',
  'classification',
  'subtype',
  'source',
] as const;

/**
 * SubstanceReferenceInformationClassification - Todo
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformationclassification.html
 *
 * @example
 * const substanceReferenceInformationClassification = new SubstanceReferenceInformationClassification({
 *   // ... properties
 * });
 */
export class SubstanceReferenceInformationClassification extends BackboneElement implements ISubstanceReferenceInformationClassification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  domain?: ICodeableConcept;

  /** Todo */
  classification?: ICodeableConcept;

  /** Todo */
  subtype?: ICodeableConcept[];

  /** Todo */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceReferenceInformationClassification>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_REFERENCE_INFORMATION_CLASSIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceReferenceInformationClassification from a JSON object
   */
  static fromJSON(json: ISubstanceReferenceInformationClassification): SubstanceReferenceInformationClassification {
    return new SubstanceReferenceInformationClassification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceReferenceInformationClassification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceReferenceInformationClassification>): SubstanceReferenceInformationClassification {
    return new SubstanceReferenceInformationClassification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceReferenceInformationClassification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceReferenceInformationClassification) => Partial<ISubstanceReferenceInformationClassification>): SubstanceReferenceInformationClassification {
    const currentData = this.toJSON();
    return new SubstanceReferenceInformationClassification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceReferenceInformationClassification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceReferenceInformationClassification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_REFERENCE_INFORMATION_CLASSIFICATION_PROPERTIES);
    return result as ISubstanceReferenceInformationClassification;
  }

  /**
   * Create a deep clone of this SubstanceReferenceInformationClassification
   */
  clone(): SubstanceReferenceInformationClassification {
    return new SubstanceReferenceInformationClassification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceReferenceInformationClassification
   */
  toString(): string {
    const parts: string[] = ['SubstanceReferenceInformationClassification'];
    return parts.join(', ');
  }
}
