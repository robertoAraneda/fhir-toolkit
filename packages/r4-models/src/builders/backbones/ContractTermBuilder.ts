import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTerm } from '../../models/backbones/ContractTerm.js';
import type {
  ICodeableConcept,
  IContractTerm,
  IContractTermAction,
  IContractTermAsset,
  IContractTermOffer,
  IContractTermSecurityLabel,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractTermBuilder - Fluent builder for ContractTerm backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTerm = new ContractTermBuilder()
 *   .setIdentifier(value)
 *   .addSecurityLabel({ ... })
 *   .build();
 */
export class ContractTermBuilder extends BackboneElementBuilder<ContractTerm, IContractTerm> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Contract Term Number
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set issued
   * Contract Term Issue Date Time
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set applies
   * Contract Term Effective Time
   */
  setApplies(applies: IPeriod): this {
    this.data.applies = applies;
    return this;
  }

  /**
   * Set type
   * Contract Term Type or Form
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subType
   * Contract Term Type specific classification
   */
  setSubType(subType: ICodeableConcept): this {
    this.data.subType = subType;
    return this;
  }

  /**
   * Set text
   * Term Statement
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set offer
   * Context of the Contract term
   */
  setOffer(offer: IContractTermOffer): this {
    this.data.offer = offer;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set topic choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTopic('CodeableConcept', value)
   */
  setTopic<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `topic${type}` as keyof IContractTerm;
    const otherKeys: (keyof IContractTerm)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('topicCodeableConcept' as keyof IContractTerm);
      otherKeys.push('_topicCodeableConcept' as keyof IContractTerm);
    }
    if (type !== 'Reference') {
      otherKeys.push('topicReference' as keyof IContractTerm);
      otherKeys.push('_topicReference' as keyof IContractTerm);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add securityLabel
   * Protection for the Term
   */
  addSecurityLabel(securityLabel: IContractTermSecurityLabel): this {
    return this.addToArray('securityLabel', securityLabel);
  }

  /**
   * Add asset
   * Contract Term Asset List
   */
  addAsset(asset: IContractTermAsset): this {
    return this.addToArray('asset', asset);
  }

  /**
   * Add action
   * Entity being ascribed responsibility
   */
  addAction(action: IContractTermAction): this {
    return this.addToArray('action', action);
  }

  /**
   * Add group
   * Nested Contract Term Group
   */
  addGroup(group: IContractTerm): this {
    return this.addToArray('group', group);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTerm instance
   */
  build(): ContractTerm {
    return new ContractTerm(this.data);
  }

  /**
   * Build and validate the ContractTerm instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTerm> {
    const contractTerm = this.build();
    await contractTerm.validateOrThrow();
    return contractTerm;
  }
}
