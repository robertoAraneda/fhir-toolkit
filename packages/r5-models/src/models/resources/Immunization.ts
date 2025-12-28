import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IImmunization,
  IImmunizationPerformer,
  IImmunizationProgramEligibility,
  IImmunizationProtocolApplied,
  IImmunizationReaction,
  IQuantity,
  IReference,
  ImmunizationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Immunization */
const IMMUNIZATION_PROPERTIES = [
  'identifier',
  'basedOn',
  'status',
  '_status',
  'statusReason',
  'vaccineCode',
  'administeredProduct',
  'manufacturer',
  'lotNumber',
  '_lotNumber',
  'expirationDate',
  '_expirationDate',
  'patient',
  'encounter',
  'supportingInformation',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrenceString',
  '_occurrenceString',
  'primarySource',
  '_primarySource',
  'informationSource',
  'location',
  'site',
  'route',
  'doseQuantity',
  'performer',
  'note',
  'reason',
  'isSubpotent',
  '_isSubpotent',
  'subpotentReason',
  'programEligibility',
  'fundingSource',
  'reaction',
  'protocolApplied',
] as const;

/**
 * Immunization - Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 *
 * @see https://hl7.org/fhir/R5/immunization.html
 *
 * @example
 * const immunization = new Immunization({
 *   // ... properties
 * });
 */
export class Immunization extends DomainResource implements IImmunization {
  readonly resourceType = 'Immunization' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** Authority that the immunization event is based on */
  basedOn?: IReference<'CarePlan' | 'MedicationRequest' | 'ServiceRequest' | 'ImmunizationRecommendation'>[];

  /** completed | entered-in-error | not-done */
  status: ImmunizationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept;

  /** Vaccine administered */
  vaccineCode: ICodeableConcept;

  /** Product that was administered */
  administeredProduct?: ICodeableReference;

  /** Vaccine manufacturer */
  manufacturer?: ICodeableReference;

  /** Vaccine lot number */
  lotNumber?: string;

  /** Extension for lotNumber */
  _lotNumber?: IElement;

  /** Vaccine expiration date */
  expirationDate?: string;

  /** Extension for expirationDate */
  _expirationDate?: IElement;

  /** Who was immunized */
  patient: IReference<'Patient'>;

  /** Encounter immunization was part of */
  encounter?: IReference<'Encounter'>;

  /** Additional information in support of the immunization */
  supportingInformation?: IReference<'Resource'>[];

  /** Vaccine administration date */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** Vaccine administration date */
  occurrenceString?: string;

  /** Extension for occurrenceString */
  _occurrenceString?: IElement;

  /** Indicates context the data was captured in */
  primarySource?: boolean;

  /** Extension for primarySource */
  _primarySource?: IElement;

  /** Indicates the source of a  reported record */
  informationSource?: ICodeableReference;

  /** Where immunization occurred */
  location?: IReference<'Location'>;

  /** Body site vaccine  was administered */
  site?: ICodeableConcept;

  /** How vaccine entered body */
  route?: ICodeableConcept;

  /** Amount of vaccine administered */
  doseQuantity?: IQuantity;

  /** Who performed event */
  performer?: IImmunizationPerformer[];

  /** Additional immunization notes */
  note?: IAnnotation[];

  /** Why immunization occurred */
  reason?: ICodeableReference[];

  /** Dose potency */
  isSubpotent?: boolean;

  /** Extension for isSubpotent */
  _isSubpotent?: IElement;

  /** Reason for being subpotent */
  subpotentReason?: ICodeableConcept[];

  /** Patient eligibility for a specific vaccination program */
  programEligibility?: IImmunizationProgramEligibility[];

  /** Funding source for the vaccine */
  fundingSource?: ICodeableConcept;

  /** Details of a reaction that follows immunization */
  reaction?: IImmunizationReaction[];

  /** Protocol followed by the provider */
  protocolApplied?: IImmunizationProtocolApplied[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IImmunization>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Immunization from a JSON object
   */
  static fromJSON(json: IImmunization): Immunization {
    return new Immunization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Immunization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunization>): Immunization {
    return new Immunization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Immunization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunization) => Partial<IImmunization>): Immunization {
    const currentData = this.toJSON();
    return new Immunization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunization {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, IMMUNIZATION_PROPERTIES);
    return result as IImmunization;
  }

  /**
   * Create a deep clone of this Immunization
   */
  clone(): Immunization {
    return new Immunization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Immunization
   */
  toString(): string {
    const parts: string[] = ['Immunization'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
