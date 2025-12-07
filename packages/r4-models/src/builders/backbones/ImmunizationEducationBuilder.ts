import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationEducation } from '../../models/backbones/ImmunizationEducation.js';
import type {
  IImmunizationEducation,
} from '@fhir-toolkit/r4-types';

/**
 * ImmunizationEducationBuilder - Fluent builder for ImmunizationEducation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationEducation = new ImmunizationEducationBuilder()
 *   .setDocumentType(value)
 *   .build();
 */
export class ImmunizationEducationBuilder extends BackboneElementBuilder<ImmunizationEducation, IImmunizationEducation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set documentType
   * Educational material document identifier
   */
  setDocumentType(documentType: string): this {
    this.data.documentType = documentType;
    return this;
  }

  /**
   * Set reference
   * Educational material reference pointer
   */
  setReference(reference: string): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set publicationDate
   * Educational material publication date
   */
  setPublicationDate(publicationDate: string): this {
    this.data.publicationDate = publicationDate;
    return this;
  }

  /**
   * Set presentationDate
   * Educational material presentation date
   */
  setPresentationDate(presentationDate: string): this {
    this.data.presentationDate = presentationDate;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationEducation instance
   */
  build(): ImmunizationEducation {
    return new ImmunizationEducation(this.data);
  }

  /**
   * Build and validate the ImmunizationEducation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationEducation> {
    const immunizationEducation = this.build();
    await immunizationEducation.validateOrThrow();
    return immunizationEducation;
  }
}
