import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { EventStatusType } from '../../valuesets/index.js';

/**
 * Media Interface
 * 
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 * 
 *
 * @see https://hl7.org/fhir/R4B/media.html
 */
export interface IMedia extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Media';

  /**
   * Identifier(s) for the image
   */
  identifier?: IIdentifier[];

  /**
   * Procedure that caused this media to be created
   */
  basedOn?: IReference<'ServiceRequest' | 'CarePlan'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'Resource'>[];

  /**
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  status: EventStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Classification of media as image, video, or audio
   */
  type?: ICodeableConcept;

  /**
   * The type of acquisition equipment/process
   */
  modality?: ICodeableConcept;

  /**
   * Imaging view, e.g. Lateral or Antero-posterior
   */
  view?: ICodeableConcept;

  /**
   * Who/What this Media is a record of
   */
  subject?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Group' | 'Device' | 'Specimen' | 'Location'>;

  /**
   * Encounter associated with media
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When Media was collected
   */
  createdDateTime?: string;
  /**
   * Extension for createdDateTime
   */
  _createdDateTime?: IElement;

  /**
   * When Media was collected
   */
  createdPeriod?: IPeriod;

  /**
   * Date/Time this version was made available
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * The person who generated the image
   */
  operator?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * Why was event performed?
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Observed body part
   */
  bodySite?: ICodeableConcept;

  /**
   * Name of the device/manufacturer
   */
  deviceName?: string;
  /**
   * Extension for deviceName
   */
  _deviceName?: IElement;

  /**
   * Observing Device
   */
  device?: IReference<'Device' | 'DeviceMetric' | 'Device'>;

  /**
   * Height of the image in pixels (photo/video)
   */
  height?: number;
  /**
   * Extension for height
   */
  _height?: IElement;

  /**
   * Width of the image in pixels (photo/video)
   */
  width?: number;
  /**
   * Extension for width
   */
  _width?: IElement;

  /**
   * Number of frames if > 1 (photo)
   */
  frames?: number;
  /**
   * Extension for frames
   */
  _frames?: IElement;

  /**
   * Length in seconds (audio / video)
   */
  duration?: number;
  /**
   * Extension for duration
   */
  _duration?: IElement;

  /**
   * Actual Media - reference or data
   */
  content: IAttachment;

  /**
   * Comments made about the media
   */
  note?: IAnnotation[];

}
