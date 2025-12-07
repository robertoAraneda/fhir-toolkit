import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * BiologicallyDerivedProductCollection Interface
 * 
 * How this product was collected
 * 
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproductcollection.html
 */
export interface IBiologicallyDerivedProductCollection extends IBackboneElement {
  /**
   * Individual performing collection
   */
  collector?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * The patient who underwent the medical procedure to collect the product or the organization that facilitated the collection
   */
  source?: IReference<'Patient' | 'Organization'>;

  /**
   * Time of product collection
   */
  collectedDateTime?: string;
  /**
   * Extension for collectedDateTime
   */
  _collectedDateTime?: IElement;

  /**
   * Time of product collection
   */
  collectedPeriod?: IPeriod;

}
