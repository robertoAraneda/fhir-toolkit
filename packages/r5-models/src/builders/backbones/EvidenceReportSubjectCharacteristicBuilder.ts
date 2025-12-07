import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceReportSubjectCharacteristic } from '../../models/backbones/EvidenceReportSubjectCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IEvidenceReportSubjectCharacteristic,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceReportSubjectCharacteristicBuilder - Fluent builder for EvidenceReportSubjectCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReportSubjectCharacteristic = new EvidenceReportSubjectCharacteristicBuilder()
 *   .setCode(value)
 *   .build();
 */
export class EvidenceReportSubjectCharacteristicBuilder extends BackboneElementBuilder<EvidenceReportSubjectCharacteristic, IEvidenceReportSubjectCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Characteristic code
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set exclude
   * Is used to express not the characteristic
   */
  setExclude(exclude: boolean): this {
    this.data.exclude = exclude;
    return this;
  }

  /**
   * Set period
   * Timeframe for the characteristic
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueReference, valueCodeableConcept, valueBoolean, valueQuantity, valueRange)
   * @param type - 'Reference' | 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Reference', value)
   */
  setValue<T extends 'Reference' | 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IEvidenceReportSubjectCharacteristic;
    const otherKeys: (keyof IEvidenceReportSubjectCharacteristic)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IEvidenceReportSubjectCharacteristic);
      otherKeys.push('_valueReference' as keyof IEvidenceReportSubjectCharacteristic);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IEvidenceReportSubjectCharacteristic);
      otherKeys.push('_valueCodeableConcept' as keyof IEvidenceReportSubjectCharacteristic);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IEvidenceReportSubjectCharacteristic);
      otherKeys.push('_valueBoolean' as keyof IEvidenceReportSubjectCharacteristic);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IEvidenceReportSubjectCharacteristic);
      otherKeys.push('_valueQuantity' as keyof IEvidenceReportSubjectCharacteristic);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IEvidenceReportSubjectCharacteristic);
      otherKeys.push('_valueRange' as keyof IEvidenceReportSubjectCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReportSubjectCharacteristic instance
   */
  build(): EvidenceReportSubjectCharacteristic {
    return new EvidenceReportSubjectCharacteristic(this.data);
  }

  /**
   * Build and validate the EvidenceReportSubjectCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReportSubjectCharacteristic> {
    const evidenceReportSubjectCharacteristic = this.build();
    await evidenceReportSubjectCharacteristic.validateOrThrow();
    return evidenceReportSubjectCharacteristic;
  }
}
