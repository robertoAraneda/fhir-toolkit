import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TransportInput } from '../../models/backbones/TransportInput.js';
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
  ITransportInput,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/**
 * TransportInputBuilder - Fluent builder for TransportInput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const transportInput = new TransportInputBuilder()
 *   .setType(value)
 *   .build();
 */
export class TransportInputBuilder extends BackboneElementBuilder<TransportInput, ITransportInput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Label for the input
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
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
    const key = `value${type}` as keyof ITransportInput;
    const otherKeys: (keyof ITransportInput)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof ITransportInput);
      otherKeys.push('_valueBase64Binary' as keyof ITransportInput);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ITransportInput);
      otherKeys.push('_valueBoolean' as keyof ITransportInput);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof ITransportInput);
      otherKeys.push('_valueCanonical' as keyof ITransportInput);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof ITransportInput);
      otherKeys.push('_valueCode' as keyof ITransportInput);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof ITransportInput);
      otherKeys.push('_valueDate' as keyof ITransportInput);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof ITransportInput);
      otherKeys.push('_valueDateTime' as keyof ITransportInput);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof ITransportInput);
      otherKeys.push('_valueDecimal' as keyof ITransportInput);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof ITransportInput);
      otherKeys.push('_valueId' as keyof ITransportInput);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof ITransportInput);
      otherKeys.push('_valueInstant' as keyof ITransportInput);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof ITransportInput);
      otherKeys.push('_valueInteger' as keyof ITransportInput);
    }
    if (type !== 'Integer64') {
      otherKeys.push('valueInteger64' as keyof ITransportInput);
      otherKeys.push('_valueInteger64' as keyof ITransportInput);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof ITransportInput);
      otherKeys.push('_valueMarkdown' as keyof ITransportInput);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof ITransportInput);
      otherKeys.push('_valueOid' as keyof ITransportInput);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('valuePositiveInt' as keyof ITransportInput);
      otherKeys.push('_valuePositiveInt' as keyof ITransportInput);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof ITransportInput);
      otherKeys.push('_valueString' as keyof ITransportInput);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof ITransportInput);
      otherKeys.push('_valueTime' as keyof ITransportInput);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('valueUnsignedInt' as keyof ITransportInput);
      otherKeys.push('_valueUnsignedInt' as keyof ITransportInput);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof ITransportInput);
      otherKeys.push('_valueUri' as keyof ITransportInput);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof ITransportInput);
      otherKeys.push('_valueUrl' as keyof ITransportInput);
    }
    if (type !== 'Uuid') {
      otherKeys.push('valueUuid' as keyof ITransportInput);
      otherKeys.push('_valueUuid' as keyof ITransportInput);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof ITransportInput);
      otherKeys.push('_valueAddress' as keyof ITransportInput);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof ITransportInput);
      otherKeys.push('_valueAge' as keyof ITransportInput);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof ITransportInput);
      otherKeys.push('_valueAnnotation' as keyof ITransportInput);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof ITransportInput);
      otherKeys.push('_valueAttachment' as keyof ITransportInput);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof ITransportInput);
      otherKeys.push('_valueCodeableConcept' as keyof ITransportInput);
    }
    if (type !== 'CodeableReference') {
      otherKeys.push('valueCodeableReference' as keyof ITransportInput);
      otherKeys.push('_valueCodeableReference' as keyof ITransportInput);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof ITransportInput);
      otherKeys.push('_valueCoding' as keyof ITransportInput);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof ITransportInput);
      otherKeys.push('_valueContactPoint' as keyof ITransportInput);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof ITransportInput);
      otherKeys.push('_valueCount' as keyof ITransportInput);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof ITransportInput);
      otherKeys.push('_valueDistance' as keyof ITransportInput);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof ITransportInput);
      otherKeys.push('_valueDuration' as keyof ITransportInput);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof ITransportInput);
      otherKeys.push('_valueHumanName' as keyof ITransportInput);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof ITransportInput);
      otherKeys.push('_valueIdentifier' as keyof ITransportInput);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof ITransportInput);
      otherKeys.push('_valueMoney' as keyof ITransportInput);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof ITransportInput);
      otherKeys.push('_valuePeriod' as keyof ITransportInput);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ITransportInput);
      otherKeys.push('_valueQuantity' as keyof ITransportInput);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof ITransportInput);
      otherKeys.push('_valueRange' as keyof ITransportInput);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof ITransportInput);
      otherKeys.push('_valueRatio' as keyof ITransportInput);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('valueRatioRange' as keyof ITransportInput);
      otherKeys.push('_valueRatioRange' as keyof ITransportInput);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof ITransportInput);
      otherKeys.push('_valueReference' as keyof ITransportInput);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof ITransportInput);
      otherKeys.push('_valueSampledData' as keyof ITransportInput);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof ITransportInput);
      otherKeys.push('_valueSignature' as keyof ITransportInput);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof ITransportInput);
      otherKeys.push('_valueTiming' as keyof ITransportInput);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof ITransportInput);
      otherKeys.push('_valueContactDetail' as keyof ITransportInput);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof ITransportInput);
      otherKeys.push('_valueDataRequirement' as keyof ITransportInput);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof ITransportInput);
      otherKeys.push('_valueExpression' as keyof ITransportInput);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof ITransportInput);
      otherKeys.push('_valueParameterDefinition' as keyof ITransportInput);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof ITransportInput);
      otherKeys.push('_valueRelatedArtifact' as keyof ITransportInput);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof ITransportInput);
      otherKeys.push('_valueTriggerDefinition' as keyof ITransportInput);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof ITransportInput);
      otherKeys.push('_valueUsageContext' as keyof ITransportInput);
    }
    if (type !== 'Availability') {
      otherKeys.push('valueAvailability' as keyof ITransportInput);
      otherKeys.push('_valueAvailability' as keyof ITransportInput);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('valueExtendedContactDetail' as keyof ITransportInput);
      otherKeys.push('_valueExtendedContactDetail' as keyof ITransportInput);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof ITransportInput);
      otherKeys.push('_valueDosage' as keyof ITransportInput);
    }
    if (type !== 'Meta') {
      otherKeys.push('valueMeta' as keyof ITransportInput);
      otherKeys.push('_valueMeta' as keyof ITransportInput);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TransportInput instance
   */
  build(): TransportInput {
    return new TransportInput(this.data);
  }

  /**
   * Build and validate the TransportInput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TransportInput> {
    const transportInput = this.build();
    await transportInput.validateOrThrow();
    return transportInput;
  }
}
