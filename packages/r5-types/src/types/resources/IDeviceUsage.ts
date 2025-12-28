import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IDeviceUsageAdherence } from '../backbones/IDeviceUsageAdherence.js';
import type { DeviceUsageStatusType } from '../../valuesets/index.js';

/**
 * DeviceUsage Interface
 * 
 * A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.
 * 
 *
 * @see https://hl7.org/fhir/R5/deviceusage.html
 */
export interface IDeviceUsage extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'DeviceUsage';

  /**
   * External identifier for this record
   */
  identifier?: IIdentifier[];

  /**
   * Fulfills plan, proposal or order
   */
  basedOn?: IReference<'ServiceRequest'>[];

  /**
   * active | completed | not-done | entered-in-error +
   */
  status: DeviceUsageStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The category of the statement - classifying how the statement is made
   */
  category?: ICodeableConcept[];

  /**
   * Patient using device
   */
  patient: IReference<'Patient'>;

  /**
   * Supporting information
   */
  derivedFrom?: IReference<'ServiceRequest' | 'Procedure' | 'Claim' | 'Observation' | 'QuestionnaireResponse' | 'DocumentReference'>[];

  /**
   * The encounter or episode of care that establishes the context for this device use statement
   */
  context?: IReference<'Encounter' | 'EpisodeOfCare'>;

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
   * When the statement was made (and recorded)
   */
  dateAsserted?: string;
  /**
   * Extension for dateAsserted
   */
  _dateAsserted?: IElement;

  /**
   * The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement
   */
  usageStatus?: ICodeableConcept<DeviceUsageStatusType>;

  /**
   * The reason for asserting the usage status - for example forgot, lost, stolen, broken
   */
  usageReason?: ICodeableConcept[];

  /**
   * How device is being used
   */
  adherence?: IDeviceUsageAdherence;

  /**
   * Who made the statement
   */
  informationSource?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Organization'>;

  /**
   * Code or Reference to device used
   */
  device: ICodeableReference;

  /**
   * Why device was used
   */
  reason?: ICodeableReference[];

  /**
   * Target body site
   */
  bodySite?: ICodeableReference;

  /**
   * Addition details (comments, instructions)
   */
  note?: IAnnotation[];

}
