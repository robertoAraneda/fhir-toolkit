import { ElementBuilder } from '../base/ElementBuilder.js';
import { Extension } from '../../models/datatypes/Extension.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  IAge,
  IAnnotation,
  IAttachment,
  ICodeableConcept,
  ICodeableReference,
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
  IExtension,
  IHumanName,
  IIdentifier,
  IMoney,
  IParameterDefinition,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IRatioRange,
  IReference,
  IRelatedArtifact,
  ISampledData,
  ISignature,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4b-types';

/**
 * ExtensionBuilder - Fluent builder for Extension datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const extension = new ExtensionBuilder()
 *   .setUrl(value)
 *   .build();
 */
export class ExtensionBuilder extends ElementBuilder<Extension, IExtension> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * identifies the meaning of the extension
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set valuePositiveInt
   * Value of extension
   */
  setValuePositiveInt(valuePositiveInt: number): this {
    this.data.valuePositiveInt = valuePositiveInt;
    return this;
  }

  /**
   * Set valueUnsignedInt
   * Value of extension
   */
  setValueUnsignedInt(valueUnsignedInt: number): this {
    this.data.valueUnsignedInt = valueUnsignedInt;
    return this;
  }

  /**
   * Set valueUuid
   * Value of extension
   */
  setValueUuid(valueUuid: string): this {
    this.data.valueUuid = valueUuid;
    return this;
  }

  /**
   * Set valueCodeableReference
   * Value of extension
   */
  setValueCodeableReference(valueCodeableReference: ICodeableReference): this {
    this.data.valueCodeableReference = valueCodeableReference;
    return this;
  }

  /**
   * Set valueRatioRange
   * Value of extension
   */
  setValueRatioRange(valueRatioRange: IRatioRange): this {
    this.data.valueRatioRange = valueRatioRange;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Markdown' | 'Oid' | 'String' | 'Time' | 'Uri' | 'Url' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'Contributor' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Dosage'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Base64Binary', value)
   */
  setValue<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Markdown' | 'Oid' | 'String' | 'Time' | 'Uri' | 'Url' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'Contributor' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Dosage'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IExtension;
    const otherKeys: (keyof IExtension)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof IExtension);
      otherKeys.push('_valueBase64Binary' as keyof IExtension);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IExtension);
      otherKeys.push('_valueBoolean' as keyof IExtension);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof IExtension);
      otherKeys.push('_valueCanonical' as keyof IExtension);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IExtension);
      otherKeys.push('_valueCode' as keyof IExtension);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IExtension);
      otherKeys.push('_valueDate' as keyof IExtension);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IExtension);
      otherKeys.push('_valueDateTime' as keyof IExtension);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IExtension);
      otherKeys.push('_valueDecimal' as keyof IExtension);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof IExtension);
      otherKeys.push('_valueId' as keyof IExtension);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof IExtension);
      otherKeys.push('_valueInstant' as keyof IExtension);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IExtension);
      otherKeys.push('_valueInteger' as keyof IExtension);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof IExtension);
      otherKeys.push('_valueMarkdown' as keyof IExtension);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof IExtension);
      otherKeys.push('_valueOid' as keyof IExtension);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IExtension);
      otherKeys.push('_valueString' as keyof IExtension);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IExtension);
      otherKeys.push('_valueTime' as keyof IExtension);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IExtension);
      otherKeys.push('_valueUri' as keyof IExtension);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof IExtension);
      otherKeys.push('_valueUrl' as keyof IExtension);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof IExtension);
      otherKeys.push('_valueAddress' as keyof IExtension);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof IExtension);
      otherKeys.push('_valueAge' as keyof IExtension);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof IExtension);
      otherKeys.push('_valueAnnotation' as keyof IExtension);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IExtension);
      otherKeys.push('_valueAttachment' as keyof IExtension);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IExtension);
      otherKeys.push('_valueCodeableConcept' as keyof IExtension);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IExtension);
      otherKeys.push('_valueCoding' as keyof IExtension);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof IExtension);
      otherKeys.push('_valueContactPoint' as keyof IExtension);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof IExtension);
      otherKeys.push('_valueCount' as keyof IExtension);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof IExtension);
      otherKeys.push('_valueDistance' as keyof IExtension);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof IExtension);
      otherKeys.push('_valueDuration' as keyof IExtension);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof IExtension);
      otherKeys.push('_valueHumanName' as keyof IExtension);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof IExtension);
      otherKeys.push('_valueIdentifier' as keyof IExtension);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof IExtension);
      otherKeys.push('_valueMoney' as keyof IExtension);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IExtension);
      otherKeys.push('_valuePeriod' as keyof IExtension);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IExtension);
      otherKeys.push('_valueQuantity' as keyof IExtension);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IExtension);
      otherKeys.push('_valueRange' as keyof IExtension);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IExtension);
      otherKeys.push('_valueRatio' as keyof IExtension);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IExtension);
      otherKeys.push('_valueReference' as keyof IExtension);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof IExtension);
      otherKeys.push('_valueSampledData' as keyof IExtension);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof IExtension);
      otherKeys.push('_valueSignature' as keyof IExtension);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof IExtension);
      otherKeys.push('_valueTiming' as keyof IExtension);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof IExtension);
      otherKeys.push('_valueContactDetail' as keyof IExtension);
    }
    if (type !== 'Contributor') {
      otherKeys.push('valueContributor' as keyof IExtension);
      otherKeys.push('_valueContributor' as keyof IExtension);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof IExtension);
      otherKeys.push('_valueDataRequirement' as keyof IExtension);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof IExtension);
      otherKeys.push('_valueExpression' as keyof IExtension);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof IExtension);
      otherKeys.push('_valueParameterDefinition' as keyof IExtension);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof IExtension);
      otherKeys.push('_valueRelatedArtifact' as keyof IExtension);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof IExtension);
      otherKeys.push('_valueTriggerDefinition' as keyof IExtension);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof IExtension);
      otherKeys.push('_valueUsageContext' as keyof IExtension);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof IExtension);
      otherKeys.push('_valueDosage' as keyof IExtension);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Extension instance
   */
  build(): Extension {
    return new Extension(this.data);
  }

  /**
   * Build and validate the Extension instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Extension> {
    const extension = this.build();
    await extension.validateOrThrow();
    return extension;
  }
}
