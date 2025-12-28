import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ConsentDataMeaningType } from '../../valuesets/index.js';

/**
 * PermissionRuleDataResource Interface
 * 
 * Explicit FHIR Resource references
 * 
 *
 * @see https://hl7.org/fhir/R5/permissionruledataresource.html
 */
export interface IPermissionRuleDataResource extends IBackboneElement {
  /**
   * instance | related | dependents | authoredby
   */
  meaning: ConsentDataMeaningType;
  /**
   * Extension for meaning
   */
  _meaning?: IElement;

  /**
   * The actual data reference
   */
  reference: IReference<'Resource'>;

}
