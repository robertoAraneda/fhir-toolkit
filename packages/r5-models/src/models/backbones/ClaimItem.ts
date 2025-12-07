import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  IClaimItem,
  IClaimItemBodySite,
  IClaimItemDetail,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimItem */
const CLAIM_ITEM_PROPERTIES = [
  'sequence',
  '_sequence',
  'traceNumber',
  'careTeamSequence',
  '_careTeamSequence',
  'diagnosisSequence',
  '_diagnosisSequence',
  'procedureSequence',
  '_procedureSequence',
  'informationSequence',
  '_informationSequence',
  'revenue',
  'category',
  'productOrService',
  'productOrServiceEnd',
  'request',
  'modifier',
  'programCode',
  'servicedDate',
  '_servicedDate',
  'servicedPeriod',
  'locationCodeableConcept',
  'locationAddress',
  'locationReference',
  'patientPaid',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'tax',
  'net',
  'udi',
  'bodySite',
  'encounter',
  'detail',
] as const;

/**
 * ClaimItem - Product or service provided
 *
 * @see https://hl7.org/fhir/R4/claimitem.html
 *
 * @example
 * const claimItem = new ClaimItem({
 *   // ... properties
 * });
 */
export class ClaimItem extends BackboneElement implements IClaimItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Number for tracking */
  traceNumber?: IIdentifier[];

  /** Applicable careTeam members */
  careTeamSequence?: number[];

  /** Extension for careTeamSequence */
  _careTeamSequence?: IElement;

  /** Applicable diagnoses */
  diagnosisSequence?: number[];

  /** Extension for diagnosisSequence */
  _diagnosisSequence?: IElement;

  /** Applicable procedures */
  procedureSequence?: number[];

  /** Extension for procedureSequence */
  _procedureSequence?: IElement;

  /** Applicable exception and supporting information */
  informationSequence?: number[];

  /** Extension for informationSequence */
  _informationSequence?: IElement;

  /** Revenue or cost center code */
  revenue?: ICodeableConcept;

  /** Benefit classification */
  category?: ICodeableConcept;

  /** Billing, service, product, or drug code */
  productOrService?: ICodeableConcept;

  /** End of a range of codes */
  productOrServiceEnd?: ICodeableConcept;

  /** Request or Referral for Service */
  request?: IReference<'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'SupplyRequest' | 'VisionPrescription'>[];

  /** Product or service billing modifiers */
  modifier?: ICodeableConcept[];

  /** Program the product or service is provided under */
  programCode?: ICodeableConcept[];

  /** Date or dates of service or product delivery */
  servicedDate?: string;

  /** Extension for servicedDate */
  _servicedDate?: IElement;

  /** Date or dates of service or product delivery */
  servicedPeriod?: IPeriod;

  /** Place of service or where product was supplied */
  locationCodeableConcept?: ICodeableConcept;

  /** Place of service or where product was supplied */
  locationAddress?: IAddress;

  /** Place of service or where product was supplied */
  locationReference?: IReference;

  /** Paid by the patient */
  patientPaid?: IMoney;

  /** Count of products or services */
  quantity?: IQuantity;

  /** Fee, charge or cost per item */
  unitPrice?: IMoney;

  /** Price scaling factor */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Total tax */
  tax?: IMoney;

  /** Total item cost */
  net?: IMoney;

  /** Unique device identifier */
  udi?: IReference<'Device'>[];

  /** Anatomical location */
  bodySite?: IClaimItemBodySite[];

  /** Encounters associated with the listed treatments */
  encounter?: IReference<'Encounter'>[];

  /** Product or service provided */
  detail?: IClaimItemDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimItem>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimItem from a JSON object
   */
  static fromJSON(json: IClaimItem): ClaimItem {
    return new ClaimItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimItem>): ClaimItem {
    return new ClaimItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimItem) => Partial<IClaimItem>): ClaimItem {
    const currentData = this.toJSON();
    return new ClaimItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_ITEM_PROPERTIES);
    return result as IClaimItem;
  }

  /**
   * Create a deep clone of this ClaimItem
   */
  clone(): ClaimItem {
    return new ClaimItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimItem
   */
  toString(): string {
    const parts: string[] = ['ClaimItem'];
    return parts.join(', ');
  }
}
