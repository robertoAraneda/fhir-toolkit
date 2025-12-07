import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroup } from '../../models/backbones/ConceptMapGroup.js';
import type {
  IConceptMapGroup,
  IConceptMapGroupElement,
  IConceptMapGroupUnmapped,
} from '@fhir-toolkit/r4-types';

/**
 * ConceptMapGroupBuilder - Fluent builder for ConceptMapGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroup = new ConceptMapGroupBuilder()
 *   .setSource(value)
 *   .addElement({ ... })
 *   .build();
 */
export class ConceptMapGroupBuilder extends BackboneElementBuilder<ConceptMapGroup, IConceptMapGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set source
   * Source system where concepts to be mapped are defined
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set sourceVersion
   * Specific version of the  code system
   */
  setSourceVersion(sourceVersion: string): this {
    this.data.sourceVersion = sourceVersion;
    return this;
  }

  /**
   * Set target
   * Target system that the concepts are to be mapped to
   */
  setTarget(target: string): this {
    this.data.target = target;
    return this;
  }

  /**
   * Set targetVersion
   * Specific version of the  code system
   */
  setTargetVersion(targetVersion: string): this {
    this.data.targetVersion = targetVersion;
    return this;
  }

  /**
   * Set unmapped
   * What to do when there is no mapping for the source concept
   */
  setUnmapped(unmapped: IConceptMapGroupUnmapped): this {
    this.data.unmapped = unmapped;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add element
   * Mappings for a concept from the source set
   */
  addElement(element: IConceptMapGroupElement): this {
    return this.addToArray('element', element);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroup instance
   */
  build(): ConceptMapGroup {
    return new ConceptMapGroup(this.data);
  }

  /**
   * Build and validate the ConceptMapGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroup> {
    const conceptMapGroup = this.build();
    await conceptMapGroup.validateOrThrow();
    return conceptMapGroup;
  }
}
