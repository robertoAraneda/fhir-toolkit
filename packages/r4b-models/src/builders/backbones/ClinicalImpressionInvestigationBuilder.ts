import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalImpressionInvestigation } from '../../models/backbones/ClinicalImpressionInvestigation.js';
import type {
  IClinicalImpressionInvestigation,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ClinicalImpressionInvestigationBuilder - Fluent builder for ClinicalImpressionInvestigation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalImpressionInvestigation = new ClinicalImpressionInvestigationBuilder()
 *   .setCode(value)
 *   .addItem({ ... })
 *   .build();
 */
export class ClinicalImpressionInvestigationBuilder extends BackboneElementBuilder<ClinicalImpressionInvestigation, IClinicalImpressionInvestigation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * A name/code for the set
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add item
   * Record of a specific investigation
   */
  addItem(item: IReference<'Observation' | 'QuestionnaireResponse' | 'FamilyMemberHistory' | 'DiagnosticReport' | 'RiskAssessment' | 'ImagingStudy' | 'Media'>): this {
    return this.addToArray('item', item);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalImpressionInvestigation instance
   */
  build(): ClinicalImpressionInvestigation {
    return new ClinicalImpressionInvestigation(this.data);
  }

  /**
   * Build and validate the ClinicalImpressionInvestigation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalImpressionInvestigation> {
    const clinicalImpressionInvestigation = this.build();
    await clinicalImpressionInvestigation.validateOrThrow();
    return clinicalImpressionInvestigation;
  }
}
