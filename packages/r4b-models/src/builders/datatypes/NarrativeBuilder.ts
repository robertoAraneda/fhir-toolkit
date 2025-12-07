import { ElementBuilder } from '../base/ElementBuilder.js';
import { Narrative } from '../../models/datatypes/Narrative.js';
import type {
  INarrative,
  NarrativeStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * NarrativeBuilder - Fluent builder for Narrative datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const narrative = new NarrativeBuilder()
 *   .setStatus(value)
 *   .build();
 */
export class NarrativeBuilder extends ElementBuilder<Narrative, INarrative> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * generated | extensions | additional | empty
   */
  setStatus(status: NarrativeStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set div
   * Limited xhtml content
   */
  setDiv(div: string): this {
    this.data.div = div;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Narrative instance
   */
  build(): Narrative {
    return new Narrative(this.data);
  }

  /**
   * Build and validate the Narrative instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Narrative> {
    const narrative = this.build();
    await narrative.validateOrThrow();
    return narrative;
  }
}
