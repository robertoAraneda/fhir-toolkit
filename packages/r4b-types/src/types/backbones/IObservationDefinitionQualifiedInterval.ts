import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRange } from '../datatypes/IRange.js';
import type { AdministrativeGenderType, ObservationRangeCategoryType } from '../../valuesets/index.js';

/**
 * ObservationDefinitionQualifiedInterval Interface
 * 
 * Qualified range for continuous and ordinal observation results
 * 
 *
 * @see https://hl7.org/fhir/R4B/observationdefinitionqualifiedinterval.html
 */
export interface IObservationDefinitionQualifiedInterval extends IBackboneElement {
  /**
   * reference | critical | absolute
   */
  category?: ObservationRangeCategoryType;
  /**
   * Extension for category
   */
  _category?: IElement;

  /**
   * The interval itself, for continuous or ordinal observations
   */
  range?: IRange;

  /**
   * Range context qualifier
   */
  context?: ICodeableConcept;

  /**
   * Targetted population of the range
   */
  appliesTo?: ICodeableConcept[];

  /**
   * male | female | other | unknown
   */
  gender?: AdministrativeGenderType;
  /**
   * Extension for gender
   */
  _gender?: IElement;

  /**
   * Applicable age range, if relevant
   */
  age?: IRange;

  /**
   * Applicable gestational age range, if relevant
   */
  gestationalAge?: IRange;

  /**
   * Condition associated with the reference range
   */
  condition?: string;
  /**
   * Extension for condition
   */
  _condition?: IElement;

}
