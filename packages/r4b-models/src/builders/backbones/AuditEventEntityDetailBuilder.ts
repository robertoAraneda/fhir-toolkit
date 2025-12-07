import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AuditEventEntityDetail } from '../../models/backbones/AuditEventEntityDetail.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAuditEventEntityDetail,
} from '@fhir-toolkit/r4b-types';

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
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'String' | 'Base64Binary'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('String', value)
   */
  setValue<T extends 'String' | 'Base64Binary'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IAuditEventEntityDetail;
    const otherKeys: (keyof IAuditEventEntityDetail)[] = [];
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IAuditEventEntityDetail);
      otherKeys.push('_valueString' as keyof IAuditEventEntityDetail);
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
