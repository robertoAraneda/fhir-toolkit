import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionSlicingDiscriminator } from '../../models/backbones/ElementDefinitionSlicingDiscriminator.js';
import type {
  DiscriminatorTypeType,
  IElementDefinitionSlicingDiscriminator,
} from '@fhir-toolkit/r4-types';

/**
 * ElementDefinitionSlicingDiscriminatorBuilder - Fluent builder for ElementDefinitionSlicingDiscriminator backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionSlicingDiscriminator = new ElementDefinitionSlicingDiscriminatorBuilder()
 *   .setType(value)
 *   .build();
 */
export class ElementDefinitionSlicingDiscriminatorBuilder extends BackboneElementBuilder<ElementDefinitionSlicingDiscriminator, IElementDefinitionSlicingDiscriminator> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * value | exists | pattern | type | profile
   */
  setType(type: DiscriminatorTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set path
   * Path to element value
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionSlicingDiscriminator instance
   */
  build(): ElementDefinitionSlicingDiscriminator {
    return new ElementDefinitionSlicingDiscriminator(this.data);
  }

  /**
   * Build and validate the ElementDefinitionSlicingDiscriminator instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionSlicingDiscriminator> {
    const elementDefinitionSlicingDiscriminator = this.build();
    await elementDefinitionSlicingDiscriminator.validateOrThrow();
    return elementDefinitionSlicingDiscriminator;
  }
}
