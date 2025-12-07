import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ObservationDefinition } from '../../models/resources/ObservationDefinition.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IObservationDefinition,
  IObservationDefinitionQualifiedInterval,
  IObservationDefinitionQuantitativeDetails,
  IReference,
  ObservationDataTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * ObservationDefinitionBuilder - Fluent builder for ObservationDefinition resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationDefinition = new ObservationDefinitionBuilder()
 *   .setId('123')
 *   .setCode(value)
 *   .addCategory({ ... })
 *   .build();
 */
export class ObservationDefinitionBuilder extends DomainResourceBuilder<ObservationDefinition, IObservationDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of observation (code / type)
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set multipleResultsAllowed
   * Multiple results allowed
   */
  setMultipleResultsAllowed(multipleResultsAllowed: boolean): this {
    this.data.multipleResultsAllowed = multipleResultsAllowed;
    return this;
  }

  /**
   * Set method
   * Method used to produce the observation
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set preferredReportName
   * Preferred report name
   */
  setPreferredReportName(preferredReportName: string): this {
    this.data.preferredReportName = preferredReportName;
    return this;
  }

  /**
   * Set quantitativeDetails
   * Characteristics of quantitative results
   */
  setQuantitativeDetails(quantitativeDetails: IObservationDefinitionQuantitativeDetails): this {
    this.data.quantitativeDetails = quantitativeDetails;
    return this;
  }

  /**
   * Set validCodedValueSet
   * Value set of valid coded values for the observations conforming to this ObservationDefinition
   */
  setValidCodedValueSet(validCodedValueSet: IReference<'ValueSet'>): this {
    this.data.validCodedValueSet = validCodedValueSet;
    return this;
  }

  /**
   * Set normalCodedValueSet
   * Value set of normal coded values for the observations conforming to this ObservationDefinition
   */
  setNormalCodedValueSet(normalCodedValueSet: IReference<'ValueSet'>): this {
    this.data.normalCodedValueSet = normalCodedValueSet;
    return this;
  }

  /**
   * Set abnormalCodedValueSet
   * Value set of abnormal coded values for the observations conforming to this ObservationDefinition
   */
  setAbnormalCodedValueSet(abnormalCodedValueSet: IReference<'ValueSet'>): this {
    this.data.abnormalCodedValueSet = abnormalCodedValueSet;
    return this;
  }

  /**
   * Set criticalCodedValueSet
   * Value set of critical coded values for the observations conforming to this ObservationDefinition
   */
  setCriticalCodedValueSet(criticalCodedValueSet: IReference<'ValueSet'>): this {
    this.data.criticalCodedValueSet = criticalCodedValueSet;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add category
   * Category of observation
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add identifier
   * Business identifier for this ObservationDefinition instance
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add permittedDataType
   * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   */
  addPermittedDataType(permittedDataType: ObservationDataTypeType): this {
    return this.addToArray('permittedDataType', permittedDataType);
  }

  /**
   * Add qualifiedInterval
   * Qualified range for continuous and ordinal observation results
   */
  addQualifiedInterval(qualifiedInterval: IObservationDefinitionQualifiedInterval): this {
    return this.addToArray('qualifiedInterval', qualifiedInterval);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationDefinition instance
   */
  build(): ObservationDefinition {
    return new ObservationDefinition(this.data);
  }

  /**
   * Build and validate the ObservationDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationDefinition> {
    const observationDefinition = this.build();
    await observationDefinition.validateOrThrow();
    return observationDefinition;
  }
}
