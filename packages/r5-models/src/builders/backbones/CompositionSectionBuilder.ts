import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CompositionSection } from '../../models/backbones/CompositionSection.js';
import type {
  ICodeableConcept,
  ICompositionSection,
  INarrative,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * CompositionSectionBuilder - Fluent builder for CompositionSection backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const compositionSection = new CompositionSectionBuilder()
 *   .setTitle(value)
 *   .addAuthor({ ... })
 *   .build();
 */
export class CompositionSectionBuilder extends BackboneElementBuilder<CompositionSection, ICompositionSection> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * Label for section (e.g. for ToC)
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set code
   * Classification of section (recommended)
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set focus
   * Who/what the section is about, when it is not about the subject of composition
   */
  setFocus(focus: IReference<'Resource'>): this {
    this.data.focus = focus;
    return this;
  }

  /**
   * Set text
   * Text summary of the section, for human interpretation
   */
  setText(text: INarrative): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set orderedBy
   * Order of section entries
   */
  setOrderedBy(orderedBy: ICodeableConcept): this {
    this.data.orderedBy = orderedBy;
    return this;
  }

  /**
   * Set emptyReason
   * Why the section is empty
   */
  setEmptyReason(emptyReason: ICodeableConcept): this {
    this.data.emptyReason = emptyReason;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add author
   * Who and/or what authored the section
   */
  addAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add entry
   * A reference to data that supports this section
   */
  addEntry(entry: IReference<'Resource'>): this {
    return this.addToArray('entry', entry);
  }

  /**
   * Add section
   * Nested Section
   */
  addSection(section: ICompositionSection): this {
    return this.addToArray('section', section);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CompositionSection instance
   */
  build(): CompositionSection {
    return new CompositionSection(this.data);
  }

  /**
   * Build and validate the CompositionSection instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CompositionSection> {
    const compositionSection = this.build();
    await compositionSection.validateOrThrow();
    return compositionSection;
  }
}
