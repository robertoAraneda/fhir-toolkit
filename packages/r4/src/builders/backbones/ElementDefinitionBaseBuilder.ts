import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionBase } from '../../models/backbones/ElementDefinitionBase.js';
import type {
  IElementDefinitionBase,
} from '@fhir-toolkit/r4-types';

/**
 * ElementDefinitionBaseBuilder - Fluent builder for ElementDefinitionBase backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionBase = new ElementDefinitionBaseBuilder()
 *   .setPath(value)
 *   .build();
 */
export class ElementDefinitionBaseBuilder extends BackboneElementBuilder<ElementDefinitionBase, IElementDefinitionBase> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * Path that identifies the base element
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set min
   * Min cardinality of the base element
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Max cardinality of the base element
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionBase instance
   */
  build(): ElementDefinitionBase {
    return new ElementDefinitionBase(this.data);
  }

  /**
   * Build and validate the ElementDefinitionBase instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionBase> {
    const elementDefinitionBase = this.build();
    await elementDefinitionBase.validateOrThrow();
    return elementDefinitionBase;
  }
}
