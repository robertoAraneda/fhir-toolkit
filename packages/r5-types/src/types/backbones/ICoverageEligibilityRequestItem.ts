import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ICoverageEligibilityRequestItemDiagnosis } from './ICoverageEligibilityRequestItemDiagnosis.js';

/**
 * CoverageEligibilityRequestItem Interface
 * 
 * Item to be evaluated for eligibiity
 * 
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequestitem.html
 */
export interface ICoverageEligibilityRequestItem extends IBackboneElement {
  /**
   * Applicable exception or supporting information
   */
  supportingInfoSequence?: number[];
  /**
   * Extension for supportingInfoSequence
   */
  _supportingInfoSequence?: IElement;

  /**
   * Benefit classification
   */
  category?: ICodeableConcept;

  /**
   * Billing, service, product, or drug code
   */
  productOrService?: ICodeableConcept;

  /**
   * Product or service billing modifiers
   */
  modifier?: ICodeableConcept[];

  /**
   * Perfoming practitioner
   */
  provider?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Count of products or services
   */
  quantity?: IQuantity;

  /**
   * Fee, charge or cost per item
   */
  unitPrice?: IMoney;

  /**
   * Servicing facility
   */
  facility?: IReference<'Location' | 'Organization'>;

  /**
   * Applicable diagnosis
   */
  diagnosis?: ICoverageEligibilityRequestItemDiagnosis[];

  /**
   * Product or service details
   */
  detail?: IReference<'Resource'>[];

}
