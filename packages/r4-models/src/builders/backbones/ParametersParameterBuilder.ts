import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ParametersParameter } from '../../models/backbones/ParametersParameter.js';
import type {
  IAddress,
  IAge,
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IContactPoint,
  IContributor,
  ICount,
  IDataRequirement,
  IDistance,
  IDosage,
  IDuration,
  IExpression,
  IHumanName,
  IIdentifier,
  IMeta,
  IMoney,
  IParameterDefinition,
  IParametersParameter,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IRelatedArtifact,
  IResource,
  ISampledData,
  ISignature,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4-types';

/**
 * ParametersParameterBuilder - Fluent builder for ParametersParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const parametersParameter = new ParametersParameterBuilder()
 *   .setName(value)
 *   .addPart({ ... })
 *   .build();
 */
export class ParametersParameterBuilder extends BackboneElementBuilder<ParametersParameter, IParametersParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name from the definition
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set valuePositiveInt
   * If parameter is a data type
   */
  setValuePositiveInt(valuePositiveInt: number): this {
    this.data.valuePositiveInt = valuePositiveInt;
    return this;
  }

  /**
   * Set valueUnsignedInt
   * If parameter is a data type
   */
  setValueUnsignedInt(valueUnsignedInt: number): this {
    this.data.valueUnsignedInt = valueUnsignedInt;
    return this;
  }

  /**
   * Set valueUuid
   * If parameter is a data type
   */
  setValueUuid(valueUuid: string): this {
    this.data.valueUuid = valueUuid;
    return this;
  }

  /**
   * Set resource
   * If parameter is a whole resource
   */
  setResource(resource: IResource): this {
    this.data.resource = resource;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Markdown' | 'Oid' | 'String' | 'Time' | 'Uri' | 'Url' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'Contributor' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Dosage' | 'Meta'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Base64Binary', value)
   */
  setValue<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Markdown' | 'Oid' | 'String' | 'Time' | 'Uri' | 'Url' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'Contributor' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Dosage' | 'Meta'>(
    type: T,
    value: T extends 'Boolean' ? boolean : T extends 'Integer' ? number : string
  ): this {
    const key = `value${type}` as keyof IParametersParameter;
    const otherKeys: (keyof IParametersParameter)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof IParametersParameter);
      otherKeys.push('_valueBase64Binary' as keyof IParametersParameter);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IParametersParameter);
      otherKeys.push('_valueBoolean' as keyof IParametersParameter);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof IParametersParameter);
      otherKeys.push('_valueCanonical' as keyof IParametersParameter);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IParametersParameter);
      otherKeys.push('_valueCode' as keyof IParametersParameter);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IParametersParameter);
      otherKeys.push('_valueDate' as keyof IParametersParameter);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IParametersParameter);
      otherKeys.push('_valueDateTime' as keyof IParametersParameter);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IParametersParameter);
      otherKeys.push('_valueDecimal' as keyof IParametersParameter);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof IParametersParameter);
      otherKeys.push('_valueId' as keyof IParametersParameter);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof IParametersParameter);
      otherKeys.push('_valueInstant' as keyof IParametersParameter);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IParametersParameter);
      otherKeys.push('_valueInteger' as keyof IParametersParameter);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof IParametersParameter);
      otherKeys.push('_valueMarkdown' as keyof IParametersParameter);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof IParametersParameter);
      otherKeys.push('_valueOid' as keyof IParametersParameter);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IParametersParameter);
      otherKeys.push('_valueString' as keyof IParametersParameter);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IParametersParameter);
      otherKeys.push('_valueTime' as keyof IParametersParameter);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IParametersParameter);
      otherKeys.push('_valueUri' as keyof IParametersParameter);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof IParametersParameter);
      otherKeys.push('_valueUrl' as keyof IParametersParameter);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof IParametersParameter);
      otherKeys.push('_valueAddress' as keyof IParametersParameter);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof IParametersParameter);
      otherKeys.push('_valueAge' as keyof IParametersParameter);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof IParametersParameter);
      otherKeys.push('_valueAnnotation' as keyof IParametersParameter);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IParametersParameter);
      otherKeys.push('_valueAttachment' as keyof IParametersParameter);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IParametersParameter);
      otherKeys.push('_valueCodeableConcept' as keyof IParametersParameter);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IParametersParameter);
      otherKeys.push('_valueCoding' as keyof IParametersParameter);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof IParametersParameter);
      otherKeys.push('_valueContactPoint' as keyof IParametersParameter);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof IParametersParameter);
      otherKeys.push('_valueCount' as keyof IParametersParameter);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof IParametersParameter);
      otherKeys.push('_valueDistance' as keyof IParametersParameter);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof IParametersParameter);
      otherKeys.push('_valueDuration' as keyof IParametersParameter);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof IParametersParameter);
      otherKeys.push('_valueHumanName' as keyof IParametersParameter);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof IParametersParameter);
      otherKeys.push('_valueIdentifier' as keyof IParametersParameter);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof IParametersParameter);
      otherKeys.push('_valueMoney' as keyof IParametersParameter);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IParametersParameter);
      otherKeys.push('_valuePeriod' as keyof IParametersParameter);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IParametersParameter);
      otherKeys.push('_valueQuantity' as keyof IParametersParameter);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IParametersParameter);
      otherKeys.push('_valueRange' as keyof IParametersParameter);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IParametersParameter);
      otherKeys.push('_valueRatio' as keyof IParametersParameter);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IParametersParameter);
      otherKeys.push('_valueReference' as keyof IParametersParameter);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof IParametersParameter);
      otherKeys.push('_valueSampledData' as keyof IParametersParameter);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof IParametersParameter);
      otherKeys.push('_valueSignature' as keyof IParametersParameter);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof IParametersParameter);
      otherKeys.push('_valueTiming' as keyof IParametersParameter);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof IParametersParameter);
      otherKeys.push('_valueContactDetail' as keyof IParametersParameter);
    }
    if (type !== 'Contributor') {
      otherKeys.push('valueContributor' as keyof IParametersParameter);
      otherKeys.push('_valueContributor' as keyof IParametersParameter);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof IParametersParameter);
      otherKeys.push('_valueDataRequirement' as keyof IParametersParameter);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof IParametersParameter);
      otherKeys.push('_valueExpression' as keyof IParametersParameter);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof IParametersParameter);
      otherKeys.push('_valueParameterDefinition' as keyof IParametersParameter);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof IParametersParameter);
      otherKeys.push('_valueRelatedArtifact' as keyof IParametersParameter);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof IParametersParameter);
      otherKeys.push('_valueTriggerDefinition' as keyof IParametersParameter);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof IParametersParameter);
      otherKeys.push('_valueUsageContext' as keyof IParametersParameter);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof IParametersParameter);
      otherKeys.push('_valueDosage' as keyof IParametersParameter);
    }
    if (type !== 'Meta') {
      otherKeys.push('valueMeta' as keyof IParametersParameter);
      otherKeys.push('_valueMeta' as keyof IParametersParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add part
   * Named part of a multi-part parameter
   */
  addPart(part: IParametersParameter): this {
    return this.addToArray('part', part);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ParametersParameter instance
   */
  build(): ParametersParameter {
    return new ParametersParameter(this.data);
  }

  /**
   * Build and validate the ParametersParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ParametersParameter> {
    const parametersParameter = this.build();
    await parametersParameter.validateOrThrow();
    return parametersParameter;
  }
}
