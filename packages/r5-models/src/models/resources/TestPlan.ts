import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IReference,
  ITestPlan,
  ITestPlanDependency,
  ITestPlanTestCase,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlan */
const TEST_PLAN_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
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
  'copyrightLabel',
  '_copyrightLabel',
  'category',
  'scope',
  'testTools',
  '_testTools',
  'dependency',
  'exitCriteria',
  '_exitCriteria',
  'testCase',
] as const;

/**
 * TestPlan - A plan for executing testing on an artifact or specifications.
 *
 * @see https://hl7.org/fhir/R4/testplan.html
 *
 * @example
 * const testPlan = new TestPlan({
 *   // ... properties
 * });
 */
export class TestPlan extends DomainResource implements ITestPlan {
  readonly resourceType = 'TestPlan' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this test plan, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business identifier identifier for the test plan */
  identifier?: IIdentifier[];

  /** Business version of the test plan */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this test plan (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this test plan (human friendly) */
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

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the test plan */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction where the test plan applies (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this test plan is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** The category of the Test Plan - can be acceptance, unit, performance */
  category?: ICodeableConcept[];

  /** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference */
  scope?: IReference[];

  /** A description of test tools to be used in the test plan - narrative for now */
  testTools?: string;

  /** Extension for testTools */
  _testTools?: IElement;

  /** The required criteria to execute the test plan - e.g. preconditions, previous tests */
  dependency?: ITestPlanDependency[];

  /** The threshold or criteria for the test plan to be considered successfully executed - narrative */
  exitCriteria?: string;

  /** Extension for exitCriteria */
  _exitCriteria?: IElement;

  /** The test cases that constitute this plan */
  testCase?: ITestPlanTestCase[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ITestPlan>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlan from a JSON object
   */
  static fromJSON(json: ITestPlan): TestPlan {
    return new TestPlan(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlan with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlan>): TestPlan {
    return new TestPlan({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlan by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlan) => Partial<ITestPlan>): TestPlan {
    const currentData = this.toJSON();
    return new TestPlan({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlan)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlan {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, TEST_PLAN_PROPERTIES);
    return result as ITestPlan;
  }

  /**
   * Create a deep clone of this TestPlan
   */
  clone(): TestPlan {
    return new TestPlan(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlan
   */
  toString(): string {
    const parts: string[] = ['TestPlan'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
