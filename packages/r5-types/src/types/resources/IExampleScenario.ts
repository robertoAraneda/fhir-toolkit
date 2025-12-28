import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IExampleScenarioActor } from '../backbones/IExampleScenarioActor.js';
import type { IExampleScenarioInstance } from '../backbones/IExampleScenarioInstance.js';
import type { IExampleScenarioProcess } from '../backbones/IExampleScenarioProcess.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * ExampleScenario Interface
 * 
 * Example of workflow instance.
 * 
 *
 * @see https://hl7.org/fhir/R5/examplescenario.html
 */
export interface IExampleScenario extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ExampleScenario';

  /**
   * Canonical identifier for this example scenario, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the example scenario
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the example scenario
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
   * To be removed?
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this example scenario (human friendly)
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
   * Natural language description of the ExampleScenario
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
   * Intended jurisdiction for example scenario (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * The purpose of the example, e.g. to illustrate a scenario
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
   * Individual involved in exchange
   */
  actor?: IExampleScenarioActor[];

  /**
   * Data used in the scenario
   */
  instance?: IExampleScenarioInstance[];

  /**
   * Major process within scenario
   */
  process?: IExampleScenarioProcess[];

}
