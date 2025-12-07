import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceRepository } from '../../models/backbones/MolecularSequenceRepository.js';
import type {
  IMolecularSequenceRepository,
  RepositoryTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * MolecularSequenceRepositoryBuilder - Fluent builder for MolecularSequenceRepository backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceRepository = new MolecularSequenceRepositoryBuilder()
 *   .setType(value)
 *   .build();
 */
export class MolecularSequenceRepositoryBuilder extends BackboneElementBuilder<MolecularSequenceRepository, IMolecularSequenceRepository> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * directlink | openapi | login | oauth | other
   */
  setType(type: RepositoryTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set url
   * URI of the repository
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set name
   * Repository's name
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set datasetId
   * Id of the dataset that used to call for dataset in repository
   */
  setDatasetId(datasetId: string): this {
    this.data.datasetId = datasetId;
    return this;
  }

  /**
   * Set variantsetId
   * Id of the variantset that used to call for variantset in repository
   */
  setVariantsetId(variantsetId: string): this {
    this.data.variantsetId = variantsetId;
    return this;
  }

  /**
   * Set readsetId
   * Id of the read
   */
  setReadsetId(readsetId: string): this {
    this.data.readsetId = readsetId;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceRepository instance
   */
  build(): MolecularSequenceRepository {
    return new MolecularSequenceRepository(this.data);
  }

  /**
   * Build and validate the MolecularSequenceRepository instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceRepository> {
    const molecularSequenceRepository = this.build();
    await molecularSequenceRepository.validateOrThrow();
    return molecularSequenceRepository;
  }
}
