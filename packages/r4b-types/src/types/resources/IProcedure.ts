import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IProcedureFocalDevice } from '../backbones/IProcedureFocalDevice.js';
import type { IProcedurePerformer } from '../backbones/IProcedurePerformer.js';
import type { EventStatusType } from '../../valuesets/index.js';

/**
 * Procedure Interface
 * 
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 * 
 *
 * @see https://hl7.org/fhir/R4/procedure.html
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
  category?: ICodeableConcept;

  /**
   * Identification of the procedure
   */
  code?: ICodeableConcept;

  /**
   * Who the procedure was performed on
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Encounter created as part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the procedure was performed
   */
  performedDateTime?: string;
  /**
   * Extension for performedDateTime
   */
  _performedDateTime?: IElement;

  /**
   * When the procedure was performed
   */
  performedPeriod?: IPeriod;

  /**
   * When the procedure was performed
   */
  performedString?: string;
  /**
   * Extension for performedString
   */
  _performedString?: IElement;

  /**
   * When the procedure was performed
   */
  performedAge?: IAge;

  /**
   * When the procedure was performed
   */
  performedRange?: IRange;

  /**
   * Who recorded the procedure
   */
  recorder?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Person who asserts this procedure
   */
  asserter?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * The people who performed the procedure
   */
  performer?: IProcedurePerformer[];

  /**
   * Where the procedure happened
   */
  location?: IReference<'Location'>;

  /**
   * Coded reason procedure performed
   */
  reasonCode?: ICodeableConcept[];

  /**
   * The justification that the procedure was performed
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'Procedure' | 'DiagnosticReport' | 'DocumentReference'>[];

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
  complication?: ICodeableConcept[];

  /**
   * A condition that is a result of the procedure
   */
  complicationDetail?: IReference<'Condition'>[];

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
  usedReference?: IReference<'Device' | 'Medication' | 'Substance'>[];

  /**
   * Coded items used during the procedure
   */
  usedCode?: ICodeableConcept[];

}
