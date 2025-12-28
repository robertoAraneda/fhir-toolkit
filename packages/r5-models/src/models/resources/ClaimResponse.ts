import { DomainResource } from '../base/DomainResource.js';
import type {
  ClaimProcessingType,
  FinancialResourceStatusType,
  IAttachment,
  IClaimResponse,
  IClaimResponseAddItem,
  IClaimResponseError,
  IClaimResponseEvent,
  IClaimResponseInsurance,
  IClaimResponseItem,
  IClaimResponseItemAdjudication,
  IClaimResponsePayment,
  IClaimResponseProcessNote,
  IClaimResponseTotal,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  UseType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClaimResponse */
const CLAIM_RESPONSE_PROPERTIES = [
  'identifier',
  'traceNumber',
  'status',
  '_status',
  'type',
  'subType',
  'use',
  '_use',
  'patient',
  'created',
  '_created',
  'insurer',
  'requestor',
  'request',
  'outcome',
  '_outcome',
  'decision',
  'disposition',
  '_disposition',
  'preAuthRef',
  '_preAuthRef',
  'preAuthPeriod',
  'event',
  'payeeType',
  'encounter',
  'diagnosisRelatedGroup',
  'item',
  'addItem',
  'adjudication',
  'total',
  'payment',
  'fundsReserve',
  'formCode',
  'form',
  'processNote',
  'communicationRequest',
  'insurance',
  'error',
] as const;

/**
 * ClaimResponse - This resource provides the adjudication details from the processing of a Claim resource.
 *
 * @see https://hl7.org/fhir/R5/claimresponse.html
 *
 * @example
 * const claimResponse = new ClaimResponse({
 *   // ... properties
 * });
 */
export class ClaimResponse extends DomainResource implements IClaimResponse {
  readonly resourceType = 'ClaimResponse' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for a claim response */
  identifier?: IIdentifier[];

  /** Number for tracking */
  traceNumber?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** More granular claim type */
  type: ICodeableConcept;

  /** More granular claim type */
  subType?: ICodeableConcept;

  /** claim | preauthorization | predetermination */
  use: UseType;

  /** Extension for use */
  _use?: IElement;

  /** The recipient of the products and services */
  patient: IReference<'Patient'>;

  /** Response creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Party responsible for reimbursement */
  insurer?: IReference<'Organization'>;

  /** Party responsible for the claim */
  requestor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Id of resource triggering adjudication */
  request?: IReference<'Claim'>;

  /** queued | complete | error | partial */
  outcome: ClaimProcessingType;

  /** Extension for outcome */
  _outcome?: IElement;

  /** Result of the adjudication */
  decision?: ICodeableConcept;

  /** Disposition Message */
  disposition?: string;

  /** Extension for disposition */
  _disposition?: IElement;

  /** Preauthorization reference */
  preAuthRef?: string;

  /** Extension for preAuthRef */
  _preAuthRef?: IElement;

  /** Preauthorization reference effective period */
  preAuthPeriod?: IPeriod;

  /** Event information */
  event?: IClaimResponseEvent[];

  /** Party to be paid any benefits payable */
  payeeType?: ICodeableConcept;

  /** Encounters associated with the listed treatments */
  encounter?: IReference<'Encounter'>[];

  /** Package billing code */
  diagnosisRelatedGroup?: ICodeableConcept;

  /** Adjudication for claim line items */
  item?: IClaimResponseItem[];

  /** Insurer added line items */
  addItem?: IClaimResponseAddItem[];

  /** Header-level adjudication */
  adjudication?: IClaimResponseItemAdjudication[];

  /** Adjudication totals */
  total?: IClaimResponseTotal[];

  /** Payment Details */
  payment?: IClaimResponsePayment;

  /** Funds reserved status */
  fundsReserve?: ICodeableConcept;

  /** Printed form identifier */
  formCode?: ICodeableConcept;

  /** Printed reference or actual form */
  form?: IAttachment;

  /** Note concerning adjudication */
  processNote?: IClaimResponseProcessNote[];

  /** Request for additional information */
  communicationRequest?: IReference<'CommunicationRequest'>[];

  /** Patient insurance information */
  insurance?: IClaimResponseInsurance[];

  /** Processing errors */
  error?: IClaimResponseError[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IClaimResponse>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_RESPONSE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimResponse from a JSON object
   */
  static fromJSON(json: IClaimResponse): ClaimResponse {
    return new ClaimResponse(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimResponse with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimResponse>): ClaimResponse {
    return new ClaimResponse({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimResponse by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimResponse) => Partial<IClaimResponse>): ClaimResponse {
    const currentData = this.toJSON();
    return new ClaimResponse({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimResponse)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimResponse {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CLAIM_RESPONSE_PROPERTIES);
    return result as IClaimResponse;
  }

  /**
   * Create a deep clone of this ClaimResponse
   */
  clone(): ClaimResponse {
    return new ClaimResponse(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimResponse
   */
  toString(): string {
    const parts: string[] = ['ClaimResponse'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
