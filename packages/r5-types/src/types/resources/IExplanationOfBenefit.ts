import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IExplanationOfBenefitAccident } from '../backbones/IExplanationOfBenefitAccident.js';
import type { IExplanationOfBenefitAddItem } from '../backbones/IExplanationOfBenefitAddItem.js';
import type { IExplanationOfBenefitBenefitBalance } from '../backbones/IExplanationOfBenefitBenefitBalance.js';
import type { IExplanationOfBenefitCareTeam } from '../backbones/IExplanationOfBenefitCareTeam.js';
import type { IExplanationOfBenefitDiagnosis } from '../backbones/IExplanationOfBenefitDiagnosis.js';
import type { IExplanationOfBenefitEvent } from '../backbones/IExplanationOfBenefitEvent.js';
import type { IExplanationOfBenefitInsurance } from '../backbones/IExplanationOfBenefitInsurance.js';
import type { IExplanationOfBenefitItem } from '../backbones/IExplanationOfBenefitItem.js';
import type { IExplanationOfBenefitItemAdjudication } from '../backbones/IExplanationOfBenefitItemAdjudication.js';
import type { IExplanationOfBenefitPayee } from '../backbones/IExplanationOfBenefitPayee.js';
import type { IExplanationOfBenefitPayment } from '../backbones/IExplanationOfBenefitPayment.js';
import type { IExplanationOfBenefitProcedure } from '../backbones/IExplanationOfBenefitProcedure.js';
import type { IExplanationOfBenefitProcessNote } from '../backbones/IExplanationOfBenefitProcessNote.js';
import type { IExplanationOfBenefitRelated } from '../backbones/IExplanationOfBenefitRelated.js';
import type { IExplanationOfBenefitSupportingInfo } from '../backbones/IExplanationOfBenefitSupportingInfo.js';
import type { IExplanationOfBenefitTotal } from '../backbones/IExplanationOfBenefitTotal.js';
import type { ClaimProcessingType, ExplanationOfBenefitStatusType, UseType } from '../../valuesets/index.js';

/**
 * ExplanationOfBenefit Interface
 * 
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefit.html
 */
export interface IExplanationOfBenefit extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ExplanationOfBenefit';

  /**
   * Business Identifier for the resource
   */
  identifier?: IIdentifier[];

  /**
   * Number for tracking
   */
  traceNumber?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: ExplanationOfBenefitStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Category or discipline
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
   * Relevant time frame for the claim
   */
  billablePeriod?: IPeriod;

  /**
   * Response creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Author of the claim
   */
  enterer?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>;

  /**
   * Party responsible for reimbursement
   */
  insurer?: IReference<'Organization'>;

  /**
   * Party responsible for the claim
   */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Desired processing urgency
   */
  priority?: ICodeableConcept;

  /**
   * For whom to reserve funds
   */
  fundsReserveRequested?: ICodeableConcept;

  /**
   * Funds reserved status
   */
  fundsReserve?: ICodeableConcept;

  /**
   * Prior or corollary claims
   */
  related?: IExplanationOfBenefitRelated[];

  /**
   * Prescription authorizing services or products
   */
  prescription?: IReference<'MedicationRequest' | 'VisionPrescription'>;

  /**
   * Original prescription if superceded by fulfiller
   */
  originalPrescription?: IReference<'MedicationRequest'>;

  /**
   * Event information
   */
  event?: IExplanationOfBenefitEvent[];

  /**
   * Recipient of benefits payable
   */
  payee?: IExplanationOfBenefitPayee;

  /**
   * Treatment Referral
   */
  referral?: IReference<'ServiceRequest'>;

  /**
   * Encounters associated with the listed treatments
   */
  encounter?: IReference<'Encounter'>[];

  /**
   * Servicing Facility
   */
  facility?: IReference<'Location' | 'Organization'>;

  /**
   * Claim reference
   */
  claim?: IReference<'Claim'>;

  /**
   * Claim response reference
   */
  claimResponse?: IReference<'ClaimResponse'>;

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
  preAuthRef?: string[];
  /**
   * Extension for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * Preauthorization in-effect period
   */
  preAuthRefPeriod?: IPeriod[];

  /**
   * Package billing code
   */
  diagnosisRelatedGroup?: ICodeableConcept;

  /**
   * Care Team members
   */
  careTeam?: IExplanationOfBenefitCareTeam[];

  /**
   * Supporting information
   */
  supportingInfo?: IExplanationOfBenefitSupportingInfo[];

  /**
   * Pertinent diagnosis information
   */
  diagnosis?: IExplanationOfBenefitDiagnosis[];

  /**
   * Clinical procedures performed
   */
  procedure?: IExplanationOfBenefitProcedure[];

  /**
   * Precedence (primary, secondary, etc.)
   */
  precedence?: number;
  /**
   * Extension for precedence
   */
  _precedence?: IElement;

  /**
   * Patient insurance information
   */
  insurance?: IExplanationOfBenefitInsurance[];

  /**
   * Details of the event
   */
  accident?: IExplanationOfBenefitAccident;

  /**
   * Paid by the patient
   */
  patientPaid?: IMoney;

  /**
   * Product or service provided
   */
  item?: IExplanationOfBenefitItem[];

  /**
   * Insurer added line items
   */
  addItem?: IExplanationOfBenefitAddItem[];

  /**
   * Header-level adjudication
   */
  adjudication?: IExplanationOfBenefitItemAdjudication[];

  /**
   * Adjudication totals
   */
  total?: IExplanationOfBenefitTotal[];

  /**
   * Payment Details
   */
  payment?: IExplanationOfBenefitPayment;

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
  processNote?: IExplanationOfBenefitProcessNote[];

  /**
   * When the benefits are applicable
   */
  benefitPeriod?: IPeriod;

  /**
   * Balance by Benefit Category
   */
  benefitBalance?: IExplanationOfBenefitBenefitBalance[];

}
