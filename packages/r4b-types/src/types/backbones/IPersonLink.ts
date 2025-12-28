import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IdentityAssuranceLevelType } from '../../valuesets/index.js';

/**
 * PersonLink Interface
 * 
 * Link to a resource that concerns the same actual person
 * 
 *
 * @see https://hl7.org/fhir/R4B/personlink.html
 */
export interface IPersonLink extends IBackboneElement {
  /**
   * The resource to which this actual person is associated
   */
  target: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Person'>;

  /**
   * level1 | level2 | level3 | level4
   */
  assurance?: IdentityAssuranceLevelType;
  /**
   * Extension for assurance
   */
  _assurance?: IElement;

}
