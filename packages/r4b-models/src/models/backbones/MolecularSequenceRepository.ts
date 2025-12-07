import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMolecularSequenceRepository,
  RepositoryTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MolecularSequenceRepository */
const MOLECULAR_SEQUENCE_REPOSITORY_PROPERTIES = [
  'type',
  '_type',
  'url',
  '_url',
  'name',
  '_name',
  'datasetId',
  '_datasetId',
  'variantsetId',
  '_variantsetId',
  'readsetId',
  '_readsetId',
] as const;

/**
 * MolecularSequenceRepository - External repository which contains detailed report related with observedSeq in this resource
 *
 * @see https://hl7.org/fhir/R4/molecularsequencerepository.html
 *
 * @example
 * const molecularSequenceRepository = new MolecularSequenceRepository({
 *   // ... properties
 * });
 */
export class MolecularSequenceRepository extends BackboneElement implements IMolecularSequenceRepository {

  // ============================================================================
  // Properties
  // ============================================================================

  /** directlink | openapi | login | oauth | other */
  type: RepositoryTypeType;

  /** Extension for type */
  _type?: IElement;

  /** URI of the repository */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Repository's name */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Id of the dataset that used to call for dataset in repository */
  datasetId?: string;

  /** Extension for datasetId */
  _datasetId?: IElement;

  /** Id of the variantset that used to call for variantset in repository */
  variantsetId?: string;

  /** Extension for variantsetId */
  _variantsetId?: IElement;

  /** Id of the read */
  readsetId?: string;

  /** Extension for readsetId */
  _readsetId?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceRepository>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_REPOSITORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceRepository from a JSON object
   */
  static fromJSON(json: IMolecularSequenceRepository): MolecularSequenceRepository {
    return new MolecularSequenceRepository(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceRepository with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceRepository>): MolecularSequenceRepository {
    return new MolecularSequenceRepository({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceRepository by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceRepository) => Partial<IMolecularSequenceRepository>): MolecularSequenceRepository {
    const currentData = this.toJSON();
    return new MolecularSequenceRepository({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceRepository)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceRepository {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_REPOSITORY_PROPERTIES);
    return result as IMolecularSequenceRepository;
  }

  /**
   * Create a deep clone of this MolecularSequenceRepository
   */
  clone(): MolecularSequenceRepository {
    return new MolecularSequenceRepository(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceRepository
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceRepository'];
    return parts.join(', ');
  }
}
