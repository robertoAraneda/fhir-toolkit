import type { IBackboneElement } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';

/**
 * ChargeItemDefinitionApplicability Interface
 * 
 * Whether or not the billing code is applicable
 * 
 *
 * @see https://hl7.org/fhir/R5/chargeitemdefinitionapplicability.html
 */
export interface IChargeItemDefinitionApplicability extends IBackboneElement {
  /**
   * Boolean-valued expression
   */
  condition?: IExpression;

  /**
   * When the charge item definition is expected to be used
   */
  effectivePeriod?: IPeriod;

  /**
   * Reference to / quotation of the external source of the group of properties
   */
  relatedArtifact?: IRelatedArtifact;

}
