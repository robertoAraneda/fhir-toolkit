import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IObservationDefinitionQualifiedInterval } from '../backbones/IObservationDefinitionQualifiedInterval.js';
import type { IObservationDefinitionQuantitativeDetails } from '../backbones/IObservationDefinitionQuantitativeDetails.js';
import type { ObservationDataTypeType } from '../../valuesets/index.js';

/**
 * ObservationDefinition Interface
 * 
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 * 
 *
 * @see https://hl7.org/fhir/R4B/observationdefinition.html
 */
export interface IObservationDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ObservationDefinition';

  /**
   * Category of observation
   */
  category?: ICodeableConcept[];

  /**
   * Type of observation (code / type)
   */
  code: ICodeableConcept;

  /**
   * Business identifier for this ObservationDefinition instance
   */
  identifier?: IIdentifier[];

  /**
   * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   */
  permittedDataType?: ObservationDataTypeType[];
  /**
   * Extension for permittedDataType
   */
  _permittedDataType?: IElement;

  /**
   * Multiple results allowed
   */
  multipleResultsAllowed?: boolean;
  /**
   * Extension for multipleResultsAllowed
   */
  _multipleResultsAllowed?: IElement;

  /**
   * Method used to produce the observation
   */
  method?: ICodeableConcept;

  /**
   * Preferred report name
   */
  preferredReportName?: string;
  /**
   * Extension for preferredReportName
   */
  _preferredReportName?: IElement;

  /**
   * Characteristics of quantitative results
   */
  quantitativeDetails?: IObservationDefinitionQuantitativeDetails;

  /**
   * Qualified range for continuous and ordinal observation results
   */
  qualifiedInterval?: IObservationDefinitionQualifiedInterval[];

  /**
   * Value set of valid coded values for the observations conforming to this ObservationDefinition
   */
  validCodedValueSet?: IReference<'ValueSet'>;

  /**
   * Value set of normal coded values for the observations conforming to this ObservationDefinition
   */
  normalCodedValueSet?: IReference<'ValueSet'>;

  /**
   * Value set of abnormal coded values for the observations conforming to this ObservationDefinition
   */
  abnormalCodedValueSet?: IReference<'ValueSet'>;

  /**
   * Value set of critical coded values for the observations conforming to this ObservationDefinition
   */
  criticalCodedValueSet?: IReference<'ValueSet'>;

}
