import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { List } from '../../models/resources/List.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IIdentifier,
  IList,
  IListEntry,
  IReference,
  ListModeType,
  ListStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * ListBuilder - Fluent builder for List resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const list = new ListBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ListBuilder extends DomainResourceBuilder<List, IList> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * current | retired | entered-in-error
   */
  setStatus(status: ListStatusType): this {
    this.data.status = status;
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
   * Set title
   * Descriptive name for the list
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set code
   * What the purpose of this list is
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * If all resources have the same subject
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Device' | 'Location'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Context in which list created
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set date
   * When the list was prepared
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set source
   * Who and/or what defined the list contents (aka Author)
   */
  setSource(source: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'Device'>): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set orderedBy
   * What order the list has
   */
  setOrderedBy(orderedBy: ICodeableConcept): this {
    this.data.orderedBy = orderedBy;
    return this;
  }

  /**
   * Set emptyReason
   * Why list is empty
   */
  setEmptyReason(emptyReason: ICodeableConcept): this {
    this.data.emptyReason = emptyReason;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add note
   * Comments about the list
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add entry
   * Entries in the list
   */
  addEntry(entry: IListEntry): this {
    return this.addToArray('entry', entry);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the List instance
   */
  build(): List {
    return new List(this.data);
  }

  /**
   * Build and validate the List instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<List> {
    const list = this.build();
    await list.validateOrThrow();
    return list;
  }
}
