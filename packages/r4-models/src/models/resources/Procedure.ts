import { DomainResource } from '../base/DomainResource.js';
import type {
  EventStatusType,
  IAge,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IProcedure,
  IProcedureFocalDevice,
  IProcedurePerformer,
  IRange,
  IReference,
} from '@fhir-toolkit/r4-types';

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
  'encounter',
  'performedDateTime',
  '_performedDateTime',
  'performedPeriod',
  'performedString',
  '_performedString',
  'performedAge',
  'performedRange',
  'recorder',
  'asserter',
  'performer',
  'location',
  'reasonCode',
  'reasonReference',
  'bodySite',
  'outcome',
  'report',
  'complication',
  'complicationDetail',
  'followUp',
  'note',
  'focalDevice',
  'usedReference',
  'usedCode',
] as const;

/**
 * Procedure - An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 *
 * @see https://hl7.org/fhir/R4/procedure.html
 *
 * @example
 * const procedure = new Procedure({
 *   resourceType: 'Procedure',
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
  category?: ICodeableConcept;

  /** Identification of the procedure */
  code?: ICodeableConcept;

  /** Who the procedure was performed on */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter created as part of */
  encounter?: IReference<'Encounter'>;

  /** When the procedure was performed */
  performedDateTime?: string;

  /** Extension for performedDateTime */
  _performedDateTime?: IElement;

  /** When the procedure was performed */
  performedPeriod?: IPeriod;

  /** When the procedure was performed */
  performedString?: string;

  /** Extension for performedString */
  _performedString?: IElement;

  /** When the procedure was performed */
  performedAge?: IAge;

  /** When the procedure was performed */
  performedRange?: IRange;

  /** Who recorded the procedure */
  recorder?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /** Person who asserts this procedure */
  asserter?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /** The people who performed the procedure */
  performer?: IProcedurePerformer[];

  /** Where the procedure happened */
  location?: IReference<'Location'>;

  /** Coded reason procedure performed */
  reasonCode?: ICodeableConcept[];

  /** The justification that the procedure was performed */
  reasonReference?: IReference<'Condition' | 'Observation' | 'Procedure' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** Target body sites */
  bodySite?: ICodeableConcept[];

  /** The result of procedure */
  outcome?: ICodeableConcept;

  /** Any report resulting from the procedure */
  report?: IReference<'DiagnosticReport' | 'DocumentReference' | 'Composition'>[];

  /** Complication following the procedure */
  complication?: ICodeableConcept[];

  /** A condition that is a result of the procedure */
  complicationDetail?: IReference<'Condition'>[];

  /** Instructions for follow up */
  followUp?: ICodeableConcept[];

  /** Additional information about the procedure */
  note?: IAnnotation[];

  /** Manipulated, implanted, or removed device */
  focalDevice?: IProcedureFocalDevice[];

  /** Items used during procedure */
  usedReference?: IReference<'Device' | 'Medication' | 'Substance'>[];

  /** Coded items used during the procedure */
  usedCode?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IProcedure>) {
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
