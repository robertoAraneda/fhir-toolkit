import type { ICodeableConcept, IDomainResource, IElement } from '../../base/index.js';
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
 * @see https://hl7.org/fhir/R4/examplescenario.html
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
   * Name for this example scenario (computer friendly)
   */
  name?: string;
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
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Intended jurisdiction for example scenario (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Use and/or publishing restrictions
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

  /**
   * The purpose of the example, e.g. to illustrate a scenario
   */
  purpose?: string;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * Actor participating in the resource
   */
  actor?: IExampleScenarioActor[];

  /**
   * Each resource and each version that is present in the workflow
   */
  instance?: IExampleScenarioInstance[];

  /**
   * Each major process - a group of operations
   */
  process?: IExampleScenarioProcess[];

  /**
   * Another nested workflow
   */
  workflow?: string[];
  /**
   * Extension for workflow
   */
  _workflow?: IElement;

}
