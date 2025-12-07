import { DomainResource } from '../base/DomainResource.js';
import type {
  ClaimProcessingType,
  ExplanationOfBenefitStatusType,
  IAttachment,
  ICodeableConcept,
  IElement,
  IExplanationOfBenefit,
  IExplanationOfBenefitAccident,
  IExplanationOfBenefitAddItem,
  IExplanationOfBenefitBenefitBalance,
  IExplanationOfBenefitCareTeam,
  IExplanationOfBenefitDiagnosis,
  IExplanationOfBenefitInsurance,
  IExplanationOfBenefitItem,
  IExplanationOfBenefitItemAdjudication,
  IExplanationOfBenefitPayee,
  IExplanationOfBenefitPayment,
  IExplanationOfBenefitProcedure,
  IExplanationOfBenefitProcessNote,
  IExplanationOfBenefitRelated,
  IExplanationOfBenefitSupportingInfo,
  IExplanationOfBenefitTotal,
  IIdentifier,
  IPeriod,
  IReference,
  UseType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ExplanationOfBenefit */
const EXPLANATION_OF_BENEFIT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  'subType',
  'use',
  '_use',
  'patient',
  'billablePeriod',
  'created',
  '_created',
  'enterer',
  'insurer',
  'provider',
  'priority',
  'fundsReserveRequested',
  'fundsReserve',
  'related',
  'prescription',
  'originalPrescription',
  'payee',
  'referral',
  'facility',
  'claim',
  'claimResponse',
  'outcome',
  '_outcome',
  'disposition',
  '_disposition',
  'preAuthRef',
  '_preAuthRef',
  'preAuthRefPeriod',
  'careTeam',
  'supportingInfo',
  'diagnosis',
  'procedure',
  'precedence',
  '_precedence',
  'insurance',
  'accident',
  'item',
  'addItem',
  'adjudication',
  'total',
  'payment',
  'formCode',
  'form',
  'processNote',
  'benefitPeriod',
  'benefitBalance',
] as const;

/**
 * ExplanationOfBenefit - This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefit.html
 *
 * @example
 * const explanationOfBenefit = new ExplanationOfBenefit({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefit extends DomainResource implements IExplanationOfBenefit {
  readonly resourceType = 'ExplanationOfBenefit' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for the resource */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: ExplanationOfBenefitStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Category or discipline */
  type: ICodeableConcept;

  /** More granular claim type */
  subType?: ICodeableConcept;

  /** claim | preauthorization | predetermination */
  use: UseType;

  /** Extension for use */
  _use?: IElement;

  /** The recipient of the products and services */
  patient: IReference<'Patient'>;

  /** Relevant time frame for the claim */
  billablePeriod?: IPeriod;

  /** Response creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Author of the claim */
  enterer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Party responsible for reimbursement */
  insurer: IReference<'Organization'>;

  /** Party responsible for the claim */
  provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Desired processing urgency */
  priority?: ICodeableConcept;

  /** For whom to reserve funds */
  fundsReserveRequested?: ICodeableConcept;

  /** Funds reserved status */
  fundsReserve?: ICodeableConcept;

  /** Prior or corollary claims */
  related?: IExplanationOfBenefitRelated[];

  /** Prescription authorizing services or products */
  prescription?: IReference<'MedicationRequest' | 'VisionPrescription'>;

  /** Original prescription if superceded by fulfiller */
  originalPrescription?: IReference<'MedicationRequest'>;

  /** Recipient of benefits payable */
  payee?: IExplanationOfBenefitPayee;

  /** Treatment Referral */
  referral?: IReference<'ServiceRequest'>;

  /** Servicing Facility */
  facility?: IReference<'Location'>;

  /** Claim reference */
  claim?: IReference<'Claim'>;

  /** Claim response reference */
  claimResponse?: IReference<'ClaimResponse'>;

  /** queued | complete | error | partial */
  outcome: ClaimProcessingType;

  /** Extension for outcome */
  _outcome?: IElement;

  /** Disposition Message */
  disposition?: string;

  /** Extension for disposition */
  _disposition?: IElement;

  /** Preauthorization reference */
  preAuthRef?: string[];

  /** Extension for preAuthRef */
  _preAuthRef?: IElement;

  /** Preauthorization in-effect period */
  preAuthRefPeriod?: IPeriod[];

  /** Care Team members */
  careTeam?: IExplanationOfBenefitCareTeam[];

  /** Supporting information */
  supportingInfo?: IExplanationOfBenefitSupportingInfo[];

  /** Pertinent diagnosis information */
  diagnosis?: IExplanationOfBenefitDiagnosis[];

  /** Clinical procedures performed */
  procedure?: IExplanationOfBenefitProcedure[];

  /** Precedence (primary, secondary, etc.) */
  precedence?: number;

  /** Extension for precedence */
  _precedence?: IElement;

  /** Patient insurance information */
  insurance: IExplanationOfBenefitInsurance[];

  /** Details of the event */
  accident?: IExplanationOfBenefitAccident;

  /** Product or service provided */
  item?: IExplanationOfBenefitItem[];

  /** Insurer added line items */
  addItem?: IExplanationOfBenefitAddItem[];

  /** Header-level adjudication */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /** Adjudication totals */
  total?: IExplanationOfBenefitTotal[];

  /** Payment Details */
  payment?: IExplanationOfBenefitPayment;

  /** Printed form identifier */
  formCode?: ICodeableConcept;

  /** Printed reference or actual form */
  form?: IAttachment;

  /** Note concerning adjudication */
  processNote?: IExplanationOfBenefitProcessNote[];

  /** When the benefits are applicable */
  benefitPeriod?: IPeriod;

  /** Balance by Benefit Category */
  benefitBalance?: IExplanationOfBenefitBenefitBalance[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IExplanationOfBenefit>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefit from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefit): ExplanationOfBenefit {
    return new ExplanationOfBenefit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefit>): ExplanationOfBenefit {
    return new ExplanationOfBenefit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefit) => Partial<IExplanationOfBenefit>): ExplanationOfBenefit {
    const currentData = this.toJSON();
    return new ExplanationOfBenefit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefit {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_PROPERTIES);
    return result as IExplanationOfBenefit;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefit
   */
  clone(): ExplanationOfBenefit {
    return new ExplanationOfBenefit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefit
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefit'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
