import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  ITestScriptFixture,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptFixture */
const TEST_SCRIPT_FIXTURE_PROPERTIES = [
  'autocreate',
  '_autocreate',
  'autodelete',
  '_autodelete',
  'resource',
] as const;

/**
 * TestScriptFixture - Fixture in the test script - by reference (uri)
 *
 * @see https://hl7.org/fhir/R5/testscriptfixture.html
 *
 * @example
 * const testScriptFixture = new TestScriptFixture({
 *   // ... properties
 * });
 */
export class TestScriptFixture extends BackboneElement implements ITestScriptFixture {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether or not to implicitly create the fixture during setup */
  autocreate: boolean;

  /** Extension for autocreate */
  _autocreate?: IElement;

  /** Whether or not to implicitly delete the fixture during teardown */
  autodelete: boolean;

  /** Extension for autodelete */
  _autodelete?: IElement;

  /** Reference of the resource */
  resource?: IReference<'Resource'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptFixture>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_FIXTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptFixture from a JSON object
   */
  static fromJSON(json: ITestScriptFixture): TestScriptFixture {
    return new TestScriptFixture(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptFixture with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptFixture>): TestScriptFixture {
    return new TestScriptFixture({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptFixture by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptFixture) => Partial<ITestScriptFixture>): TestScriptFixture {
    const currentData = this.toJSON();
    return new TestScriptFixture({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptFixture)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptFixture {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_FIXTURE_PROPERTIES);
    return result as ITestScriptFixture;
  }

  /**
   * Create a deep clone of this TestScriptFixture
   */
  clone(): TestScriptFixture {
    return new TestScriptFixture(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptFixture
   */
  toString(): string {
    const parts: string[] = ['TestScriptFixture'];
    return parts.join(', ');
  }
}
