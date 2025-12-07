import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapGroupUnmapped } from '../../models/backbones/ConceptMapGroupUnmapped.js';
import type {
  ConceptMapGroupUnmappedModeType,
  ConceptMapRelationshipType,
  IConceptMapGroupUnmapped,
} from '@fhir-toolkit/r5-types';

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
   * use-source-code | fixed | other-map
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
   * Set valueSet
   * Fixed code set when mode = fixed
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  /**
   * Set relationship
   * related-to | equivalent | source-is-narrower-than-target | source-is-broader-than-target | not-related-to
   */
  setRelationship(relationship: ConceptMapRelationshipType): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set otherMap
   * canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped
   */
  setOtherMap(otherMap: string): this {
    this.data.otherMap = otherMap;
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
