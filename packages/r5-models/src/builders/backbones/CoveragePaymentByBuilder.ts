import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoveragePaymentBy } from '../../models/backbones/CoveragePaymentBy.js';
import type {
  ICoveragePaymentBy,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CoveragePaymentByBuilder - Fluent builder for CoveragePaymentBy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coveragePaymentBy = new CoveragePaymentByBuilder()
 *   .setParty(value)
 *   .build();
 */
export class CoveragePaymentByBuilder extends BackboneElementBuilder<CoveragePaymentBy, ICoveragePaymentBy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set party
   * Parties performing self-payment
   */
  setParty(party: IReference<'Patient' | 'RelatedPerson' | 'Organization'>): this {
    this.data.party = party;
    return this;
  }

  /**
   * Set responsibility
   * Party's responsibility
   */
  setResponsibility(responsibility: string): this {
    this.data.responsibility = responsibility;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoveragePaymentBy instance
   */
  build(): CoveragePaymentBy {
    return new CoveragePaymentBy(this.data);
  }

  /**
   * Build and validate the CoveragePaymentBy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoveragePaymentBy> {
    const coveragePaymentBy = this.build();
    await coveragePaymentBy.validateOrThrow();
    return coveragePaymentBy;
  }
}
