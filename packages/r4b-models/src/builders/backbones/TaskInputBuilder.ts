import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TaskInput } from '../../models/backbones/TaskInput.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
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
  ITaskInput,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4b-types';

/**
 * TaskInputBuilder - Fluent builder for TaskInput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const taskInput = new TaskInputBuilder()
 *   .setType(value)
 *   .build();
 */
export class TaskInputBuilder extends BackboneElementBuilder<TaskInput, ITaskInput> {
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

  /**
   * Set valuePositiveInt
   * Content to use in performing the task
   */
  setValuePositiveInt(valuePositiveInt: number): this {
    this.data.valuePositiveInt = valuePositiveInt;
    return this;
  }

  /**
   * Set valueUnsignedInt
   * Content to use in performing the task
   */
  setValueUnsignedInt(valueUnsignedInt: number): this {
    this.data.valueUnsignedInt = valueUnsignedInt;
    return this;
  }

  /**
   * Set valueUuid
   * Content to use in performing the task
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
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof ITaskInput;
    const otherKeys: (keyof ITaskInput)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('valueBase64Binary' as keyof ITaskInput);
      otherKeys.push('_valueBase64Binary' as keyof ITaskInput);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ITaskInput);
      otherKeys.push('_valueBoolean' as keyof ITaskInput);
    }
    if (type !== 'Canonical') {
      otherKeys.push('valueCanonical' as keyof ITaskInput);
      otherKeys.push('_valueCanonical' as keyof ITaskInput);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof ITaskInput);
      otherKeys.push('_valueCode' as keyof ITaskInput);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof ITaskInput);
      otherKeys.push('_valueDate' as keyof ITaskInput);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof ITaskInput);
      otherKeys.push('_valueDateTime' as keyof ITaskInput);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof ITaskInput);
      otherKeys.push('_valueDecimal' as keyof ITaskInput);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof ITaskInput);
      otherKeys.push('_valueId' as keyof ITaskInput);
    }
    if (type !== 'Instant') {
      otherKeys.push('valueInstant' as keyof ITaskInput);
      otherKeys.push('_valueInstant' as keyof ITaskInput);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof ITaskInput);
      otherKeys.push('_valueInteger' as keyof ITaskInput);
    }
    if (type !== 'Markdown') {
      otherKeys.push('valueMarkdown' as keyof ITaskInput);
      otherKeys.push('_valueMarkdown' as keyof ITaskInput);
    }
    if (type !== 'Oid') {
      otherKeys.push('valueOid' as keyof ITaskInput);
      otherKeys.push('_valueOid' as keyof ITaskInput);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof ITaskInput);
      otherKeys.push('_valueString' as keyof ITaskInput);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof ITaskInput);
      otherKeys.push('_valueTime' as keyof ITaskInput);
    }
    if (type !== 'Uri') {
      otherKeys.push('valueUri' as keyof ITaskInput);
      otherKeys.push('_valueUri' as keyof ITaskInput);
    }
    if (type !== 'Url') {
      otherKeys.push('valueUrl' as keyof ITaskInput);
      otherKeys.push('_valueUrl' as keyof ITaskInput);
    }
    if (type !== 'Address') {
      otherKeys.push('valueAddress' as keyof ITaskInput);
      otherKeys.push('_valueAddress' as keyof ITaskInput);
    }
    if (type !== 'Age') {
      otherKeys.push('valueAge' as keyof ITaskInput);
      otherKeys.push('_valueAge' as keyof ITaskInput);
    }
    if (type !== 'Annotation') {
      otherKeys.push('valueAnnotation' as keyof ITaskInput);
      otherKeys.push('_valueAnnotation' as keyof ITaskInput);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof ITaskInput);
      otherKeys.push('_valueAttachment' as keyof ITaskInput);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof ITaskInput);
      otherKeys.push('_valueCodeableConcept' as keyof ITaskInput);
    }
    if (type !== 'Coding') {
      otherKeys.push('valueCoding' as keyof ITaskInput);
      otherKeys.push('_valueCoding' as keyof ITaskInput);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('valueContactPoint' as keyof ITaskInput);
      otherKeys.push('_valueContactPoint' as keyof ITaskInput);
    }
    if (type !== 'Count') {
      otherKeys.push('valueCount' as keyof ITaskInput);
      otherKeys.push('_valueCount' as keyof ITaskInput);
    }
    if (type !== 'Distance') {
      otherKeys.push('valueDistance' as keyof ITaskInput);
      otherKeys.push('_valueDistance' as keyof ITaskInput);
    }
    if (type !== 'Duration') {
      otherKeys.push('valueDuration' as keyof ITaskInput);
      otherKeys.push('_valueDuration' as keyof ITaskInput);
    }
    if (type !== 'HumanName') {
      otherKeys.push('valueHumanName' as keyof ITaskInput);
      otherKeys.push('_valueHumanName' as keyof ITaskInput);
    }
    if (type !== 'Identifier') {
      otherKeys.push('valueIdentifier' as keyof ITaskInput);
      otherKeys.push('_valueIdentifier' as keyof ITaskInput);
    }
    if (type !== 'Money') {
      otherKeys.push('valueMoney' as keyof ITaskInput);
      otherKeys.push('_valueMoney' as keyof ITaskInput);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof ITaskInput);
      otherKeys.push('_valuePeriod' as keyof ITaskInput);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ITaskInput);
      otherKeys.push('_valueQuantity' as keyof ITaskInput);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof ITaskInput);
      otherKeys.push('_valueRange' as keyof ITaskInput);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof ITaskInput);
      otherKeys.push('_valueRatio' as keyof ITaskInput);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof ITaskInput);
      otherKeys.push('_valueReference' as keyof ITaskInput);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof ITaskInput);
      otherKeys.push('_valueSampledData' as keyof ITaskInput);
    }
    if (type !== 'Signature') {
      otherKeys.push('valueSignature' as keyof ITaskInput);
      otherKeys.push('_valueSignature' as keyof ITaskInput);
    }
    if (type !== 'Timing') {
      otherKeys.push('valueTiming' as keyof ITaskInput);
      otherKeys.push('_valueTiming' as keyof ITaskInput);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('valueContactDetail' as keyof ITaskInput);
      otherKeys.push('_valueContactDetail' as keyof ITaskInput);
    }
    if (type !== 'Contributor') {
      otherKeys.push('valueContributor' as keyof ITaskInput);
      otherKeys.push('_valueContributor' as keyof ITaskInput);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('valueDataRequirement' as keyof ITaskInput);
      otherKeys.push('_valueDataRequirement' as keyof ITaskInput);
    }
    if (type !== 'Expression') {
      otherKeys.push('valueExpression' as keyof ITaskInput);
      otherKeys.push('_valueExpression' as keyof ITaskInput);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('valueParameterDefinition' as keyof ITaskInput);
      otherKeys.push('_valueParameterDefinition' as keyof ITaskInput);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('valueRelatedArtifact' as keyof ITaskInput);
      otherKeys.push('_valueRelatedArtifact' as keyof ITaskInput);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('valueTriggerDefinition' as keyof ITaskInput);
      otherKeys.push('_valueTriggerDefinition' as keyof ITaskInput);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('valueUsageContext' as keyof ITaskInput);
      otherKeys.push('_valueUsageContext' as keyof ITaskInput);
    }
    if (type !== 'Dosage') {
      otherKeys.push('valueDosage' as keyof ITaskInput);
      otherKeys.push('_valueDosage' as keyof ITaskInput);
    }
    if (type !== 'Meta') {
      otherKeys.push('valueMeta' as keyof ITaskInput);
      otherKeys.push('_valueMeta' as keyof ITaskInput);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TaskInput instance
   */
  build(): TaskInput {
    return new TaskInput(this.data);
  }

  /**
   * Build and validate the TaskInput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TaskInput> {
    const taskInput = this.build();
    await taskInput.validateOrThrow();
    return taskInput;
  }
}
