import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IImagingSelectionInstance } from '../backbones/IImagingSelectionInstance.js';
import type { IImagingSelectionPerformer } from '../backbones/IImagingSelectionPerformer.js';
import type { ImagingSelectionStatusType } from '../../valuesets/index.js';

/**
 * ImagingSelection Interface
 * 
 * A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 * 
 *
 * @see https://hl7.org/fhir/R5/imagingselection.html
 */
export interface IImagingSelection extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ImagingSelection';

  /**
   * Business Identifier for Imaging Selection
   */
  identifier?: IIdentifier[];

  /**
   * available | entered-in-error | unknown
   */
  status: ImagingSelectionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Subject of the selected instances
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'Specimen'>;

  /**
   * Date / Time when this imaging selection was created
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * Selector of the instances (human or machine)
   */
  performer?: IImagingSelectionPerformer[];

  /**
   * Associated request
   */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'Appointment' | 'AppointmentResponse' | 'Task'>[];

  /**
   * Classifies the imaging selection
   */
  category?: ICodeableConcept[];

  /**
   * Imaging Selection purpose text or code
   */
  code: ICodeableConcept;

  /**
   * DICOM Study Instance UID
   */
  studyUid?: string;
  /**
   * Extension for studyUid
   */
  _studyUid?: IElement;

  /**
   * The imaging study from which the imaging selection is derived
   */
  derivedFrom?: IReference<'ImagingStudy' | 'DocumentReference'>[];

  /**
   * The network service providing retrieval for the images referenced in the imaging selection
   */
  endpoint?: IReference<'Endpoint'>[];

  /**
   * DICOM Series Instance UID
   */
  seriesUid?: string;
  /**
   * Extension for seriesUid
   */
  _seriesUid?: IElement;

  /**
   * DICOM Series Number
   */
  seriesNumber?: number;
  /**
   * Extension for seriesNumber
   */
  _seriesNumber?: IElement;

  /**
   * The Frame of Reference UID for the selected images
   */
  frameOfReferenceUid?: string;
  /**
   * Extension for frameOfReferenceUid
   */
  _frameOfReferenceUid?: IElement;

  /**
   * Body part examined
   */
  bodySite?: ICodeableReference;

  /**
   * Related resource that is the focus for the imaging selection
   */
  focus?: IReference<'ImagingSelection'>[];

  /**
   * The selected instances
   */
  instance?: IImagingSelectionInstance[];

}
