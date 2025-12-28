import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { DeviceUseStatementStatusType } from '../../valuesets/index.js';

/**
 * DeviceUseStatement Interface
 * 
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 * 
 *
 * @see https://hl7.org/fhir/R4B/deviceusestatement.html
 */
export interface IDeviceUseStatement extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceUseStatement';

  /**
   * External identifier for this record
   */
  identifier?: IIdentifier[];

  /**
   * Fulfills plan, proposal or order
   */
  basedOn?: IReference<'ServiceRequest'>[];

  /**
   * active | completed | entered-in-error +
   */
  status: DeviceUseStatementStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Patient using device
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Supporting information
   */
  derivedFrom?: IReference<'ServiceRequest' | 'Procedure' | 'Claim' | 'Observation' | 'QuestionnaireResponse' | 'DocumentReference'>[];

  /**
   * How often  the device was used
   */
  timingTiming?: ITiming;

  /**
   * How often  the device was used
   */
  timingPeriod?: IPeriod;

  /**
   * How often  the device was used
   */
  timingDateTime?: string;
  /**
   * Extension for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * When statement was recorded
   */
  recordedOn?: string;
  /**
   * Extension for recordedOn
   */
  _recordedOn?: IElement;

  /**
   * Who made the statement
   */
  source?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Reference to device used
   */
  device: IReference<'Device'>;

  /**
   * Why device was used
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why was DeviceUseStatement performed?
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference' | 'Media'>[];

  /**
   * Target body site
   */
  bodySite?: ICodeableConcept;

  /**
   * Addition details (comments, instructions)
   */
  note?: IAnnotation[];

}
