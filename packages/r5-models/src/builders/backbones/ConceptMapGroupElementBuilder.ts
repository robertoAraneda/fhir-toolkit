import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupElement } from '../../models/backbones/ConceptMapGroupElement.js';
import type {
  IConceptMapGroupElement,
  IConceptMapGroupElementTarget,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapGroupElementBuilder - Fluent builder for ConceptMapGroupElement backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupElement = new ConceptMapGroupElementBuilder()
 *   .setCode(value)
 *   .addTarget({ ... })
 *   .build();
 */
export class ConceptMapGroupElementBuilder extends BackboneElementBuilder<ConceptMapGroupElement, IConceptMapGroupElement> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Identifies element being mapped
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set display
   * Display for the code
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  /**
   * Set valueSet
   * Identifies the set of concepts being mapped
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  /**
   * Set noMap
   * No mapping to a target concept for this source concept
   */
  setNoMap(noMap: boolean): this {
    this.data.noMap = noMap;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add target
   * Concept in target system for element
   */
  addTarget(target: IConceptMapGroupElementTarget): this {
    return this.addToArray('target', target);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroupElement instance
   */
  build(): ConceptMapGroupElement {
    return new ConceptMapGroupElement(this.data);
  }

  /**
   * Build and validate the ConceptMapGroupElement instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroupElement> {
    const conceptMapGroupElement = this.build();
    await conceptMapGroupElement.validateOrThrow();
    return conceptMapGroupElement;
  }
}
