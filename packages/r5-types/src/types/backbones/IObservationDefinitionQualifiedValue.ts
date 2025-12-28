import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRange } from '../datatypes/IRange.js';
import type { AdministrativeGenderType, ObservationRangeCategoryType } from '../../valuesets/index.js';

/**
 * ObservationDefinitionQualifiedValue Interface
 * 
 * Set of qualified values for observation results
 * 
 *
 * @see https://hl7.org/fhir/R5/observationdefinitionqualifiedvalue.html
 */
export interface IObservationDefinitionQualifiedValue extends IBackboneElement {
  /**
   * Context qualifier for the set of qualified values
   */
  context?: ICodeableConcept;

  /**
   * Targetted population for the set of qualified values
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
   * Applicable age range for the set of qualified values
   */
  age?: IRange;

  /**
   * Applicable gestational age range for the set of qualified values
   */
  gestationalAge?: IRange;

  /**
   * Condition associated with the set of qualified values
   */
  condition?: string;
  /**
   * Extension for condition
   */
  _condition?: IElement;

  /**
   * reference | critical | absolute
   */
  rangeCategory?: ObservationRangeCategoryType;
  /**
   * Extension for rangeCategory
   */
  _rangeCategory?: IElement;

  /**
   * The range for continuous or ordinal observations
   */
  range?: IRange;

  /**
   * Value set of valid coded values as part of this set of qualified values
   */
  validCodedValueSet?: string;
  /**
   * Extension for validCodedValueSet
   */
  _validCodedValueSet?: IElement;

  /**
   * Value set of normal coded values as part of this set of qualified values
   */
  normalCodedValueSet?: string;
  /**
   * Extension for normalCodedValueSet
   */
  _normalCodedValueSet?: IElement;

  /**
   * Value set of abnormal coded values as part of this set of qualified values
   */
  abnormalCodedValueSet?: string;
  /**
   * Extension for abnormalCodedValueSet
   */
  _abnormalCodedValueSet?: IElement;

  /**
   * Value set of critical coded values as part of this set of qualified values
   */
  criticalCodedValueSet?: string;
  /**
   * Extension for criticalCodedValueSet
   */
  _criticalCodedValueSet?: IElement;

}
