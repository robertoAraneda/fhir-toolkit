import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IChargeItemDefinitionApplicability } from '../backbones/IChargeItemDefinitionApplicability.js';
import type { IChargeItemDefinitionPropertyGroup } from '../backbones/IChargeItemDefinitionPropertyGroup.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ChargeItemDefinition Interface
 * 
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 * 
 *
 * @see https://hl7.org/fhir/R5/chargeitemdefinition.html
 */
export interface IChargeItemDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ChargeItemDefinition';

  /**
   * Canonical identifier for this charge item definition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the charge item definition
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the charge item definition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * How to compare versions
   */
  versionAlgorithmString?: string;
  /**
   * Extension for versionAlgorithmString
   */
  _versionAlgorithmString?: IElement;

  /**
   * How to compare versions
   */
  versionAlgorithmCoding?: ICoding;

  /**
   * Name for this charge item definition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this charge item definition (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Underlying externally-defined charge item definition
   */
  derivedFromUri?: string[];
  /**
   * Extension for derivedFromUri
   */
  _derivedFromUri?: IElement;

  /**
   * A larger definition of which this particular definition is a component or step
   */
  partOf?: string[];
  /**
   * Extension for partOf
   */
  _partOf?: IElement;

  /**
   * Completed or terminated request(s) whose function is taken by this new request
   */
  replaces?: string[];
  /**
   * Extension for replaces
   */
  _replaces?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * For testing purposes, not real usage
   */
  experimental?: boolean;
  /**
   * Extension for experimental
   */
  _experimental?: IElement;

  /**
   * Date last changed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Name of the publisher/steward (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Natural language description of the charge item definition
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for charge item definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this charge item definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * Copyright holder and year(s)
   */
  copyrightLabel?: string;
  /**
   * Extension for copyrightLabel
   */
  _copyrightLabel?: IElement;

  /**
   * When the charge item definition was approved by publisher
   */
  approvalDate?: string;
  /**
   * Extension for approvalDate
   */
  _approvalDate?: IElement;

  /**
   * When the charge item definition was last reviewed by the publisher
   */
  lastReviewDate?: string;
  /**
   * Extension for lastReviewDate
   */
  _lastReviewDate?: IElement;

  /**
   * Billing code or product type this definition applies to
   */
  code?: ICodeableConcept;

  /**
   * Instances this definition applies to
   */
  instance?: IReference<'Medication' | 'Substance' | 'Device' | 'DeviceDefinition' | 'ActivityDefinition' | 'PlanDefinition' | 'HealthcareService'>[];

  /**
   * Whether or not the billing code is applicable
   */
  applicability?: IChargeItemDefinitionApplicability[];

  /**
   * Group of properties which are applicable under the same conditions
   */
  propertyGroup?: IChargeItemDefinitionPropertyGroup[];

}
