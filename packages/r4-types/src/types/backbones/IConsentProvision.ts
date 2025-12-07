import type { IBackboneElement, ICodeableConcept, ICoding, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IConsentProvisionActor } from './IConsentProvisionActor.js';
import type { IConsentProvisionData } from './IConsentProvisionData.js';
import type { ConsentProvisionTypeType } from '../../valuesets/index.js';

/**
 * ConsentProvision Interface
 * 
 * Constraints to the base Consent.policyRule
 * 
 *
 * @see https://hl7.org/fhir/R4/consentprovision.html
 */
export interface IConsentProvision extends IBackboneElement {
  /**
   * deny | permit
   */
  type?: ConsentProvisionTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Timeframe for this rule
   */
  period?: IPeriod;

  /**
   * Who|what controlled by this rule (or group, by role)
   */
  actor?: IConsentProvisionActor[];

  /**
   * Actions controlled by this rule
   */
  action?: ICodeableConcept[];

  /**
   * Security Labels that define affected resources
   */
  securityLabel?: ICoding[];

  /**
   * Context of activities covered by this rule
   */
  purpose?: ICoding[];

  /**
   * e.g. Resource Type, Profile, CDA, etc.
   */
  class?: ICoding[];

  /**
   * e.g. LOINC or SNOMED CT code, etc. in the content
   */
  code?: ICodeableConcept[];

  /**
   * Timeframe for data controlled by this rule
   */
  dataPeriod?: IPeriod;

  /**
   * Data controlled by this rule
   */
  data?: IConsentProvisionData[];

  /**
   * Nested Exception Rules
   */
  provision?: IConsentProvision[];

}
