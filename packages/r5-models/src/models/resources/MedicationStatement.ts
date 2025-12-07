import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDosage,
  IElement,
  IIdentifier,
  IMedicationStatement,
  IMedicationStatementAdherence,
  IPeriod,
  IReference,
  ITiming,
  MedicationStatementStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationStatement */
const MEDICATION_STATEMENT_PROPERTIES = [
  'identifier',
  'partOf',
  'status',
  '_status',
  'category',
  'medication',
  'subject',
  'encounter',
  'effectiveDateTime',
  '_effectiveDateTime',
  'effectivePeriod',
  'effectiveTiming',
  'dateAsserted',
  '_dateAsserted',
  'informationSource',
  'derivedFrom',
  'reason',
  'note',
  'relatedClinicalInformation',
  'renderedDosageInstruction',
  '_renderedDosageInstruction',
  'dosage',
  'adherence',
] as const;

/**
 * MedicationStatement - A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.

The MedicationStatement resource was previously called MedicationStatement.
 *
 * @see https://hl7.org/fhir/R4/medicationstatement.html
 *
 * @example
 * const medicationStatement = new MedicationStatement({
 *   resourceType: 'MedicationStatement',
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

  /** Part of referenced event */
  partOf?: IReference<'Procedure' | 'MedicationStatement'>[];

  /** recorded | entered-in-error | draft */
  status: MedicationStatementStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Type of medication statement */
  category?: ICodeableConcept[];

  /** What medication was taken */
  medication: ICodeableReference;

  /** Who is/was taking  the medication */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter associated with MedicationStatement */
  encounter?: IReference<'Encounter'>;

  /** The date/time or interval when the medication is/was/will be taken */
  effectiveDateTime?: string;

  /** Extension for effectiveDateTime */
  _effectiveDateTime?: IElement;

  /** The date/time or interval when the medication is/was/will be taken */
  effectivePeriod?: IPeriod;

  /** The date/time or interval when the medication is/was/will be taken */
  effectiveTiming?: ITiming;

  /** When the usage was asserted? */
  dateAsserted?: string;

  /** Extension for dateAsserted */
  _dateAsserted?: IElement;

  /** Person or organization that provided the information about the taking of this medication */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>[];

  /** Link to information used to derive the MedicationStatement */
  derivedFrom?: IReference<'Resource'>[];

  /** Reason for why the medication is being/was taken */
  reason?: ICodeableReference[];

  /** Further information about the usage */
  note?: IAnnotation[];

  /** Link to information relevant to the usage of a medication */
  relatedClinicalInformation?: IReference<'Observation' | 'Condition'>[];

  /** Full representation of the dosage instructions */
  renderedDosageInstruction?: string;

  /** Extension for renderedDosageInstruction */
  _renderedDosageInstruction?: IElement;

  /** Details of how medication is/was taken or should be taken */
  dosage?: IDosage[];

  /** Indicates whether the medication is or is not being consumed or administered */
  adherence?: IMedicationStatementAdherence;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationStatement>) {
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
