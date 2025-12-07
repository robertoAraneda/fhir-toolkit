import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IGraphDefinitionLink } from '../backbones/IGraphDefinitionLink.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * GraphDefinition Interface
 * 
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 * 
 *
 * @see https://hl7.org/fhir/R4/graphdefinition.html
 */
export interface IGraphDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'GraphDefinition';

  /**
   * Canonical identifier for this graph definition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business version of the graph definition
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Name for this graph definition (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

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
   * Name of the publisher (organization or individual)
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
   * Natural language description of the graph definition
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
   * Intended jurisdiction for graph definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this graph definition is defined
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Type of resource at which the graph starts
   */
  start: string;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * Profile on base resource
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Links this graph makes rules about
   */
  link?: IGraphDefinitionLink[];

}
