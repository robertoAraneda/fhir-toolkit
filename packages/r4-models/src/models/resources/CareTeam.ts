import { DomainResource } from '../base/DomainResource.js';
import type {
  CareTeamStatusType,
  IAnnotation,
  ICareTeam,
  ICareTeamParticipant,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CareTeam */
const CARE_TEAM_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'category',
  'name',
  '_name',
  'subject',
  'encounter',
  'period',
  'participant',
  'reasonCode',
  'reasonReference',
  'managingOrganization',
  'telecom',
  'note',
] as const;

/**
 * CareTeam - The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 *
 * @see https://hl7.org/fhir/R4/careteam.html
 *
 * @example
 * const careTeam = new CareTeam({
 *   // ... properties
 * });
 */
export class CareTeam extends DomainResource implements ICareTeam {
  readonly resourceType = 'CareTeam' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this team */
  identifier?: IIdentifier[];

  /** proposed | active | suspended | inactive | entered-in-error */
  status?: CareTeamStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Type of team */
  category?: ICodeableConcept[];

  /** Name of the team, such as crisis assessment team */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Who care team is for */
  subject?: IReference<'Patient' | 'Group'>;

  /** Encounter created as part of */
  encounter?: IReference<'Encounter'>;

  /** Time period team covers */
  period?: IPeriod;

  /** Members of the team */
  participant?: ICareTeamParticipant[];

  /** Why the care team exists */
  reasonCode?: ICodeableConcept[];

  /** Why the care team exists */
  reasonReference?: IReference<'Condition'>[];

  /** Organization responsible for the care team */
  managingOrganization?: IReference<'Organization'>[];

  /** A contact detail for the care team (that applies to all members) */
  telecom?: IContactPoint[];

  /** Comments made about the CareTeam */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICareTeam>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CARE_TEAM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CareTeam from a JSON object
   */
  static fromJSON(json: ICareTeam): CareTeam {
    return new CareTeam(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CareTeam with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICareTeam>): CareTeam {
    return new CareTeam({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CareTeam by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICareTeam) => Partial<ICareTeam>): CareTeam {
    const currentData = this.toJSON();
    return new CareTeam({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICareTeam)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICareTeam {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CARE_TEAM_PROPERTIES);
    return result as ICareTeam;
  }

  /**
   * Create a deep clone of this CareTeam
   */
  clone(): CareTeam {
    return new CareTeam(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CareTeam
   */
  toString(): string {
    const parts: string[] = ['CareTeam'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
