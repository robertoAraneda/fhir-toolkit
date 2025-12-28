import { DomainResource } from '../base/DomainResource.js';
import type {
  EventStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IPeriod,
  IProcedure,
  IProcedureFocalDevice,
  IProcedurePerformer,
  IRange,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Procedure */
const PROCEDURE_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'category',
  'code',
  'subject',
  'focus',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceString',
  '_occurrenceString',
  'occurrenceAge',
  'occurrenceRange',
  'occurrenceTiming',
  'recorded',
  '_recorded',
  'recorder',
  'reportedBoolean',
  '_reportedBoolean',
  'reportedReference',
  'performer',
  'location',
  'reason',
  'bodySite',
  'outcome',
  'report',
  'complication',
  'followUp',
  'note',
  'focalDevice',
  'used',
  'supportingInfo',
] as const;

/**
 * Procedure - An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing.
 *
 * @see https://hl7.org/fhir/R5/procedure.html
 *
 * @example
 * const procedure = new Procedure({
 *   // ... properties
 * });
 */
export class Procedure extends DomainResource implements IProcedure {
  readonly resourceType = 'Procedure' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Identifiers for this procedure */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** A request for this procedure */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest'>[];

  /** Part of referenced event */
  partOf?: IReference<'Procedure' | 'Observation' | 'MedicationAdministration'>[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
  status: EventStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** Classification of the procedure */
  category?: ICodeableConcept[];

  /** Identification of the procedure */
  code?: ICodeableConcept;

  /** Individual or entity the procedure was performed on */
  subject: IReference<'Patient' | 'Group' | 'Device' | 'Practitioner' | 'Organization' | 'Location'>;

  /** Who is the target of the procedure when it is not the subject of record only */
  focus?: IReference<'Patient' | 'Group' | 'RelatedPerson' | 'Practitioner' | 'Organization' | 'CareTeam' | 'PractitionerRole' | 'Specimen'>;

  /** The Encounter during which this Procedure was created */
  encounter?: IReference<'Encounter'>;

  /** When the procedure occurred or is occurring */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When the procedure occurred or is occurring */
  occurrencePeriod?: IPeriod;

  /** When the procedure occurred or is occurring */
  occurrenceString?: string;

  /** Extension for occurrenceString */
  _occurrenceString?: IElement;

  /** When the procedure occurred or is occurring */
  occurrenceAge?: IAge;

  /** When the procedure occurred or is occurring */
  occurrenceRange?: IRange;

  /** When the procedure occurred or is occurring */
  occurrenceTiming?: ITiming;

  /** When the procedure was first captured in the subject's record */
  recorded?: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** Who recorded the procedure */
  recorder?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /** Reported rather than primary record */
  reportedBoolean?: boolean;

  /** Extension for reportedBoolean */
  _reportedBoolean?: IElement;

  /** Reported rather than primary record */
  reportedReference?: IReference;

  /** Who performed the procedure and what they did */
  performer?: IProcedurePerformer[];

  /** Where the procedure happened */
  location?: IReference<'Location'>;

  /** The justification that the procedure was performed */
  reason?: ICodeableReference[];

  /** Target body sites */
  bodySite?: ICodeableConcept[];

  /** The result of procedure */
  outcome?: ICodeableConcept;

  /** Any report resulting from the procedure */
  report?: IReference<'DiagnosticReport' | 'DocumentReference' | 'Composition'>[];

  /** Complication following the procedure */
  complication?: ICodeableReference[];

  /** Instructions for follow up */
  followUp?: ICodeableConcept[];

  /** Additional information about the procedure */
  note?: IAnnotation[];

  /** Manipulated, implanted, or removed device */
  focalDevice?: IProcedureFocalDevice[];

  /** Items used during procedure */
  used?: ICodeableReference[];

  /** Extra information relevant to the procedure */
  supportingInfo?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IProcedure>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PROCEDURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Procedure from a JSON object
   */
  static fromJSON(json: IProcedure): Procedure {
    return new Procedure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Procedure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProcedure>): Procedure {
    return new Procedure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Procedure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProcedure) => Partial<IProcedure>): Procedure {
    const currentData = this.toJSON();
    return new Procedure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProcedure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProcedure {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PROCEDURE_PROPERTIES);
    return result as IProcedure;
  }

  /**
   * Create a deep clone of this Procedure
   */
  clone(): Procedure {
    return new Procedure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Procedure
   */
  toString(): string {
    const parts: string[] = ['Procedure'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
