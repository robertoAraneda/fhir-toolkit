import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IClaimAccident } from '../backbones/IClaimAccident.js';
import type { IClaimCareTeam } from '../backbones/IClaimCareTeam.js';
import type { IClaimDiagnosis } from '../backbones/IClaimDiagnosis.js';
import type { IClaimInsurance } from '../backbones/IClaimInsurance.js';
import type { IClaimItem } from '../backbones/IClaimItem.js';
import type { IClaimPayee } from '../backbones/IClaimPayee.js';
import type { IClaimProcedure } from '../backbones/IClaimProcedure.js';
import type { IClaimRelated } from '../backbones/IClaimRelated.js';
import type { IClaimSupportingInfo } from '../backbones/IClaimSupportingInfo.js';
import type { FinancialResourceStatusType, UseType } from '../../valuesets/index.js';

/**
 * Claim Interface
 * 
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 * 
 *
 * @see https://hl7.org/fhir/R4/claim.html
 */
export interface IClaim extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Claim';

  /**
   * Business Identifier for claim
   */
  identifier?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: FinancialResourceStatusType;
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
   * Resource creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Author of the claim
   */
  enterer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Target
   */
  insurer?: IReference<'Organization'>;

  /**
   * Party responsible for the claim
   */
  provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Desired processing ugency
   */
  priority: ICodeableConcept;

  /**
   * For whom to reserve funds
   */
  fundsReserve?: ICodeableConcept;

  /**
   * Prior or corollary claims
   */
  related?: IClaimRelated[];

  /**
   * Prescription authorizing services and products
   */
  prescription?: IReference<'DeviceRequest' | 'MedicationRequest' | 'VisionPrescription'>;

  /**
   * Original prescription if superseded by fulfiller
   */
  originalPrescription?: IReference<'DeviceRequest' | 'MedicationRequest' | 'VisionPrescription'>;

  /**
   * Recipient of benefits payable
   */
  payee?: IClaimPayee;

  /**
   * Treatment referral
   */
  referral?: IReference<'ServiceRequest'>;

  /**
   * Servicing facility
   */
  facility?: IReference<'Location'>;

  /**
   * Members of the care team
   */
  careTeam?: IClaimCareTeam[];

  /**
   * Supporting information
   */
  supportingInfo?: IClaimSupportingInfo[];

  /**
   * Pertinent diagnosis information
   */
  diagnosis?: IClaimDiagnosis[];

  /**
   * Clinical procedures performed
   */
  procedure?: IClaimProcedure[];

  /**
   * Patient insurance information
   */
  insurance: IClaimInsurance[];

  /**
   * Details of the event
   */
  accident?: IClaimAccident;

  /**
   * Product or service provided
   */
  item?: IClaimItem[];

  /**
   * Total claim cost
   */
  total?: IMoney;

}
