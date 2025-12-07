import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermOffer } from '../../models/backbones/ContractTermOffer.js';
import type {
  ICodeableConcept,
  IContractTermOffer,
  IContractTermOfferAnswer,
  IContractTermOfferParty,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractTermOfferBuilder - Fluent builder for ContractTermOffer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermOffer = new ContractTermOfferBuilder()
 *   .setTopic(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ContractTermOfferBuilder extends BackboneElementBuilder<ContractTermOffer, IContractTermOffer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set topic
   * Negotiable offer asset
   */
  setTopic(topic: IReference<'Resource'>): this {
    this.data.topic = topic;
    return this;
  }

  /**
   * Set type
   * Contract Offer Type or Form
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set decision
   * Accepting party choice
   */
  setDecision(decision: ICodeableConcept): this {
    this.data.decision = decision;
    return this;
  }

  /**
   * Set text
   * Human readable offer text
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Offer business ID
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add party
   * Offer Recipient
   */
  addParty(party: IContractTermOfferParty): this {
    return this.addToArray('party', party);
  }

  /**
   * Add decisionMode
   * How decision is conveyed
   */
  addDecisionMode(decisionMode: ICodeableConcept): this {
    return this.addToArray('decisionMode', decisionMode);
  }

  /**
   * Add answer
   * Response to offer text
   */
  addAnswer(answer: IContractTermOfferAnswer): this {
    return this.addToArray('answer', answer);
  }

  /**
   * Add linkId
   * Pointer to text
   */
  addLinkId(linkId: string): this {
    return this.addToArray('linkId', linkId);
  }

  /**
   * Add securityLabelNumber
   * Offer restriction numbers
   */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addToArray('securityLabelNumber', securityLabelNumber);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermOffer instance
   */
  build(): ContractTermOffer {
    return new ContractTermOffer(this.data);
  }

  /**
   * Build and validate the ContractTermOffer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermOffer> {
    const contractTermOffer = this.build();
    await contractTermOffer.validateOrThrow();
    return contractTermOffer;
  }
}
