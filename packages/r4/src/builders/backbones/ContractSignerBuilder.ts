import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractSigner } from '../../models/backbones/ContractSigner.js';
import type {
  ICoding,
  IContractSigner,
  IReference,
  ISignature,
} from '@fhir-toolkit/r4-types';

/**
 * ContractSignerBuilder - Fluent builder for ContractSigner backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractSigner = new ContractSignerBuilder()
 *   .setType(value)
 *   .addSignature({ ... })
 *   .build();
 */
export class ContractSignerBuilder extends BackboneElementBuilder<ContractSigner, IContractSigner> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Contract Signatory Role
   */
  setType(type: ICoding): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set party
   * Contract Signatory Party
   */
  setParty(party: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.party = party;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add signature
   * Contract Documentation Signature
   */
  addSignature(signature: ISignature): this {
    return this.addToArray('signature', signature);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractSigner instance
   */
  build(): ContractSigner {
    return new ContractSigner(this.data);
  }

  /**
   * Build and validate the ContractSigner instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractSigner> {
    const contractSigner = this.build();
    await contractSigner.validateOrThrow();
    return contractSigner;
  }
}
