import type { ICodeableConcept, ICoding, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';
import type { IRange } from './IRange.js';

/**
 * UsageContext Interface
 * 
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 * 
 *
 * @see https://hl7.org/fhir/R4B/usagecontext.html
 */
export interface IUsageContext extends IElement {
  /**
   * Type of context being specified
   */
  code: ICoding;

  /**
   * Value that defines the context
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value that defines the context
   */
  valueQuantity?: IQuantity;

  /**
   * Value that defines the context
   */
  valueRange?: IRange;

  /**
   * Value that defines the context
   */
  valueReference?: IReference;

}
