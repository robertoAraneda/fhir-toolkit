import type { ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ICompartmentDefinitionResource } from '../backbones/ICompartmentDefinitionResource.js';
import type { CompartmentTypeType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * CompartmentDefinition Interface
 * 
 * A compartment definition that defines how resources are accessed on a server.
 * 
 *
 * @see https://hl7.org/fhir/R4/compartmentdefinition.html
 */
export interface ICompartmentDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CompartmentDefinition';

  /**
   * Canonical identifier for this compartment definition, represented as a URI (globally unique)
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business version of the compartment definition
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
   * Name for this compartment definition (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this compartment definition (human friendly)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

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
   * Natural language description of the compartment definition
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
   * Why this compartment definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Patient | Encounter | RelatedPerson | Practitioner | Device | EpisodeOfCare
   */
  code: CompartmentTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Whether the search syntax is supported
   */
  search: boolean;
  /**
   * Extension for search
   */
  _search?: IElement;

  /**
   * How a resource is related to the compartment
   */
  resource?: ICompartmentDefinitionResource[];

}
