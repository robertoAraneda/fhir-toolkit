import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalImpressionFinding } from '../../models/backbones/ClinicalImpressionFinding.js';
import type {
  IClinicalImpressionFinding,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClinicalImpressionFindingBuilder - Fluent builder for ClinicalImpressionFinding backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalImpressionFinding = new ClinicalImpressionFindingBuilder()
 *   .setItem(value)
 *   .build();
 */
export class ClinicalImpressionFindingBuilder extends BackboneElementBuilder<ClinicalImpressionFinding, IClinicalImpressionFinding> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set item
   * What was found
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  /**
   * Set basis
   * Which investigations support finding
   */
  setBasis(basis: string): this {
    this.data.basis = basis;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalImpressionFinding instance
   */
  build(): ClinicalImpressionFinding {
    return new ClinicalImpressionFinding(this.data);
  }

  /**
   * Build and validate the ClinicalImpressionFinding instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalImpressionFinding> {
    const clinicalImpressionFinding = this.build();
    await clinicalImpressionFinding.validateOrThrow();
    return clinicalImpressionFinding;
  }
}
