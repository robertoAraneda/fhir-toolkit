import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TransportOutput } from '../../models/backbones/TransportOutput.js';
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
  ITransportOutput,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/**
 * TransportOutputBuilder - Fluent builder for TransportOutput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const transportOutput = new TransportOutputBuilder()
 *   .setType(value)
 *   .build();
 */
export class TransportOutputBuilder extends BackboneElementBuilder<TransportOutput, ITransportOutput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Label for output
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
    const key = `value${type}` as keyof ITransportOutput;
    const otherKeys: (keyof ITransportOutput)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof ITransportOutput);
      otherKeys.push('_valueBase64Binary' as keyof ITransportOutput);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ITransportOutput);
      otherKeys.push('_valueBoolean' as keyof ITransportOutput);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof ITransportOutput);
      otherKeys.push('_valueCanonical' as keyof ITransportOutput);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof ITransportOutput);
      otherKeys.push('_valueCode' as keyof ITransportOutput);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof ITransportOutput);
      otherKeys.push('_valueDate' as keyof ITransportOutput);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof ITransportOutput);
      otherKeys.push('_valueDateTime' as keyof ITransportOutput);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof ITransportOutput);
      otherKeys.push('_valueDecimal' as keyof ITransportOutput);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof ITransportOutput);
      otherKeys.push('_valueId' as keyof ITransportOutput);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof ITransportOutput);
      otherKeys.push('_valueInstant' as keyof ITransportOutput);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof ITransportOutput);
      otherKeys.push('_valueInteger' as keyof ITransportOutput);
    }
    if (type !== 'Integer64') {
      otherKeys.push('valueInteger64' as keyof ITransportOutput);
      otherKeys.push('_valueInteger64' as keyof ITransportOutput);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof ITransportOutput);
      otherKeys.push('_valueMarkdown' as keyof ITransportOutput);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof ITransportOutput);
      otherKeys.push('_valueOid' as keyof ITransportOutput);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('valuePositiveInt' as keyof ITransportOutput);
      otherKeys.push('_valuePositiveInt' as keyof ITransportOutput);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof ITransportOutput);
      otherKeys.push('_valueString' as keyof ITransportOutput);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof ITransportOutput);
      otherKeys.push('_valueTime' as keyof ITransportOutput);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('valueUnsignedInt' as keyof ITransportOutput);
      otherKeys.push('_valueUnsignedInt' as keyof ITransportOutput);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof ITransportOutput);
      otherKeys.push('_valueUri' as keyof ITransportOutput);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof ITransportOutput);
      otherKeys.push('_valueUrl' as keyof ITransportOutput);
    }
    if (type !== 'Uuid') {
      otherKeys.push('valueUuid' as keyof ITransportOutput);
      otherKeys.push('_valueUuid' as keyof ITransportOutput);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof ITransportOutput);
      otherKeys.push('_valueAddress' as keyof ITransportOutput);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof ITransportOutput);
      otherKeys.push('_valueAge' as keyof ITransportOutput);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof ITransportOutput);
      otherKeys.push('_valueAnnotation' as keyof ITransportOutput);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof ITransportOutput);
      otherKeys.push('_valueAttachment' as keyof ITransportOutput);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof ITransportOutput);
      otherKeys.push('_valueCodeableConcept' as keyof ITransportOutput);
    }
    if (type !== 'CodeableReference') {
      otherKeys.push('valueCodeableReference' as keyof ITransportOutput);
      otherKeys.push('_valueCodeableReference' as keyof ITransportOutput);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof ITransportOutput);
      otherKeys.push('_valueCoding' as keyof ITransportOutput);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof ITransportOutput);
      otherKeys.push('_valueContactPoint' as keyof ITransportOutput);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof ITransportOutput);
      otherKeys.push('_valueCount' as keyof ITransportOutput);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof ITransportOutput);
      otherKeys.push('_valueDistance' as keyof ITransportOutput);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof ITransportOutput);
      otherKeys.push('_valueDuration' as keyof ITransportOutput);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof ITransportOutput);
      otherKeys.push('_valueHumanName' as keyof ITransportOutput);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof ITransportOutput);
      otherKeys.push('_valueIdentifier' as keyof ITransportOutput);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof ITransportOutput);
      otherKeys.push('_valueMoney' as keyof ITransportOutput);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof ITransportOutput);
      otherKeys.push('_valuePeriod' as keyof ITransportOutput);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ITransportOutput);
      otherKeys.push('_valueQuantity' as keyof ITransportOutput);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof ITransportOutput);
      otherKeys.push('_valueRange' as keyof ITransportOutput);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof ITransportOutput);
      otherKeys.push('_valueRatio' as keyof ITransportOutput);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('valueRatioRange' as keyof ITransportOutput);
      otherKeys.push('_valueRatioRange' as keyof ITransportOutput);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof ITransportOutput);
      otherKeys.push('_valueReference' as keyof ITransportOutput);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof ITransportOutput);
      otherKeys.push('_valueSampledData' as keyof ITransportOutput);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof ITransportOutput);
      otherKeys.push('_valueSignature' as keyof ITransportOutput);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof ITransportOutput);
      otherKeys.push('_valueTiming' as keyof ITransportOutput);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof ITransportOutput);
      otherKeys.push('_valueContactDetail' as keyof ITransportOutput);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof ITransportOutput);
      otherKeys.push('_valueDataRequirement' as keyof ITransportOutput);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof ITransportOutput);
      otherKeys.push('_valueExpression' as keyof ITransportOutput);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof ITransportOutput);
      otherKeys.push('_valueParameterDefinition' as keyof ITransportOutput);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof ITransportOutput);
      otherKeys.push('_valueRelatedArtifact' as keyof ITransportOutput);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof ITransportOutput);
      otherKeys.push('_valueTriggerDefinition' as keyof ITransportOutput);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof ITransportOutput);
      otherKeys.push('_valueUsageContext' as keyof ITransportOutput);
    }
    if (type !== 'Availability') {
      otherKeys.push('valueAvailability' as keyof ITransportOutput);
      otherKeys.push('_valueAvailability' as keyof ITransportOutput);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('valueExtendedContactDetail' as keyof ITransportOutput);
      otherKeys.push('_valueExtendedContactDetail' as keyof ITransportOutput);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof ITransportOutput);
      otherKeys.push('_valueDosage' as keyof ITransportOutput);
    }
    if (type !== 'Meta') {
      otherKeys.push('valueMeta' as keyof ITransportOutput);
      otherKeys.push('_valueMeta' as keyof ITransportOutput);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TransportOutput instance
   */
  build(): TransportOutput {
    return new TransportOutput(this.data);
  }

  /**
   * Build and validate the TransportOutput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TransportOutput> {
    const transportOutput = this.build();
    await transportOutput.validateOrThrow();
    return transportOutput;
  }
}
