import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { TestScript } from '../../models/resources/TestScript.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  ITestScript,
  ITestScriptDestination,
  ITestScriptFixture,
  ITestScriptMetadata,
  ITestScriptOrigin,
  ITestScriptScope,
  ITestScriptSetup,
  ITestScriptTeardown,
  ITestScriptTest,
  ITestScriptVariable,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * TestScriptBuilder - Fluent builder for TestScript resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScript = new TestScriptBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class TestScriptBuilder extends DomainResourceBuilder<TestScript, ITestScript> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this test script, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the test script
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this test script (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this test script (human friendly)
   */
  setTitle(title: string): this {
    this.data.title = title;
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
   * Name of the publisher/steward (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set description
   * Natural language description of the test script
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this test script is defined
   */
  setPurpose(purpose: string): this {
    this.data.purpose = purpose;
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
   * Set copyrightLabel
   * Copyright holder and year(s)
   */
  setCopyrightLabel(copyrightLabel: string): this {
    this.data.copyrightLabel = copyrightLabel;
    return this;
  }

  /**
   * Set metadata
   * Required capability that is assumed to function correctly on the FHIR server being tested
   */
  setMetadata(metadata: ITestScriptMetadata): this {
    this.data.metadata = metadata;
    return this;
  }

  /**
   * Set setup
   * A series of required setup operations before tests are executed
   */
  setSetup(setup: ITestScriptSetup): this {
    this.data.setup = setup;
    return this;
  }

  /**
   * Set teardown
   * A series of required clean up steps
   */
  setTeardown(teardown: ITestScriptTeardown): this {
    this.data.teardown = teardown;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set versionAlgorithm choice type (versionAlgorithmString, versionAlgorithmCoding)
   * @param type - 'String' | 'Coding'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setVersionAlgorithm('String', value)
   */
  setVersionAlgorithm<T extends 'String' | 'Coding'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `versionAlgorithm${type}` as keyof ITestScript;
    const otherKeys: (keyof ITestScript)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof ITestScript);
      otherKeys.push('_versionAlgorithmString' as keyof ITestScript);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof ITestScript);
      otherKeys.push('_versionAlgorithmCoding' as keyof ITestScript);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Additional identifier for the test script
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
   * Intended jurisdiction for test script (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add origin
   * An abstract server representing a client or sender in a message exchange
   */
  addOrigin(origin: ITestScriptOrigin): this {
    return this.addToArray('origin', origin);
  }

  /**
   * Add destination
   * An abstract server representing a destination or receiver in a message exchange
   */
  addDestination(destination: ITestScriptDestination): this {
    return this.addToArray('destination', destination);
  }

  /**
   * Add scope
   * Indication of the artifact(s) that are tested by this test case
   */
  addScope(scope: ITestScriptScope): this {
    return this.addToArray('scope', scope);
  }

  /**
   * Add fixture
   * Fixture in the test script - by reference (uri)
   */
  addFixture(fixture: ITestScriptFixture): this {
    return this.addToArray('fixture', fixture);
  }

  /**
   * Add profile
   * Reference of the validation profile
   */
  addProfile(profile: string): this {
    return this.addToArray('profile', profile);
  }

  /**
   * Add variable
   * Placeholder for evaluated elements
   */
  addVariable(variable: ITestScriptVariable): this {
    return this.addToArray('variable', variable);
  }

  /**
   * Add test
   * A test in this script
   */
  addTest(test: ITestScriptTest): this {
    return this.addToArray('test', test);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScript instance
   */
  build(): TestScript {
    return new TestScript(this.data);
  }

  /**
   * Build and validate the TestScript instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScript> {
    const testScript = this.build();
    await testScript.validateOrThrow();
    return testScript;
  }
}
