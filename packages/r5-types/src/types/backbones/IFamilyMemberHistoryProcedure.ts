import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * FamilyMemberHistoryProcedure Interface
 * 
 * Procedures that the related person had
 * 
 *
 * @see https://hl7.org/fhir/R4/familymemberhistoryprocedure.html
 */
export interface IFamilyMemberHistoryProcedure extends IBackboneElement {
  /**
   * Procedures performed on the related person
   */
  code: ICodeableConcept;

  /**
   * What happened following the procedure
   */
  outcome?: ICodeableConcept;

  /**
   * Whether the procedure contributed to the cause of death
   */
  contributedToDeath?: boolean;
  /**
   * Extension for contributedToDeath
   */
  _contributedToDeath?: IElement;

  /**
   * When the procedure was performed
   */
  performedAge?: IAge;

  /**
   * When the procedure was performed
   */
  performedRange?: IRange;

  /**
   * When the procedure was performed
   */
  performedPeriod?: IPeriod;

  /**
   * When the procedure was performed
   */
  performedString?: string;
  /**
   * Extension for performedString
   */
  _performedString?: IElement;

  /**
   * When the procedure was performed
   */
  performedDateTime?: string;
  /**
   * Extension for performedDateTime
   */
  _performedDateTime?: IElement;

  /**
   * Extra information about the procedure
   */
  note?: IAnnotation[];

}
