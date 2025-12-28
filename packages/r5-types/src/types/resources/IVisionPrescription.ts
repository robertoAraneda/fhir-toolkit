import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IVisionPrescriptionLensSpecification } from '../backbones/IVisionPrescriptionLensSpecification.js';
import type { FinancialResourceStatusType } from '../../valuesets/index.js';

/**
 * VisionPrescription Interface
 * 
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 * 
 *
 * @see https://hl7.org/fhir/R5/visionprescription.html
 */
export interface IVisionPrescription extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'VisionPrescription';

  /**
   * Business Identifier for vision prescription
   */
  identifier?: IIdentifier[];

  /**
   * active | cancelled | draft | entered-in-error
   */
  status: FinancialResourceStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Response creation date
   */
  created: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Who prescription is for
   */
  patient: IReference<'Patient'>;

  /**
   * Created during encounter / admission / stay
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When prescription was authorized
   */
  dateWritten: string;
  /**
   * Extension for dateWritten
   */
  _dateWritten?: IElement;

  /**
   * Who authorized the vision prescription
   */
  prescriber: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Vision lens authorization
   */
  lensSpecification: IVisionPrescriptionLensSpecification[];

}
