import { DomainResource } from '../base/DomainResource.js';
import type {
  IOperationOutcome,
  IOperationOutcomeIssue,
} from '@fhir-toolkit/r5-types';

/** Properties specific to OperationOutcome */
const OPERATION_OUTCOME_PROPERTIES = [
  'issue',
] as const;

/**
 * OperationOutcome - A collection of error, warning, or information messages that result from a system action.
 *
 * @see https://hl7.org/fhir/R4/operationoutcome.html
 *
 * @example
 * const operationOutcome = new OperationOutcome({
 *   resourceType: 'OperationOutcome',
 *   // ... properties
 * });
 */
export class OperationOutcome extends DomainResource implements IOperationOutcome {
  readonly resourceType = 'OperationOutcome' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** A single issue associated with the action */
  issue: IOperationOutcomeIssue[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOperationOutcome>) {
    super(data);
    if (data) {
      this.assignProps(data, OPERATION_OUTCOME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OperationOutcome from a JSON object
   */
  static fromJSON(json: IOperationOutcome): OperationOutcome {
    return new OperationOutcome(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OperationOutcome with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOperationOutcome>): OperationOutcome {
    return new OperationOutcome({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OperationOutcome by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOperationOutcome) => Partial<IOperationOutcome>): OperationOutcome {
    const currentData = this.toJSON();
    return new OperationOutcome({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOperationOutcome)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOperationOutcome {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, OPERATION_OUTCOME_PROPERTIES);
    return result as IOperationOutcome;
  }

  /**
   * Create a deep clone of this OperationOutcome
   */
  clone(): OperationOutcome {
    return new OperationOutcome(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OperationOutcome
   */
  toString(): string {
    const parts: string[] = ['OperationOutcome'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
