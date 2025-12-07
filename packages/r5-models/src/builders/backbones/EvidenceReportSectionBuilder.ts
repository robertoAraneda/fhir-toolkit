import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceReportSection } from '../../models/backbones/EvidenceReportSection.js';
import type {
  ICodeableConcept,
  IEvidenceReportSection,
  INarrative,
  IQuantity,
  IReference,
  ListModeType,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceReportSectionBuilder - Fluent builder for EvidenceReportSection backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceReportSection = new EvidenceReportSectionBuilder()
 *   .setTitle(value)
 *   .addAuthor({ ... })
 *   .build();
 */
export class EvidenceReportSectionBuilder extends BackboneElementBuilder<EvidenceReportSection, IEvidenceReportSection> {
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
   * Set focus
   * Classification of section (recommended)
   */
  setFocus(focus: ICodeableConcept): this {
    this.data.focus = focus;
    return this;
  }

  /**
   * Set focusReference
   * Classification of section by Resource
   */
  setFocusReference(focusReference: IReference<'Resource'>): this {
    this.data.focusReference = focusReference;
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
   * Set mode
   * working | snapshot | changes
   */
  setMode(mode: ListModeType): this {
    this.data.mode = mode;
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
  addAuthor(author: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'Group' | 'Organization'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add entryClassifier
   * Extensible classifiers as content
   */
  addEntryClassifier(entryClassifier: ICodeableConcept): this {
    return this.addToArray('entryClassifier', entryClassifier);
  }

  /**
   * Add entryReference
   * Reference to resources as content
   */
  addEntryReference(entryReference: IReference<'Resource'>): this {
    return this.addToArray('entryReference', entryReference);
  }

  /**
   * Add entryQuantity
   * Quantity as content
   */
  addEntryQuantity(entryQuantity: IQuantity): this {
    return this.addToArray('entryQuantity', entryQuantity);
  }

  /**
   * Add section
   * Nested Section
   */
  addSection(section: IEvidenceReportSection): this {
    return this.addToArray('section', section);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceReportSection instance
   */
  build(): EvidenceReportSection {
    return new EvidenceReportSection(this.data);
  }

  /**
   * Build and validate the EvidenceReportSection instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceReportSection> {
    const evidenceReportSection = this.build();
    await evidenceReportSection.validateOrThrow();
    return evidenceReportSection;
  }
}
