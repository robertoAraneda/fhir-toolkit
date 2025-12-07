import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { OperationOutcome } from '../../models/resources/OperationOutcome.js';
import type {
  IOperationOutcome,
  IOperationOutcomeIssue,
} from '@fhir-toolkit/r4-types';

/**
 * OperationOutcomeBuilder - Fluent builder for OperationOutcome resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationOutcome = new OperationOutcomeBuilder()
 *   .setId('123')
 *   .addIssue({ ... })
 *   .build();
 */
export class OperationOutcomeBuilder extends DomainResourceBuilder<OperationOutcome, IOperationOutcome> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add issue
   * A single issue associated with the action
   */
  addIssue(issue: IOperationOutcomeIssue): this {
    return this.addToArray('issue', issue);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationOutcome instance
   */
  build(): OperationOutcome {
    return new OperationOutcome(this.data);
  }

  /**
   * Build and validate the OperationOutcome instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationOutcome> {
    const operationOutcome = this.build();
    await operationOutcome.validateOrThrow();
    return operationOutcome;
  }
}
