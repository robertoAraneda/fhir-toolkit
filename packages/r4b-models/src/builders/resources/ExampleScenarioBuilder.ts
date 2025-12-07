import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ExampleScenario } from '../../models/resources/ExampleScenario.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IExampleScenario,
  IExampleScenarioActor,
  IExampleScenarioInstance,
  IExampleScenarioProcess,
  IIdentifier,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * ExampleScenarioBuilder - Fluent builder for ExampleScenario resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenario = new ExampleScenarioBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ExampleScenarioBuilder extends DomainResourceBuilder<ExampleScenario, IExampleScenario> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this example scenario, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the example scenario
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this example scenario (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set experimental
   * For testing purposes, not real usage
   */
  setExperimental(experimental: boolean): this {
    this.data.experimental = experimental;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set copyright
   * Use and/or publishing restrictions
   */
  setCopyright(copyright: string): this {
    this.data.copyright = copyright;
    return this;
  }

  /**
   * Set purpose
   * The purpose of the example, e.g. to illustrate a scenario
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the example scenario
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for example scenario (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add actor
   * Actor participating in the resource
   */
  addActor(actor: IExampleScenarioActor): this {
    return this.addToArray('actor', actor);
  }

  /**
   * Add instance
   * Each resource and each version that is present in the workflow
   */
  addInstance(instance: IExampleScenarioInstance): this {
    return this.addToArray('instance', instance);
  }

  /**
   * Add process
   * Each major process - a group of operations
   */
  addProcess(process: IExampleScenarioProcess): this {
    return this.addToArray('process', process);
  }

  /**
   * Add workflow
   * Another nested workflow
   */
  addWorkflow(workflow: string): this {
    return this.addToArray('workflow', workflow);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenario instance
   */
  build(): ExampleScenario {
    return new ExampleScenario(this.data);
  }

  /**
   * Build and validate the ExampleScenario instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenario> {
    const exampleScenario = this.build();
    await exampleScenario.validateOrThrow();
    return exampleScenario;
  }
}
