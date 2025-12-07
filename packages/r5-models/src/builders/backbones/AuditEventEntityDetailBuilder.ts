import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventEntityDetail } from '../../models/backbones/AuditEventEntityDetail.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAuditEventEntityDetail,
  ICodeableConcept,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * AuditEventEntityDetailBuilder - Fluent builder for AuditEventEntityDetail backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const auditEventEntityDetail = new AuditEventEntityDetailBuilder()
 *   .setType(value)
 *   .build();
 */
export class AuditEventEntityDetailBuilder extends BackboneElementBuilder<AuditEventEntityDetail, IAuditEventEntityDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Name of the property
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueInteger, valueRange, valueRatio, valueTime, valueDateTime, valuePeriod, valueBase64Binary)
   * @param type - 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Ratio' | 'Time' | 'DateTime' | 'Period' | 'Base64Binary'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Ratio' | 'Time' | 'DateTime' | 'Period' | 'Base64Binary'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IAuditEventEntityDetail;
    const otherKeys: (keyof IAuditEventEntityDetail)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueQuantity' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueCodeableConcept' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueString' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueBoolean' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueInteger' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueRange' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueRatio' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueTime' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueDateTime' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valuePeriod' as keyof IAuditEventEntityDetail);
    }
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueBase64Binary' as keyof IAuditEventEntityDetail);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AuditEventEntityDetail instance
   */
  build(): AuditEventEntityDetail {
    return new AuditEventEntityDetail(this.data);
  }

  /**
   * Build and validate the AuditEventEntityDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AuditEventEntityDetail> {
    const auditEventEntityDetail = this.build();
    await auditEventEntityDetail.validateOrThrow();
    return auditEventEntityDetail;
  }
}
