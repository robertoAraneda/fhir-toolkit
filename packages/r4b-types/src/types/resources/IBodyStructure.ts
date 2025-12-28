import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * BodyStructure Interface
 * 
 * Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 * 
 *
 * @see https://hl7.org/fhir/R4B/bodystructure.html
 */
export interface IBodyStructure extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'BodyStructure';

  /**
   * Bodystructure identifier
   */
  identifier?: IIdentifier[];

  /**
   * Whether this record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * Kind of Structure
   */
  morphology?: ICodeableConcept;

  /**
   * Body site
   */
  location?: ICodeableConcept;

  /**
   * Body site modifier
   */
  locationQualifier?: ICodeableConcept[];

  /**
   * Text description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Attached images
   */
  image?: IAttachment[];

  /**
   * Who this is about
   */
  patient: IReference<'Patient'>;

}
