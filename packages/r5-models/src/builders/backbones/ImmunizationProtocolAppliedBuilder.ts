import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationProtocolApplied } from '../../models/backbones/ImmunizationProtocolApplied.js';
import type {
  ICodeableConcept,
  IImmunizationProtocolApplied,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ImmunizationProtocolAppliedBuilder - Fluent builder for ImmunizationProtocolApplied backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationProtocolApplied = new ImmunizationProtocolAppliedBuilder()
 *   .setSeries(value)
 *   .addTargetDisease({ ... })
 *   .build();
 */
export class ImmunizationProtocolAppliedBuilder extends BackboneElementBuilder<ImmunizationProtocolApplied, IImmunizationProtocolApplied> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set series
   * Name of vaccine series
   */
  setSeries(series: string): this {
    this.data.series = series;
    return this;
  }

  /**
   * Set authority
   * Who is responsible for publishing the recommendations
   */
  setAuthority(authority: IReference<'Organization'>): this {
    this.data.authority = authority;
    return this;
  }

  /**
   * Set doseNumber
   * Dose number within series
   */
  setDoseNumber(doseNumber: string): this {
    this.data.doseNumber = doseNumber;
    return this;
  }

  /**
   * Set seriesDoses
   * Recommended number of doses for immunity
   */
  setSeriesDoses(seriesDoses: string): this {
    this.data.seriesDoses = seriesDoses;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add targetDisease
   * Vaccine preventatable disease being targeted
   */
  addTargetDisease(targetDisease: ICodeableConcept): this {
    return this.addToArray('targetDisease', targetDisease);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationProtocolApplied instance
   */
  build(): ImmunizationProtocolApplied {
    return new ImmunizationProtocolApplied(this.data);
  }

  /**
   * Build and validate the ImmunizationProtocolApplied instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationProtocolApplied> {
    const immunizationProtocolApplied = this.build();
    await immunizationProtocolApplied.validateOrThrow();
    return immunizationProtocolApplied;
  }
}
