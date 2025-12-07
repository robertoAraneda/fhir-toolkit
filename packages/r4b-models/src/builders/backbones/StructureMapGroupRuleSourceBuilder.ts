import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupRuleSource } from '../../models/backbones/StructureMapGroupRuleSource.js';
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
  IStructureMapGroupRuleSource,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
  StructureMapSourceListModeType,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureMapGroupRuleSourceBuilder - Fluent builder for StructureMapGroupRuleSource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupRuleSource = new StructureMapGroupRuleSourceBuilder()
 *   .setContext(value)
 *   .build();
 */
export class StructureMapGroupRuleSourceBuilder extends BackboneElementBuilder<StructureMapGroupRuleSource, IStructureMapGroupRuleSource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set context
   * Type or variable this rule applies to
   */
  setContext(context: string): this {
    this.data.context = context;
    return this;
  }

  /**
   * Set min
   * Specified minimum cardinality
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Specified maximum cardinality (number or *)
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  /**
   * Set type
   * Rule only applies if source has this type
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set defaultValuePositiveInt
   * Default value if no value exists
   */
  setDefaultValuePositiveInt(defaultValuePositiveInt: number): this {
    this.data.defaultValuePositiveInt = defaultValuePositiveInt;
    return this;
  }

  /**
   * Set defaultValueUnsignedInt
   * Default value if no value exists
   */
  setDefaultValueUnsignedInt(defaultValueUnsignedInt: number): this {
    this.data.defaultValueUnsignedInt = defaultValueUnsignedInt;
    return this;
  }

  /**
   * Set defaultValueUuid
   * Default value if no value exists
   */
  setDefaultValueUuid(defaultValueUuid: string): this {
    this.data.defaultValueUuid = defaultValueUuid;
    return this;
  }

  /**
   * Set element
   * Optional field for this source
   */
  setElement(element: string): this {
    this.data.element = element;
    return this;
  }

  /**
   * Set listMode
   * first | not_first | last | not_last | only_one
   */
  setListMode(listMode: StructureMapSourceListModeType): this {
    this.data.listMode = listMode;
    return this;
  }

  /**
   * Set variable
   * Named context for field, if a field is specified
   */
  setVariable(variable: string): this {
    this.data.variable = variable;
    return this;
  }

  /**
   * Set condition
   * FHIRPath expression  - must be true or the rule does not apply
   */
  setCondition(condition: string): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set check
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing
   */
  setCheck(check: string): this {
    this.data.check = check;
    return this;
  }

  /**
   * Set logMessage
   * Message to put in log if source exists (FHIRPath)
   */
  setLogMessage(logMessage: string): this {
    this.data.logMessage = logMessage;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set defaultValue choice type
   * @param type - 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Markdown' | 'Oid' | 'String' | 'Time' | 'Uri' | 'Url' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'Contributor' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Dosage' | 'Meta'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefaultValue('Base64Binary', value)
   */
  setDefaultValue<T extends 'Base64Binary' | 'Boolean' | 'Canonical' | 'Code' | 'Date' | 'DateTime' | 'Decimal' | 'Id' | 'Instant' | 'Integer' | 'Markdown' | 'Oid' | 'String' | 'Time' | 'Uri' | 'Url' | 'Address' | 'Age' | 'Annotation' | 'Attachment' | 'CodeableConcept' | 'Coding' | 'ContactPoint' | 'Count' | 'Distance' | 'Duration' | 'HumanName' | 'Identifier' | 'Money' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'Reference' | 'SampledData' | 'Signature' | 'Timing' | 'ContactDetail' | 'Contributor' | 'DataRequirement' | 'Expression' | 'ParameterDefinition' | 'RelatedArtifact' | 'TriggerDefinition' | 'UsageContext' | 'Dosage' | 'Meta'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `defaultValue${type}` as keyof IStructureMapGroupRuleSource;
    const otherKeys: (keyof IStructureMapGroupRuleSource)[] = [];
    if (type !== 'Base64Binary') {
      otherKeys.push('defaultValueBase64Binary' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueBase64Binary' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Boolean') {
      otherKeys.push('defaultValueBoolean' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueBoolean' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Canonical') {
      otherKeys.push('defaultValueCanonical' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueCanonical' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Code') {
      otherKeys.push('defaultValueCode' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueCode' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Date') {
      otherKeys.push('defaultValueDate' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDate' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'DateTime') {
      otherKeys.push('defaultValueDateTime' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDateTime' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Decimal') {
      otherKeys.push('defaultValueDecimal' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDecimal' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Id') {
      otherKeys.push('defaultValueId' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueId' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Instant') {
      otherKeys.push('defaultValueInstant' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueInstant' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Integer') {
      otherKeys.push('defaultValueInteger' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueInteger' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Markdown') {
      otherKeys.push('defaultValueMarkdown' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueMarkdown' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Oid') {
      otherKeys.push('defaultValueOid' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueOid' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'String') {
      otherKeys.push('defaultValueString' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueString' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Time') {
      otherKeys.push('defaultValueTime' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueTime' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Uri') {
      otherKeys.push('defaultValueUri' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueUri' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Url') {
      otherKeys.push('defaultValueUrl' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueUrl' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Address') {
      otherKeys.push('defaultValueAddress' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueAddress' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Age') {
      otherKeys.push('defaultValueAge' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueAge' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Annotation') {
      otherKeys.push('defaultValueAnnotation' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueAnnotation' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Attachment') {
      otherKeys.push('defaultValueAttachment' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueAttachment' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('defaultValueCodeableConcept' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueCodeableConcept' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Coding') {
      otherKeys.push('defaultValueCoding' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueCoding' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'ContactPoint') {
      otherKeys.push('defaultValueContactPoint' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueContactPoint' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Count') {
      otherKeys.push('defaultValueCount' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueCount' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Distance') {
      otherKeys.push('defaultValueDistance' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDistance' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Duration') {
      otherKeys.push('defaultValueDuration' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDuration' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'HumanName') {
      otherKeys.push('defaultValueHumanName' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueHumanName' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Identifier') {
      otherKeys.push('defaultValueIdentifier' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueIdentifier' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Money') {
      otherKeys.push('defaultValueMoney' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueMoney' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Period') {
      otherKeys.push('defaultValuePeriod' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValuePeriod' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Quantity') {
      otherKeys.push('defaultValueQuantity' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueQuantity' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Range') {
      otherKeys.push('defaultValueRange' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueRange' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Ratio') {
      otherKeys.push('defaultValueRatio' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueRatio' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Reference') {
      otherKeys.push('defaultValueReference' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueReference' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'SampledData') {
      otherKeys.push('defaultValueSampledData' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueSampledData' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Signature') {
      otherKeys.push('defaultValueSignature' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueSignature' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Timing') {
      otherKeys.push('defaultValueTiming' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueTiming' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'ContactDetail') {
      otherKeys.push('defaultValueContactDetail' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueContactDetail' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Contributor') {
      otherKeys.push('defaultValueContributor' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueContributor' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('defaultValueDataRequirement' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDataRequirement' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Expression') {
      otherKeys.push('defaultValueExpression' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueExpression' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'ParameterDefinition') {
      otherKeys.push('defaultValueParameterDefinition' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueParameterDefinition' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'RelatedArtifact') {
      otherKeys.push('defaultValueRelatedArtifact' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueRelatedArtifact' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('defaultValueTriggerDefinition' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueTriggerDefinition' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'UsageContext') {
      otherKeys.push('defaultValueUsageContext' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueUsageContext' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Dosage') {
      otherKeys.push('defaultValueDosage' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueDosage' as keyof IStructureMapGroupRuleSource);
    }
    if (type !== 'Meta') {
      otherKeys.push('defaultValueMeta' as keyof IStructureMapGroupRuleSource);
      otherKeys.push('_defaultValueMeta' as keyof IStructureMapGroupRuleSource);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupRuleSource instance
   */
  build(): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource(this.data);
  }

  /**
   * Build and validate the StructureMapGroupRuleSource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupRuleSource> {
    const structureMapGroupRuleSource = this.build();
    await structureMapGroupRuleSource.validateOrThrow();
    return structureMapGroupRuleSource;
  }
}
