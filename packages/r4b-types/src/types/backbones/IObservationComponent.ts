import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { ISampledData } from '../datatypes/ISampledData.js';
import type { IObservationReferenceRange } from './IObservationReferenceRange.js';

/**
 * ObservationComponent Interface
 * 
 * Component results
 * 
 *
 * @see https://hl7.org/fhir/R4B/observationcomponent.html
 */
export interface IObservationComponent extends IBackboneElement {
  /**
   * Type of component observation (code / type)
   */
  code: ICodeableConcept;

  /**
   * Actual component result
   */
  valueQuantity?: IQuantity;

  /**
   * Actual component result
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Actual component result
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Actual component result
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Actual component result
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Actual component result
   */
  valueRange?: IRange;

  /**
   * Actual component result
   */
  valueRatio?: IRatio;

  /**
   * Actual component result
   */
  valueSampledData?: ISampledData;

  /**
   * Actual component result
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Actual component result
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Actual component result
   */
  valuePeriod?: IPeriod;

  /**
   * Why the component result is missing
   */
  dataAbsentReason?: ICodeableConcept;

  /**
   * High, low, normal, etc.
   */
  interpretation?: ICodeableConcept[];

  /**
   * Provides guide for interpretation of component result
   */
  referenceRange?: IObservationReferenceRange[];

}
