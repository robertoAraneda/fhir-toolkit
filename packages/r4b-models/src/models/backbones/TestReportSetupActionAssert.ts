import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestReportSetupActionAssert,
  TestReportActionResultType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestReportSetupActionAssert */
const TEST_REPORT_SETUP_ACTION_ASSERT_PROPERTIES = [
  'result',
  '_result',
  'message',
  '_message',
  'detail',
  '_detail',
] as const;

/**
 * TestReportSetupActionAssert - The assertion to perform
 *
 * @see https://hl7.org/fhir/R4/testreportsetupactionassert.html
 *
 * @example
 * const testReportSetupActionAssert = new TestReportSetupActionAssert({
 *   // ... properties
 * });
 */
export class TestReportSetupActionAssert extends BackboneElement implements ITestReportSetupActionAssert {

  // ============================================================================
  // Properties
  // ============================================================================

  /** pass | skip | fail | warning | error */
  result: TestReportActionResultType;

  /** Extension for result */
  _result?: IElement;

  /** A message associated with the result */
  message?: string;

  /** Extension for message */
  _message?: IElement;

  /** A link to further details on the result */
  detail?: string;

  /** Extension for detail */
  _detail?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportSetupActionAssert>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_SETUP_ACTION_ASSERT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportSetupActionAssert from a JSON object
   */
  static fromJSON(json: ITestReportSetupActionAssert): TestReportSetupActionAssert {
    return new TestReportSetupActionAssert(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportSetupActionAssert with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportSetupActionAssert>): TestReportSetupActionAssert {
    return new TestReportSetupActionAssert({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportSetupActionAssert by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportSetupActionAssert) => Partial<ITestReportSetupActionAssert>): TestReportSetupActionAssert {
    const currentData = this.toJSON();
    return new TestReportSetupActionAssert({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportSetupActionAssert)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportSetupActionAssert {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_SETUP_ACTION_ASSERT_PROPERTIES);
    return result as ITestReportSetupActionAssert;
  }

  /**
   * Create a deep clone of this TestReportSetupActionAssert
   */
  clone(): TestReportSetupActionAssert {
    return new TestReportSetupActionAssert(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportSetupActionAssert
   */
  toString(): string {
    const parts: string[] = ['TestReportSetupActionAssert'];
    return parts.join(', ');
  }
}
