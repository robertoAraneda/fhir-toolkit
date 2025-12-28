import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ISpecimenCollection } from '../backbones/ISpecimenCollection.js';
import type { ISpecimenContainer } from '../backbones/ISpecimenContainer.js';
import type { ISpecimenFeature } from '../backbones/ISpecimenFeature.js';
import type { ISpecimenProcessing } from '../backbones/ISpecimenProcessing.js';
import type { SpecimenCombinedType, SpecimenStatusType } from '../../valuesets/index.js';

/**
 * Specimen Interface
 * 
 * A sample to be used for analysis.
 * 
 *
 * @see https://hl7.org/fhir/R5/specimen.html
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
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance, a biologically-derived product, or a device
   */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'BiologicallyDerivedProduct' | 'Substance' | 'Location'>;

  /**
   * The time when specimen is received by the testing laboratory
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
   * grouped | pooled
   */
  combined?: SpecimenCombinedType;
  /**
   * Extension for combined
   */
  _combined?: IElement;

  /**
   * The role the specimen serves
   */
  role?: ICodeableConcept[];

  /**
   * The physical feature of a specimen
   */
  feature?: ISpecimenFeature[];

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
