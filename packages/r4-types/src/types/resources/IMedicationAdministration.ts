import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
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
   * Instantiates protocol or definition
   */
  instantiates?: string[];
  /**
   * Extension for instantiates
   */
  _instantiates?: IElement;

  /**
   * Part of referenced event
   */
  partOf?: IReference<'MedicationAdministration' | 'Procedure'>[];

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
   * Type of medication usage
   */
  category?: ICodeableConcept;

  /**
   * What was administered
   */
  medicationCodeableConcept?: ICodeableConcept;

  /**
   * What was administered
   */
  medicationReference?: IReference;

  /**
   * Who received medication
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter or Episode of Care administered as part of
   */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

  /**
   * Additional information to support administration
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * Start and end time of administration
   */
  effectiveDateTime?: string;
  /**
   * Extension for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * Start and end time of administration
   */
  effectivePeriod?: IPeriod;

  /**
   * Who performed the medication administration and what they did
   */
  performer?: IMedicationAdministrationPerformer[];

  /**
   * Reason administration performed
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Condition or observation that supports why the medication was administered
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport'>[];

  /**
   * Request administration performed against
   */
  request?: IReference<'MedicationRequest'>;

  /**
   * Device used to administer
   */
  device?: IReference<'Device'>[];

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
