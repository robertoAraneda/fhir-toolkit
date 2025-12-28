import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitItem,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitItemBodySite,
  IExplanationOfBenefitItemDetail,
  IExplanationOfBenefitItemReviewOutcome,
  IIdentifier,
  IMoney,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitItem */
const EXPLANATION_OF_BENEFIT_ITEM_PROPERTIES = [
  'sequence',
  '_sequence',
  'careTeamSequence',
  '_careTeamSequence',
  'diagnosisSequence',
  '_diagnosisSequence',
  'procedureSequence',
  '_procedureSequence',
  'informationSequence',
  '_informationSequence',
  'traceNumber',
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
  'noteNumber',
  '_noteNumber',
  'reviewOutcome',
  'adjudication',
  'detail',
] as const;

/**
 * ExplanationOfBenefitItem - Product or service provided
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefititem.html
 *
 * @example
 * const explanationOfBenefitItem = new ExplanationOfBenefitItem({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitItem extends BackboneElement implements IExplanationOfBenefitItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Applicable care team members */
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

  /** Number for tracking */
  traceNumber?: IIdentifier[];

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
  bodySite?: IExplanationOfBenefitItemBodySite[];

  /** Encounters associated with the listed treatments */
  encounter?: IReference<'Encounter'>[];

  /** Applicable note numbers */
  noteNumber?: number[];

  /** Extension for noteNumber */
  _noteNumber?: IElement;

  /** Adjudication results */
  reviewOutcome?: IExplanationOfBenefitItemReviewOutcome;

  /** Adjudication details */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /** Additional items */
  detail?: IExplanationOfBenefitItemDetail[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitItem>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitItem from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitItem): ExplanationOfBenefitItem {
    return new ExplanationOfBenefitItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitItem>): ExplanationOfBenefitItem {
    return new ExplanationOfBenefitItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitItem) => Partial<IExplanationOfBenefitItem>): ExplanationOfBenefitItem {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_ITEM_PROPERTIES);
    return result as IExplanationOfBenefitItem;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitItem
   */
  clone(): ExplanationOfBenefitItem {
    return new ExplanationOfBenefitItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitItem
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitItem'];
    return parts.join(', ');
  }
}
