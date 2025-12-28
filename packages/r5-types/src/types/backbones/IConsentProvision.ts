import type { IBackboneElement, ICodeableConcept, ICoding } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IConsentProvisionActor } from './IConsentProvisionActor.js';
import type { IConsentProvisionData } from './IConsentProvisionData.js';

/**
 * ConsentProvision Interface
 * 
 * Constraints to the base Consent.policyRule/Consent.policy
 * 
 *
 * @see https://hl7.org/fhir/R5/consentprovision.html
 */
export interface IConsentProvision extends IBackboneElement {
  /**
   * Timeframe for this provision
   */
  period?: IPeriod;

  /**
   * Who|what controlled by this provision (or group, by role)
   */
  actor?: IConsentProvisionActor[];

  /**
   * Actions controlled by this provision
   */
  action?: ICodeableConcept[];

  /**
   * Security Labels that define affected resources
   */
  securityLabel?: ICoding[];

  /**
   * Context of activities covered by this provision
   */
  purpose?: ICoding[];

  /**
   * e.g. Resource Type, Profile, CDA, etc
   */
  documentType?: ICoding[];

  /**
   * e.g. Resource Type, Profile, etc
   */
  resourceType?: ICoding[];

  /**
   * e.g. LOINC or SNOMED CT code, etc. in the content
   */
  code?: ICodeableConcept[];

  /**
   * Timeframe for data controlled by this provision
   */
  dataPeriod?: IPeriod;

  /**
   * Data controlled by this provision
   */
  data?: IConsentProvisionData[];

  /**
   * A computable expression of the consent
   */
  expression?: IExpression;

  /**
   * Nested Exception Provisions
   */
  provision?: IConsentProvision[];

}
