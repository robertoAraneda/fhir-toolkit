import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ExampleScenarioActorTypeType, PublicationStatusType } from '../../valuesets/index.js';

/**
 * ActorDefinition Interface
 * 
 * Describes an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.
 * 
 *
 * @see https://hl7.org/fhir/R4/actordefinition.html
 */
export interface IActorDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ActorDefinition';

  /**
   * Canonical identifier for this actor definition, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the actor definition (business identifier)
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the actor definition
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
   * Name for this actor definition (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this actor definition (human friendly)
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
   * Natural language description of the actor
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
   * Intended jurisdiction for actor definition (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this actor definition is defined
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
   * person | system
   */
  type: ExampleScenarioActorTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Functionality associated with the actor
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Reference to more information about the actor
   */
  reference?: string[];
  /**
   * Extension for reference
   */
  _reference?: IElement;

  /**
   * CapabilityStatement for the actor (if applicable)
   */
  capabilities?: string;
  /**
   * Extension for capabilities
   */
  _capabilities?: IElement;

  /**
   * Definition of this actor in another context / IG
   */
  derivedFrom?: string[];
  /**
   * Extension for derivedFrom
   */
  _derivedFrom?: IElement;

}
