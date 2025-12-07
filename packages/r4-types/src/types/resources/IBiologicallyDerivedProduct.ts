import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IBiologicallyDerivedProductCollection } from '../backbones/IBiologicallyDerivedProductCollection.js';
import type { IBiologicallyDerivedProductManipulation } from '../backbones/IBiologicallyDerivedProductManipulation.js';
import type { IBiologicallyDerivedProductProcessing } from '../backbones/IBiologicallyDerivedProductProcessing.js';
import type { IBiologicallyDerivedProductStorage } from '../backbones/IBiologicallyDerivedProductStorage.js';
import type { BiologicallyDerivedProductCategoryType, BiologicallyDerivedProductStatusType } from '../../valuesets/index.js';

/**
 * BiologicallyDerivedProduct Interface
 * 
 * A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.
 * 
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproduct.html
 */
export interface IBiologicallyDerivedProduct extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'BiologicallyDerivedProduct';

  /**
   * External ids for this item
   */
  identifier?: IIdentifier[];

  /**
   * organ | tissue | fluid | cells | biologicalAgent
   */
  productCategory?: BiologicallyDerivedProductCategoryType;
  /**
   * Extension for productCategory
   */
  _productCategory?: IElement;

  /**
   * What this biologically derived product is
   */
  productCode?: ICodeableConcept;

  /**
   * available | unavailable
   */
  status?: BiologicallyDerivedProductStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Procedure request
   */
  request?: IReference<'ServiceRequest'>[];

  /**
   * The amount of this biologically derived product
   */
  quantity?: number;
  /**
   * Extension for quantity
   */
  _quantity?: IElement;

  /**
   * BiologicallyDerivedProduct parent
   */
  parent?: IReference<'BiologicallyDerivedProduct'>[];

  /**
   * How this product was collected
   */
  collection?: IBiologicallyDerivedProductCollection;

  /**
   * Any processing of the product during collection
   */
  processing?: IBiologicallyDerivedProductProcessing[];

  /**
   * Any manipulation of product post-collection
   */
  manipulation?: IBiologicallyDerivedProductManipulation;

  /**
   * Product storage
   */
  storage?: IBiologicallyDerivedProductStorage[];

}
