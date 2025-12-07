import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationRequestDispenseRequest } from '../../models/backbones/MedicationRequestDispenseRequest.js';
import type {
  IDuration,
  IMedicationRequestDispenseRequest,
  IMedicationRequestDispenseRequestInitialFill,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationRequestDispenseRequestBuilder - Fluent builder for MedicationRequestDispenseRequest backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationRequestDispenseRequest = new MedicationRequestDispenseRequestBuilder()
 *   .setInitialFill(value)
 *   .build();
 */
export class MedicationRequestDispenseRequestBuilder extends BackboneElementBuilder<MedicationRequestDispenseRequest, IMedicationRequestDispenseRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set initialFill
   * First fill details
   */
  setInitialFill(initialFill: IMedicationRequestDispenseRequestInitialFill): this {
    this.data.initialFill = initialFill;
    return this;
  }

  /**
   * Set dispenseInterval
   * Minimum period of time between dispenses
   */
  setDispenseInterval(dispenseInterval: IDuration): this {
    this.data.dispenseInterval = dispenseInterval;
    return this;
  }

  /**
   * Set validityPeriod
   * Time period supply is authorized for
   */
  setValidityPeriod(validityPeriod: IPeriod): this {
    this.data.validityPeriod = validityPeriod;
    return this;
  }

  /**
   * Set numberOfRepeatsAllowed
   * Number of refills authorized
   */
  setNumberOfRepeatsAllowed(numberOfRepeatsAllowed: number): this {
    this.data.numberOfRepeatsAllowed = numberOfRepeatsAllowed;
    return this;
  }

  /**
   * Set quantity
   * Amount of medication to supply per dispense
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set expectedSupplyDuration
   * Number of days supply per dispense
   */
  setExpectedSupplyDuration(expectedSupplyDuration: IDuration): this {
    this.data.expectedSupplyDuration = expectedSupplyDuration;
    return this;
  }

  /**
   * Set performer
   * Intended dispenser
   */
  setPerformer(performer: IReference<'Organization'>): this {
    this.data.performer = performer;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationRequestDispenseRequest instance
   */
  build(): MedicationRequestDispenseRequest {
    return new MedicationRequestDispenseRequest(this.data);
  }

  /**
   * Build and validate the MedicationRequestDispenseRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationRequestDispenseRequest> {
    const medicationRequestDispenseRequest = this.build();
    await medicationRequestDispenseRequest.validateOrThrow();
    return medicationRequestDispenseRequest;
  }
}
