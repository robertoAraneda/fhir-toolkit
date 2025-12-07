import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IAccountBalance } from '../backbones/IAccountBalance.js';
import type { IAccountCoverage } from '../backbones/IAccountCoverage.js';
import type { IAccountDiagnosis } from '../backbones/IAccountDiagnosis.js';
import type { IAccountGuarantor } from '../backbones/IAccountGuarantor.js';
import type { IAccountProcedure } from '../backbones/IAccountProcedure.js';
import type { IAccountRelatedAccount } from '../backbones/IAccountRelatedAccount.js';
import type { AccountStatusType } from '../../valuesets/index.js';

/**
 * Account Interface
 * 
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 * 
 *
 * @see https://hl7.org/fhir/R4/account.html
 */
export interface IAccount extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Account';

  /**
   * Account number
   */
  identifier?: IIdentifier[];

  /**
   * active | inactive | entered-in-error | on-hold | unknown
   */
  status: AccountStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Tracks the lifecycle of the account through the billing process
   */
  billingStatus?: ICodeableConcept;

  /**
   * E.g. patient, expense, depreciation
   */
  type?: ICodeableConcept;

  /**
   * Human-readable label
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * The entity that caused the expenses
   */
  subject?: IReference<'Patient' | 'Device' | 'Practitioner' | 'PractitionerRole' | 'Location' | 'HealthcareService' | 'Organization'>[];

  /**
   * Transaction window
   */
  servicePeriod?: IPeriod;

  /**
   * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
   */
  coverage?: IAccountCoverage[];

  /**
   * Entity managing the Account
   */
  owner?: IReference<'Organization'>;

  /**
   * Explanation of purpose/use
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The parties ultimately responsible for balancing the Account
   */
  guarantor?: IAccountGuarantor[];

  /**
   * The list of diagnoses relevant to this account
   */
  diagnosis?: IAccountDiagnosis[];

  /**
   * The list of procedures relevant to this account
   */
  procedure?: IAccountProcedure[];

  /**
   * Other associated accounts related to this account
   */
  relatedAccount?: IAccountRelatedAccount[];

  /**
   * The base or default currency
   */
  currency?: ICodeableConcept;

  /**
   * Calculated account balance(s)
   */
  balance?: IAccountBalance[];

  /**
   * Time the balance amount was calculated
   */
  calculatedAt?: string;
  /**
   * Extension for calculatedAt
   */
  _calculatedAt?: IElement;

}
