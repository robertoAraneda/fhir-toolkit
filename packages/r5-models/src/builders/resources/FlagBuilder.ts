import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Flag } from '../../models/resources/Flag.js';
import type {
  FlagStatusType,
  ICodeableConcept,
  IFlag,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * FlagBuilder - Fluent builder for Flag resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const flag = new FlagBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class FlagBuilder extends DomainResourceBuilder<Flag, IFlag> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | inactive | entered-in-error
   */
  setStatus(status: FlagStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set code
   * Coded or textual message to display to user
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set subject
   * Who/What is flag about?
   */
  setSubject(subject: IReference<'Patient' | 'RelatedPerson' | 'Location' | 'Group' | 'Organization' | 'Practitioner' | 'PractitionerRole' | 'PlanDefinition' | 'Medication' | 'Procedure'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set period
   * Time period when flag is active
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set encounter
   * Alert relevant during encounter
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set author
   * Flag creator
   */
  setAuthor(author: IReference<'Device' | 'Organization' | 'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.author = author;
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
   * Add category
   * Clinical, administrative, etc
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Flag instance
   */
  build(): Flag {
    return new Flag(this.data);
  }

  /**
   * Build and validate the Flag instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Flag> {
    const flag = this.build();
    await flag.validateOrThrow();
    return flag;
  }
}
