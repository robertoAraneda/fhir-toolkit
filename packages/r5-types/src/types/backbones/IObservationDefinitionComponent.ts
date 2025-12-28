import type { IBackboneElement, ICodeableConcept, ICoding, IElement } from '../../base/index.js';
import type { IObservationDefinitionQualifiedValue } from './IObservationDefinitionQualifiedValue.js';
import type { ObservationDataTypeType } from '../../valuesets/index.js';

/**
 * ObservationDefinitionComponent Interface
 * 
 * Component results
 * 
 *
 * @see https://hl7.org/fhir/R5/observationdefinitioncomponent.html
 */
export interface IObservationDefinitionComponent extends IBackboneElement {
  /**
   * Type of observation
   */
  code: ICodeableConcept;

  /**
   * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   */
  permittedDataType?: ObservationDataTypeType[];
  /**
   * Extension for permittedDataType
   */
  _permittedDataType?: IElement;

  /**
   * Unit for quantitative results
   */
  permittedUnit?: ICoding[];

  /**
   * Set of qualified values for observation results
   */
  qualifiedValue?: IObservationDefinitionQualifiedValue[];

}
