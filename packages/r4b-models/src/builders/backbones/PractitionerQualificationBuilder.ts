import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PractitionerQualification } from '../../models/backbones/PractitionerQualification.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IPractitionerQualification,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * PractitionerQualificationBuilder - Fluent builder for PractitionerQualification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const practitionerQualification = new PractitionerQualificationBuilder()
 *   .setCode(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class PractitionerQualificationBuilder extends BackboneElementBuilder<PractitionerQualification, IPractitionerQualification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Coded representation of the qualification
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set period
   * Period during which the qualification is valid
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set issuer
   * Organization that regulates and issues the qualification
   */
  setIssuer(issuer: IReference<'Organization'>): this {
    this.data.issuer = issuer;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * An identifier for this qualification for the practitioner
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PractitionerQualification instance
   */
  build(): PractitionerQualification {
    return new PractitionerQualification(this.data);
  }

  /**
   * Build and validate the PractitionerQualification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PractitionerQualification> {
    const practitionerQualification = this.build();
    await practitionerQualification.validateOrThrow();
    return practitionerQualification;
  }
}
