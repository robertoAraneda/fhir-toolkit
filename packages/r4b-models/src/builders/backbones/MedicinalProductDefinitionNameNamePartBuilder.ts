import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionNameNamePart } from '../../models/backbones/MedicinalProductDefinitionNameNamePart.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionNameNamePart,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicinalProductDefinitionNameNamePartBuilder - Fluent builder for MedicinalProductDefinitionNameNamePart backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionNameNamePart = new MedicinalProductDefinitionNameNamePartBuilder()
 *   .setPart(value)
 *   .build();
 */
export class MedicinalProductDefinitionNameNamePartBuilder extends BackboneElementBuilder<MedicinalProductDefinitionNameNamePart, IMedicinalProductDefinitionNameNamePart> {
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
   * Build the MedicinalProductDefinitionNameNamePart instance
   */
  build(): MedicinalProductDefinitionNameNamePart {
    return new MedicinalProductDefinitionNameNamePart(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionNameNamePart instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionNameNamePart> {
    const medicinalProductDefinitionNameNamePart = this.build();
    await medicinalProductDefinitionNameNamePart.validateOrThrow();
    return medicinalProductDefinitionNameNamePart;
  }
}
