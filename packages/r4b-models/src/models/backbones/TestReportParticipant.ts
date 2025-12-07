import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestReportParticipant,
  TestReportParticipantTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestReportParticipant */
const TEST_REPORT_PARTICIPANT_PROPERTIES = [
  'type',
  '_type',
  'uri',
  '_uri',
  'display',
  '_display',
] as const;

/**
 * TestReportParticipant - A participant in the test execution, either the execution engine, a client, or a server
 *
 * @see https://hl7.org/fhir/R4/testreportparticipant.html
 *
 * @example
 * const testReportParticipant = new TestReportParticipant({
 *   // ... properties
 * });
 */
export class TestReportParticipant extends BackboneElement implements ITestReportParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** test-engine | client | server */
  type: TestReportParticipantTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The uri of the participant. An absolute URL is preferred */
  uri: string;

  /** Extension for uri */
  _uri?: IElement;

  /** The display name of the participant */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportParticipant from a JSON object
   */
  static fromJSON(json: ITestReportParticipant): TestReportParticipant {
    return new TestReportParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportParticipant>): TestReportParticipant {
    return new TestReportParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportParticipant) => Partial<ITestReportParticipant>): TestReportParticipant {
    const currentData = this.toJSON();
    return new TestReportParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_PARTICIPANT_PROPERTIES);
    return result as ITestReportParticipant;
  }

  /**
   * Create a deep clone of this TestReportParticipant
   */
  clone(): TestReportParticipant {
    return new TestReportParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportParticipant
   */
  toString(): string {
    const parts: string[] = ['TestReportParticipant'];
    return parts.join(', ');
  }
}
