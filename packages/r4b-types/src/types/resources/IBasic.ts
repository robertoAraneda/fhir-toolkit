import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * Basic Interface
 * 
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 * 
 *
 * @see https://hl7.org/fhir/R4B/basic.html
 */
export interface IBasic extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Basic';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * Kind of Resource
   */
  code: ICodeableConcept;

  /**
   * Identifies the focus of this resource
   */
  subject?: IReference<'Resource'>;

  /**
   * When created
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Who created
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Organization'>;

}
