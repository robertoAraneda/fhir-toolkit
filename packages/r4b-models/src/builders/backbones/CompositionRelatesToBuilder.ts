import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CompositionRelatesTo } from '../../models/backbones/CompositionRelatesTo.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  DocumentRelationshipTypeType,
  ICompositionRelatesTo,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CompositionRelatesToBuilder - Fluent builder for CompositionRelatesTo backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const compositionRelatesTo = new CompositionRelatesToBuilder()
 *   .setCode(value)
 *   .build();
 */
export class CompositionRelatesToBuilder extends BackboneElementBuilder<CompositionRelatesTo, ICompositionRelatesTo> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * replaces | transforms | signs | appends
   */
  setCode(code: DocumentRelationshipTypeType): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set target choice type (targetIdentifier, targetReference)
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
    const key = `target${type}` as keyof ICompositionRelatesTo;
    const otherKeys: (keyof ICompositionRelatesTo)[] = [];
    if (type !== 'Identifier') {
      otherKeys.push('targetIdentifier' as keyof ICompositionRelatesTo);
      otherKeys.push('_targetIdentifier' as keyof ICompositionRelatesTo);
    }
    if (type !== 'Reference') {
      otherKeys.push('targetReference' as keyof ICompositionRelatesTo);
      otherKeys.push('_targetReference' as keyof ICompositionRelatesTo);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CompositionRelatesTo instance
   */
  build(): CompositionRelatesTo {
    return new CompositionRelatesTo(this.data);
  }

  /**
   * Build and validate the CompositionRelatesTo instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CompositionRelatesTo> {
    const compositionRelatesTo = this.build();
    await compositionRelatesTo.validateOrThrow();
    return compositionRelatesTo;
  }
}
