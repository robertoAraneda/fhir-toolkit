import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { TestPlan } from '../../models/resources/TestPlan.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IIdentifier,
  IReference,
  ITestPlan,
  ITestPlanDependency,
  ITestPlanTestCase,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanBuilder - Fluent builder for TestPlan resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlan = new TestPlanBuilder()
 *   .setId('123')
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class TestPlanBuilder extends DomainResourceBuilder<TestPlan, ITestPlan> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this test plan, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * Business version of the test plan
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set name
   * Name for this test plan (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set title
   * Name for this test plan (human friendly)
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
   * Natural language description of the test plan
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set purpose
   * Why this test plan is defined
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
   * Set testTools
   * A description of test tools to be used in the test plan - narrative for now
   */
  setTestTools(testTools: string): this {
    this.data.testTools = testTools;
    return this;
  }

  /**
   * Set exitCriteria
   * The threshold or criteria for the test plan to be considered successfully executed - narrative
   */
  setExitCriteria(exitCriteria: string): this {
    this.data.exitCriteria = exitCriteria;
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
    const key = `versionAlgorithm${type}` as keyof ITestPlan;
    const otherKeys: (keyof ITestPlan)[] = [];
    if (type !== 'String') {
      otherKeys.push('versionAlgorithmString' as keyof ITestPlan);
      otherKeys.push('_versionAlgorithmString' as keyof ITestPlan);
    }
    if (type !== 'Coding') {
      otherKeys.push('versionAlgorithmCoding' as keyof ITestPlan);
      otherKeys.push('_versionAlgorithmCoding' as keyof ITestPlan);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier identifier for the test plan
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
   * Intended jurisdiction where the test plan applies (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add category
   * The category of the Test Plan - can be acceptance, unit, performance
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add scope
   * What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference
   */
  addScope(scope: IReference): this {
    return this.addToArray('scope', scope);
  }

  /**
   * Add dependency
   * The required criteria to execute the test plan - e.g. preconditions, previous tests
   */
  addDependency(dependency: ITestPlanDependency): this {
    return this.addToArray('dependency', dependency);
  }

  /**
   * Add testCase
   * The test cases that constitute this plan
   */
  addTestCase(testCase: ITestPlanTestCase): this {
    return this.addToArray('testCase', testCase);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlan instance
   */
  build(): TestPlan {
    return new TestPlan(this.data);
  }

  /**
   * Build and validate the TestPlan instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlan> {
    const testPlan = this.build();
    await testPlan.validateOrThrow();
    return testPlan;
  }
}
