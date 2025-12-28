import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICoverageClass } from '../backbones/ICoverageClass.js';
import type { ICoverageCostToBeneficiary } from '../backbones/ICoverageCostToBeneficiary.js';
import type { ICoveragePaymentBy } from '../backbones/ICoveragePaymentBy.js';
import type { FinancialResourceStatusType, KindType } from '../../valuesets/index.js';

/**
 * Coverage Interface
 * 
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 * 
 *
 * @see https://hl7.org/fhir/R5/coverage.html
 */
export interface ICoverage extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Coverage';

  /**
   * Business identifier(s) for this coverage
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
   * insurance | self-pay | other
   */
  kind: KindType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

  /**
   * Self-pay parties and responsibility
   */
  paymentBy?: ICoveragePaymentBy[];

  /**
   * Coverage category such as medical or accident
   */
  type?: ICodeableConcept;

  /**
   * Owner of the policy
   */
  policyHolder?: IReference<'Patient' | 'RelatedPerson' | 'Organization'>;

  /**
   * Subscriber to the policy
   */
  subscriber?: IReference<'Patient' | 'RelatedPerson'>;

  /**
   * ID assigned to the subscriber
   */
  subscriberId?: IIdentifier[];

  /**
   * Plan beneficiary
   */
  beneficiary: IReference<'Patient'>;

  /**
   * Dependent number
   */
  dependent?: string;
  /**
   * Extension for dependent
   */
  _dependent?: IElement;

  /**
   * Beneficiary relationship to the subscriber
   */
  relationship?: ICodeableConcept;

  /**
   * Coverage start and end dates
   */
  period?: IPeriod;

  /**
   * Issuer of the policy
   */
  insurer?: IReference<'Organization'>;

  /**
   * Additional coverage classifications
   */
  class?: ICoverageClass[];

  /**
   * Relative order of the coverage
   */
  order?: number;
  /**
   * Extension for order
   */
  _order?: IElement;

  /**
   * Insurer network
   */
  network?: string;
  /**
   * Extension for network
   */
  _network?: IElement;

  /**
   * Patient payments for services/products
   */
  costToBeneficiary?: ICoverageCostToBeneficiary[];

  /**
   * Reimbursement to insurer
   */
  subrogation?: boolean;
  /**
   * Extension for subrogation
   */
  _subrogation?: IElement;

  /**
   * Contract details
   */
  contract?: IReference<'Contract'>[];

  /**
   * Insurance plan details
   */
  insurancePlan?: IReference<'InsurancePlan'>;

}
