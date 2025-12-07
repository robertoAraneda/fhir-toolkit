import type { ICodeableConcept, ICoding, IDomainResource, IElement } from '../../base/index.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { ITestScriptDestination } from '../backbones/ITestScriptDestination.js';
import type { ITestScriptFixture } from '../backbones/ITestScriptFixture.js';
import type { ITestScriptMetadata } from '../backbones/ITestScriptMetadata.js';
import type { ITestScriptOrigin } from '../backbones/ITestScriptOrigin.js';
import type { ITestScriptScope } from '../backbones/ITestScriptScope.js';
import type { ITestScriptSetup } from '../backbones/ITestScriptSetup.js';
import type { ITestScriptTeardown } from '../backbones/ITestScriptTeardown.js';
import type { ITestScriptTest } from '../backbones/ITestScriptTest.js';
import type { ITestScriptVariable } from '../backbones/ITestScriptVariable.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * TestScript Interface
 * 
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 * 
 *
 * @see https://hl7.org/fhir/R4/testscript.html
 */
export interface ITestScript extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'TestScript';

  /**
   * Canonical identifier for this test script, represented as a URI (globally unique)
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Additional identifier for the test script
   */
  identifier?: IIdentifier[];

  /**
   * Business version of the test script
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
   * Name for this test script (computer friendly)
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name for this test script (human friendly)
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
   * Natural language description of the test script
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
   * Intended jurisdiction for test script (if applicable)
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * Why this test script is defined
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
   * An abstract server representing a client or sender in a message exchange
   */
  origin?: ITestScriptOrigin[];

  /**
   * An abstract server representing a destination or receiver in a message exchange
   */
  destination?: ITestScriptDestination[];

  /**
   * Required capability that is assumed to function correctly on the FHIR server being tested
   */
  metadata?: ITestScriptMetadata;

  /**
   * Indication of the artifact(s) that are tested by this test case
   */
  scope?: ITestScriptScope[];

  /**
   * Fixture in the test script - by reference (uri)
   */
  fixture?: ITestScriptFixture[];

  /**
   * Reference of the validation profile
   */
  profile?: string[];
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Placeholder for evaluated elements
   */
  variable?: ITestScriptVariable[];

  /**
   * A series of required setup operations before tests are executed
   */
  setup?: ITestScriptSetup;

  /**
   * A test in this script
   */
  test?: ITestScriptTest[];

  /**
   * A series of required clean up steps
   */
  teardown?: ITestScriptTeardown;

}
