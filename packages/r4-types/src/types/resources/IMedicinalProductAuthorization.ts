import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IMedicinalProductAuthorizationJurisdictionalAuthorization } from '../backbones/IMedicinalProductAuthorizationJurisdictionalAuthorization.js';
import type { IMedicinalProductAuthorizationProcedure } from '../backbones/IMedicinalProductAuthorizationProcedure.js';

/**
 * MedicinalProductAuthorization Interface
 * 
 * The regulatory authorization of a medicinal product.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductauthorization.html
 */
export interface IMedicinalProductAuthorization extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductAuthorization';

  /**
   * Business identifier for the marketing authorization, as assigned by a regulator
   */
  identifier?: IIdentifier[];

  /**
   * The medicinal product that is being authorized
   */
  subject?: IReference<'MedicinalProduct' | 'MedicinalProductPackaged'>;

  /**
   * The country in which the marketing authorization has been granted
   */
  country?: ICodeableConcept[];

  /**
   * Jurisdiction within a country
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * The status of the marketing authorization
   */
  status?: ICodeableConcept;

  /**
   * The date at which the given status has become applicable
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored
   */
  restoreDate?: string;
  /**
   * Extension for restoreDate
   */
  _restoreDate?: IElement;

  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format
   */
  validityPeriod?: IPeriod;

  /**
   * A period of time after authorization before generic product applicatiosn can be submitted
   */
  dataExclusivityPeriod?: IPeriod;

  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency
   */
  dateOfFirstAuthorization?: string;
  /**
   * Extension for dateOfFirstAuthorization
   */
  _dateOfFirstAuthorization?: IElement;

  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World
   */
  internationalBirthDate?: string;
  /**
   * Extension for internationalBirthDate
   */
  _internationalBirthDate?: IElement;

  /**
   * The legal framework against which this authorization is granted
   */
  legalBasis?: ICodeableConcept;

  /**
   * Authorization in areas within a country
   */
  jurisdictionalAuthorization?: IMedicinalProductAuthorizationJurisdictionalAuthorization[];

  /**
   * Marketing Authorization Holder
   */
  holder?: IReference<'Organization'>;

  /**
   * Medicines Regulatory Agency
   */
  regulator?: IReference<'Organization'>;

  /**
   * The regulatory procedure for granting or amending a marketing authorization
   */
  procedure?: IMedicinalProductAuthorizationProcedure;

}
