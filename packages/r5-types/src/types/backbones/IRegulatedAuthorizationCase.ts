import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * RegulatedAuthorizationCase Interface
 * 
 * The case or regulatory procedure for granting or amending a regulated authorization. Note: This area is subject to ongoing review and the workgroup is seeking implementer feedback on its use (see link at bottom of page)
 * 
 *
 * @see https://hl7.org/fhir/R5/regulatedauthorizationcase.html
 */
export interface IRegulatedAuthorizationCase extends IBackboneElement {
  /**
   * Identifier by which this case can be referenced
   */
  identifier?: IIdentifier;

  /**
   * The defining type of case
   */
  type?: ICodeableConcept;

  /**
   * The status associated with the case
   */
  status?: ICodeableConcept;

  /**
   * Relevant date for this case
   */
  datePeriod?: IPeriod;

  /**
   * Relevant date for this case
   */
  dateDateTime?: string;
  /**
   * Extension for dateDateTime
   */
  _dateDateTime?: IElement;

  /**
   * Applications submitted to obtain a regulated authorization. Steps within the longer running case or procedure
   */
  application?: IRegulatedAuthorizationCase[];

}
