import { ElementBuilder } from '../base/ElementBuilder.js';
import { ElementDefinition } from '../../models/datatypes/ElementDefinition.js';
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
  IElementDefinition,
  IElementDefinitionBase,
  IElementDefinitionBinding,
  IElementDefinitionConstraint,
  IElementDefinitionExample,
  IElementDefinitionMapping,
  IElementDefinitionSlicing,
  IElementDefinitionType,
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
  PropertyRepresentationType,
} from '@fhir-toolkit/r5-types';

/**
 * ElementDefinitionBuilder - Fluent builder for ElementDefinition datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const elementDefinition = new ElementDefinitionBuilder()
 *   .setPath(value)
 *   .addRepresentation({ ... })
 *   .build();
 */
export class ElementDefinitionBuilder extends ElementBuilder<ElementDefinition, IElementDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * Path of the element in the hierarchy of elements
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set sliceName
   * Name for this particular element (in a set of slices)
   */
  setSliceName(sliceName: string): this {
    this.data.sliceName = sliceName;
    return this;
  }

  /**
   * Set sliceIsConstraining
   * If this slice definition constrains an inherited slice definition (or not)
   */
  setSliceIsConstraining(sliceIsConstraining: boolean): this {
    this.data.sliceIsConstraining = sliceIsConstraining;
    return this;
  }

  /**
   * Set label
   * Name for element to display with or prompt for element
   */
  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Set slicing
   * This element is sliced - slices follow
   */
  setSlicing(slicing: IElementDefinitionSlicing): this {
    this.data.slicing = slicing;
    return this;
  }

  /**
   * Set short
   * Concise definition for space-constrained presentation
   */
  setShort(short: string): this {
    this.data.short = short;
    return this;
  }

  /**
   * Set definition
   * Full formal definition as narrative text
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set comment
   * Comments about the use of this element
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set requirements
   * Why this resource has been created
   */
  setRequirements(requirements: string): this {
    this.data.requirements = requirements;
    return this;
  }

  /**
   * Set min
   * Minimum Cardinality
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Maximum Cardinality (a number or *)
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  /**
   * Set base
   * Base definition information for tools
   */
  setBase(base: IElementDefinitionBase): this {
    this.data.base = base;
    return this;
  }

  /**
   * Set contentReference
   * Reference to definition of content for the element
   */
  setContentReference(contentReference: string): this {
    this.data.contentReference = contentReference;
    return this;
  }

  /**
   * Set meaningWhenMissing
   * Implicit meaning when this element is missing
   */
  setMeaningWhenMissing(meaningWhenMissing: string): this {
    this.data.meaningWhenMissing = meaningWhenMissing;
    return this;
  }

  /**
   * Set orderMeaning
   * What the order of the elements means
   */
  setOrderMeaning(orderMeaning: string): this {
    this.data.orderMeaning = orderMeaning;
    return this;
  }

  /**
   * Set maxLength
   * Max length for string type data
   */
  setMaxLength(maxLength: number): this {
    this.data.maxLength = maxLength;
    return this;
  }

  /**
   * Set mustHaveValue
   * For primitives, that a value must be present - not replaced by an extension
   */
  setMustHaveValue(mustHaveValue: boolean): this {
    this.data.mustHaveValue = mustHaveValue;
    return this;
  }

  /**
   * Set mustSupport
   * If the element must be supported (discouraged - see obligations)
   */
  setMustSupport(mustSupport: boolean): this {
    this.data.mustSupport = mustSupport;
    return this;
  }

  /**
   * Set isModifier
   * If this modifies the meaning of other elements
   */
  setIsModifier(isModifier: boolean): this {
    this.data.isModifier = isModifier;
    return this;
  }

  /**
   * Set isModifierReason
   * Reason that this element is marked as a modifier
   */
  setIsModifierReason(isModifierReason: string): this {
    this.data.isModifierReason = isModifierReason;
    return this;
  }

  /**
   * Set isSummary
   * Include when _summary = true?
   */
  setIsSummary(isSummary: boolean): this {
    this.data.isSummary = isSummary;
    return this;
  }

  /**
   * Set binding
   * ValueSet details if this is coded
   */
  setBinding(binding: IElementDefinitionBinding): this {
    this.data.binding = binding;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set defaultValue choice type (defaultValueBase64Binary, defaultValueBoolean, defaultValueCanonical, defaultValueCode, defaultValueDate, defaultValueDateTime, defaultValueDecimal, defaultValueId, defaultValueInstant, defaultValueInteger, defaultValueInteger64, defaultValueMarkdown, defaultValueOid, defaultValuePositiveInt, defaultValueString, defaultValueTime, defaultValueUnsignedInt, defaultValueUri, defaultValueUrl, defaultValueUuid, defaultValueAddress, defaultValueAge, defaultValueAnnotation, defaultValueAttachment, defaultValueCodeableConcept, defaultValueCodeableReference, defaultValueCoding, defaultValueContactPoint, defaultValueCount, defaultValueDistance, defaultValueDuration, defaultValueHumanName, defaultValueIdentifier, defaultValueMoney, defaultValuePeriod, defaultValueQuantity, defaultValueRange, defaultValueRatio, defaultValueRatioRange, defaultValueReference, defaultValueSampledData, defaultValueSignature, defaultValueTiming, defaultValueContactDetail, defaultValueDataRequirement, defaultValueExpression, defaultValueParameterDefinition, defaultValueRelatedArtifact, defaultValueTriggerDefinition, defaultValueUsageContext, defaultValueAvailability, defaultValueExtendedContactDetail, defaultValueDosage, defaultValueMeta)
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefaultValue('Base64Binary', value)
   */
  setDefaultValue<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `defaultValue${type}` as keyof IElementDefinition;
    const otherKeys: (keyof IElementDefinition)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('defaultValueBase64Binary' as keyof IElementDefinition);
      otherKeys.push('_defaultValueBase64Binary' as keyof IElementDefinition);
    }
    if (type !== 'Boolean') {
      otherKeys.push('defaultValueBoolean' as keyof IElementDefinition);
      otherKeys.push('_defaultValueBoolean' as keyof IElementDefinition);
    }
    if (type !== 'Canonical') {
      otherKeys.push('defaultValueCanonical' as keyof IElementDefinition);
      otherKeys.push('_defaultValueCanonical' as keyof IElementDefinition);
    }
    if (type !== 'Code') {
      otherKeys.push('defaultValueCode' as keyof IElementDefinition);
      otherKeys.push('_defaultValueCode' as keyof IElementDefinition);
    }
    if (type !== 'Date') {
      otherKeys.push('defaultValueDate' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDate' as keyof IElementDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('defaultValueDateTime' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDateTime' as keyof IElementDefinition);
    }
    if (type !== 'Decimal') {
      otherKeys.push('defaultValueDecimal' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDecimal' as keyof IElementDefinition);
    }
    if (type !== 'Id') {
      otherKeys.push('defaultValueId' as keyof IElementDefinition);
      otherKeys.push('_defaultValueId' as keyof IElementDefinition);
    }
    if (type !== 'Instant') {
      otherKeys.push('defaultValueInstant' as keyof IElementDefinition);
      otherKeys.push('_defaultValueInstant' as keyof IElementDefinition);
    }
    if (type !== 'Integer') {
      otherKeys.push('defaultValueInteger' as keyof IElementDefinition);
      otherKeys.push('_defaultValueInteger' as keyof IElementDefinition);
    }
    if (type !== 'Integer64') {
      otherKeys.push('defaultValueInteger64' as keyof IElementDefinition);
      otherKeys.push('_defaultValueInteger64' as keyof IElementDefinition);
    }
    if (type !== 'Markdown') {
      otherKeys.push('defaultValueMarkdown' as keyof IElementDefinition);
      otherKeys.push('_defaultValueMarkdown' as keyof IElementDefinition);
    }
    if (type !== 'Oid') {
      otherKeys.push('defaultValueOid' as keyof IElementDefinition);
      otherKeys.push('_defaultValueOid' as keyof IElementDefinition);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('defaultValuePositiveInt' as keyof IElementDefinition);
      otherKeys.push('_defaultValuePositiveInt' as keyof IElementDefinition);
    }
    if (type !== 'String') {
      otherKeys.push('defaultValueString' as keyof IElementDefinition);
      otherKeys.push('_defaultValueString' as keyof IElementDefinition);
    }
    if (type !== 'Time') {
      otherKeys.push('defaultValueTime' as keyof IElementDefinition);
      otherKeys.push('_defaultValueTime' as keyof IElementDefinition);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('defaultValueUnsignedInt' as keyof IElementDefinition);
      otherKeys.push('_defaultValueUnsignedInt' as keyof IElementDefinition);
    }
    if (type !== 'Uri') {
      otherKeys.push('defaultValueUri' as keyof IElementDefinition);
      otherKeys.push('_defaultValueUri' as keyof IElementDefinition);
    }
    if (type !== 'Url') {
      otherKeys.push('defaultValueUrl' as keyof IElementDefinition);
      otherKeys.push('_defaultValueUrl' as keyof IElementDefinition);
    }
    if (type !== 'Uuid') {
      otherKeys.push('defaultValueUuid' as keyof IElementDefinition);
      otherKeys.push('_defaultValueUuid' as keyof IElementDefinition);
    }
    if (type !== 'Address') {
      otherKeys.push('defaultValueAddress' as keyof IElementDefinition);
      otherKeys.push('_defaultValueAddress' as keyof IElementDefinition);
    }
    if (type !== 'Age') {
      otherKeys.push('defaultValueAge' as keyof IElementDefinition);
      otherKeys.push('_defaultValueAge' as keyof IElementDefinition);
    }
    if (type !== 'Annotation') {
      otherKeys.push('defaultValueAnnotation' as keyof IElementDefinition);
      otherKeys.push('_defaultValueAnnotation' as keyof IElementDefinition);
    }
    if (type !== 'Attachment') {
      otherKeys.push('defaultValueAttachment' as keyof IElementDefinition);
      otherKeys.push('_defaultValueAttachment' as keyof IElementDefinition);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('defaultValueCodeableConcept' as keyof IElementDefinition);
      otherKeys.push('_defaultValueCodeableConcept' as keyof IElementDefinition);
    }
    if (type !== 'CodeableReference') {
      otherKeys.push('defaultValueCodeableReference' as keyof IElementDefinition);
      otherKeys.push('_defaultValueCodeableReference' as keyof IElementDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('defaultValueCoding' as keyof IElementDefinition);
      otherKeys.push('_defaultValueCoding' as keyof IElementDefinition);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('defaultValueContactPoint' as keyof IElementDefinition);
      otherKeys.push('_defaultValueContactPoint' as keyof IElementDefinition);
    }
    if (type !== 'Count') {
      otherKeys.push('defaultValueCount' as keyof IElementDefinition);
      otherKeys.push('_defaultValueCount' as keyof IElementDefinition);
    }
    if (type !== 'Distance') {
      otherKeys.push('defaultValueDistance' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDistance' as keyof IElementDefinition);
    }
    if (type !== 'Duration') {
      otherKeys.push('defaultValueDuration' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDuration' as keyof IElementDefinition);
    }
    if (type !== 'HumanName') {
      otherKeys.push('defaultValueHumanName' as keyof IElementDefinition);
      otherKeys.push('_defaultValueHumanName' as keyof IElementDefinition);
    }
    if (type !== 'Identifier') {
      otherKeys.push('defaultValueIdentifier' as keyof IElementDefinition);
      otherKeys.push('_defaultValueIdentifier' as keyof IElementDefinition);
    }
    if (type !== 'Money') {
      otherKeys.push('defaultValueMoney' as keyof IElementDefinition);
      otherKeys.push('_defaultValueMoney' as keyof IElementDefinition);
    }
    if (type !== 'Period') {
      otherKeys.push('defaultValuePeriod' as keyof IElementDefinition);
      otherKeys.push('_defaultValuePeriod' as keyof IElementDefinition);
    }
    if (type !== 'Quantity') {
      otherKeys.push('defaultValueQuantity' as keyof IElementDefinition);
      otherKeys.push('_defaultValueQuantity' as keyof IElementDefinition);
    }
    if (type !== 'Range') {
      otherKeys.push('defaultValueRange' as keyof IElementDefinition);
      otherKeys.push('_defaultValueRange' as keyof IElementDefinition);
    }
    if (type !== 'Ratio') {
      otherKeys.push('defaultValueRatio' as keyof IElementDefinition);
      otherKeys.push('_defaultValueRatio' as keyof IElementDefinition);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('defaultValueRatioRange' as keyof IElementDefinition);
      otherKeys.push('_defaultValueRatioRange' as keyof IElementDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('defaultValueReference' as keyof IElementDefinition);
      otherKeys.push('_defaultValueReference' as keyof IElementDefinition);
    }
    if (type !== 'SampledData') {
      otherKeys.push('defaultValueSampledData' as keyof IElementDefinition);
      otherKeys.push('_defaultValueSampledData' as keyof IElementDefinition);
    }
    if (type !== 'Signature') {
      otherKeys.push('defaultValueSignature' as keyof IElementDefinition);
      otherKeys.push('_defaultValueSignature' as keyof IElementDefinition);
    }
    if (type !== 'Timing') {
      otherKeys.push('defaultValueTiming' as keyof IElementDefinition);
      otherKeys.push('_defaultValueTiming' as keyof IElementDefinition);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('defaultValueContactDetail' as keyof IElementDefinition);
      otherKeys.push('_defaultValueContactDetail' as keyof IElementDefinition);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('defaultValueDataRequirement' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDataRequirement' as keyof IElementDefinition);
    }
    if (type !== 'Expression') {
      otherKeys.push('defaultValueExpression' as keyof IElementDefinition);
      otherKeys.push('_defaultValueExpression' as keyof IElementDefinition);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('defaultValueParameterDefinition' as keyof IElementDefinition);
      otherKeys.push('_defaultValueParameterDefinition' as keyof IElementDefinition);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('defaultValueRelatedArtifact' as keyof IElementDefinition);
      otherKeys.push('_defaultValueRelatedArtifact' as keyof IElementDefinition);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('defaultValueTriggerDefinition' as keyof IElementDefinition);
      otherKeys.push('_defaultValueTriggerDefinition' as keyof IElementDefinition);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('defaultValueUsageContext' as keyof IElementDefinition);
      otherKeys.push('_defaultValueUsageContext' as keyof IElementDefinition);
    }
    if (type !== 'Availability') {
      otherKeys.push('defaultValueAvailability' as keyof IElementDefinition);
      otherKeys.push('_defaultValueAvailability' as keyof IElementDefinition);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('defaultValueExtendedContactDetail' as keyof IElementDefinition);
      otherKeys.push('_defaultValueExtendedContactDetail' as keyof IElementDefinition);
    }
    if (type !== 'Dosage') {
      otherKeys.push('defaultValueDosage' as keyof IElementDefinition);
      otherKeys.push('_defaultValueDosage' as keyof IElementDefinition);
    }
    if (type !== 'Meta') {
      otherKeys.push('defaultValueMeta' as keyof IElementDefinition);
      otherKeys.push('_defaultValueMeta' as keyof IElementDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set fixed choice type (fixedBase64Binary, fixedBoolean, fixedCanonical, fixedCode, fixedDate, fixedDateTime, fixedDecimal, fixedId, fixedInstant, fixedInteger, fixedInteger64, fixedMarkdown, fixedOid, fixedPositiveInt, fixedString, fixedTime, fixedUnsignedInt, fixedUri, fixedUrl, fixedUuid, fixedAddress, fixedAge, fixedAnnotation, fixedAttachment, fixedCodeableConcept, fixedCodeableReference, fixedCoding, fixedContactPoint, fixedCount, fixedDistance, fixedDuration, fixedHumanName, fixedIdentifier, fixedMoney, fixedPeriod, fixedQuantity, fixedRange, fixedRatio, fixedRatioRange, fixedReference, fixedSampledData, fixedSignature, fixedTiming, fixedContactDetail, fixedDataRequirement, fixedExpression, fixedParameterDefinition, fixedRelatedArtifact, fixedTriggerDefinition, fixedUsageContext, fixedAvailability, fixedExtendedContactDetail, fixedDosage, fixedMeta)
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setFixed('Base64Binary', value)
   */
  setFixed<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `fixed${type}` as keyof IElementDefinition;
    const otherKeys: (keyof IElementDefinition)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('fixedBase64Binary' as keyof IElementDefinition);
      otherKeys.push('_fixedBase64Binary' as keyof IElementDefinition);
    }
    if (type !== 'Boolean') {
      otherKeys.push('fixedBoolean' as keyof IElementDefinition);
      otherKeys.push('_fixedBoolean' as keyof IElementDefinition);
    }
    if (type !== 'Canonical') {
      otherKeys.push('fixedCanonical' as keyof IElementDefinition);
      otherKeys.push('_fixedCanonical' as keyof IElementDefinition);
    }
    if (type !== 'Code') {
      otherKeys.push('fixedCode' as keyof IElementDefinition);
      otherKeys.push('_fixedCode' as keyof IElementDefinition);
    }
    if (type !== 'Date') {
      otherKeys.push('fixedDate' as keyof IElementDefinition);
      otherKeys.push('_fixedDate' as keyof IElementDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('fixedDateTime' as keyof IElementDefinition);
      otherKeys.push('_fixedDateTime' as keyof IElementDefinition);
    }
    if (type !== 'Decimal') {
      otherKeys.push('fixedDecimal' as keyof IElementDefinition);
      otherKeys.push('_fixedDecimal' as keyof IElementDefinition);
    }
    if (type !== 'Id') {
      otherKeys.push('fixedId' as keyof IElementDefinition);
      otherKeys.push('_fixedId' as keyof IElementDefinition);
    }
    if (type !== 'Instant') {
      otherKeys.push('fixedInstant' as keyof IElementDefinition);
      otherKeys.push('_fixedInstant' as keyof IElementDefinition);
    }
    if (type !== 'Integer') {
      otherKeys.push('fixedInteger' as keyof IElementDefinition);
      otherKeys.push('_fixedInteger' as keyof IElementDefinition);
    }
    if (type !== 'Integer64') {
      otherKeys.push('fixedInteger64' as keyof IElementDefinition);
      otherKeys.push('_fixedInteger64' as keyof IElementDefinition);
    }
    if (type !== 'Markdown') {
      otherKeys.push('fixedMarkdown' as keyof IElementDefinition);
      otherKeys.push('_fixedMarkdown' as keyof IElementDefinition);
    }
    if (type !== 'Oid') {
      otherKeys.push('fixedOid' as keyof IElementDefinition);
      otherKeys.push('_fixedOid' as keyof IElementDefinition);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('fixedPositiveInt' as keyof IElementDefinition);
      otherKeys.push('_fixedPositiveInt' as keyof IElementDefinition);
    }
    if (type !== 'String') {
      otherKeys.push('fixedString' as keyof IElementDefinition);
      otherKeys.push('_fixedString' as keyof IElementDefinition);
    }
    if (type !== 'Time') {
      otherKeys.push('fixedTime' as keyof IElementDefinition);
      otherKeys.push('_fixedTime' as keyof IElementDefinition);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('fixedUnsignedInt' as keyof IElementDefinition);
      otherKeys.push('_fixedUnsignedInt' as keyof IElementDefinition);
    }
    if (type !== 'Uri') {
      otherKeys.push('fixedUri' as keyof IElementDefinition);
      otherKeys.push('_fixedUri' as keyof IElementDefinition);
    }
    if (type !== 'Url') {
      otherKeys.push('fixedUrl' as keyof IElementDefinition);
      otherKeys.push('_fixedUrl' as keyof IElementDefinition);
    }
    if (type !== 'Uuid') {
      otherKeys.push('fixedUuid' as keyof IElementDefinition);
      otherKeys.push('_fixedUuid' as keyof IElementDefinition);
    }
    if (type !== 'Address') {
      otherKeys.push('fixedAddress' as keyof IElementDefinition);
      otherKeys.push('_fixedAddress' as keyof IElementDefinition);
    }
    if (type !== 'Age') {
      otherKeys.push('fixedAge' as keyof IElementDefinition);
      otherKeys.push('_fixedAge' as keyof IElementDefinition);
    }
    if (type !== 'Annotation') {
      otherKeys.push('fixedAnnotation' as keyof IElementDefinition);
      otherKeys.push('_fixedAnnotation' as keyof IElementDefinition);
    }
    if (type !== 'Attachment') {
      otherKeys.push('fixedAttachment' as keyof IElementDefinition);
      otherKeys.push('_fixedAttachment' as keyof IElementDefinition);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('fixedCodeableConcept' as keyof IElementDefinition);
      otherKeys.push('_fixedCodeableConcept' as keyof IElementDefinition);
    }
    if (type !== 'CodeableReference') {
      otherKeys.push('fixedCodeableReference' as keyof IElementDefinition);
      otherKeys.push('_fixedCodeableReference' as keyof IElementDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('fixedCoding' as keyof IElementDefinition);
      otherKeys.push('_fixedCoding' as keyof IElementDefinition);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('fixedContactPoint' as keyof IElementDefinition);
      otherKeys.push('_fixedContactPoint' as keyof IElementDefinition);
    }
    if (type !== 'Count') {
      otherKeys.push('fixedCount' as keyof IElementDefinition);
      otherKeys.push('_fixedCount' as keyof IElementDefinition);
    }
    if (type !== 'Distance') {
      otherKeys.push('fixedDistance' as keyof IElementDefinition);
      otherKeys.push('_fixedDistance' as keyof IElementDefinition);
    }
    if (type !== 'Duration') {
      otherKeys.push('fixedDuration' as keyof IElementDefinition);
      otherKeys.push('_fixedDuration' as keyof IElementDefinition);
    }
    if (type !== 'HumanName') {
      otherKeys.push('fixedHumanName' as keyof IElementDefinition);
      otherKeys.push('_fixedHumanName' as keyof IElementDefinition);
    }
    if (type !== 'Identifier') {
      otherKeys.push('fixedIdentifier' as keyof IElementDefinition);
      otherKeys.push('_fixedIdentifier' as keyof IElementDefinition);
    }
    if (type !== 'Money') {
      otherKeys.push('fixedMoney' as keyof IElementDefinition);
      otherKeys.push('_fixedMoney' as keyof IElementDefinition);
    }
    if (type !== 'Period') {
      otherKeys.push('fixedPeriod' as keyof IElementDefinition);
      otherKeys.push('_fixedPeriod' as keyof IElementDefinition);
    }
    if (type !== 'Quantity') {
      otherKeys.push('fixedQuantity' as keyof IElementDefinition);
      otherKeys.push('_fixedQuantity' as keyof IElementDefinition);
    }
    if (type !== 'Range') {
      otherKeys.push('fixedRange' as keyof IElementDefinition);
      otherKeys.push('_fixedRange' as keyof IElementDefinition);
    }
    if (type !== 'Ratio') {
      otherKeys.push('fixedRatio' as keyof IElementDefinition);
      otherKeys.push('_fixedRatio' as keyof IElementDefinition);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('fixedRatioRange' as keyof IElementDefinition);
      otherKeys.push('_fixedRatioRange' as keyof IElementDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('fixedReference' as keyof IElementDefinition);
      otherKeys.push('_fixedReference' as keyof IElementDefinition);
    }
    if (type !== 'SampledData') {
      otherKeys.push('fixedSampledData' as keyof IElementDefinition);
      otherKeys.push('_fixedSampledData' as keyof IElementDefinition);
    }
    if (type !== 'Signature') {
      otherKeys.push('fixedSignature' as keyof IElementDefinition);
      otherKeys.push('_fixedSignature' as keyof IElementDefinition);
    }
    if (type !== 'Timing') {
      otherKeys.push('fixedTiming' as keyof IElementDefinition);
      otherKeys.push('_fixedTiming' as keyof IElementDefinition);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('fixedContactDetail' as keyof IElementDefinition);
      otherKeys.push('_fixedContactDetail' as keyof IElementDefinition);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('fixedDataRequirement' as keyof IElementDefinition);
      otherKeys.push('_fixedDataRequirement' as keyof IElementDefinition);
    }
    if (type !== 'Expression') {
      otherKeys.push('fixedExpression' as keyof IElementDefinition);
      otherKeys.push('_fixedExpression' as keyof IElementDefinition);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('fixedParameterDefinition' as keyof IElementDefinition);
      otherKeys.push('_fixedParameterDefinition' as keyof IElementDefinition);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('fixedRelatedArtifact' as keyof IElementDefinition);
      otherKeys.push('_fixedRelatedArtifact' as keyof IElementDefinition);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('fixedTriggerDefinition' as keyof IElementDefinition);
      otherKeys.push('_fixedTriggerDefinition' as keyof IElementDefinition);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('fixedUsageContext' as keyof IElementDefinition);
      otherKeys.push('_fixedUsageContext' as keyof IElementDefinition);
    }
    if (type !== 'Availability') {
      otherKeys.push('fixedAvailability' as keyof IElementDefinition);
      otherKeys.push('_fixedAvailability' as keyof IElementDefinition);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('fixedExtendedContactDetail' as keyof IElementDefinition);
      otherKeys.push('_fixedExtendedContactDetail' as keyof IElementDefinition);
    }
    if (type !== 'Dosage') {
      otherKeys.push('fixedDosage' as keyof IElementDefinition);
      otherKeys.push('_fixedDosage' as keyof IElementDefinition);
    }
    if (type !== 'Meta') {
      otherKeys.push('fixedMeta' as keyof IElementDefinition);
      otherKeys.push('_fixedMeta' as keyof IElementDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set pattern choice type (patternBase64Binary, patternBoolean, patternCanonical, patternCode, patternDate, patternDateTime, patternDecimal, patternId, patternInstant, patternInteger, patternInteger64, patternMarkdown, patternOid, patternPositiveInt, patternString, patternTime, patternUnsignedInt, patternUri, patternUrl, patternUuid, patternAddress, patternAge, patternAnnotation, patternAttachment, patternCodeableConcept, patternCodeableReference, patternCoding, patternContactPoint, patternCount, patternDistance, patternDuration, patternHumanName, patternIdentifier, patternMoney, patternPeriod, patternQuantity, patternRange, patternRatio, patternRatioRange, patternReference, patternSampledData, patternSignature, patternTiming, patternContactDetail, patternDataRequirement, patternExpression, patternParameterDefinition, patternRelatedArtifact, patternTriggerDefinition, patternUsageContext, patternAvailability, patternExtendedContactDetail, patternDosage, patternMeta)
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPattern('Base64Binary', value)
   */
  setPattern<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Integer64' | 'Markdown' | 'Oid' | 'PositiveInt' | 'String' | 'Time' | 'UnsignedInt' | 'Uri' | 'Url' | 'Uuid' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'CodeableReference' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'RatioRange' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Availability' | 'ExtendedContactDetail' | 'Dosage' | 'Meta'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `pattern${type}` as keyof IElementDefinition;
    const otherKeys: (keyof IElementDefinition)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('patternBase64Binary' as keyof IElementDefinition);
      otherKeys.push('_patternBase64Binary' as keyof IElementDefinition);
    }
    if (type !== 'Boolean') {
      otherKeys.push('patternBoolean' as keyof IElementDefinition);
      otherKeys.push('_patternBoolean' as keyof IElementDefinition);
    }
    if (type !== 'Canonical') {
      otherKeys.push('patternCanonical' as keyof IElementDefinition);
      otherKeys.push('_patternCanonical' as keyof IElementDefinition);
    }
    if (type !== 'Code') {
      otherKeys.push('patternCode' as keyof IElementDefinition);
      otherKeys.push('_patternCode' as keyof IElementDefinition);
    }
    if (type !== 'Date') {
      otherKeys.push('patternDate' as keyof IElementDefinition);
      otherKeys.push('_patternDate' as keyof IElementDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('patternDateTime' as keyof IElementDefinition);
      otherKeys.push('_patternDateTime' as keyof IElementDefinition);
    }
    if (type !== 'Decimal') {
      otherKeys.push('patternDecimal' as keyof IElementDefinition);
      otherKeys.push('_patternDecimal' as keyof IElementDefinition);
    }
    if (type !== 'Id') {
      otherKeys.push('patternId' as keyof IElementDefinition);
      otherKeys.push('_patternId' as keyof IElementDefinition);
    }
    if (type !== 'Instant') {
      otherKeys.push('patternInstant' as keyof IElementDefinition);
      otherKeys.push('_patternInstant' as keyof IElementDefinition);
    }
    if (type !== 'Integer') {
      otherKeys.push('patternInteger' as keyof IElementDefinition);
      otherKeys.push('_patternInteger' as keyof IElementDefinition);
    }
    if (type !== 'Integer64') {
      otherKeys.push('patternInteger64' as keyof IElementDefinition);
      otherKeys.push('_patternInteger64' as keyof IElementDefinition);
    }
    if (type !== 'Markdown') {
      otherKeys.push('patternMarkdown' as keyof IElementDefinition);
      otherKeys.push('_patternMarkdown' as keyof IElementDefinition);
    }
    if (type !== 'Oid') {
      otherKeys.push('patternOid' as keyof IElementDefinition);
      otherKeys.push('_patternOid' as keyof IElementDefinition);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('patternPositiveInt' as keyof IElementDefinition);
      otherKeys.push('_patternPositiveInt' as keyof IElementDefinition);
    }
    if (type !== 'String') {
      otherKeys.push('patternString' as keyof IElementDefinition);
      otherKeys.push('_patternString' as keyof IElementDefinition);
    }
    if (type !== 'Time') {
      otherKeys.push('patternTime' as keyof IElementDefinition);
      otherKeys.push('_patternTime' as keyof IElementDefinition);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('patternUnsignedInt' as keyof IElementDefinition);
      otherKeys.push('_patternUnsignedInt' as keyof IElementDefinition);
    }
    if (type !== 'Uri') {
      otherKeys.push('patternUri' as keyof IElementDefinition);
      otherKeys.push('_patternUri' as keyof IElementDefinition);
    }
    if (type !== 'Url') {
      otherKeys.push('patternUrl' as keyof IElementDefinition);
      otherKeys.push('_patternUrl' as keyof IElementDefinition);
    }
    if (type !== 'Uuid') {
      otherKeys.push('patternUuid' as keyof IElementDefinition);
      otherKeys.push('_patternUuid' as keyof IElementDefinition);
    }
    if (type !== 'Address') {
      otherKeys.push('patternAddress' as keyof IElementDefinition);
      otherKeys.push('_patternAddress' as keyof IElementDefinition);
    }
    if (type !== 'Age') {
      otherKeys.push('patternAge' as keyof IElementDefinition);
      otherKeys.push('_patternAge' as keyof IElementDefinition);
    }
    if (type !== 'Annotation') {
      otherKeys.push('patternAnnotation' as keyof IElementDefinition);
      otherKeys.push('_patternAnnotation' as keyof IElementDefinition);
    }
    if (type !== 'Attachment') {
      otherKeys.push('patternAttachment' as keyof IElementDefinition);
      otherKeys.push('_patternAttachment' as keyof IElementDefinition);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('patternCodeableConcept' as keyof IElementDefinition);
      otherKeys.push('_patternCodeableConcept' as keyof IElementDefinition);
    }
    if (type !== 'CodeableReference') {
      otherKeys.push('patternCodeableReference' as keyof IElementDefinition);
      otherKeys.push('_patternCodeableReference' as keyof IElementDefinition);
    }
    if (type !== 'Coding') {
      otherKeys.push('patternCoding' as keyof IElementDefinition);
      otherKeys.push('_patternCoding' as keyof IElementDefinition);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('patternContactPoint' as keyof IElementDefinition);
      otherKeys.push('_patternContactPoint' as keyof IElementDefinition);
    }
    if (type !== 'Count') {
      otherKeys.push('patternCount' as keyof IElementDefinition);
      otherKeys.push('_patternCount' as keyof IElementDefinition);
    }
    if (type !== 'Distance') {
      otherKeys.push('patternDistance' as keyof IElementDefinition);
      otherKeys.push('_patternDistance' as keyof IElementDefinition);
    }
    if (type !== 'Duration') {
      otherKeys.push('patternDuration' as keyof IElementDefinition);
      otherKeys.push('_patternDuration' as keyof IElementDefinition);
    }
    if (type !== 'HumanName') {
      otherKeys.push('patternHumanName' as keyof IElementDefinition);
      otherKeys.push('_patternHumanName' as keyof IElementDefinition);
    }
    if (type !== 'Identifier') {
      otherKeys.push('patternIdentifier' as keyof IElementDefinition);
      otherKeys.push('_patternIdentifier' as keyof IElementDefinition);
    }
    if (type !== 'Money') {
      otherKeys.push('patternMoney' as keyof IElementDefinition);
      otherKeys.push('_patternMoney' as keyof IElementDefinition);
    }
    if (type !== 'Period') {
      otherKeys.push('patternPeriod' as keyof IElementDefinition);
      otherKeys.push('_patternPeriod' as keyof IElementDefinition);
    }
    if (type !== 'Quantity') {
      otherKeys.push('patternQuantity' as keyof IElementDefinition);
      otherKeys.push('_patternQuantity' as keyof IElementDefinition);
    }
    if (type !== 'Range') {
      otherKeys.push('patternRange' as keyof IElementDefinition);
      otherKeys.push('_patternRange' as keyof IElementDefinition);
    }
    if (type !== 'Ratio') {
      otherKeys.push('patternRatio' as keyof IElementDefinition);
      otherKeys.push('_patternRatio' as keyof IElementDefinition);
    }
    if (type !== 'RatioRange') {
      otherKeys.push('patternRatioRange' as keyof IElementDefinition);
      otherKeys.push('_patternRatioRange' as keyof IElementDefinition);
    }
    if (type !== 'Reference') {
      otherKeys.push('patternReference' as keyof IElementDefinition);
      otherKeys.push('_patternReference' as keyof IElementDefinition);
    }
    if (type !== 'SampledData') {
      otherKeys.push('patternSampledData' as keyof IElementDefinition);
      otherKeys.push('_patternSampledData' as keyof IElementDefinition);
    }
    if (type !== 'Signature') {
      otherKeys.push('patternSignature' as keyof IElementDefinition);
      otherKeys.push('_patternSignature' as keyof IElementDefinition);
    }
    if (type !== 'Timing') {
      otherKeys.push('patternTiming' as keyof IElementDefinition);
      otherKeys.push('_patternTiming' as keyof IElementDefinition);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('patternContactDetail' as keyof IElementDefinition);
      otherKeys.push('_patternContactDetail' as keyof IElementDefinition);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('patternDataRequirement' as keyof IElementDefinition);
      otherKeys.push('_patternDataRequirement' as keyof IElementDefinition);
    }
    if (type !== 'Expression') {
      otherKeys.push('patternExpression' as keyof IElementDefinition);
      otherKeys.push('_patternExpression' as keyof IElementDefinition);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('patternParameterDefinition' as keyof IElementDefinition);
      otherKeys.push('_patternParameterDefinition' as keyof IElementDefinition);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('patternRelatedArtifact' as keyof IElementDefinition);
      otherKeys.push('_patternRelatedArtifact' as keyof IElementDefinition);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('patternTriggerDefinition' as keyof IElementDefinition);
      otherKeys.push('_patternTriggerDefinition' as keyof IElementDefinition);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('patternUsageContext' as keyof IElementDefinition);
      otherKeys.push('_patternUsageContext' as keyof IElementDefinition);
    }
    if (type !== 'Availability') {
      otherKeys.push('patternAvailability' as keyof IElementDefinition);
      otherKeys.push('_patternAvailability' as keyof IElementDefinition);
    }
    if (type !== 'ExtendedContactDetail') {
      otherKeys.push('patternExtendedContactDetail' as keyof IElementDefinition);
      otherKeys.push('_patternExtendedContactDetail' as keyof IElementDefinition);
    }
    if (type !== 'Dosage') {
      otherKeys.push('patternDosage' as keyof IElementDefinition);
      otherKeys.push('_patternDosage' as keyof IElementDefinition);
    }
    if (type !== 'Meta') {
      otherKeys.push('patternMeta' as keyof IElementDefinition);
      otherKeys.push('_patternMeta' as keyof IElementDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set minValue choice type (minValueDate, minValueDateTime, minValueInstant, minValueTime, minValueDecimal, minValueInteger, minValueInteger64, minValuePositiveInt, minValueUnsignedInt, minValueQuantity)
   * @param type - 'Date' | 'DateTime' | 'Instant' | 'Time' | 'Decimal' | 'Integer' | 'Integer64' | 'PositiveInt' | 'UnsignedInt' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMinValue('Date', value)
   */
  setMinValue<T extends 'Date' | 'DateTime' | 'Instant' | 'Time' | 'Decimal' | 'Integer' | 'Integer64' | 'PositiveInt' | 'UnsignedInt' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `minValue${type}` as keyof IElementDefinition;
    const otherKeys: (keyof IElementDefinition)[] = [];
    if (type !== 'Date') {
      otherKeys.push('minValueDate' as keyof IElementDefinition);
      otherKeys.push('_minValueDate' as keyof IElementDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('minValueDateTime' as keyof IElementDefinition);
      otherKeys.push('_minValueDateTime' as keyof IElementDefinition);
    }
    if (type !== 'Instant') {
      otherKeys.push('minValueInstant' as keyof IElementDefinition);
      otherKeys.push('_minValueInstant' as keyof IElementDefinition);
    }
    if (type !== 'Time') {
      otherKeys.push('minValueTime' as keyof IElementDefinition);
      otherKeys.push('_minValueTime' as keyof IElementDefinition);
    }
    if (type !== 'Decimal') {
      otherKeys.push('minValueDecimal' as keyof IElementDefinition);
      otherKeys.push('_minValueDecimal' as keyof IElementDefinition);
    }
    if (type !== 'Integer') {
      otherKeys.push('minValueInteger' as keyof IElementDefinition);
      otherKeys.push('_minValueInteger' as keyof IElementDefinition);
    }
    if (type !== 'Integer64') {
      otherKeys.push('minValueInteger64' as keyof IElementDefinition);
      otherKeys.push('_minValueInteger64' as keyof IElementDefinition);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('minValuePositiveInt' as keyof IElementDefinition);
      otherKeys.push('_minValuePositiveInt' as keyof IElementDefinition);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('minValueUnsignedInt' as keyof IElementDefinition);
      otherKeys.push('_minValueUnsignedInt' as keyof IElementDefinition);
    }
    if (type !== 'Quantity') {
      otherKeys.push('minValueQuantity' as keyof IElementDefinition);
      otherKeys.push('_minValueQuantity' as keyof IElementDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set maxValue choice type (maxValueDate, maxValueDateTime, maxValueInstant, maxValueTime, maxValueDecimal, maxValueInteger, maxValueInteger64, maxValuePositiveInt, maxValueUnsignedInt, maxValueQuantity)
   * @param type - 'Date' | 'DateTime' | 'Instant' | 'Time' | 'Decimal' | 'Integer' | 'Integer64' | 'PositiveInt' | 'UnsignedInt' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMaxValue('Date', value)
   */
  setMaxValue<T extends 'Date' | 'DateTime' | 'Instant' | 'Time' | 'Decimal' | 'Integer' | 'Integer64' | 'PositiveInt' | 'UnsignedInt' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `maxValue${type}` as keyof IElementDefinition;
    const otherKeys: (keyof IElementDefinition)[] = [];
    if (type !== 'Date') {
      otherKeys.push('maxValueDate' as keyof IElementDefinition);
      otherKeys.push('_maxValueDate' as keyof IElementDefinition);
    }
    if (type !== 'DateTime') {
      otherKeys.push('maxValueDateTime' as keyof IElementDefinition);
      otherKeys.push('_maxValueDateTime' as keyof IElementDefinition);
    }
    if (type !== 'Instant') {
      otherKeys.push('maxValueInstant' as keyof IElementDefinition);
      otherKeys.push('_maxValueInstant' as keyof IElementDefinition);
    }
    if (type !== 'Time') {
      otherKeys.push('maxValueTime' as keyof IElementDefinition);
      otherKeys.push('_maxValueTime' as keyof IElementDefinition);
    }
    if (type !== 'Decimal') {
      otherKeys.push('maxValueDecimal' as keyof IElementDefinition);
      otherKeys.push('_maxValueDecimal' as keyof IElementDefinition);
    }
    if (type !== 'Integer') {
      otherKeys.push('maxValueInteger' as keyof IElementDefinition);
      otherKeys.push('_maxValueInteger' as keyof IElementDefinition);
    }
    if (type !== 'Integer64') {
      otherKeys.push('maxValueInteger64' as keyof IElementDefinition);
      otherKeys.push('_maxValueInteger64' as keyof IElementDefinition);
    }
    if (type !== 'PositiveInt') {
      otherKeys.push('maxValuePositiveInt' as keyof IElementDefinition);
      otherKeys.push('_maxValuePositiveInt' as keyof IElementDefinition);
    }
    if (type !== 'UnsignedInt') {
      otherKeys.push('maxValueUnsignedInt' as keyof IElementDefinition);
      otherKeys.push('_maxValueUnsignedInt' as keyof IElementDefinition);
    }
    if (type !== 'Quantity') {
      otherKeys.push('maxValueQuantity' as keyof IElementDefinition);
      otherKeys.push('_maxValueQuantity' as keyof IElementDefinition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add representation
   * xmlAttr | xmlText | typeAttr | cdaText | xhtml
   */
  addRepresentation(representation: PropertyRepresentationType): this {
    return this.addToArray('representation', representation);
  }

  /**
   * Add code
   * Corresponding codes in terminologies
   */
  addCode(code: ICoding): this {
    return this.addToArray('code', code);
  }

  /**
   * Add alias
   * Other names
   */
  addAlias(alia: string): this {
    return this.addToArray('alias', alia);
  }

  /**
   * Add type
   * Data type and Profile for this element
   */
  addType(type: IElementDefinitionType): this {
    return this.addToArray('type', type);
  }

  /**
   * Add example
   * Example value (as defined for type)
   */
  addExample(example: IElementDefinitionExample): this {
    return this.addToArray('example', example);
  }

  /**
   * Add condition
   * Reference to invariant about presence
   */
  addCondition(condition: string): this {
    return this.addToArray('condition', condition);
  }

  /**
   * Add constraint
   * Condition that must evaluate to true
   */
  addConstraint(constraint: IElementDefinitionConstraint): this {
    return this.addToArray('constraint', constraint);
  }

  /**
   * Add valueAlternatives
   * Extensions that are allowed to replace a primitive value
   */
  addValueAlternatives(valueAlternativ: string): this {
    return this.addToArray('valueAlternatives', valueAlternativ);
  }

  /**
   * Add mapping
   * Map element to another set of definitions
   */
  addMapping(mapping: IElementDefinitionMapping): this {
    return this.addToArray('mapping', mapping);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinition instance
   */
  build(): ElementDefinition {
    return new ElementDefinition(this.data);
  }

  /**
   * Build and validate the ElementDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinition> {
    const elementDefinition = this.build();
    await elementDefinition.validateOrThrow();
    return elementDefinition;
  }
}
