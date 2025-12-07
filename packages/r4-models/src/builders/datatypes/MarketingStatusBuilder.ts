import { ElementBuilder } from '../base/ElementBuilder.js';
import { MarketingStatus } from '../../models/datatypes/MarketingStatus.js';
import type {
  ICodeableConcept,
  IMarketingStatus,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * MarketingStatusBuilder - Fluent builder for MarketingStatus datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const marketingStatus = new MarketingStatusBuilder()
 *   .setCountry(value)
 *   .build();
 */
export class MarketingStatusBuilder extends ElementBuilder<MarketingStatus, IMarketingStatus> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set country
   * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements
   */
  setCountry(country: ICodeableConcept): this {
    this.data.country = country;
    return this;
  }

  /**
   * Set jurisdiction
   * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified
   */
  setJurisdiction(jurisdiction: ICodeableConcept): this {
    this.data.jurisdiction = jurisdiction;
    return this;
  }

  /**
   * Set status
   * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set dateRange
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain
   */
  setDateRange(dateRange: IPeriod): this {
    this.data.dateRange = dateRange;
    return this;
  }

  /**
   * Set restoreDate
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain
   */
  setRestoreDate(restoreDate: string): this {
    this.data.restoreDate = restoreDate;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MarketingStatus instance
   */
  build(): MarketingStatus {
    return new MarketingStatus(this.data);
  }

  /**
   * Build and validate the MarketingStatus instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MarketingStatus> {
    const marketingStatus = this.build();
    await marketingStatus.validateOrThrow();
    return marketingStatus;
  }
}
