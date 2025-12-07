import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Composition } from '../../models/resources/Composition.js';
import type {
  CompositionStatusType,
  IAnnotation,
  ICodeableConcept,
  IComposition,
  ICompositionAttester,
  ICompositionEvent,
  ICompositionSection,
  IIdentifier,
  IReference,
  IRelatedArtifact,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

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
 *   .setUrl(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CompositionBuilder extends DomainResourceBuilder<Composition, IComposition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical identifier for this Composition, represented as a URI (globally unique)
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set version
   * An explicitly assigned identifer of a variation of the content in the Composition
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set status
   * registered | partial | preliminary | final | amended | corrected | appended | cancelled | entered-in-error | deprecated | unknown
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
   * Set name
   * Name for this Composition (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
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
   * Add identifier
   * Version-independent identifier for the Composition
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Categorization of Composition
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add subject
   * Who and/or what the composition is about
   */
  addSubject(subject: IReference<'Resource'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add author
   * Who and/or what authored the composition
   */
  addAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>): this {
    return this.addToArray('author', author);
  }

  /**
   * Add note
   * For any additional notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
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
  addRelatesTo(relatesTo: IRelatedArtifact): this {
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
