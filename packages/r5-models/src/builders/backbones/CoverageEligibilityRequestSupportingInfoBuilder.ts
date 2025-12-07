import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityRequestSupportingInfo } from '../../models/backbones/CoverageEligibilityRequestSupportingInfo.js';
import type {
  ICoverageEligibilityRequestSupportingInfo,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CoverageEligibilityRequestSupportingInfoBuilder - Fluent builder for CoverageEligibilityRequestSupportingInfo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityRequestSupportingInfo = new CoverageEligibilityRequestSupportingInfoBuilder()
 *   .setSequence(value)
 *   .build();
 */
export class CoverageEligibilityRequestSupportingInfoBuilder extends BackboneElementBuilder<CoverageEligibilityRequestSupportingInfo, ICoverageEligibilityRequestSupportingInfo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Information instance identifier
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set information
   * Data to be provided
   */
  setInformation(information: IReference<'Resource'>): this {
    this.data.information = information;
    return this;
  }

  /**
   * Set appliesToAll
   * Applies to all items
   */
  setAppliesToAll(appliesToAll: boolean): this {
    this.data.appliesToAll = appliesToAll;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityRequestSupportingInfo instance
   */
  build(): CoverageEligibilityRequestSupportingInfo {
    return new CoverageEligibilityRequestSupportingInfo(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityRequestSupportingInfo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityRequestSupportingInfo> {
    const coverageEligibilityRequestSupportingInfo = this.build();
    await coverageEligibilityRequestSupportingInfo.validateOrThrow();
    return coverageEligibilityRequestSupportingInfo;
  }
}
