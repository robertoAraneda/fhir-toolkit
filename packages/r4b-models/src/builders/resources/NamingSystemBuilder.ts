import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { NamingSystem } from '../../models/resources/NamingSystem.js';
import type {
  ICodeableConcept,
  IContactDetail,
  INamingSystem,
  INamingSystemUniqueId,
  IUsageContext,
  NamingSystemTypeType,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * NamingSystemBuilder - Fluent builder for NamingSystem resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const namingSystem = new NamingSystemBuilder()
 *   .setId('123')
 *   .setName(value)
 *   .addContact({ ... })
 *   .build();
 */
export class NamingSystemBuilder extends DomainResourceBuilder<NamingSystem, INamingSystem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name for this naming system (computer friendly)
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set kind
   * codesystem | identifier | root
   */
  setKind(kind: NamingSystemTypeType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set date
   * Date last changed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set publisher
   * Name of the publisher (organization or individual)
   */
  setPublisher(publisher: string): this {
    this.data.publisher = publisher;
    return this;
  }

  /**
   * Set responsible
   * Who maintains system namespace?
   */
  setResponsible(responsible: string): this {
    this.data.responsible = responsible;
    return this;
  }

  /**
   * Set type
   * e.g. driver,  provider,  patient, bank etc.
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set description
   * Natural language description of the naming system
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set usage
   * How/where is it used
   */
  setUsage(usage: string): this {
    this.data.usage = usage;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add contact
   * Contact details for the publisher
   */
  addContact(contact: IContactDetail): this {
    return this.addToArray('contact', contact);
  }

  /**
   * Add useContext
   * The context that the content is intended to support
   */
  addUseContext(useContext: IUsageContext): this {
    return this.addToArray('useContext', useContext);
  }

  /**
   * Add jurisdiction
   * Intended jurisdiction for naming system (if applicable)
   */
  addJurisdiction(jurisdiction: ICodeableConcept): this {
    return this.addToArray('jurisdiction', jurisdiction);
  }

  /**
   * Add uniqueId
   * Unique identifiers used for system
   */
  addUniqueId(uniqueId: INamingSystemUniqueId): this {
    return this.addToArray('uniqueId', uniqueId);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NamingSystem instance
   */
  build(): NamingSystem {
    return new NamingSystem(this.data);
  }

  /**
   * Build and validate the NamingSystem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NamingSystem> {
    const namingSystem = this.build();
    await namingSystem.validateOrThrow();
    return namingSystem;
  }
}
