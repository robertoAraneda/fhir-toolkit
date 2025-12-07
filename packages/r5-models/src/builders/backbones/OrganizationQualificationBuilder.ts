import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OrganizationQualification } from '../../models/backbones/OrganizationQualification.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IOrganizationQualification,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * OrganizationQualificationBuilder - Fluent builder for OrganizationQualification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const organizationQualification = new OrganizationQualificationBuilder()
 *   .setCode(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class OrganizationQualificationBuilder extends BackboneElementBuilder<OrganizationQualification, IOrganizationQualification> {
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
   * An identifier for this qualification for the organization
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OrganizationQualification instance
   */
  build(): OrganizationQualification {
    return new OrganizationQualification(this.data);
  }

  /**
   * Build and validate the OrganizationQualification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OrganizationQualification> {
    const organizationQualification = this.build();
    await organizationQualification.validateOrThrow();
    return organizationQualification;
  }
}
