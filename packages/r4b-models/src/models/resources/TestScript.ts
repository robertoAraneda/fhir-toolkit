import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IReference,
  ITestScript,
  ITestScriptDestination,
  ITestScriptFixture,
  ITestScriptMetadata,
  ITestScriptOrigin,
  ITestScriptSetup,
  ITestScriptTeardown,
  ITestScriptTest,
  ITestScriptVariable,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScript */
const TEST_SCRIPT_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'origin',
  'destination',
  'metadata',
  'fixture',
  'profile',
  'variable',
  'setup',
  'test',
  'teardown',
] as const;

/**
 * TestScript - A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 *
 * @see https://hl7.org/fhir/R4/testscript.html
 *
 * @example
 * const testScript = new TestScript({
 *   resourceType: 'TestScript',
 *   // ... properties
 * });
 */
export class TestScript extends DomainResource implements ITestScript {
  readonly resourceType = 'TestScript' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this test script, represented as a URI (globally unique) */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the test script */
  identifier?: IIdentifier;

  /** Business version of the test script */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this test script (computer friendly) */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this test script (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the test script */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for test script (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this test script is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** An abstract server representing a client or sender in a message exchange */
  origin?: ITestScriptOrigin[];

  /** An abstract server representing a destination or receiver in a message exchange */
  destination?: ITestScriptDestination[];

  /** Required capability that is assumed to function correctly on the FHIR server being tested */
  metadata?: ITestScriptMetadata;

  /** Fixture in the test script - by reference (uri) */
  fixture?: ITestScriptFixture[];

  /** Reference of the validation profile */
  profile?: IReference<'Resource'>[];

  /** Placeholder for evaluated elements */
  variable?: ITestScriptVariable[];

  /** A series of required setup operations before tests are executed */
  setup?: ITestScriptSetup;

  /** A test in this script */
  test?: ITestScriptTest[];

  /** A series of required clean up steps */
  teardown?: ITestScriptTeardown;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScript>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScript from a JSON object
   */
  static fromJSON(json: ITestScript): TestScript {
    return new TestScript(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScript with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScript>): TestScript {
    return new TestScript({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScript by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScript) => Partial<ITestScript>): TestScript {
    const currentData = this.toJSON();
    return new TestScript({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScript)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScript {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_PROPERTIES);
    return result as ITestScript;
  }

  /**
   * Create a deep clone of this TestScript
   */
  clone(): TestScript {
    return new TestScript(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScript
   */
  toString(): string {
    const parts: string[] = ['TestScript'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
