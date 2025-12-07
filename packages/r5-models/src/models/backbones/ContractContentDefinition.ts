import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ContractResourcePublicationStatusType,
  ICodeableConcept,
  IContractContentDefinition,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractContentDefinition */
const CONTRACT_CONTENT_DEFINITION_PROPERTIES = [
  'type',
  'subType',
  'publisher',
  'publicationDate',
  '_publicationDate',
  'publicationStatus',
  '_publicationStatus',
  'copyright',
  '_copyright',
] as const;

/**
 * ContractContentDefinition - Contract precursor content
 *
 * @see https://hl7.org/fhir/R4/contractcontentdefinition.html
 *
 * @example
 * const contractContentDefinition = new ContractContentDefinition({
 *   // ... properties
 * });
 */
export class ContractContentDefinition extends BackboneElement implements IContractContentDefinition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Content structure and use */
  type: ICodeableConcept;

  /** Detailed Content Type Definition */
  subType?: ICodeableConcept;

  /** Publisher Entity */
  publisher?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** When published */
  publicationDate?: string;

  /** Extension for publicationDate */
  _publicationDate?: IElement;

  /** amended | appended | cancelled | disputed | entered-in-error | executable + */
  publicationStatus: ContractResourcePublicationStatusType;

  /** Extension for publicationStatus */
  _publicationStatus?: IElement;

  /** Publication Ownership */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractContentDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_CONTENT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractContentDefinition from a JSON object
   */
  static fromJSON(json: IContractContentDefinition): ContractContentDefinition {
    return new ContractContentDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractContentDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractContentDefinition>): ContractContentDefinition {
    return new ContractContentDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractContentDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractContentDefinition) => Partial<IContractContentDefinition>): ContractContentDefinition {
    const currentData = this.toJSON();
    return new ContractContentDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractContentDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractContentDefinition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_CONTENT_DEFINITION_PROPERTIES);
    return result as IContractContentDefinition;
  }

  /**
   * Create a deep clone of this ContractContentDefinition
   */
  clone(): ContractContentDefinition {
    return new ContractContentDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractContentDefinition
   */
  toString(): string {
    const parts: string[] = ['ContractContentDefinition'];
    return parts.join(', ');
  }
}
