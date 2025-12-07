import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * FamilyMemberHistoryCondition Interface
 * 
 * Condition that the related person had
 * 
 *
 * @see https://hl7.org/fhir/R4/familymemberhistorycondition.html
 */
export interface IFamilyMemberHistoryCondition extends IBackboneElement {
  /**
   * Condition suffered by relation
   */
  code: ICodeableConcept;

  /**
   * deceased | permanent disability | etc.
   */
  outcome?: ICodeableConcept;

  /**
   * Whether the condition contributed to the cause of death
   */
  contributedToDeath?: boolean;
  /**
   * Extension for contributedToDeath
   */
  _contributedToDeath?: IElement;

  /**
   * When condition first manifested
   */
  onsetAge?: IAge;

  /**
   * When condition first manifested
   */
  onsetRange?: IRange;

  /**
   * When condition first manifested
   */
  onsetPeriod?: IPeriod;

  /**
   * When condition first manifested
   */
  onsetString?: string;
  /**
   * Extension for onsetString
   */
  _onsetString?: IElement;

  /**
   * Extra information about condition
   */
  note?: IAnnotation[];

}
