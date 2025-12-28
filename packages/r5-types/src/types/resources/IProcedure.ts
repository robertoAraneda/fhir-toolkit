import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IProcedureFocalDevice } from '../backbones/IProcedureFocalDevice.js';
import type { IProcedurePerformer } from '../backbones/IProcedurePerformer.js';
import type { EventStatusType } from '../../valuesets/index.js';

/**
 * Procedure Interface
 * 
 * An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing.
 * 
 *
 * @see https://hl7.org/fhir/R5/procedure.html
 */
export interface IProcedure extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Procedure';

  /**
   * External Identifiers for this procedure
   */
  identifier?: IIdentifier[];

  /**
   * Instantiates FHIR protocol or definition
   */
  instantiatesCanonical?: string[];
  /**
   * Extension for instantiatesCanonical
   */
  _instantiatesCanonical?: IElement;

  /**
   * Instantiates external protocol or definition
   */
  instantiatesUri?: string[];
  /**
   * Extension for instantiatesUri
   */
  _instantiatesUri?: IElement;

  /**
   * A request for this procedure
   */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'Procedure' | 'Observation' | 'MedicationAdministration'>[];

  /**
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  status: EventStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * Classification of the procedure
   */
  category?: ICodeableConcept[];

  /**
   * Identification of the procedure
   */
  code?: ICodeableConcept;

  /**
   * Individual or entity the procedure was performed on
   */
  subject: IReference<'Patient' | 'Group' | 'Device' | 'Practitioner' | 'Organization' | 'Location'>;

  /**
   * Who is the target of the procedure when it is not the subject of record only
   */
  focus?: IReference<'Patient' | 'Group' | 'RelatedPerson' | 'Practitioner' | 'Organization' | 'CareTeam' | 'PractitionerRole' | 'Specimen'>;

  /**
   * The Encounter during which this Procedure was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the procedure occurred or is occurring
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When the procedure occurred or is occurring
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the procedure occurred or is occurring
   */
  occurrenceString?: string;
  /**
   * Extension for occurrenceString
   */
  _occurrenceString?: IElement;

  /**
   * When the procedure occurred or is occurring
   */
  occurrenceAge?: IAge;

  /**
   * When the procedure occurred or is occurring
   */
  occurrenceRange?: IRange;

  /**
   * When the procedure occurred or is occurring
   */
  occurrenceTiming?: ITiming;

  /**
   * When the procedure was first captured in the subject's record
   */
  recorded?: string;
  /**
   * Extension for recorded
   */
  _recorded?: IElement;

  /**
   * Who recorded the procedure
   */
  recorder?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Reported rather than primary record
   */
  reportedBoolean?: boolean;
  /**
   * Extension for reportedBoolean
   */
  _reportedBoolean?: IElement;

  /**
   * Reported rather than primary record
   */
  reportedReference?: IReference;

  /**
   * Who performed the procedure and what they did
   */
  performer?: IProcedurePerformer[];

  /**
   * Where the procedure happened
   */
  location?: IReference<'Location'>;

  /**
   * The justification that the procedure was performed
   */
  reason?: ICodeableReference[];

  /**
   * Target body sites
   */
  bodySite?: ICodeableConcept[];

  /**
   * The result of procedure
   */
  outcome?: ICodeableConcept;

  /**
   * Any report resulting from the procedure
   */
  report?: IReference<'DiagnosticReport' | 'DocumentReference' | 'Composition'>[];

  /**
   * Complication following the procedure
   */
  complication?: ICodeableReference[];

  /**
   * Instructions for follow up
   */
  followUp?: ICodeableConcept[];

  /**
   * Additional information about the procedure
   */
  note?: IAnnotation[];

  /**
   * Manipulated, implanted, or removed device
   */
  focalDevice?: IProcedureFocalDevice[];

  /**
   * Items used during procedure
   */
  used?: ICodeableReference[];

  /**
   * Extra information relevant to the procedure
   */
  supportingInfo?: IReference<'Resource'>[];

}
