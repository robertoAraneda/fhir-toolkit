import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionOperation } from '../../models/backbones/MedicinalProductDefinitionOperation.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicinalProductDefinitionOperation,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MedicinalProductDefinitionOperationBuilder - Fluent builder for MedicinalProductDefinitionOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionOperation = new MedicinalProductDefinitionOperationBuilder()
 *   .setType(value)
 *   .addOrganization({ ... })
 *   .build();
 */
export class MedicinalProductDefinitionOperationBuilder extends BackboneElementBuilder<MedicinalProductDefinitionOperation, IMedicinalProductDefinitionOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of manufacturing operation e.g. manufacturing itself, re-packaging
   */
  setType(type: ICodeableReference): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set effectiveDate
   * Date range of applicability
   */
  setEffectiveDate(effectiveDate: IPeriod): this {
    this.data.effectiveDate = effectiveDate;
    return this;
  }

  /**
   * Set confidentialityIndicator
   * Specifies whether this process is considered proprietary or confidential
   */
  setConfidentialityIndicator(confidentialityIndicator: ICodeableConcept): this {
    this.data.confidentialityIndicator = confidentialityIndicator;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add organization
   * The organization responsible for the particular process, e.g. the manufacturer or importer
   */
  addOrganization(organization: IReference<'Organization'>): this {
    return this.addToArray('organization', organization);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionOperation instance
   */
  build(): MedicinalProductDefinitionOperation {
    return new MedicinalProductDefinitionOperation(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionOperation> {
    const medicinalProductDefinitionOperation = this.build();
    await medicinalProductDefinitionOperation.validateOrThrow();
    return medicinalProductDefinitionOperation;
  }
}
