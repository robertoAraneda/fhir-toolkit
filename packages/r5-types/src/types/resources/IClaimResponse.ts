import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IClaimResponseAddItem } from '../backbones/IClaimResponseAddItem.js';
import type { IClaimResponseError } from '../backbones/IClaimResponseError.js';
import type { IClaimResponseEvent } from '../backbones/IClaimResponseEvent.js';
import type { IClaimResponseInsurance } from '../backbones/IClaimResponseInsurance.js';
import type { IClaimResponseItem } from '../backbones/IClaimResponseItem.js';
import type { IClaimResponseItemAdjudication } from '../backbones/IClaimResponseItemAdjudication.js';
import type { IClaimResponsePayment } from '../backbones/IClaimResponsePayment.js';
import type { IClaimResponseProcessNote } from '../backbones/IClaimResponseProcessNote.js';
import type { IClaimResponseTotal } from '../backbones/IClaimResponseTotal.js';
import type { ClaimProcessingType, FinancialResourceStatusType, UseType } from '../../valuesets/index.js';

/**
 * ClaimResponse Interface
 * 
 * This resource provides the adjudication details from the processing of a Claim resource.
 * 
 *
 * @see https://hl7.org/fhir/R4/claimresponse.html
 */
export interface IClaimResponse extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ClaimResponse';

  /**
   * Business Identifier for a claim response
   */
  identifier?: IIdentifier[];

  /**
   * Number for tracking
   */
  traceNumber?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: FinancialResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * More granular claim type
   */
  type: ICodeableConcept;

  /**
   * More granular claim type
   */
  subType?: ICodeableConcept;

  /**
   * claim | preauthorization | predetermination
   */
  use: UseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * The recipient of the products and services
   */
  patient: IReference<'Patient'>;

  /**
   * Response creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Party responsible for reimbursement
   */
  insurer?: IReference<'Organization'>;

  /**
   * Party responsible for the claim
   */
  requestor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Id of resource triggering adjudication
   */
  request?: IReference<'Claim'>;

  /**
   * queued | complete | error | partial
   */
  outcome: ClaimProcessingType;
  /**
   * Extension for outcome
   */
  _outcome?: IElement;

  /**
   * Result of the adjudication
   */
  decision?: ICodeableConcept;

  /**
   * Disposition Message
   */
  disposition?: string;
  /**
   * Extension for disposition
   */
  _disposition?: IElement;

  /**
   * Preauthorization reference
   */
  preAuthRef?: string;
  /**
   * Extension for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * Preauthorization reference effective period
   */
  preAuthPeriod?: IPeriod;

  /**
   * Event information
   */
  event?: IClaimResponseEvent[];

  /**
   * Party to be paid any benefits payable
   */
  payeeType?: ICodeableConcept;

  /**
   * Encounters associated with the listed treatments
   */
  encounter?: IReference<'Encounter'>[];

  /**
   * Package billing code
   */
  diagnosisRelatedGroup?: ICodeableConcept;

  /**
   * Adjudication for claim line items
   */
  item?: IClaimResponseItem[];

  /**
   * Insurer added line items
   */
  addItem?: IClaimResponseAddItem[];

  /**
   * Header-level adjudication
   */
  adjudication?: IClaimResponseItemAdjudication[];

  /**
   * Adjudication totals
   */
  total?: IClaimResponseTotal[];

  /**
   * Payment Details
   */
  payment?: IClaimResponsePayment;

  /**
   * Funds reserved status
   */
  fundsReserve?: ICodeableConcept;

  /**
   * Printed form identifier
   */
  formCode?: ICodeableConcept;

  /**
   * Printed reference or actual form
   */
  form?: IAttachment;

  /**
   * Note concerning adjudication
   */
  processNote?: IClaimResponseProcessNote[];

  /**
   * Request for additional information
   */
  communicationRequest?: IReference<'CommunicationRequest'>[];

  /**
   * Patient insurance information
   */
  insurance?: IClaimResponseInsurance[];

  /**
   * Processing errors
   */
  error?: IClaimResponseError[];

}
