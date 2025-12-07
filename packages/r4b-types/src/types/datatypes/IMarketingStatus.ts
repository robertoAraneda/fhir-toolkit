import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from './IPeriod.js';

/**
 * MarketingStatus Interface
 * 
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 * 
 *
 * @see https://hl7.org/fhir/R4/marketingstatus.html
 */
export interface IMarketingStatus extends IBackboneElement {
  /**
   * The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements
   */
  country?: ICodeableConcept;

  /**
   * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified
   */
  jurisdiction?: ICodeableConcept;

  /**
   * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples
   */
  status: ICodeableConcept;

  /**
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain
   */
  dateRange?: IPeriod;

  /**
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain
   */
  restoreDate?: string;
  /**
   * Extension for restoreDate
   */
  _restoreDate?: IElement;

}
