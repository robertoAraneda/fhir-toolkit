import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OperationOutcomeIssue } from '../../models/backbones/OperationOutcomeIssue.js';
import type {
  ICodeableConcept,
  IOperationOutcomeIssue,
  IssueSeverityType,
  IssueTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * OperationOutcomeIssueBuilder - Fluent builder for OperationOutcomeIssue backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationOutcomeIssue = new OperationOutcomeIssueBuilder()
 *   .setSeverity(value)
 *   .addLocation({ ... })
 *   .build();
 */
export class OperationOutcomeIssueBuilder extends BackboneElementBuilder<OperationOutcomeIssue, IOperationOutcomeIssue> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set severity
   * fatal | error | warning | information | success
   */
  setSeverity(severity: IssueSeverityType): this {
    this.data.severity = severity;
    return this;
  }

  /**
   * Set code
   * Error or warning code
   */
  setCode(code: IssueTypeType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set details
   * Additional details about the error
   */
  setDetails(details: ICodeableConcept): this {
    this.data.details = details;
    return this;
  }

  /**
   * Set diagnostics
   * Additional diagnostic information about the issue
   */
  setDiagnostics(diagnostics: string): this {
    this.data.diagnostics = diagnostics;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add location
   * Deprecated: Path of element(s) related to issue
   */
  addLocation(location: string): this {
    return this.addToArray('location', location);
  }

  /**
   * Add expression
   * FHIRPath of element(s) related to issue
   */
  addExpression(expression: string): this {
    return this.addToArray('expression', expression);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationOutcomeIssue instance
   */
  build(): OperationOutcomeIssue {
    return new OperationOutcomeIssue(this.data);
  }

  /**
   * Build and validate the OperationOutcomeIssue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationOutcomeIssue> {
    const operationOutcomeIssue = this.build();
    await operationOutcomeIssue.validateOrThrow();
    return operationOutcomeIssue;
  }
}
