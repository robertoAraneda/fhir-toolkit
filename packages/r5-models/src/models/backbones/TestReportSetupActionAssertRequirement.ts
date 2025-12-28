import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestReportSetupActionAssertRequirement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestReportSetupActionAssertRequirement */
const TEST_REPORT_SETUP_ACTION_ASSERT_REQUIREMENT_PROPERTIES = [
  'linkUri',
  '_linkUri',
  'linkCanonical',
  '_linkCanonical',
] as const;

/**
 * TestReportSetupActionAssertRequirement - Links or references to the testing requirements
 *
 * @see https://hl7.org/fhir/R5/testreportsetupactionassertrequirement.html
 *
 * @example
 * const testReportSetupActionAssertRequirement = new TestReportSetupActionAssertRequirement({
 *   // ... properties
 * });
 */
export class TestReportSetupActionAssertRequirement extends BackboneElement implements ITestReportSetupActionAssertRequirement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Link or reference to the testing requirement */
  linkUri?: string;

  /** Extension for linkUri */
  _linkUri?: IElement;

  /** Link or reference to the testing requirement */
  linkCanonical?: string;

  /** Extension for linkCanonical */
  _linkCanonical?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportSetupActionAssertRequirement>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_SETUP_ACTION_ASSERT_REQUIREMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportSetupActionAssertRequirement from a JSON object
   */
  static fromJSON(json: ITestReportSetupActionAssertRequirement): TestReportSetupActionAssertRequirement {
    return new TestReportSetupActionAssertRequirement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportSetupActionAssertRequirement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportSetupActionAssertRequirement>): TestReportSetupActionAssertRequirement {
    return new TestReportSetupActionAssertRequirement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportSetupActionAssertRequirement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportSetupActionAssertRequirement) => Partial<ITestReportSetupActionAssertRequirement>): TestReportSetupActionAssertRequirement {
    const currentData = this.toJSON();
    return new TestReportSetupActionAssertRequirement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportSetupActionAssertRequirement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportSetupActionAssertRequirement {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_SETUP_ACTION_ASSERT_REQUIREMENT_PROPERTIES);
    return result as ITestReportSetupActionAssertRequirement;
  }

  /**
   * Create a deep clone of this TestReportSetupActionAssertRequirement
   */
  clone(): TestReportSetupActionAssertRequirement {
    return new TestReportSetupActionAssertRequirement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportSetupActionAssertRequirement
   */
  toString(): string {
    const parts: string[] = ['TestReportSetupActionAssertRequirement'];
    return parts.join(', ');
  }
}
