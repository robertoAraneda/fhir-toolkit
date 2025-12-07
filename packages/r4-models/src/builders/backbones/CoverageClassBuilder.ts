import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageClass } from '../../models/backbones/CoverageClass.js';
import type {
  ICodeableConcept,
  ICoverageClass,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageClassBuilder - Fluent builder for CoverageClass backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageClass = new CoverageClassBuilder()
 *   .setType(value)
 *   .build();
 */
export class CoverageClassBuilder extends BackboneElementBuilder<CoverageClass, ICoverageClass> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of class such as 'group' or 'plan'
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set value
   * Value associated with the type
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set name
   * Human readable description of the type and value
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageClass instance
   */
  build(): CoverageClass {
    return new CoverageClass(this.data);
  }

  /**
   * Build and validate the CoverageClass instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageClass> {
    const coverageClass = this.build();
    await coverageClass.validateOrThrow();
    return coverageClass;
  }
}
