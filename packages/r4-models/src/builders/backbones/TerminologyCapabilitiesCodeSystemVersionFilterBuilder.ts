import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesCodeSystemVersionFilter } from '../../models/backbones/TerminologyCapabilitiesCodeSystemVersionFilter.js';
import type {
  ITerminologyCapabilitiesCodeSystemVersionFilter,
} from '@fhir-toolkit/r4-types';

/**
 * TerminologyCapabilitiesCodeSystemVersionFilterBuilder - Fluent builder for TerminologyCapabilitiesCodeSystemVersionFilter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesCodeSystemVersionFilter = new TerminologyCapabilitiesCodeSystemVersionFilterBuilder()
 *   .setCode(value)
 *   .addOp({ ... })
 *   .build();
 */
export class TerminologyCapabilitiesCodeSystemVersionFilterBuilder extends BackboneElementBuilder<TerminologyCapabilitiesCodeSystemVersionFilter, ITerminologyCapabilitiesCodeSystemVersionFilter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code of the property supported
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add op
   * Operations supported for the property
   */
  addOp(op: string): this {
    return this.addToArray('op', op);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesCodeSystemVersionFilter instance
   */
  build(): TerminologyCapabilitiesCodeSystemVersionFilter {
    return new TerminologyCapabilitiesCodeSystemVersionFilter(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesCodeSystemVersionFilter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesCodeSystemVersionFilter> {
    const terminologyCapabilitiesCodeSystemVersionFilter = this.build();
    await terminologyCapabilitiesCodeSystemVersionFilter.validateOrThrow();
    return terminologyCapabilitiesCodeSystemVersionFilter;
  }
}
