import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IReference,
  ISubstanceReferenceInformationGeneElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceReferenceInformationGeneElement */
const SUBSTANCE_REFERENCE_INFORMATION_GENE_ELEMENT_PROPERTIES = [
  'type',
  'element',
  'source',
] as const;

/**
 * SubstanceReferenceInformationGeneElement - Todo
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformationgeneelement.html
 *
 * @example
 * const substanceReferenceInformationGeneElement = new SubstanceReferenceInformationGeneElement({
 *   // ... properties
 * });
 */
export class SubstanceReferenceInformationGeneElement extends BackboneElement implements ISubstanceReferenceInformationGeneElement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  type?: ICodeableConcept;

  /** Todo */
  element?: IIdentifier;

  /** Todo */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceReferenceInformationGeneElement>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_REFERENCE_INFORMATION_GENE_ELEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceReferenceInformationGeneElement from a JSON object
   */
  static fromJSON(json: ISubstanceReferenceInformationGeneElement): SubstanceReferenceInformationGeneElement {
    return new SubstanceReferenceInformationGeneElement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceReferenceInformationGeneElement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceReferenceInformationGeneElement>): SubstanceReferenceInformationGeneElement {
    return new SubstanceReferenceInformationGeneElement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceReferenceInformationGeneElement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceReferenceInformationGeneElement) => Partial<ISubstanceReferenceInformationGeneElement>): SubstanceReferenceInformationGeneElement {
    const currentData = this.toJSON();
    return new SubstanceReferenceInformationGeneElement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceReferenceInformationGeneElement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceReferenceInformationGeneElement {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_REFERENCE_INFORMATION_GENE_ELEMENT_PROPERTIES);
    return result as ISubstanceReferenceInformationGeneElement;
  }

  /**
   * Create a deep clone of this SubstanceReferenceInformationGeneElement
   */
  clone(): SubstanceReferenceInformationGeneElement {
    return new SubstanceReferenceInformationGeneElement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceReferenceInformationGeneElement
   */
  toString(): string {
    const parts: string[] = ['SubstanceReferenceInformationGeneElement'];
    return parts.join(', ');
  }
}
