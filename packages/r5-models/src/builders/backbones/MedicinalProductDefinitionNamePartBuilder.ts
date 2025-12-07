import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionNamePart } from '../../models/backbones/MedicinalProductDefinitionNamePart.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionNamePart,
} from '@fhir-toolkit/r5-types';

/**
 * MedicinalProductDefinitionNamePartBuilder - Fluent builder for MedicinalProductDefinitionNamePart backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionNamePart = new MedicinalProductDefinitionNamePartBuilder()
 *   .setPart(value)
 *   .build();
 */
export class MedicinalProductDefinitionNamePartBuilder extends BackboneElementBuilder<MedicinalProductDefinitionNamePart, IMedicinalProductDefinitionNamePart> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set part
   * A fragment of a product name
   */
  setPart(part: string): this {
    this.data.part = part;
    return this;
  }

  /**
   * Set type
   * Identifying type for this part of the name (e.g. strength part)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionNamePart instance
   */
  build(): MedicinalProductDefinitionNamePart {
    return new MedicinalProductDefinitionNamePart(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionNamePart instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionNamePart> {
    const medicinalProductDefinitionNamePart = this.build();
    await medicinalProductDefinitionNamePart.validateOrThrow();
    return medicinalProductDefinitionNamePart;
  }
}
