import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ITestPlanDependency } from '../backbones/ITestPlanDependency.js';
import type { ITestPlanTestCase } from '../backbones/ITestPlanTestCase.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * TestPlan Interface
 * 
 * A plan for executing testing on an artifact or specifications.
 * 
 *
 * @see https://hl7.org/fhir/R5/testplan.html
 */
export interface ITestPlan extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'TestPlan';

  /**
   * Canonical identifier for this test plan, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Business identifier identifier for the test plan
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the test plan
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
   * Name for this test plan (computer friendly)
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this test plan (human friendly)
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
   * Natural language description of the test plan
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
   * Intended jurisdiction where the test plan applies (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this test plan is defined
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
   * The category of the Test Plan - can be acceptance, unit, performance
   */
  category?: ICodeableConcept[];

  /**
   * What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference
   */
  scope?: IReference[];

  /**
   * A description of test tools to be used in the test plan - narrative for now
   */
  testTools?: string;
  /**
   * Extension for testTools
   */
  _testTools?: IElement;

  /**
   * The required criteria to execute the test plan - e.g. preconditions, previous tests
   */
  dependency?: ITestPlanDependency[];

  /**
   * The threshold or criteria for the test plan to be considered successfully executed - narrative
   */
  exitCriteria?: string;
  /**
   * Extension for exitCriteria
   */
  _exitCriteria?: IElement;

  /**
   * The test cases that constitute this plan
   */
  testCase?: ITestPlanTestCase[];

}
