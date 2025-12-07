import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CareTeam } from '../../models/resources/CareTeam.js';
import type {
  CareTeamStatusType,
  IAnnotation,
  ICareTeam,
  ICareTeamParticipant,
  ICodeableConcept,
  IContactPoint,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * CareTeamBuilder - Fluent builder for CareTeam resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const careTeam = new CareTeamBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CareTeamBuilder extends DomainResourceBuilder<CareTeam, ICareTeam> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * proposed | active | suspended | inactive | entered-in-error
   */
  setStatus(status: CareTeamStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set name
   * Name of the team, such as crisis assessment team
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set subject
   * Who care team is for
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter created as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set period
   * Time period team covers
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set reason choice type
   * @param type - 'Code' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReason('Code', value)
   */
  setReason<T extends 'Code' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `reason${type}` as keyof ICareTeam;
    const otherKeys: (keyof ICareTeam)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof ICareTeam);
      otherKeys.push('_reasonCode' as keyof ICareTeam);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof ICareTeam);
      otherKeys.push('_reasonReference' as keyof ICareTeam);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Ids for this team
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * Type of team
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add participant
   * Members of the team
   */
  addParticipant(participant: ICareTeamParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add managingOrganization
   * Organization responsible for the care team
   */
  addManagingOrganization(managingOrganization: IReference<'Organization'>): this {
    return this.addToArray('managingOrganization', managingOrganization);
  }

  /**
   * Add telecom
   * A contact detail for the care team (that applies to all members)
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  /**
   * Add note
   * Comments made about the CareTeam
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CareTeam instance
   */
  build(): CareTeam {
    return new CareTeam(this.data);
  }

  /**
   * Build and validate the CareTeam instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CareTeam> {
    const careTeam = this.build();
    await careTeam.validateOrThrow();
    return careTeam;
  }
}
