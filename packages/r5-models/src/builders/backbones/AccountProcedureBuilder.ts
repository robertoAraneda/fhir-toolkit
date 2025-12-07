import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AccountProcedure } from '../../models/backbones/AccountProcedure.js';
import type {
  IAccountProcedure,
  ICodeableConcept,
  ICodeableReference,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AccountProcedureBuilder - Fluent builder for AccountProcedure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const accountProcedure = new AccountProcedureBuilder()
 *   .setSequence(value)
 *   .addType({ ... })
 *   .build();
 */
export class AccountProcedureBuilder extends BackboneElementBuilder<AccountProcedure, IAccountProcedure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Ranking of the procedure (for each type)
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set code
   * The procedure relevant to the account
   */
  setCode(code: ICodeableReference): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set dateOfService
   * Date of the procedure (when coded procedure)
   */
  setDateOfService(dateOfService: string): this {
    this.data.dateOfService = dateOfService;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * How this procedure value should be used in charging the account
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

  /**
   * Add device
   * Any devices that were associated with the procedure
   */
  addDevice(device: IReference<'Device'>): this {
    return this.addToArray('device', device);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AccountProcedure instance
   */
  build(): AccountProcedure {
    return new AccountProcedure(this.data);
  }

  /**
   * Build and validate the AccountProcedure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AccountProcedure> {
    const accountProcedure = this.build();
    await accountProcedure.validateOrThrow();
    return accountProcedure;
  }
}
