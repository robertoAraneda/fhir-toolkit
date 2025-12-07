import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesExpansion } from '../../models/backbones/TerminologyCapabilitiesExpansion.js';
import type {
  ITerminologyCapabilitiesExpansion,
  ITerminologyCapabilitiesExpansionParameter,
} from '@fhir-toolkit/r5-types';

/**
 * TerminologyCapabilitiesExpansionBuilder - Fluent builder for TerminologyCapabilitiesExpansion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesExpansion = new TerminologyCapabilitiesExpansionBuilder()
 *   .setHierarchical(value)
 *   .addParameter({ ... })
 *   .build();
 */
export class TerminologyCapabilitiesExpansionBuilder extends BackboneElementBuilder<TerminologyCapabilitiesExpansion, ITerminologyCapabilitiesExpansion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set hierarchical
   * Whether the server can return nested value sets
   */
  setHierarchical(hierarchical: boolean): this {
    this.data.hierarchical = hierarchical;
    return this;
  }

  /**
   * Set paging
   * Whether the server supports paging on expansion
   */
  setPaging(paging: boolean): this {
    this.data.paging = paging;
    return this;
  }

  /**
   * Set incomplete
   * Allow request for incomplete expansions?
   */
  setIncomplete(incomplete: boolean): this {
    this.data.incomplete = incomplete;
    return this;
  }

  /**
   * Set textFilter
   * Documentation about text searching works
   */
  setTextFilter(textFilter: string): this {
    this.data.textFilter = textFilter;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parameter
   * Supported expansion parameter
   */
  addParameter(parameter: ITerminologyCapabilitiesExpansionParameter): this {
    return this.addToArray('parameter', parameter);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesExpansion instance
   */
  build(): TerminologyCapabilitiesExpansion {
    return new TerminologyCapabilitiesExpansion(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesExpansion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesExpansion> {
    const terminologyCapabilitiesExpansion = this.build();
    await terminologyCapabilitiesExpansion.validateOrThrow();
    return terminologyCapabilitiesExpansion;
  }
}
