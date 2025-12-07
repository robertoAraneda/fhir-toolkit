import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  ISubstanceReferenceInformation,
  ISubstanceReferenceInformationClassification,
  ISubstanceReferenceInformationGene,
  ISubstanceReferenceInformationGeneElement,
  ISubstanceReferenceInformationTarget,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceReferenceInformation */
const SUBSTANCE_REFERENCE_INFORMATION_PROPERTIES = [
  'comment',
  '_comment',
  'gene',
  'geneElement',
  'classification',
  'target',
] as const;

/**
 * SubstanceReferenceInformation - Todo.
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformation.html
 *
 * @example
 * const substanceReferenceInformation = new SubstanceReferenceInformation({
 *   // ... properties
 * });
 */
export class SubstanceReferenceInformation extends DomainResource implements ISubstanceReferenceInformation {
  readonly resourceType = 'SubstanceReferenceInformation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Todo */
  gene?: ISubstanceReferenceInformationGene[];

  /** Todo */
  geneElement?: ISubstanceReferenceInformationGeneElement[];

  /** Todo */
  classification?: ISubstanceReferenceInformationClassification[];

  /** Todo */
  target?: ISubstanceReferenceInformationTarget[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubstanceReferenceInformation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_REFERENCE_INFORMATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceReferenceInformation from a JSON object
   */
  static fromJSON(json: ISubstanceReferenceInformation): SubstanceReferenceInformation {
    return new SubstanceReferenceInformation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceReferenceInformation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceReferenceInformation>): SubstanceReferenceInformation {
    return new SubstanceReferenceInformation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceReferenceInformation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceReferenceInformation) => Partial<ISubstanceReferenceInformation>): SubstanceReferenceInformation {
    const currentData = this.toJSON();
    return new SubstanceReferenceInformation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceReferenceInformation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceReferenceInformation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_REFERENCE_INFORMATION_PROPERTIES);
    return result as ISubstanceReferenceInformation;
  }

  /**
   * Create a deep clone of this SubstanceReferenceInformation
   */
  clone(): SubstanceReferenceInformation {
    return new SubstanceReferenceInformation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceReferenceInformation
   */
  toString(): string {
    const parts: string[] = ['SubstanceReferenceInformation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
