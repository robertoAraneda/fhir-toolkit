import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeatRepeatUnitStructuralRepresentation } from '../../models/backbones/SubstancePolymerRepeatRepeatUnitStructuralRepresentation.js';
import type {
  IAttachment,
  ICodeableConcept,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from '@fhir-toolkit/r4-types';

/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentationBuilder - Fluent builder for SubstancePolymerRepeatRepeatUnitStructuralRepresentation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeatRepeatUnitStructuralRepresentation = new SubstancePolymerRepeatRepeatUnitStructuralRepresentationBuilder()
 *   .setType(value)
 *   .build();
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentationBuilder extends BackboneElementBuilder<SubstancePolymerRepeatRepeatUnitStructuralRepresentation, ISubstancePolymerRepeatRepeatUnitStructuralRepresentation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Todo
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set representation
   * Todo
   */
  setRepresentation(representation: string): this {
    this.data.representation = representation;
    return this;
  }

  /**
   * Set attachment
   * Todo
   */
  setAttachment(attachment: IAttachment): this {
    this.data.attachment = attachment;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerRepeatRepeatUnitStructuralRepresentation instance
   */
  build(): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    return new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(this.data);
  }

  /**
   * Build and validate the SubstancePolymerRepeatRepeatUnitStructuralRepresentation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerRepeatRepeatUnitStructuralRepresentation> {
    const substancePolymerRepeatRepeatUnitStructuralRepresentation = this.build();
    await substancePolymerRepeatRepeatUnitStructuralRepresentation.validateOrThrow();
    return substancePolymerRepeatRepeatUnitStructuralRepresentation;
  }
}
