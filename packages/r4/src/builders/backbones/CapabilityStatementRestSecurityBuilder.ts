import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRestSecurity } from '../../models/backbones/CapabilityStatementRestSecurity.js';
import type {
  ICapabilityStatementRestSecurity,
  ICodeableConcept,
} from '@fhir-toolkit/r4-types';

/**
 * CapabilityStatementRestSecurityBuilder - Fluent builder for CapabilityStatementRestSecurity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRestSecurity = new CapabilityStatementRestSecurityBuilder()
 *   .setCors(value)
 *   .addService({ ... })
 *   .build();
 */
export class CapabilityStatementRestSecurityBuilder extends BackboneElementBuilder<CapabilityStatementRestSecurity, ICapabilityStatementRestSecurity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set cors
   * Adds CORS Headers (http://enable-cors.org/)
   */
  setCors(cors: boolean): this {
    this.data.cors = cors;
    return this;
  }

  /**
   * Set description
   * General description of how security works
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add service
   * OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
   */
  addService(service: ICodeableConcept): this {
    return this.addToArray('service', service);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementRestSecurity instance
   */
  build(): CapabilityStatementRestSecurity {
    return new CapabilityStatementRestSecurity(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRestSecurity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRestSecurity> {
    const capabilityStatementRestSecurity = this.build();
    await capabilityStatementRestSecurity.validateOrThrow();
    return capabilityStatementRestSecurity;
  }
}
