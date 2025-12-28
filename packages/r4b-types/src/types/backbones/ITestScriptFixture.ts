import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * TestScriptFixture Interface
 * 
 * Fixture in the test script - by reference (uri)
 * 
 *
 * @see https://hl7.org/fhir/R4B/testscriptfixture.html
 */
export interface ITestScriptFixture extends IBackboneElement {
  /**
   * Whether or not to implicitly create the fixture during setup
   */
  autocreate: boolean;
  /**
   * Extension for autocreate
   */
  _autocreate?: IElement;

  /**
   * Whether or not to implicitly delete the fixture during teardown
   */
  autodelete: boolean;
  /**
   * Extension for autodelete
   */
  _autodelete?: IElement;

  /**
   * Reference of the resource
   */
  resource?: IReference<'Resource'>;

}
