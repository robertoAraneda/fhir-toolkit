import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IInsurancePlanContact } from '../backbones/IInsurancePlanContact.js';
import type { IInsurancePlanCoverage } from '../backbones/IInsurancePlanCoverage.js';
import type { IInsurancePlanPlan } from '../backbones/IInsurancePlanPlan.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * InsurancePlan Interface
 * 
 * Details of a Health Insurance product/plan provided by an organization.
 * 
 *
 * @see https://hl7.org/fhir/R4B/insuranceplan.html
 */
export interface IInsurancePlan extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'InsurancePlan';

  /**
   * Business Identifier for Product
   */
  identifier?: IIdentifier[];

  /**
   * draft | active | retired | unknown
   */
  status?: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Kind of product
   */
  type?: ICodeableConcept[];

  /**
   * Official name
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Alternate names
   */
  alias?: string[];
  /**
   * Extension for alias
   */
  _alias?: IElement;

  /**
   * When the product is available
   */
  period?: IPeriod;

  /**
   * Plan issuer
   */
  ownedBy?: IReference<'Organization'>;

  /**
   * Product administrator
   */
  administeredBy?: IReference<'Organization'>;

  /**
   * Where product applies
   */
  coverageArea?: IReference<'Location'>[];

  /**
   * Contact for the product
   */
  contact?: IInsurancePlanContact[];

  /**
   * Technical endpoint
   */
  endpoint?: IReference<'Endpoint'>[];

  /**
   * What networks are Included
   */
  network?: IReference<'Organization'>[];

  /**
   * Coverage details
   */
  coverage?: IInsurancePlanCoverage[];

  /**
   * Plan details
   */
  plan?: IInsurancePlanPlan[];

}
