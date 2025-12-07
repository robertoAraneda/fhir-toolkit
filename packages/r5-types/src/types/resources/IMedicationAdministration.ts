import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IMedicationAdministrationDosage } from '../backbones/IMedicationAdministrationDosage.js';
import type { IMedicationAdministrationPerformer } from '../backbones/IMedicationAdministrationPerformer.js';
import type { MedicationAdministrationStatusType } from '../../valuesets/index.js';

/**
 * MedicationAdministration Interface
 * 
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationadministration.html
 */
export interface IMedicationAdministration extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicationAdministration';

  /**
   * External identifier
   */
  identifier?: IIdentifier[];

  /**
   * Plan this is fulfilled by this administration
   */
  basedOn?: IReference<'CarePlan'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'MedicationAdministration' | 'Procedure' | 'MedicationDispense'>[];

  /**
   * in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
   */
  status: MedicationAdministrationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason administration not performed
   */
  statusReason?: ICodeableConcept[];

  /**
   * Type of medication administration
   */
  category?: ICodeableConcept[];

  /**
   * What was administered
   */
  medication: ICodeableReference;

  /**
   * Who received medication
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter administered as part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Additional information to support administration
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * Specific date/time or interval of time during which the administration took place (or did not take place)
   */
  occurenceDateTime?: string;
  /**
   * Extension for occurenceDateTime
   */
  _occurenceDateTime?: IElement;

  /**
   * Specific date/time or interval of time during which the administration took place (or did not take place)
   */
  occurencePeriod?: IPeriod;

  /**
   * Specific date/time or interval of time during which the administration took place (or did not take place)
   */
  occurenceTiming?: ITiming;

  /**
   * When the MedicationAdministration was first captured in the subject's record
   */
  recorded?: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * Full dose was not administered
   */
  isSubPotent?: boolean;
  /**
   * Extension for isSubPotent
   */
  _isSubPotent?: IElement;

  /**
   * Reason full dose was not administered
   */
  subPotentReason?: ICodeableConcept[];

  /**
   * Who or what performed the medication administration and what type of performance they did
   */
  performer?: IMedicationAdministrationPerformer[];

  /**
   * Concept, condition or observation that supports why the medication was administered
   */
  reason?: ICodeableReference[];

  /**
   * Request administration performed against
   */
  request?: IReference<'MedicationRequest'>;

  /**
   * Device used to administer
   */
  device?: ICodeableReference[];

  /**
   * Information about the administration
   */
  note?: IAnnotation[];

  /**
   * Details of how medication was taken
   */
  dosage?: IMedicationAdministrationDosage;

  /**
   * A list of events of interest in the lifecycle
   */
  eventHistory?: IReference<'Provenance'>[];

}
