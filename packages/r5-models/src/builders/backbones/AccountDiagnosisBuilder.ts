import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AccountDiagnosis } from '../../models/backbones/AccountDiagnosis.js';
import type {
  IAccountDiagnosis,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/**
 * AccountDiagnosisBuilder - Fluent builder for AccountDiagnosis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const accountDiagnosis = new AccountDiagnosisBuilder()
 *   .setSequence(value)
 *   .addType({ ... })
 *   .build();
 */
export class AccountDiagnosisBuilder extends BackboneElementBuilder<AccountDiagnosis, IAccountDiagnosis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Ranking of the diagnosis (for each type)
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set condition
   * The diagnosis relevant to the account
   */
  setCondition(condition: ICodeableReference): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set dateOfDiagnosis
   * Date of the diagnosis (when coded diagnosis)
   */
  setDateOfDiagnosis(dateOfDiagnosis: string): this {
    this.data.dateOfDiagnosis = dateOfDiagnosis;
    return this;
  }

  /**
   * Set onAdmission
   * Diagnosis present on Admission
   */
  setOnAdmission(onAdmission: boolean): this {
    this.data.onAdmission = onAdmission;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …)
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add packageCode
   * Package Code specific for billing
   */
  addPackageCode(packageCode: ICodeableConcept): this {
    return this.addToArray('packageCode', packageCode);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AccountDiagnosis instance
   */
  build(): AccountDiagnosis {
    return new AccountDiagnosis(this.data);
  }

  /**
   * Build and validate the AccountDiagnosis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AccountDiagnosis> {
    const accountDiagnosis = this.build();
    await accountDiagnosis.validateOrThrow();
    return accountDiagnosis;
  }
}
