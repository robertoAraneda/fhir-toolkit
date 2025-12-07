import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClinicalUseDefinitionWarning } from '../../models/backbones/ClinicalUseDefinitionWarning.js';
import type {
  IClinicalUseDefinitionWarning,
  ICodeableConcept,
} from '@fhir-toolkit/r4b-types';

/**
 * ClinicalUseDefinitionWarningBuilder - Fluent builder for ClinicalUseDefinitionWarning backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const clinicalUseDefinitionWarning = new ClinicalUseDefinitionWarningBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class ClinicalUseDefinitionWarningBuilder extends BackboneElementBuilder<ClinicalUseDefinitionWarning, IClinicalUseDefinitionWarning> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * A textual definition of this warning, with formatting
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set code
   * A coded or unformatted textual definition of this warning
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClinicalUseDefinitionWarning instance
   */
  build(): ClinicalUseDefinitionWarning {
    return new ClinicalUseDefinitionWarning(this.data);
  }

  /**
   * Build and validate the ClinicalUseDefinitionWarning instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClinicalUseDefinitionWarning> {
    const clinicalUseDefinitionWarning = this.build();
    await clinicalUseDefinitionWarning.validateOrThrow();
    return clinicalUseDefinitionWarning;
  }
}
