import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionExample } from '../../models/backbones/ElementDefinitionExample.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  IAge,
  IAnnotation,
  IAttachment,
  IAvailability,
  ICodeableConcept,
  ICodeableReference,
  ICoding,
  IContactDetail,
  IContactPoint,
  ICount,
  IDataRequirement,
  IDistance,
  IDosage,
  IDuration,
  IElementDefinitionExample,
  IExpression,
  IExtendedContactDetail,
  IHumanName,
  IIdentifier,
  IMeta,
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
} from '@fhir-toolkit/r5-types';

/**
 * ElementDefinitionExampleBuilder - Fluent builder for ElementDefinitionExample backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionExample = new ElementDefinitionExampleBuilder()
 *   .setLabel(value)
 *   .build();
 */
export class ElementDefinitionExampleBuilder extends BackboneElementBuilder<ElementDefinitionExample, IElementDefinitionExample> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set label
   * Describes the purpose of this example
   */
  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueBase64Binary, valueBoolean, valueCanonical, valueCode, valueDate, valueDateTime, valueDecimal, valueId, valueInstant, valueInteger, valueInteger64, valueMarkdown, valueOid, valuePositiveInt, valueString, valueTime, valueUnsignedInt, valueUri, valueUrl, valueUuid, valueAddress, valueAge, valueAnnotation, valueAttachment, valueCodeableConcept, valueCodeableReference, valueCoding, valueContactPoint, valueCount, valueDistance, valueDuration, valueHumanName, valueIdentifier, valueMoney, valuePeriod, valueQuantity, valueRange, valueRatio, valueRatioRange, valueReference, valueSampledData, valueSignature, valueTiming, valueContactDetail, valueDataRequirement, valueExpression, valueParameterDefinition, valueRelatedArtifact, valueTriggerDefinition, valueUsageContext, valueAvailability, valueExtendedContactDetail, valueDosage, valueMeta)
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Base64Binary', value)
   */
  setValue<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IElementDefinitionExample;
    const otherKeys: (keyof IElementDefinitionExample)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof IElementDefinitionExample);
      otherKeys.push('_valueBase64Binary' as keyof IElementDefinitionExample);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IElementDefinitionExample);
      otherKeys.push('_valueBoolean' as keyof IElementDefinitionExample);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof IElementDefinitionExample);
      otherKeys.push('_valueCanonical' as keyof IElementDefinitionExample);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IElementDefinitionExample);
      otherKeys.push('_valueCode' as keyof IElementDefinitionExample);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDate' as keyof IElementDefinitionExample);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDateTime' as keyof IElementDefinitionExample);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDecimal' as keyof IElementDefinitionExample);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof IElementDefinitionExample);
      otherKeys.push('_valueId' as keyof IElementDefinitionExample);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof IElementDefinitionExample);
      otherKeys.push('_valueInstant' as keyof IElementDefinitionExample);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IElementDefinitionExample);
      otherKeys.push('_valueInteger' as keyof IElementDefinitionExample);
    }
    if (type !== 'Integer64') {
      otherKeys.push('valueInteger64' as keyof IElementDefinitionExample);
      otherKeys.push('_valueInteger64' as keyof IElementDefinitionExample);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof IElementDefinitionExample);
      otherKeys.push('_valueMarkdown' as keyof IElementDefinitionExample);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof IElementDefinitionExample);
      otherKeys.push('_valueOid' as keyof IElementDefinitionExample);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('valuePositiveInt' as keyof IElementDefinitionExample);
      otherKeys.push('_valuePositiveInt' as keyof IElementDefinitionExample);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IElementDefinitionExample);
      otherKeys.push('_valueString' as keyof IElementDefinitionExample);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IElementDefinitionExample);
      otherKeys.push('_valueTime' as keyof IElementDefinitionExample);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('valueUnsignedInt' as keyof IElementDefinitionExample);
      otherKeys.push('_valueUnsignedInt' as keyof IElementDefinitionExample);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof IElementDefinitionExample);
      otherKeys.push('_valueUri' as keyof IElementDefinitionExample);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof IElementDefinitionExample);
      otherKeys.push('_valueUrl' as keyof IElementDefinitionExample);
    }
    if (type !== 'Uuid') {
      otherKeys.push('valueUuid' as keyof IElementDefinitionExample);
      otherKeys.push('_valueUuid' as keyof IElementDefinitionExample);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof IElementDefinitionExample);
      otherKeys.push('_valueAddress' as keyof IElementDefinitionExample);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof IElementDefinitionExample);
      otherKeys.push('_valueAge' as keyof IElementDefinitionExample);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof IElementDefinitionExample);
      otherKeys.push('_valueAnnotation' as keyof IElementDefinitionExample);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IElementDefinitionExample);
      otherKeys.push('_valueAttachment' as keyof IElementDefinitionExample);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IElementDefinitionExample);
      otherKeys.push('_valueCodeableConcept' as keyof IElementDefinitionExample);
    }
    if (type !== 'CodeableReference') {
      otherKeys.push('valueCodeableReference' as keyof IElementDefinitionExample);
      otherKeys.push('_valueCodeableReference' as keyof IElementDefinitionExample);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof IElementDefinitionExample);
      otherKeys.push('_valueCoding' as keyof IElementDefinitionExample);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof IElementDefinitionExample);
      otherKeys.push('_valueContactPoint' as keyof IElementDefinitionExample);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof IElementDefinitionExample);
      otherKeys.push('_valueCount' as keyof IElementDefinitionExample);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDistance' as keyof IElementDefinitionExample);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDuration' as keyof IElementDefinitionExample);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof IElementDefinitionExample);
      otherKeys.push('_valueHumanName' as keyof IElementDefinitionExample);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof IElementDefinitionExample);
      otherKeys.push('_valueIdentifier' as keyof IElementDefinitionExample);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof IElementDefinitionExample);
      otherKeys.push('_valueMoney' as keyof IElementDefinitionExample);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IElementDefinitionExample);
      otherKeys.push('_valuePeriod' as keyof IElementDefinitionExample);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IElementDefinitionExample);
      otherKeys.push('_valueQuantity' as keyof IElementDefinitionExample);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IElementDefinitionExample);
      otherKeys.push('_valueRange' as keyof IElementDefinitionExample);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IElementDefinitionExample);
      otherKeys.push('_valueRatio' as keyof IElementDefinitionExample);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('valueRatioRange' as keyof IElementDefinitionExample);
      otherKeys.push('_valueRatioRange' as keyof IElementDefinitionExample);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IElementDefinitionExample);
      otherKeys.push('_valueReference' as keyof IElementDefinitionExample);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof IElementDefinitionExample);
      otherKeys.push('_valueSampledData' as keyof IElementDefinitionExample);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof IElementDefinitionExample);
      otherKeys.push('_valueSignature' as keyof IElementDefinitionExample);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof IElementDefinitionExample);
      otherKeys.push('_valueTiming' as keyof IElementDefinitionExample);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof IElementDefinitionExample);
      otherKeys.push('_valueContactDetail' as keyof IElementDefinitionExample);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDataRequirement' as keyof IElementDefinitionExample);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof IElementDefinitionExample);
      otherKeys.push('_valueExpression' as keyof IElementDefinitionExample);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof IElementDefinitionExample);
      otherKeys.push('_valueParameterDefinition' as keyof IElementDefinitionExample);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof IElementDefinitionExample);
      otherKeys.push('_valueRelatedArtifact' as keyof IElementDefinitionExample);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof IElementDefinitionExample);
      otherKeys.push('_valueTriggerDefinition' as keyof IElementDefinitionExample);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof IElementDefinitionExample);
      otherKeys.push('_valueUsageContext' as keyof IElementDefinitionExample);
    }
    if (type !== 'Availability') {
      otherKeys.push('valueAvailability' as keyof IElementDefinitionExample);
      otherKeys.push('_valueAvailability' as keyof IElementDefinitionExample);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('valueExtendedContactDetail' as keyof IElementDefinitionExample);
      otherKeys.push('_valueExtendedContactDetail' as keyof IElementDefinitionExample);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof IElementDefinitionExample);
      otherKeys.push('_valueDosage' as keyof IElementDefinitionExample);
    }
    if (type !== 'Meta') {
      otherKeys.push('valueMeta' as keyof IElementDefinitionExample);
      otherKeys.push('_valueMeta' as keyof IElementDefinitionExample);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionExample instance
   */
  build(): ElementDefinitionExample {
    return new ElementDefinitionExample(this.data);
  }

  /**
   * Build and validate the ElementDefinitionExample instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionExample> {
    const elementDefinitionExample = this.build();
    await elementDefinitionExample.validateOrThrow();
    return elementDefinitionExample;
  }
}
