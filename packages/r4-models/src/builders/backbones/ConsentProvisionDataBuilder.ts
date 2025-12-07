import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentProvisionData } from '../../models/backbones/ConsentProvisionData.js';
import type {
  ConsentDataMeaningType,
  IConsentProvisionData,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ConsentProvisionDataBuilder - Fluent builder for ConsentProvisionData backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentProvisionData = new ConsentProvisionDataBuilder()
 *   .setMeaning(value)
 *   .build();
 */
export class ConsentProvisionDataBuilder extends BackboneElementBuilder<ConsentProvisionData, IConsentProvisionData> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set meaning
   * instance | related | dependents | authoredby
   */
  setMeaning(meaning: ConsentDataMeaningType): this {
    this.data.meaning = meaning;
    return this;
  }

  /**
   * Set reference
   * The actual data reference
   */
  setReference(reference: IReference<'Resource'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConsentProvisionData instance
   */
  build(): ConsentProvisionData {
    return new ConsentProvisionData(this.data);
  }

  /**
   * Build and validate the ConsentProvisionData instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConsentProvisionData> {
    const consentProvisionData = this.build();
    await consentProvisionData.validateOrThrow();
    return consentProvisionData;
  }
}
