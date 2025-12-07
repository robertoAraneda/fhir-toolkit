import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionLegalStatusOfSupply } from '../../models/backbones/PackagedProductDefinitionLegalStatusOfSupply.js';
import type {
  ICodeableConcept,
  IPackagedProductDefinitionLegalStatusOfSupply,
} from '@fhir-toolkit/r5-types';

/**
 * PackagedProductDefinitionLegalStatusOfSupplyBuilder - Fluent builder for PackagedProductDefinitionLegalStatusOfSupply backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionLegalStatusOfSupply = new PackagedProductDefinitionLegalStatusOfSupplyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class PackagedProductDefinitionLegalStatusOfSupplyBuilder extends BackboneElementBuilder<PackagedProductDefinitionLegalStatusOfSupply, IPackagedProductDefinitionLegalStatusOfSupply> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The actual status of supply. In what situation this package type may be supplied for use
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set jurisdiction
   * The place where the legal status of supply applies
   */
  setJurisdiction(jurisdiction: ICodeableConcept): this {
    this.data.jurisdiction = jurisdiction;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionLegalStatusOfSupply instance
   */
  build(): PackagedProductDefinitionLegalStatusOfSupply {
    return new PackagedProductDefinitionLegalStatusOfSupply(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionLegalStatusOfSupply instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionLegalStatusOfSupply> {
    const packagedProductDefinitionLegalStatusOfSupply = this.build();
    await packagedProductDefinitionLegalStatusOfSupply.validateOrThrow();
    return packagedProductDefinitionLegalStatusOfSupply;
  }
}
