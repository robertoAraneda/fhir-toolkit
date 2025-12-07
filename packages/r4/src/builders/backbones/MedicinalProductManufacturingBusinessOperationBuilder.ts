import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductManufacturingBusinessOperation } from '../../models/backbones/MedicinalProductManufacturingBusinessOperation.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductManufacturingBusinessOperation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductManufacturingBusinessOperationBuilder - Fluent builder for MedicinalProductManufacturingBusinessOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductManufacturingBusinessOperation = new MedicinalProductManufacturingBusinessOperationBuilder()
 *   .setOperationType(value)
 *   .addManufacturer({ ... })
 *   .build();
 */
export class MedicinalProductManufacturingBusinessOperationBuilder extends BackboneElementBuilder<MedicinalProductManufacturingBusinessOperation, IMedicinalProductManufacturingBusinessOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set operationType
   * The type of manufacturing operation
   */
  setOperationType(operationType: ICodeableConcept): this {
    this.data.operationType = operationType;
    return this;
  }

  /**
   * Set authorisationReferenceNumber
   * Regulatory authorization reference number
   */
  setAuthorisationReferenceNumber(authorisationReferenceNumber: IIdentifier): this {
    this.data.authorisationReferenceNumber = authorisationReferenceNumber;
    return this;
  }

  /**
   * Set effectiveDate
   * Regulatory authorization date
   */
  setEffectiveDate(effectiveDate: string): this {
    this.data.effectiveDate = effectiveDate;
    return this;
  }

  /**
   * Set confidentialityIndicator
   * To indicate if this proces is commercially confidential
   */
  setConfidentialityIndicator(confidentialityIndicator: ICodeableConcept): this {
    this.data.confidentialityIndicator = confidentialityIndicator;
    return this;
  }

  /**
   * Set regulator
   * A regulator which oversees the operation
   */
  setRegulator(regulator: IReference<'Organization'>): this {
    this.data.regulator = regulator;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add manufacturer
   * The manufacturer or establishment associated with the process
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductManufacturingBusinessOperation instance
   */
  build(): MedicinalProductManufacturingBusinessOperation {
    return new MedicinalProductManufacturingBusinessOperation(this.data);
  }

  /**
   * Build and validate the MedicinalProductManufacturingBusinessOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductManufacturingBusinessOperation> {
    const medicinalProductManufacturingBusinessOperation = this.build();
    await medicinalProductManufacturingBusinessOperation.validateOrThrow();
    return medicinalProductManufacturingBusinessOperation;
  }
}
