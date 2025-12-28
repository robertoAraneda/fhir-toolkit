import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IBiologicallyDerivedProductCollection } from '../backbones/IBiologicallyDerivedProductCollection.js';
import type { IBiologicallyDerivedProductProperty } from '../backbones/IBiologicallyDerivedProductProperty.js';

/**
 * BiologicallyDerivedProduct Interface
 * 
 * This resource reflects an instance of a biologically derived product. A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.
 * 
 *
 * @see https://hl7.org/fhir/R5/biologicallyderivedproduct.html
 */
export interface IBiologicallyDerivedProduct extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'BiologicallyDerivedProduct';

  /**
   * organ | tissue | fluid | cells | biologicalAgent
   */
  productCategory?: ICoding;

  /**
   * A code that identifies the kind of this biologically derived product
   */
  productCode?: ICodeableConcept;

  /**
   * The parent biologically-derived product
   */
  parent?: IReference<'BiologicallyDerivedProduct'>[];

  /**
   * Request to obtain and/or infuse this product
   */
  request?: IReference<'ServiceRequest'>[];

  /**
   * Instance identifier
   */
  identifier?: IIdentifier[];

  /**
   * An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled
   */
  biologicalSourceEvent?: IIdentifier;

  /**
   * Processing facilities responsible for the labeling and distribution of this biologically derived product
   */
  processingFacility?: IReference<'Organization'>[];

  /**
   * A unique identifier for an aliquot of a product
   */
  division?: string;
  /**
   * Extension for division
   */
  _division?: IElement;

  /**
   * available | unavailable
   */
  productStatus?: ICoding;

  /**
   * Date, and where relevant time, of expiration
   */
  expirationDate?: string;
  /**
   * Extension for expirationDate
   */
  _expirationDate?: IElement;

  /**
   * How this product was collected
   */
  collection?: IBiologicallyDerivedProductCollection;

  /**
   * Product storage temperature requirements
   */
  storageTempRequirements?: IRange;

  /**
   * A property that is specific to this BiologicallyDerviedProduct instance
   */
  property?: IBiologicallyDerivedProductProperty[];

}
