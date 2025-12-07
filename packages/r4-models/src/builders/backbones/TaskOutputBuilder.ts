import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TaskOutput } from '../../models/backbones/TaskOutput.js';
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
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  IRelatedArtifact,
  ISampledData,
  ISignature,
  ITaskOutput,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4-types';

/**
 * TaskOutputBuilder - Fluent builder for TaskOutput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const taskOutput = new TaskOutputBuilder()
 *   .setType(value)
 *   .build();
 */
export class TaskOutputBuilder extends BackboneElementBuilder<TaskOutput, ITaskOutput> {
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

  /**
   * Set valuePositiveInt
   * Result of output
   */
  setValuePositiveInt(valuePositiveInt: number): this {
    this.data.valuePositiveInt = valuePositiveInt;
    return this;
  }

  /**
   * Set valueUnsignedInt
   * Result of output
   */
  setValueUnsignedInt(valueUnsignedInt: number): this {
    this.data.valueUnsignedInt = valueUnsignedInt;
    return this;
  }

  /**
   * Set valueUuid
   * Result of output
   */
  setValueUuid(valueUuid: string): this {
    this.data.valueUuid = valueUuid;
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
    const key = `value${type}` as keyof ITaskOutput;
    const otherKeys: (keyof ITaskOutput)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof ITaskOutput);
      otherKeys.push('_valueBase64Binary' as keyof ITaskOutput);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ITaskOutput);
      otherKeys.push('_valueBoolean' as keyof ITaskOutput);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof ITaskOutput);
      otherKeys.push('_valueCanonical' as keyof ITaskOutput);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof ITaskOutput);
      otherKeys.push('_valueCode' as keyof ITaskOutput);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof ITaskOutput);
      otherKeys.push('_valueDate' as keyof ITaskOutput);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof ITaskOutput);
      otherKeys.push('_valueDateTime' as keyof ITaskOutput);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof ITaskOutput);
      otherKeys.push('_valueDecimal' as keyof ITaskOutput);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof ITaskOutput);
      otherKeys.push('_valueId' as keyof ITaskOutput);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof ITaskOutput);
      otherKeys.push('_valueInstant' as keyof ITaskOutput);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof ITaskOutput);
      otherKeys.push('_valueInteger' as keyof ITaskOutput);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof ITaskOutput);
      otherKeys.push('_valueMarkdown' as keyof ITaskOutput);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof ITaskOutput);
      otherKeys.push('_valueOid' as keyof ITaskOutput);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof ITaskOutput);
      otherKeys.push('_valueString' as keyof ITaskOutput);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof ITaskOutput);
      otherKeys.push('_valueTime' as keyof ITaskOutput);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof ITaskOutput);
      otherKeys.push('_valueUri' as keyof ITaskOutput);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof ITaskOutput);
      otherKeys.push('_valueUrl' as keyof ITaskOutput);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof ITaskOutput);
      otherKeys.push('_valueAddress' as keyof ITaskOutput);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof ITaskOutput);
      otherKeys.push('_valueAge' as keyof ITaskOutput);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof ITaskOutput);
      otherKeys.push('_valueAnnotation' as keyof ITaskOutput);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof ITaskOutput);
      otherKeys.push('_valueAttachment' as keyof ITaskOutput);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof ITaskOutput);
      otherKeys.push('_valueCodeableConcept' as keyof ITaskOutput);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof ITaskOutput);
      otherKeys.push('_valueCoding' as keyof ITaskOutput);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof ITaskOutput);
      otherKeys.push('_valueContactPoint' as keyof ITaskOutput);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof ITaskOutput);
      otherKeys.push('_valueCount' as keyof ITaskOutput);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof ITaskOutput);
      otherKeys.push('_valueDistance' as keyof ITaskOutput);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof ITaskOutput);
      otherKeys.push('_valueDuration' as keyof ITaskOutput);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof ITaskOutput);
      otherKeys.push('_valueHumanName' as keyof ITaskOutput);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof ITaskOutput);
      otherKeys.push('_valueIdentifier' as keyof ITaskOutput);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof ITaskOutput);
      otherKeys.push('_valueMoney' as keyof ITaskOutput);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof ITaskOutput);
      otherKeys.push('_valuePeriod' as keyof ITaskOutput);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ITaskOutput);
      otherKeys.push('_valueQuantity' as keyof ITaskOutput);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof ITaskOutput);
      otherKeys.push('_valueRange' as keyof ITaskOutput);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof ITaskOutput);
      otherKeys.push('_valueRatio' as keyof ITaskOutput);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof ITaskOutput);
      otherKeys.push('_valueReference' as keyof ITaskOutput);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof ITaskOutput);
      otherKeys.push('_valueSampledData' as keyof ITaskOutput);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof ITaskOutput);
      otherKeys.push('_valueSignature' as keyof ITaskOutput);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof ITaskOutput);
      otherKeys.push('_valueTiming' as keyof ITaskOutput);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof ITaskOutput);
      otherKeys.push('_valueContactDetail' as keyof ITaskOutput);
    }
    if (type !== 'Contributor') {
      otherKeys.push('valueContributor' as keyof ITaskOutput);
      otherKeys.push('_valueContributor' as keyof ITaskOutput);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof ITaskOutput);
      otherKeys.push('_valueDataRequirement' as keyof ITaskOutput);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof ITaskOutput);
      otherKeys.push('_valueExpression' as keyof ITaskOutput);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof ITaskOutput);
      otherKeys.push('_valueParameterDefinition' as keyof ITaskOutput);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof ITaskOutput);
      otherKeys.push('_valueRelatedArtifact' as keyof ITaskOutput);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof ITaskOutput);
      otherKeys.push('_valueTriggerDefinition' as keyof ITaskOutput);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof ITaskOutput);
      otherKeys.push('_valueUsageContext' as keyof ITaskOutput);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof ITaskOutput);
      otherKeys.push('_valueDosage' as keyof ITaskOutput);
    }
    if (type !== 'Meta') {
      otherKeys.push('valueMeta' as keyof ITaskOutput);
      otherKeys.push('_valueMeta' as keyof ITaskOutput);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TaskOutput instance
   */
  build(): TaskOutput {
    return new TaskOutput(this.data);
  }

  /**
   * Build and validate the TaskOutput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TaskOutput> {
    const taskOutput = this.build();
    await taskOutput.validateOrThrow();
    return taskOutput;
  }
}
