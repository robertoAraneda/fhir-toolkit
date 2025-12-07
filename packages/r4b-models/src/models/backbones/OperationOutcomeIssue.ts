import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IOperationOutcomeIssue,
  IssueSeverityType,
  IssueTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to OperationOutcomeIssue */
const OPERATION_OUTCOME_ISSUE_PROPERTIES = [
  'severity',
  '_severity',
  'code',
  '_code',
  'details',
  'diagnostics',
  '_diagnostics',
  'location',
  '_location',
  'expression',
  '_expression',
] as const;

/**
 * OperationOutcomeIssue - A single issue associated with the action
 *
 * @see https://hl7.org/fhir/R4/operationoutcomeissue.html
 *
 * @example
 * const operationOutcomeIssue = new OperationOutcomeIssue({
 *   // ... properties
 * });
 */
export class OperationOutcomeIssue extends BackboneElement implements IOperationOutcomeIssue {

  // ============================================================================
  // Properties
  // ============================================================================

  /** fatal | error | warning | information */
  severity: IssueSeverityType;

  /** Extension for severity */
  _severity?: IElement;

  /** Error or warning code */
  code: IssueTypeType;

  /** Extension for code */
  _code?: IElement;

  /** Additional details about the error */
  details?: ICodeableConcept;

  /** Additional diagnostic information about the issue */
  diagnostics?: string;

  /** Extension for diagnostics */
  _diagnostics?: IElement;

  /** Deprecated: Path of element(s) related to issue */
  location?: string[];

  /** Extension for location */
  _location?: IElement;

  /** FHIRPath of element(s) related to issue */
  expression?: string[];

  /** Extension for expression */
  _expression?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationOutcomeIssue>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_OUTCOME_ISSUE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationOutcomeIssue from a JSON object
   */
  static fromJSON(json: IOperationOutcomeIssue): OperationOutcomeIssue {
    return new OperationOutcomeIssue(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationOutcomeIssue with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationOutcomeIssue>): OperationOutcomeIssue {
    return new OperationOutcomeIssue({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationOutcomeIssue by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationOutcomeIssue) => Partial<IOperationOutcomeIssue>): OperationOutcomeIssue {
    const currentData = this.toJSON();
    return new OperationOutcomeIssue({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationOutcomeIssue)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationOutcomeIssue {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OPERATION_OUTCOME_ISSUE_PROPERTIES);
    return result as IOperationOutcomeIssue;
  }

  /**
   * Create a deep clone of this OperationOutcomeIssue
   */
  clone(): OperationOutcomeIssue {
    return new OperationOutcomeIssue(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationOutcomeIssue
   */
  toString(): string {
    const parts: string[] = ['OperationOutcomeIssue'];
    return parts.join(', ');
  }
}
