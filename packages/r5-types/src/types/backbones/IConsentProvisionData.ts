import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { ConsentDataMeaningType } from '../../valuesets/index.js';

/**
 * ConsentProvisionData Interface
 * 
 * Data controlled by this provision
 * 
 *
 * @see https://hl7.org/fhir/R5/consentprovisiondata.html
 */
export interface IConsentProvisionData extends IBackboneElement {
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
