import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { MedicationStatementStatusType } from '../../valuesets/index.js';

/**
 * MedicationStatement Interface
 * 
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationstatement.html
 */
export interface IMedicationStatement extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationStatement';

  /**
   * External identifier
   */
  identifier?: IIdentifier[];

  /**
   * Fulfils plan, proposal or order
   */
  basedOn?: IReference<'MedicationRequest' | 'CarePlan' | 'ServiceRequest'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'Procedure' | 'Observation'>[];

  /**
   * active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
   */
  status: MedicationStatementStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept[];

  /**
   * Type of medication usage
   */
  category?: ICodeableConcept;

  /**
   * What medication was taken
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * What medication was taken
   */
  medicationReference?: IReference;

  /**
   * Who is/was taking  the medication
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter / Episode associated with MedicationStatement
   */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /**
   * The date/time or interval when the medication is/was/will be taken
   */
  effectiveDateTime?: string;
  /**
   * Extension for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * The date/time or interval when the medication is/was/will be taken
   */
  effectivePeriod?: IPeriod;

  /**
   * When the statement was asserted?
   */
  dateAsserted?: string;
  /**
   * Extension for dateAsserted
   */
  _dateAsserted?: IElement;

  /**
   * Person or organization that provided the information about the taking of this medication
   */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>;

  /**
   * Additional supporting information
   */
  derivedFrom?: IReference<'Resource'>[];

  /**
   * Reason for why the medication is being/was taken
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Condition or observation that supports why the medication is being/was taken
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>[];

  /**
   * Further information about the statement
   */
  note?: IAnnotation[];

  /**
   * Details of how medication is/was taken or should be taken
   */
  dosage?: IDosage[];

}
