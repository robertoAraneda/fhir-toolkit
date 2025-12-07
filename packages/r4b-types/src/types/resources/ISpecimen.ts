import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISpecimenCollection } from '../backbones/ISpecimenCollection.js';
import type { ISpecimenContainer } from '../backbones/ISpecimenContainer.js';
import type { ISpecimenProcessing } from '../backbones/ISpecimenProcessing.js';
import type { SpecimenStatusType } from '../../valuesets/index.js';

/**
 * Specimen Interface
 * 
 * A sample to be used for analysis.
 * 
 *
 * @see https://hl7.org/fhir/R4/specimen.html
 */
export interface ISpecimen extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Specimen';

  /**
   * External Identifier
   */
  identifier?: IIdentifier[];

  /**
   * Identifier assigned by the lab
   */
  accessionIdentifier?: IIdentifier;

  /**
   * available | unavailable | unsatisfactory | entered-in-error
   */
  status?: SpecimenStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Kind of material that forms the specimen
   */
  type?: ICodeableConcept;

  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Substance' | 'Location'>;

  /**
   * The time when specimen was received for processing
   */
  receivedTime?: string;
  /**
   * Extension for receivedTime
   */
  _receivedTime?: IElement;

  /**
   * Specimen from which this specimen originated
   */
  parent?: IReference<'Specimen'>[];

  /**
   * Why the specimen was collected
   */
  request?: IReference<'ServiceRequest'>[];

  /**
   * Collection details
   */
  collection?: ISpecimenCollection;

  /**
   * Processing and processing step details
   */
  processing?: ISpecimenProcessing[];

  /**
   * Direct container of specimen (tube/slide, etc.)
   */
  container?: ISpecimenContainer[];

  /**
   * State of the specimen
   */
  condition?: ICodeableConcept[];

  /**
   * Comments
   */
  note?: IAnnotation[];

}
