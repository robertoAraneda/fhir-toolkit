import { ElementBuilder } from '../base/ElementBuilder.js';
import { Annotation } from '../../models/datatypes/Annotation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * AnnotationBuilder - Fluent builder for Annotation datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const annotation = new AnnotationBuilder()
 *   .setTime(value)
 *   .build();
 */
export class AnnotationBuilder extends ElementBuilder<Annotation, IAnnotation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set time
   * When the annotation was made
   */
  setTime(time: string): this {
    this.data.time = time;
    return this;
  }

  /**
   * Set text
   * The annotation  - text content (as markdown)
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set author choice type
   * @param type - 'Reference' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAuthor('Reference', value)
   */
  setAuthor<T extends 'Reference' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `author${type}` as keyof IAnnotation;
    const otherKeys: (keyof IAnnotation)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('authorReference' as keyof IAnnotation);
      otherKeys.push('_authorReference' as keyof IAnnotation);
    }
    if (type !== 'String') {
      otherKeys.push('authorString' as keyof IAnnotation);
      otherKeys.push('_authorString' as keyof IAnnotation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Annotation instance
   */
  build(): Annotation {
    return new Annotation(this.data);
  }

  /**
   * Build and validate the Annotation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Annotation> {
    const annotation = this.build();
    await annotation.validateOrThrow();
    return annotation;
  }
}
