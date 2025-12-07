import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionCrossReference } from '../../models/backbones/MedicinalProductDefinitionCrossReference.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicinalProductDefinitionCrossReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicinalProductDefinitionCrossReferenceBuilder - Fluent builder for MedicinalProductDefinitionCrossReference backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionCrossReference = new MedicinalProductDefinitionCrossReferenceBuilder()
 *   .setProduct(value)
 *   .build();
 */
export class MedicinalProductDefinitionCrossReferenceBuilder extends BackboneElementBuilder<MedicinalProductDefinitionCrossReference, IMedicinalProductDefinitionCrossReference> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set product
   * Reference to another product, e.g. for linking authorised to investigational product
   */
  setProduct(product: ICodeableReference): this {
    this.data.product = product;
    return this;
  }

  /**
   * Set type
   * The type of relationship, for instance branded to generic or virtual to actual product
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionCrossReference instance
   */
  build(): MedicinalProductDefinitionCrossReference {
    return new MedicinalProductDefinitionCrossReference(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionCrossReference instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionCrossReference> {
    const medicinalProductDefinitionCrossReference = this.build();
    await medicinalProductDefinitionCrossReference.validateOrThrow();
    return medicinalProductDefinitionCrossReference;
  }
}
