import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalImpressionFinding } from '../../models/backbones/ClinicalImpressionFinding.js';
import type {
  IClinicalImpressionFinding,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClinicalImpressionFindingBuilder - Fluent builder for ClinicalImpressionFinding backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalImpressionFinding = new ClinicalImpressionFindingBuilder()
 *   .setItemCodeableConcept(value)
 *   .build();
 */
export class ClinicalImpressionFindingBuilder extends BackboneElementBuilder<ClinicalImpressionFinding, IClinicalImpressionFinding> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set itemCodeableConcept
   * What was found
   */
  setItemCodeableConcept(itemCodeableConcept: ICodeableConcept): this {
    this.data.itemCodeableConcept = itemCodeableConcept;
    return this;
  }

  /**
   * Set itemReference
   * What was found
   */
  setItemReference(itemReference: IReference<'Condition' | 'Observation' | 'Media'>): this {
    this.data.itemReference = itemReference;
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
