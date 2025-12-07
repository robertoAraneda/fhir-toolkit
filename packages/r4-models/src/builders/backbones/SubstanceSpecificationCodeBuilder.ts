import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationCode } from '../../models/backbones/SubstanceSpecificationCode.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceSpecificationCode,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationCodeBuilder - Fluent builder for SubstanceSpecificationCode backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationCode = new SubstanceSpecificationCodeBuilder()
 *   .setCode(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceSpecificationCodeBuilder extends BackboneElementBuilder<SubstanceSpecificationCode, ISubstanceSpecificationCode> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The specific code
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * Status of the code assignment
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * The date at which the code status is changed as part of the terminology maintenance
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set comment
   * Any comment can be provided in this field, if necessary
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add source
   * Supporting literature
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationCode instance
   */
  build(): SubstanceSpecificationCode {
    return new SubstanceSpecificationCode(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationCode instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationCode> {
    const substanceSpecificationCode = this.build();
    await substanceSpecificationCode.validateOrThrow();
    return substanceSpecificationCode;
  }
}
