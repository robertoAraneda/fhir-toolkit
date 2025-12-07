import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceStructureVariant } from '../../models/backbones/MolecularSequenceStructureVariant.js';
import type {
  ICodeableConcept,
  IMolecularSequenceStructureVariant,
  IMolecularSequenceStructureVariantInner,
  IMolecularSequenceStructureVariantOuter,
} from '@fhir-toolkit/r4b-types';

/**
 * MolecularSequenceStructureVariantBuilder - Fluent builder for MolecularSequenceStructureVariant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceStructureVariant = new MolecularSequenceStructureVariantBuilder()
 *   .setVariantType(value)
 *   .build();
 */
export class MolecularSequenceStructureVariantBuilder extends BackboneElementBuilder<MolecularSequenceStructureVariant, IMolecularSequenceStructureVariant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set variantType
   * Structural variant change type
   */
  setVariantType(variantType: ICodeableConcept): this {
    this.data.variantType = variantType;
    return this;
  }

  /**
   * Set exact
   * Does the structural variant have base pair resolution breakpoints?
   */
  setExact(exact: boolean): this {
    this.data.exact = exact;
    return this;
  }

  /**
   * Set length
   * Structural variant length
   */
  setLength(length: number): this {
    this.data.length = length;
    return this;
  }

  /**
   * Set outer
   * Structural variant outer
   */
  setOuter(outer: IMolecularSequenceStructureVariantOuter): this {
    this.data.outer = outer;
    return this;
  }

  /**
   * Set inner
   * Structural variant inner
   */
  setInner(inner: IMolecularSequenceStructureVariantInner): this {
    this.data.inner = inner;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceStructureVariant instance
   */
  build(): MolecularSequenceStructureVariant {
    return new MolecularSequenceStructureVariant(this.data);
  }

  /**
   * Build and validate the MolecularSequenceStructureVariant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceStructureVariant> {
    const molecularSequenceStructureVariant = this.build();
    await molecularSequenceStructureVariant.validateOrThrow();
    return molecularSequenceStructureVariant;
  }
}
