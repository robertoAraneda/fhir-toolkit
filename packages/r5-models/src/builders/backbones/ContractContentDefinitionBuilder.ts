import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractContentDefinition } from '../../models/backbones/ContractContentDefinition.js';
import type {
  ContractResourcePublicationStatusType,
  ICodeableConcept,
  IContractContentDefinition,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ContractContentDefinitionBuilder - Fluent builder for ContractContentDefinition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractContentDefinition = new ContractContentDefinitionBuilder()
 *   .setType(value)
 *   .build();
 */
export class ContractContentDefinitionBuilder extends BackboneElementBuilder<ContractContentDefinition, IContractContentDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Content structure and use
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subType
   * Detailed Content Type Definition
   */
  setSubType(subType: ICodeableConcept): this {
    this.data.subType = subType;
    return this;
  }

  /**
   * Set publisher
   * Publisher Entity
   */
  setPublisher(publisher: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set publicationDate
   * When published
   */
  setPublicationDate(publicationDate: string): this {
    this.data.publicationDate = publicationDate;
    return this;
  }

  /**
   * Set publicationStatus
   * amended | appended | cancelled | disputed | entered-in-error | executable +
   */
  setPublicationStatus(publicationStatus: ContractResourcePublicationStatusType): this {
    this.data.publicationStatus = publicationStatus;
    return this;
  }

  /**
   * Set copyright
   * Publication Ownership
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractContentDefinition instance
   */
  build(): ContractContentDefinition {
    return new ContractContentDefinition(this.data);
  }

  /**
   * Build and validate the ContractContentDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractContentDefinition> {
    const contractContentDefinition = this.build();
    await contractContentDefinition.validateOrThrow();
    return contractContentDefinition;
  }
}
