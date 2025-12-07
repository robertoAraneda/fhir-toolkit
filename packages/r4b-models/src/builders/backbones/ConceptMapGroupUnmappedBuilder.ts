import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupUnmapped } from '../../models/backbones/ConceptMapGroupUnmapped.js';
import type {
  ConceptMapGroupUnmappedModeType,
  IConceptMapGroupUnmapped,
} from '@fhir-toolkit/r4b-types';

/**
 * ConceptMapGroupUnmappedBuilder - Fluent builder for ConceptMapGroupUnmapped backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapGroupUnmapped = new ConceptMapGroupUnmappedBuilder()
 *   .setMode(value)
 *   .build();
 */
export class ConceptMapGroupUnmappedBuilder extends BackboneElementBuilder<ConceptMapGroupUnmapped, IConceptMapGroupUnmapped> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * provided | fixed | other-map
   */
  setMode(mode: ConceptMapGroupUnmappedModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set code
   * Fixed code when mode = fixed
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
   * Set url
   * canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapGroupUnmapped instance
   */
  build(): ConceptMapGroupUnmapped {
    return new ConceptMapGroupUnmapped(this.data);
  }

  /**
   * Build and validate the ConceptMapGroupUnmapped instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapGroupUnmapped> {
    const conceptMapGroupUnmapped = this.build();
    await conceptMapGroupUnmapped.validateOrThrow();
    return conceptMapGroupUnmapped;
  }
}
