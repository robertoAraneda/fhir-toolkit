import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RegulatedAuthorizationCase } from '../../models/backbones/RegulatedAuthorizationCase.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IRegulatedAuthorizationCase,
} from '@fhir-toolkit/r5-types';

/**
 * RegulatedAuthorizationCaseBuilder - Fluent builder for RegulatedAuthorizationCase backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const regulatedAuthorizationCase = new RegulatedAuthorizationCaseBuilder()
 *   .setIdentifier(value)
 *   .addApplication({ ... })
 *   .build();
 */
export class RegulatedAuthorizationCaseBuilder extends BackboneElementBuilder<RegulatedAuthorizationCase, IRegulatedAuthorizationCase> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Identifier by which this case can be referenced
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set type
   * The defining type of case
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set status
   * The status associated with the case
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set date choice type (datePeriod, dateDateTime)
   * @param type - 'Period' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDate('Period', value)
   */
  setDate<T extends 'Period' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `date${type}` as keyof IRegulatedAuthorizationCase;
    const otherKeys: (keyof IRegulatedAuthorizationCase)[] = [];
    if (type !== 'Period') {
      otherKeys.push('datePeriod' as keyof IRegulatedAuthorizationCase);
      otherKeys.push('_datePeriod' as keyof IRegulatedAuthorizationCase);
    }
    if (type !== 'DateTime') {
      otherKeys.push('dateDateTime' as keyof IRegulatedAuthorizationCase);
      otherKeys.push('_dateDateTime' as keyof IRegulatedAuthorizationCase);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add application
   * Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure
   */
  addApplication(application: IRegulatedAuthorizationCase): this {
    return this.addToArray('application', application);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RegulatedAuthorizationCase instance
   */
  build(): RegulatedAuthorizationCase {
    return new RegulatedAuthorizationCase(this.data);
  }

  /**
   * Build and validate the RegulatedAuthorizationCase instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RegulatedAuthorizationCase> {
    const regulatedAuthorizationCase = this.build();
    await regulatedAuthorizationCase.validateOrThrow();
    return regulatedAuthorizationCase;
  }
}
