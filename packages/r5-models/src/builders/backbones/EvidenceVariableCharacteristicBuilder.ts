import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristic } from '../../models/backbones/EvidenceVariableCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEvidenceVariableCharacteristic,
  IEvidenceVariableCharacteristicDefinitionByCombination,
  IEvidenceVariableCharacteristicDefinitionByTypeAndValue,
  IEvidenceVariableCharacteristicTimeFromEvent,
  IExpression,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceVariableCharacteristicBuilder - Fluent builder for EvidenceVariableCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristic = new EvidenceVariableCharacteristicBuilder()
 *   .setLinkId(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceVariableCharacteristicBuilder extends BackboneElementBuilder<EvidenceVariableCharacteristic, IEvidenceVariableCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Label for internal linking
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set description
   * Natural language description of the characteristic
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set exclude
   * Whether the characteristic is an inclusion criterion or exclusion criterion
   */
  setExclude(exclude: boolean): this {
    this.data.exclude = exclude;
    return this;
  }

  /**
   * Set definitionReference
   * Defines the characteristic (without using type and value) by a Reference
   */
  setDefinitionReference(definitionReference: IReference<'EvidenceVariable' | 'Group' | 'Evidence'>): this {
    this.data.definitionReference = definitionReference;
    return this;
  }

  /**
   * Set definitionCanonical
   * Defines the characteristic (without using type and value) by a Canonical
   */
  setDefinitionCanonical(definitionCanonical: string): this {
    this.data.definitionCanonical = definitionCanonical;
    return this;
  }

  /**
   * Set definitionCodeableConcept
   * Defines the characteristic (without using type and value) by a CodeableConcept
   */
  setDefinitionCodeableConcept(definitionCodeableConcept: ICodeableConcept): this {
    this.data.definitionCodeableConcept = definitionCodeableConcept;
    return this;
  }

  /**
   * Set definitionExpression
   * Defines the characteristic (without using type and value) by an expression
   */
  setDefinitionExpression(definitionExpression: IExpression): this {
    this.data.definitionExpression = definitionExpression;
    return this;
  }

  /**
   * Set definitionId
   * Defines the characteristic (without using type and value) by an id
   */
  setDefinitionId(definitionId: string): this {
    this.data.definitionId = definitionId;
    return this;
  }

  /**
   * Set definitionByTypeAndValue
   * Defines the characteristic using type and value
   */
  setDefinitionByTypeAndValue(definitionByTypeAndValue: IEvidenceVariableCharacteristicDefinitionByTypeAndValue): this {
    this.data.definitionByTypeAndValue = definitionByTypeAndValue;
    return this;
  }

  /**
   * Set definitionByCombination
   * Used to specify how two or more characteristics are combined
   */
  setDefinitionByCombination(definitionByCombination: IEvidenceVariableCharacteristicDefinitionByCombination): this {
    this.data.definitionByCombination = definitionByCombination;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set instances choice type (instancesQuantity, instancesRange)
   * @param type - 'Quantity' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setInstances('Quantity', value)
   */
  setInstances<T extends 'Quantity' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `instances${type}` as keyof IEvidenceVariableCharacteristic;
    const otherKeys: (keyof IEvidenceVariableCharacteristic)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('instancesQuantity' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_instancesQuantity' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Range') {
      otherKeys.push('instancesRange' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_instancesRange' as keyof IEvidenceVariableCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set duration choice type (durationQuantity, durationRange)
   * @param type - 'Quantity' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDuration('Quantity', value)
   */
  setDuration<T extends 'Quantity' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `duration${type}` as keyof IEvidenceVariableCharacteristic;
    const otherKeys: (keyof IEvidenceVariableCharacteristic)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('durationQuantity' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_durationQuantity' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Range') {
      otherKeys.push('durationRange' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_durationRange' as keyof IEvidenceVariableCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Used for footnotes or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add timeFromEvent
   * Timing in which the characteristic is determined
   */
  addTimeFromEvent(timeFromEvent: IEvidenceVariableCharacteristicTimeFromEvent): this {
    return this.addToArray('timeFromEvent', timeFromEvent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCharacteristic instance
   */
  build(): EvidenceVariableCharacteristic {
    return new EvidenceVariableCharacteristic(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCharacteristic> {
    const evidenceVariableCharacteristic = this.build();
    await evidenceVariableCharacteristic.validateOrThrow();
    return evidenceVariableCharacteristic;
  }
}
