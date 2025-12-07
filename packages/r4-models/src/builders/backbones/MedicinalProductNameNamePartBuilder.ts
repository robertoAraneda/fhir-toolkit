import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductNameNamePart } from '../../models/backbones/MedicinalProductNameNamePart.js';
import type {
  ICoding,
  IMedicinalProductNameNamePart,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductNameNamePartBuilder - Fluent builder for MedicinalProductNameNamePart backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductNameNamePart = new MedicinalProductNameNamePartBuilder()
 *   .setPart(value)
 *   .build();
 */
export class MedicinalProductNameNamePartBuilder extends BackboneElementBuilder<MedicinalProductNameNamePart, IMedicinalProductNameNamePart> {
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
   * Idenifying type for this part of the name (e.g. strength part)
   */
  setType(type: ICoding): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductNameNamePart instance
   */
  build(): MedicinalProductNameNamePart {
    return new MedicinalProductNameNamePart(this.data);
  }

  /**
   * Build and validate the MedicinalProductNameNamePart instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductNameNamePart> {
    const medicinalProductNameNamePart = this.build();
    await medicinalProductNameNamePart.validateOrThrow();
    return medicinalProductNameNamePart;
  }
}
