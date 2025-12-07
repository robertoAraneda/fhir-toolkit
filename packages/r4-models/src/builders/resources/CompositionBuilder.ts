import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Composition } from '../../models/resources/Composition.js';
import type {
  CompositionStatusType,
  ICodeableConcept,
  IComposition,
  ICompositionAttester,
  ICompositionEvent,
  ICompositionRelatesTo,
  ICompositionSection,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CompositionBuilder - Fluent builder for Composition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const composition = new CompositionBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addCategory({ ... })
 *   .build();
 */
export class CompositionBuilder extends DomainResourceBuilder<Composition, IComposition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Version-independent identifier for the Composition
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set status
   * preliminary | final | amended | entered-in-error
   */
  setStatus(status: CompositionStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set type
   * Kind of composition (LOINC if possible)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subject
   * Who and/or what the composition is about
   */
  setSubject(subject: IReference<'Resource'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Context of the Composition
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set date
   * Composition editing time
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set title
   * Human Readable name/title
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set confidentiality
   * As defined by affinity domain
   */
  setConfidentiality(confidentiality: string): this {
    this.data.confidentiality = confidentiality;
    return this;
  }

  /**
   * Set custodian
   * Organization which maintains the composition
   */
  setCustodian(custodian: IReference<'Organization'>): this {
    this.data.custodian = custodian;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add category
   * Categorization of Composition
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add author
   * Who and/or what authored the composition
   */
  addAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add attester
   * Attests to accuracy of composition
   */
  addAttester(attester: ICompositionAttester): this {
    return this.addToArray('attester', attester);
  }

  /**
   * Add relatesTo
   * Relationships to other compositions/documents
   */
  addRelatesTo(relatesTo: ICompositionRelatesTo): this {
    return this.addToArray('relatesTo', relatesTo);
  }

  /**
   * Add event
   * The clinical service(s) being documented
   */
  addEvent(event: ICompositionEvent): this {
    return this.addToArray('event', event);
  }

  /**
   * Add section
   * Composition is broken into sections
   */
  addSection(section: ICompositionSection): this {
    return this.addToArray('section', section);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Composition instance
   */
  build(): Composition {
    return new Composition(this.data);
  }

  /**
   * Build and validate the Composition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Composition> {
    const composition = this.build();
    await composition.validateOrThrow();
    return composition;
  }
}
