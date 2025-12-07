import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermAsset } from '../../models/backbones/ContractTermAsset.js';
import type {
  ICodeableConcept,
  ICoding,
  IContractTermAsset,
  IContractTermAssetContext,
  IContractTermAssetValuedItem,
  IContractTermOfferAnswer,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ContractTermAssetBuilder - Fluent builder for ContractTermAsset backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermAsset = new ContractTermAssetBuilder()
 *   .setScope(value)
 *   .addType({ ... })
 *   .build();
 */
export class ContractTermAssetBuilder extends BackboneElementBuilder<ContractTermAsset, IContractTermAsset> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set scope
   * Range of asset
   */
  setScope(scope: ICodeableConcept): this {
    this.data.scope = scope;
    return this;
  }

  /**
   * Set relationship
   * Kinship of the asset
   */
  setRelationship(relationship: ICoding): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set condition
   * Quality desctiption of asset
   */
  setCondition(condition: string): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set text
   * Asset clause or question text
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Asset category
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add typeReference
   * Associated entities
   */
  addTypeReference(typeReference: IReference<'Resource'>): this {
    return this.addToArray('typeReference', typeReference);
  }

  /**
   * Add subtype
   * Asset sub-category
   */
  addSubtype(subtype: ICodeableConcept): this {
    return this.addToArray('subtype', subtype);
  }

  /**
   * Add context
   * Circumstance of the asset
   */
  addContext(context: IContractTermAssetContext): this {
    return this.addToArray('context', context);
  }

  /**
   * Add periodType
   * Asset availability types
   */
  addPeriodType(periodType: ICodeableConcept): this {
    return this.addToArray('periodType', periodType);
  }

  /**
   * Add period
   * Time period of the asset
   */
  addPeriod(period: IPeriod): this {
    return this.addToArray('period', period);
  }

  /**
   * Add usePeriod
   * Time period
   */
  addUsePeriod(usePeriod: IPeriod): this {
    return this.addToArray('usePeriod', usePeriod);
  }

  /**
   * Add linkId
   * Pointer to asset text
   */
  addLinkId(linkId: string): this {
    return this.addToArray('linkId', linkId);
  }

  /**
   * Add answer
   * Response to assets
   */
  addAnswer(answer: IContractTermOfferAnswer): this {
    return this.addToArray('answer', answer);
  }

  /**
   * Add securityLabelNumber
   * Asset restriction numbers
   */
  addSecurityLabelNumber(securityLabelNumber: number): this {
    return this.addToArray('securityLabelNumber', securityLabelNumber);
  }

  /**
   * Add valuedItem
   * Contract Valued Item List
   */
  addValuedItem(valuedItem: IContractTermAssetValuedItem): this {
    return this.addToArray('valuedItem', valuedItem);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermAsset instance
   */
  build(): ContractTermAsset {
    return new ContractTermAsset(this.data);
  }

  /**
   * Build and validate the ContractTermAsset instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermAsset> {
    const contractTermAsset = this.build();
    await contractTermAsset.validateOrThrow();
    return contractTermAsset;
  }
}
