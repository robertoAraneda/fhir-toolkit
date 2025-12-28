import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IElement,
  IMarketingStatus,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MarketingStatus */
const MARKETING_STATUS_PROPERTIES = [
  'country',
  'jurisdiction',
  'status',
  'dateRange',
  'restoreDate',
  '_restoreDate',
] as const;

/**
 * MarketingStatus - The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 *
 * @see https://hl7.org/fhir/R4B/marketingstatus.html
 *
 * @example
 * const marketingStatus = new MarketingStatus({
 *   // ... properties
 * });
 */
export class MarketingStatus extends Element implements IMarketingStatus {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements */
  country?: ICodeableConcept;

  /** Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified */
  jurisdiction?: ICodeableConcept;

  /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples */
  status: ICodeableConcept;

  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain */
  dateRange?: IPeriod;

  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain */
  restoreDate?: string;

  /** Extension for restoreDate */
  _restoreDate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMarketingStatus>) {
    super(data);
    if (data) {
      this.assignProps(data, MARKETING_STATUS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MarketingStatus from a JSON object
   */
  static fromJSON(json: IMarketingStatus): MarketingStatus {
    return new MarketingStatus(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MarketingStatus with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMarketingStatus>): MarketingStatus {
    return new MarketingStatus({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MarketingStatus by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMarketingStatus) => Partial<IMarketingStatus>): MarketingStatus {
    const currentData = this.toJSON();
    return new MarketingStatus({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMarketingStatus)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMarketingStatus {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, MARKETING_STATUS_PROPERTIES);
    return result as IMarketingStatus;
  }

  /**
   * Create a deep clone of this MarketingStatus
   */
  clone(): MarketingStatus {
    return new MarketingStatus(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MarketingStatus
   */
  toString(): string {
    const parts: string[] = ['MarketingStatus'];
    return parts.join(', ');
  }
}
