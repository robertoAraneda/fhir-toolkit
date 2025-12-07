import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DocumentReferenceContext } from '../../models/backbones/DocumentReferenceContext.js';
import type {
  ICodeableConcept,
  IDocumentReferenceContext,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * DocumentReferenceContextBuilder - Fluent builder for DocumentReferenceContext backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const documentReferenceContext = new DocumentReferenceContextBuilder()
 *   .setPeriod(value)
 *   .addEncounter({ ... })
 *   .build();
 */
export class DocumentReferenceContextBuilder extends BackboneElementBuilder<DocumentReferenceContext, IDocumentReferenceContext> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set period
   * Time of service that is being documented
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set facilityType
   * Kind of facility where patient was seen
   */
  setFacilityType(facilityType: ICodeableConcept): this {
    this.data.facilityType = facilityType;
    return this;
  }

  /**
   * Set practiceSetting
   * Additional details about where the content was created (e.g. clinical specialty)
   */
  setPracticeSetting(practiceSetting: ICodeableConcept): this {
    this.data.practiceSetting = practiceSetting;
    return this;
  }

  /**
   * Set sourcePatientInfo
   * Patient demographics from source
   */
  setSourcePatientInfo(sourcePatientInfo: IReference<'Patient'>): this {
    this.data.sourcePatientInfo = sourcePatientInfo;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add encounter
   * Context of the document  content
   */
  addEncounter(encounter: IReference<'Encounter' | 'EpisodeOfCare'>): this {
    return this.addToArray('encounter', encounter);
  }

  /**
   * Add event
   * Main clinical acts documented
   */
  addEvent(event: ICodeableConcept): this {
    return this.addToArray('event', event);
  }

  /**
   * Add related
   * Related identifiers or resources
   */
  addRelated(related: IReference<'Resource'>): this {
    return this.addToArray('related', related);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DocumentReferenceContext instance
   */
  build(): DocumentReferenceContext {
    return new DocumentReferenceContext(this.data);
  }

  /**
   * Build and validate the DocumentReferenceContext instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DocumentReferenceContext> {
    const documentReferenceContext = this.build();
    await documentReferenceContext.validateOrThrow();
    return documentReferenceContext;
  }
}
