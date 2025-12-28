import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICoverageEligibilityRequestInsurance } from '../backbones/ICoverageEligibilityRequestInsurance.js';
import type { ICoverageEligibilityRequestItem } from '../backbones/ICoverageEligibilityRequestItem.js';
import type { ICoverageEligibilityRequestSupportingInfo } from '../backbones/ICoverageEligibilityRequestSupportingInfo.js';
import type { EligibilityRequestPurposeType, FinancialResourceStatusType } from '../../valuesets/index.js';

/**
 * CoverageEligibilityRequest Interface
 * 
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 * 
 *
 * @see https://hl7.org/fhir/R4B/coverageeligibilityrequest.html
 */
export interface ICoverageEligibilityRequest extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CoverageEligibilityRequest';

  /**
   * Business Identifier for coverage eligiblity request
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
   * Desired processing priority
   */
  priority?: ICodeableConcept;

  /**
   * auth-requirements | benefits | discovery | validation
   */
  purpose: EligibilityRequestPurposeType[];
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Intended recipient of products and services
   */
  patient: IReference<'Patient'>;

  /**
   * Estimated date or dates of service
   */
  servicedDate?: string;
  /**
   * Extension for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * Estimated date or dates of service
   */
  servicedPeriod?: IPeriod;

  /**
   * Creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Author
   */
  enterer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Party responsible for the request
   */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /**
   * Coverage issuer
   */
  insurer: IReference<'Organization'>;

  /**
   * Servicing facility
   */
  facility?: IReference<'Location'>;

  /**
   * Supporting information
   */
  supportingInfo?: ICoverageEligibilityRequestSupportingInfo[];

  /**
   * Patient insurance information
   */
  insurance?: ICoverageEligibilityRequestInsurance[];

  /**
   * Item to be evaluated for eligibiity
   */
  item?: ICoverageEligibilityRequestItem[];

}
