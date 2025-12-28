import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationStatement,
  IPeriod,
  IReference,
  MedicationStatementStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicationStatement */
const MEDICATION_STATEMENT_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'category',
  'medicationCodeableConcept',
  'medicationReference',
  'subject',
  'context',
  'effectiveDateTime',
  '_effectiveDateTime',
  'effectivePeriod',
  'dateAsserted',
  '_dateAsserted',
  'informationSource',
  'derivedFrom',
  'reasonCode',
  'reasonReference',
  'note',
  'dosage',
] as const;

/**
 * MedicationStatement - A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 *
 * @see https://hl7.org/fhir/R4B/medicationstatement.html
 *
 * @example
 * const medicationStatement = new MedicationStatement({
 *   // ... properties
 * });
 */
export class MedicationStatement extends DomainResource implements IMedicationStatement {
  readonly resourceType = 'MedicationStatement' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier[];

  /** Fulfils plan, proposal or order */
  basedOn?: IReference<'MedicationRequest' | 'CarePlan' | 'ServiceRequest'>[];

  /** Part of referenced event */
  partOf?: IReference<'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'Procedure' | 'Observation'>[];

  /** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
  status: MedicationStatementStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept[];

  /** Type of medication usage */
  category?: ICodeableConcept;

  /** What medication was taken */
  medicationCodeableConcept?: ICodeableConcept;

  /** What medication was taken */
  medicationReference?: IReference;

  /** Who is/was taking  the medication */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter / Episode associated with MedicationStatement */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /** The date/time or interval when the medication is/was/will be taken */
  effectiveDateTime?: string;

  /** Extension for effectiveDateTime */
  _effectiveDateTime?: IElement;

  /** The date/time or interval when the medication is/was/will be taken */
  effectivePeriod?: IPeriod;

  /** When the statement was asserted? */
  dateAsserted?: string;

  /** Extension for dateAsserted */
  _dateAsserted?: IElement;

  /** Person or organization that provided the information about the taking of this medication */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>;

  /** Additional supporting information */
  derivedFrom?: IReference<'Resource'>[];

  /** Reason for why the medication is being/was taken */
  reasonCode?: ICodeableConcept[];

  /** Condition or observation that supports why the medication is being/was taken */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>[];

  /** Further information about the statement */
  note?: IAnnotation[];

  /** Details of how medication is/was taken or should be taken */
  dosage?: IDosage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicationStatement>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_STATEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationStatement from a JSON object
   */
  static fromJSON(json: IMedicationStatement): MedicationStatement {
    return new MedicationStatement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationStatement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationStatement>): MedicationStatement {
    return new MedicationStatement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationStatement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationStatement) => Partial<IMedicationStatement>): MedicationStatement {
    const currentData = this.toJSON();
    return new MedicationStatement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationStatement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationStatement {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICATION_STATEMENT_PROPERTIES);
    return result as IMedicationStatement;
  }

  /**
   * Create a deep clone of this MedicationStatement
   */
  clone(): MedicationStatement {
    return new MedicationStatement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationStatement
   */
  toString(): string {
    const parts: string[] = ['MedicationStatement'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
