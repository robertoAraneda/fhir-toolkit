import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermActionSubject } from '../../models/backbones/ContractTermActionSubject.js';
import type {
  ICodeableConcept,
  IContractTermActionSubject,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractTermActionSubjectBuilder - Fluent builder for ContractTermActionSubject backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermActionSubject = new ContractTermActionSubjectBuilder()
 *   .setRole(value)
 *   .addReference({ ... })
 *   .build();
 */
export class ContractTermActionSubjectBuilder extends BackboneElementBuilder<ContractTermActionSubject, IContractTermActionSubject> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * Role type of the agent
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add reference
   * Entity of the action
   */
  addReference(reference: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>): this {
    return this.addToArray('reference', reference);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermActionSubject instance
   */
  build(): ContractTermActionSubject {
    return new ContractTermActionSubject(this.data);
  }

  /**
   * Build and validate the ContractTermActionSubject instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermActionSubject> {
    const contractTermActionSubject = this.build();
    await contractTermActionSubject.validateOrThrow();
    return contractTermActionSubject;
  }
}
