import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMedicationDispensePerformer } from '../backbones/IMedicationDispensePerformer.js';
import type { IMedicationDispenseSubstitution } from '../backbones/IMedicationDispenseSubstitution.js';
import type { MedicationDispenseStatusType } from '../../valuesets/index.js';

/**
 * MedicationDispense Interface
 * 
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationdispense.html
 */
export interface IMedicationDispense extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationDispense';

  /**
   * External identifier
   */
  identifier?: IIdentifier[];

  /**
   * Plan that is fulfilled by this dispense
   */
  basedOn?: IReference<'CarePlan'>[];

  /**
   * Event that dispense is part of
   */
  partOf?: IReference<'Procedure' | 'MedicationAdministration'>[];

  /**
   * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
   */
  status: MedicationDispenseStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Why a dispense was not performed
   */
  notPerformedReason?: ICodeableReference;

  /**
   * When the status changed
   */
  statusChanged?: string;
  /**
   * Extension for statusChanged
   */
  _statusChanged?: IElement;

  /**
   * Type of medication dispense
   */
  category?: ICodeableConcept[];

  /**
   * What medication was supplied
   */
  medication: ICodeableReference;

  /**
   * Who the dispense is for
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter associated with event
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Information that supports the dispensing of the medication
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * Who performed event
   */
  performer?: IMedicationDispensePerformer[];

  /**
   * Where the dispense occurred
   */
  location?: IReference<'Location'>;

  /**
   * Medication order that authorizes the dispense
   */
  authorizingPrescription?: IReference<'MedicationRequest'>[];

  /**
   * Trial fill, partial fill, emergency fill, etc
   */
  type?: ICodeableConcept;

  /**
   * Amount dispensed
   */
  quantity?: IQuantity;

  /**
   * Amount of medication expressed as a timing amount
   */
  daysSupply?: IQuantity;

  /**
   * When the recording of the dispense started
   */
  recorded?: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * When product was packaged and reviewed
   */
  whenPrepared?: string;
  /**
   * Extension for whenPrepared
   */
  _whenPrepared?: IElement;

  /**
   * When product was given out
   */
  whenHandedOver?: string;
  /**
   * Extension for whenHandedOver
   */
  _whenHandedOver?: IElement;

  /**
   * Where the medication was/will be sent
   */
  destination?: IReference<'Location'>;

  /**
   * Who collected the medication or where the medication was delivered
   */
  receiver?: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Location' | 'PractitionerRole'>[];

  /**
   * Information about the dispense
   */
  note?: IAnnotation[];

  /**
   * Full representation of the dosage instructions
   */
  renderedDosageInstruction?: string;
  /**
   * Extension for renderedDosageInstruction
   */
  _renderedDosageInstruction?: IElement;

  /**
   * How the medication is to be used by the patient or administered by the caregiver
   */
  dosageInstruction?: IDosage[];

  /**
   * Whether a substitution was performed on the dispense
   */
  substitution?: IMedicationDispenseSubstitution;

  /**
   * A list of relevant lifecycle events
   */
  eventHistory?: IReference<'Provenance'>[];

}
