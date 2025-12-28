import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceReferenceInformationGene,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceReferenceInformationGene */
const SUBSTANCE_REFERENCE_INFORMATION_GENE_PROPERTIES = [
  'geneSequenceOrigin',
  'gene',
  'source',
] as const;

/**
 * SubstanceReferenceInformationGene - Todo
 *
 * @see https://hl7.org/fhir/R5/substancereferenceinformationgene.html
 *
 * @example
 * const substanceReferenceInformationGene = new SubstanceReferenceInformationGene({
 *   // ... properties
 * });
 */
export class SubstanceReferenceInformationGene extends BackboneElement implements ISubstanceReferenceInformationGene {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  geneSequenceOrigin?: ICodeableConcept;

  /** Todo */
  gene?: ICodeableConcept;

  /** Todo */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceReferenceInformationGene>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_REFERENCE_INFORMATION_GENE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceReferenceInformationGene from a JSON object
   */
  static fromJSON(json: ISubstanceReferenceInformationGene): SubstanceReferenceInformationGene {
    return new SubstanceReferenceInformationGene(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceReferenceInformationGene with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceReferenceInformationGene>): SubstanceReferenceInformationGene {
    return new SubstanceReferenceInformationGene({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceReferenceInformationGene by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceReferenceInformationGene) => Partial<ISubstanceReferenceInformationGene>): SubstanceReferenceInformationGene {
    const currentData = this.toJSON();
    return new SubstanceReferenceInformationGene({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceReferenceInformationGene)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceReferenceInformationGene {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_REFERENCE_INFORMATION_GENE_PROPERTIES);
    return result as ISubstanceReferenceInformationGene;
  }

  /**
   * Create a deep clone of this SubstanceReferenceInformationGene
   */
  clone(): SubstanceReferenceInformationGene {
    return new SubstanceReferenceInformationGene(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceReferenceInformationGene
   */
  toString(): string {
    const parts: string[] = ['SubstanceReferenceInformationGene'];
    return parts.join(', ');
  }
}
