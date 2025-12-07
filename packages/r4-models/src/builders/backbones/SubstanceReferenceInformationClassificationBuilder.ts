import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceReferenceInformationClassification } from '../../models/backbones/SubstanceReferenceInformationClassification.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceReferenceInformationClassification,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceReferenceInformationClassificationBuilder - Fluent builder for SubstanceReferenceInformationClassification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceReferenceInformationClassification = new SubstanceReferenceInformationClassificationBuilder()
 *   .setDomain(value)
 *   .addSubtype({ ... })
 *   .build();
 */
export class SubstanceReferenceInformationClassificationBuilder extends BackboneElementBuilder<SubstanceReferenceInformationClassification, ISubstanceReferenceInformationClassification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set domain
   * Todo
   */
  setDomain(domain: ICodeableConcept): this {
    this.data.domain = domain;
    return this;
  }

  /**
   * Set classification
   * Todo
   */
  setClassification(classification: ICodeableConcept): this {
    this.data.classification = classification;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subtype
   * Todo
   */
  addSubtype(subtype: ICodeableConcept): this {
    return this.addToArray('subtype', subtype);
  }

  /**
   * Add source
   * Todo
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceReferenceInformationClassification instance
   */
  build(): SubstanceReferenceInformationClassification {
    return new SubstanceReferenceInformationClassification(this.data);
  }

  /**
   * Build and validate the SubstanceReferenceInformationClassification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceReferenceInformationClassification> {
    const substanceReferenceInformationClassification = this.build();
    await substanceReferenceInformationClassification.validateOrThrow();
    return substanceReferenceInformationClassification;
  }
}
