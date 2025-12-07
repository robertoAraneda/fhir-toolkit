import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceReportRelatesTo } from '../../models/backbones/EvidenceReportRelatesTo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IEvidenceReportRelatesTo,
  IIdentifier,
  IReference,
  ReportRelationshipTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceReportRelatesToBuilder - Fluent builder for EvidenceReportRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReportRelatesTo = new EvidenceReportRelatesToBuilder()
 *   .setCode(value)
 *   .build();
 */
export class EvidenceReportRelatesToBuilder extends BackboneElementBuilder<EvidenceReportRelatesTo, IEvidenceReportRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith
   */
  setCode(code: ReportRelationshipTypeType): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set target choice type
   * @param type - 'Identifier' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setTarget('Identifier', value)
   */
  setTarget<T extends 'Identifier' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `target${type}` as keyof IEvidenceReportRelatesTo;
    const otherKeys: (keyof IEvidenceReportRelatesTo)[] = [];
    if (type !== 'Identifier') {
      otherKeys.push('targetIdentifier' as keyof IEvidenceReportRelatesTo);
      otherKeys.push('_targetIdentifier' as keyof IEvidenceReportRelatesTo);
    }
    if (type !== 'Reference') {
      otherKeys.push('targetReference' as keyof IEvidenceReportRelatesTo);
      otherKeys.push('_targetReference' as keyof IEvidenceReportRelatesTo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReportRelatesTo instance
   */
  build(): EvidenceReportRelatesTo {
    return new EvidenceReportRelatesTo(this.data);
  }

  /**
   * Build and validate the EvidenceReportRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReportRelatesTo> {
    const evidenceReportRelatesTo = this.build();
    await evidenceReportRelatesTo.validateOrThrow();
    return evidenceReportRelatesTo;
  }
}
