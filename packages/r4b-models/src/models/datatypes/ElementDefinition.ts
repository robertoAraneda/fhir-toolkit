import { Element } from '../base/Element.js';
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
  IElement,
  IElementDefinition,
  IElementDefinitionBase,
  IElementDefinitionBinding,
  IElementDefinitionConstraint,
  IElementDefinitionExample,
  IElementDefinitionMapping,
  IElementDefinitionSlicing,
  IElementDefinitionType,
  IExpression,
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
  PropertyRepresentationType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ElementDefinition */
const ELEMENT_DEFINITION_PROPERTIES = [
  'path',
  '_path',
  'representation',
  '_representation',
  'sliceName',
  '_sliceName',
  'sliceIsConstraining',
  '_sliceIsConstraining',
  'label',
  '_label',
  'code',
  'slicing',
  'short',
  '_short',
  'definition',
  '_definition',
  'comment',
  '_comment',
  'requirements',
  '_requirements',
  'alias',
  '_alias',
  'min',
  '_min',
  'max',
  '_max',
  'base',
  'contentReference',
  '_contentReference',
  'type',
  'defaultValueBase64Binary',
  '_defaultValueBase64Binary',
  'defaultValueBoolean',
  '_defaultValueBoolean',
  'defaultValueCanonical',
  '_defaultValueCanonical',
  'defaultValueCode',
  '_defaultValueCode',
  'defaultValueDate',
  '_defaultValueDate',
  'defaultValueDateTime',
  '_defaultValueDateTime',
  'defaultValueDecimal',
  '_defaultValueDecimal',
  'defaultValueId',
  '_defaultValueId',
  'defaultValueInstant',
  '_defaultValueInstant',
  'defaultValueInteger',
  '_defaultValueInteger',
  'defaultValueMarkdown',
  '_defaultValueMarkdown',
  'defaultValueOid',
  '_defaultValueOid',
  'defaultValuePositiveInt',
  '_defaultValuePositiveInt',
  'defaultValueString',
  '_defaultValueString',
  'defaultValueTime',
  '_defaultValueTime',
  'defaultValueUnsignedInt',
  '_defaultValueUnsignedInt',
  'defaultValueUri',
  '_defaultValueUri',
  'defaultValueUrl',
  '_defaultValueUrl',
  'defaultValueUuid',
  '_defaultValueUuid',
  'defaultValueAddress',
  'defaultValueAge',
  'defaultValueAnnotation',
  'defaultValueAttachment',
  'defaultValueCodeableConcept',
  'defaultValueCodeableReference',
  'defaultValueCoding',
  'defaultValueContactPoint',
  'defaultValueCount',
  'defaultValueDistance',
  'defaultValueDuration',
  'defaultValueHumanName',
  'defaultValueIdentifier',
  'defaultValueMoney',
  'defaultValuePeriod',
  'defaultValueQuantity',
  'defaultValueRange',
  'defaultValueRatio',
  'defaultValueRatioRange',
  'defaultValueReference',
  'defaultValueSampledData',
  'defaultValueSignature',
  'defaultValueTiming',
  'defaultValueContactDetail',
  'defaultValueContributor',
  'defaultValueDataRequirement',
  'defaultValueExpression',
  'defaultValueParameterDefinition',
  'defaultValueRelatedArtifact',
  'defaultValueTriggerDefinition',
  'defaultValueUsageContext',
  'defaultValueDosage',
  'meaningWhenMissing',
  '_meaningWhenMissing',
  'orderMeaning',
  '_orderMeaning',
  'fixedBase64Binary',
  '_fixedBase64Binary',
  'fixedBoolean',
  '_fixedBoolean',
  'fixedCanonical',
  '_fixedCanonical',
  'fixedCode',
  '_fixedCode',
  'fixedDate',
  '_fixedDate',
  'fixedDateTime',
  '_fixedDateTime',
  'fixedDecimal',
  '_fixedDecimal',
  'fixedId',
  '_fixedId',
  'fixedInstant',
  '_fixedInstant',
  'fixedInteger',
  '_fixedInteger',
  'fixedMarkdown',
  '_fixedMarkdown',
  'fixedOid',
  '_fixedOid',
  'fixedPositiveInt',
  '_fixedPositiveInt',
  'fixedString',
  '_fixedString',
  'fixedTime',
  '_fixedTime',
  'fixedUnsignedInt',
  '_fixedUnsignedInt',
  'fixedUri',
  '_fixedUri',
  'fixedUrl',
  '_fixedUrl',
  'fixedUuid',
  '_fixedUuid',
  'fixedAddress',
  'fixedAge',
  'fixedAnnotation',
  'fixedAttachment',
  'fixedCodeableConcept',
  'fixedCodeableReference',
  'fixedCoding',
  'fixedContactPoint',
  'fixedCount',
  'fixedDistance',
  'fixedDuration',
  'fixedHumanName',
  'fixedIdentifier',
  'fixedMoney',
  'fixedPeriod',
  'fixedQuantity',
  'fixedRange',
  'fixedRatio',
  'fixedRatioRange',
  'fixedReference',
  'fixedSampledData',
  'fixedSignature',
  'fixedTiming',
  'fixedContactDetail',
  'fixedContributor',
  'fixedDataRequirement',
  'fixedExpression',
  'fixedParameterDefinition',
  'fixedRelatedArtifact',
  'fixedTriggerDefinition',
  'fixedUsageContext',
  'fixedDosage',
  'patternBase64Binary',
  '_patternBase64Binary',
  'patternBoolean',
  '_patternBoolean',
  'patternCanonical',
  '_patternCanonical',
  'patternCode',
  '_patternCode',
  'patternDate',
  '_patternDate',
  'patternDateTime',
  '_patternDateTime',
  'patternDecimal',
  '_patternDecimal',
  'patternId',
  '_patternId',
  'patternInstant',
  '_patternInstant',
  'patternInteger',
  '_patternInteger',
  'patternMarkdown',
  '_patternMarkdown',
  'patternOid',
  '_patternOid',
  'patternPositiveInt',
  '_patternPositiveInt',
  'patternString',
  '_patternString',
  'patternTime',
  '_patternTime',
  'patternUnsignedInt',
  '_patternUnsignedInt',
  'patternUri',
  '_patternUri',
  'patternUrl',
  '_patternUrl',
  'patternUuid',
  '_patternUuid',
  'patternAddress',
  'patternAge',
  'patternAnnotation',
  'patternAttachment',
  'patternCodeableConcept',
  'patternCodeableReference',
  'patternCoding',
  'patternContactPoint',
  'patternCount',
  'patternDistance',
  'patternDuration',
  'patternHumanName',
  'patternIdentifier',
  'patternMoney',
  'patternPeriod',
  'patternQuantity',
  'patternRange',
  'patternRatio',
  'patternRatioRange',
  'patternReference',
  'patternSampledData',
  'patternSignature',
  'patternTiming',
  'patternContactDetail',
  'patternContributor',
  'patternDataRequirement',
  'patternExpression',
  'patternParameterDefinition',
  'patternRelatedArtifact',
  'patternTriggerDefinition',
  'patternUsageContext',
  'patternDosage',
  'example',
  'minValueDate',
  '_minValueDate',
  'minValueDateTime',
  '_minValueDateTime',
  'minValueInstant',
  '_minValueInstant',
  'minValueTime',
  '_minValueTime',
  'minValueDecimal',
  '_minValueDecimal',
  'minValueInteger',
  '_minValueInteger',
  'minValuePositiveInt',
  '_minValuePositiveInt',
  'minValueUnsignedInt',
  '_minValueUnsignedInt',
  'minValueQuantity',
  'maxValueDate',
  '_maxValueDate',
  'maxValueDateTime',
  '_maxValueDateTime',
  'maxValueInstant',
  '_maxValueInstant',
  'maxValueTime',
  '_maxValueTime',
  'maxValueDecimal',
  '_maxValueDecimal',
  'maxValueInteger',
  '_maxValueInteger',
  'maxValuePositiveInt',
  '_maxValuePositiveInt',
  'maxValueUnsignedInt',
  '_maxValueUnsignedInt',
  'maxValueQuantity',
  'maxLength',
  '_maxLength',
  'condition',
  '_condition',
  'constraint',
  'mustSupport',
  '_mustSupport',
  'isModifier',
  '_isModifier',
  'isModifierReason',
  '_isModifierReason',
  'isSummary',
  '_isSummary',
  'binding',
  'mapping',
] as const;

/**
 * ElementDefinition - Captures constraints on each element within the resource, profile, or extension.
 *
 * @see https://hl7.org/fhir/R4/elementdefinition.html
 *
 * @example
 * const elementDefinition = new ElementDefinition({
 *   // ... properties
 * });
 */
export class ElementDefinition extends Element implements IElementDefinition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Path of the element in the hierarchy of elements */
  path: string;

  /** Extension for path */
  _path?: IElement;

  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
  representation?: PropertyRepresentationType[];

  /** Extension for representation */
  _representation?: IElement;

  /** Name for this particular element (in a set of slices) */
  sliceName?: string;

  /** Extension for sliceName */
  _sliceName?: IElement;

  /** If this slice definition constrains an inherited slice definition (or not) */
  sliceIsConstraining?: boolean;

  /** Extension for sliceIsConstraining */
  _sliceIsConstraining?: IElement;

  /** Name for element to display with or prompt for element */
  label?: string;

  /** Extension for label */
  _label?: IElement;

  /** Corresponding codes in terminologies */
  code?: ICoding[];

  /** This element is sliced - slices follow */
  slicing?: IElementDefinitionSlicing;

  /** Concise definition for space-constrained presentation */
  short?: string;

  /** Extension for short */
  _short?: IElement;

  /** Full formal definition as narrative text */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  /** Comments about the use of this element */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Why this resource has been created */
  requirements?: string;

  /** Extension for requirements */
  _requirements?: IElement;

  /** Other names */
  alias?: string[];

  /** Extension for alias */
  _alias?: IElement;

  /** Minimum Cardinality */
  min?: number;

  /** Extension for min */
  _min?: IElement;

  /** Maximum Cardinality (a number or *) */
  max?: string;

  /** Extension for max */
  _max?: IElement;

  /** Base definition information for tools */
  base?: IElementDefinitionBase;

  /** Reference to definition of content for the element */
  contentReference?: string;

  /** Extension for contentReference */
  _contentReference?: IElement;

  /** Data type and Profile for this element */
  type?: IElementDefinitionType[];

  /** Specified value if missing from instance */
  defaultValueBase64Binary?: string;

  /** Extension for defaultValueBase64Binary */
  _defaultValueBase64Binary?: IElement;

  /** Specified value if missing from instance */
  defaultValueBoolean?: boolean;

  /** Extension for defaultValueBoolean */
  _defaultValueBoolean?: IElement;

  /** Specified value if missing from instance */
  defaultValueCanonical?: string;

  /** Extension for defaultValueCanonical */
  _defaultValueCanonical?: IElement;

  /** Specified value if missing from instance */
  defaultValueCode?: string;

  /** Extension for defaultValueCode */
  _defaultValueCode?: IElement;

  /** Specified value if missing from instance */
  defaultValueDate?: string;

  /** Extension for defaultValueDate */
  _defaultValueDate?: IElement;

  /** Specified value if missing from instance */
  defaultValueDateTime?: string;

  /** Extension for defaultValueDateTime */
  _defaultValueDateTime?: IElement;

  /** Specified value if missing from instance */
  defaultValueDecimal?: number;

  /** Extension for defaultValueDecimal */
  _defaultValueDecimal?: IElement;

  /** Specified value if missing from instance */
  defaultValueId?: string;

  /** Extension for defaultValueId */
  _defaultValueId?: IElement;

  /** Specified value if missing from instance */
  defaultValueInstant?: string;

  /** Extension for defaultValueInstant */
  _defaultValueInstant?: IElement;

  /** Specified value if missing from instance */
  defaultValueInteger?: number;

  /** Extension for defaultValueInteger */
  _defaultValueInteger?: IElement;

  /** Specified value if missing from instance */
  defaultValueMarkdown?: string;

  /** Extension for defaultValueMarkdown */
  _defaultValueMarkdown?: IElement;

  /** Specified value if missing from instance */
  defaultValueOid?: string;

  /** Extension for defaultValueOid */
  _defaultValueOid?: IElement;

  /** Specified value if missing from instance */
  defaultValuePositiveInt?: number;

  /** Extension for defaultValuePositiveInt */
  _defaultValuePositiveInt?: IElement;

  /** Specified value if missing from instance */
  defaultValueString?: string;

  /** Extension for defaultValueString */
  _defaultValueString?: IElement;

  /** Specified value if missing from instance */
  defaultValueTime?: string;

  /** Extension for defaultValueTime */
  _defaultValueTime?: IElement;

  /** Specified value if missing from instance */
  defaultValueUnsignedInt?: number;

  /** Extension for defaultValueUnsignedInt */
  _defaultValueUnsignedInt?: IElement;

  /** Specified value if missing from instance */
  defaultValueUri?: string;

  /** Extension for defaultValueUri */
  _defaultValueUri?: IElement;

  /** Specified value if missing from instance */
  defaultValueUrl?: string;

  /** Extension for defaultValueUrl */
  _defaultValueUrl?: IElement;

  /** Specified value if missing from instance */
  defaultValueUuid?: string;

  /** Extension for defaultValueUuid */
  _defaultValueUuid?: IElement;

  /** Specified value if missing from instance */
  defaultValueAddress?: IAddress;

  /** Specified value if missing from instance */
  defaultValueAge?: IAge;

  /** Specified value if missing from instance */
  defaultValueAnnotation?: IAnnotation;

  /** Specified value if missing from instance */
  defaultValueAttachment?: IAttachment;

  /** Specified value if missing from instance */
  defaultValueCodeableConcept?: ICodeableConcept;

  /** Specified value if missing from instance */
  defaultValueCodeableReference?: ICodeableReference;

  /** Specified value if missing from instance */
  defaultValueCoding?: ICoding;

  /** Specified value if missing from instance */
  defaultValueContactPoint?: IContactPoint;

  /** Specified value if missing from instance */
  defaultValueCount?: ICount;

  /** Specified value if missing from instance */
  defaultValueDistance?: IDistance;

  /** Specified value if missing from instance */
  defaultValueDuration?: IDuration;

  /** Specified value if missing from instance */
  defaultValueHumanName?: IHumanName;

  /** Specified value if missing from instance */
  defaultValueIdentifier?: IIdentifier;

  /** Specified value if missing from instance */
  defaultValueMoney?: IMoney;

  /** Specified value if missing from instance */
  defaultValuePeriod?: IPeriod;

  /** Specified value if missing from instance */
  defaultValueQuantity?: IQuantity;

  /** Specified value if missing from instance */
  defaultValueRange?: IRange;

  /** Specified value if missing from instance */
  defaultValueRatio?: IRatio;

  /** Specified value if missing from instance */
  defaultValueRatioRange?: IRatioRange;

  /** Specified value if missing from instance */
  defaultValueReference?: IReference;

  /** Specified value if missing from instance */
  defaultValueSampledData?: ISampledData;

  /** Specified value if missing from instance */
  defaultValueSignature?: ISignature;

  /** Specified value if missing from instance */
  defaultValueTiming?: ITiming;

  /** Specified value if missing from instance */
  defaultValueContactDetail?: IContactDetail;

  /** Specified value if missing from instance */
  defaultValueContributor?: IContributor;

  /** Specified value if missing from instance */
  defaultValueDataRequirement?: IDataRequirement;

  /** Specified value if missing from instance */
  defaultValueExpression?: IExpression;

  /** Specified value if missing from instance */
  defaultValueParameterDefinition?: IParameterDefinition;

  /** Specified value if missing from instance */
  defaultValueRelatedArtifact?: IRelatedArtifact;

  /** Specified value if missing from instance */
  defaultValueTriggerDefinition?: ITriggerDefinition;

  /** Specified value if missing from instance */
  defaultValueUsageContext?: IUsageContext;

  /** Specified value if missing from instance */
  defaultValueDosage?: IDosage;

  /** Implicit meaning when this element is missing */
  meaningWhenMissing?: string;

  /** Extension for meaningWhenMissing */
  _meaningWhenMissing?: IElement;

  /** What the order of the elements means */
  orderMeaning?: string;

  /** Extension for orderMeaning */
  _orderMeaning?: IElement;

  /** Value must be exactly this */
  fixedBase64Binary?: string;

  /** Extension for fixedBase64Binary */
  _fixedBase64Binary?: IElement;

  /** Value must be exactly this */
  fixedBoolean?: boolean;

  /** Extension for fixedBoolean */
  _fixedBoolean?: IElement;

  /** Value must be exactly this */
  fixedCanonical?: string;

  /** Extension for fixedCanonical */
  _fixedCanonical?: IElement;

  /** Value must be exactly this */
  fixedCode?: string;

  /** Extension for fixedCode */
  _fixedCode?: IElement;

  /** Value must be exactly this */
  fixedDate?: string;

  /** Extension for fixedDate */
  _fixedDate?: IElement;

  /** Value must be exactly this */
  fixedDateTime?: string;

  /** Extension for fixedDateTime */
  _fixedDateTime?: IElement;

  /** Value must be exactly this */
  fixedDecimal?: number;

  /** Extension for fixedDecimal */
  _fixedDecimal?: IElement;

  /** Value must be exactly this */
  fixedId?: string;

  /** Extension for fixedId */
  _fixedId?: IElement;

  /** Value must be exactly this */
  fixedInstant?: string;

  /** Extension for fixedInstant */
  _fixedInstant?: IElement;

  /** Value must be exactly this */
  fixedInteger?: number;

  /** Extension for fixedInteger */
  _fixedInteger?: IElement;

  /** Value must be exactly this */
  fixedMarkdown?: string;

  /** Extension for fixedMarkdown */
  _fixedMarkdown?: IElement;

  /** Value must be exactly this */
  fixedOid?: string;

  /** Extension for fixedOid */
  _fixedOid?: IElement;

  /** Value must be exactly this */
  fixedPositiveInt?: number;

  /** Extension for fixedPositiveInt */
  _fixedPositiveInt?: IElement;

  /** Value must be exactly this */
  fixedString?: string;

  /** Extension for fixedString */
  _fixedString?: IElement;

  /** Value must be exactly this */
  fixedTime?: string;

  /** Extension for fixedTime */
  _fixedTime?: IElement;

  /** Value must be exactly this */
  fixedUnsignedInt?: number;

  /** Extension for fixedUnsignedInt */
  _fixedUnsignedInt?: IElement;

  /** Value must be exactly this */
  fixedUri?: string;

  /** Extension for fixedUri */
  _fixedUri?: IElement;

  /** Value must be exactly this */
  fixedUrl?: string;

  /** Extension for fixedUrl */
  _fixedUrl?: IElement;

  /** Value must be exactly this */
  fixedUuid?: string;

  /** Extension for fixedUuid */
  _fixedUuid?: IElement;

  /** Value must be exactly this */
  fixedAddress?: IAddress;

  /** Value must be exactly this */
  fixedAge?: IAge;

  /** Value must be exactly this */
  fixedAnnotation?: IAnnotation;

  /** Value must be exactly this */
  fixedAttachment?: IAttachment;

  /** Value must be exactly this */
  fixedCodeableConcept?: ICodeableConcept;

  /** Value must be exactly this */
  fixedCodeableReference?: ICodeableReference;

  /** Value must be exactly this */
  fixedCoding?: ICoding;

  /** Value must be exactly this */
  fixedContactPoint?: IContactPoint;

  /** Value must be exactly this */
  fixedCount?: ICount;

  /** Value must be exactly this */
  fixedDistance?: IDistance;

  /** Value must be exactly this */
  fixedDuration?: IDuration;

  /** Value must be exactly this */
  fixedHumanName?: IHumanName;

  /** Value must be exactly this */
  fixedIdentifier?: IIdentifier;

  /** Value must be exactly this */
  fixedMoney?: IMoney;

  /** Value must be exactly this */
  fixedPeriod?: IPeriod;

  /** Value must be exactly this */
  fixedQuantity?: IQuantity;

  /** Value must be exactly this */
  fixedRange?: IRange;

  /** Value must be exactly this */
  fixedRatio?: IRatio;

  /** Value must be exactly this */
  fixedRatioRange?: IRatioRange;

  /** Value must be exactly this */
  fixedReference?: IReference;

  /** Value must be exactly this */
  fixedSampledData?: ISampledData;

  /** Value must be exactly this */
  fixedSignature?: ISignature;

  /** Value must be exactly this */
  fixedTiming?: ITiming;

  /** Value must be exactly this */
  fixedContactDetail?: IContactDetail;

  /** Value must be exactly this */
  fixedContributor?: IContributor;

  /** Value must be exactly this */
  fixedDataRequirement?: IDataRequirement;

  /** Value must be exactly this */
  fixedExpression?: IExpression;

  /** Value must be exactly this */
  fixedParameterDefinition?: IParameterDefinition;

  /** Value must be exactly this */
  fixedRelatedArtifact?: IRelatedArtifact;

  /** Value must be exactly this */
  fixedTriggerDefinition?: ITriggerDefinition;

  /** Value must be exactly this */
  fixedUsageContext?: IUsageContext;

  /** Value must be exactly this */
  fixedDosage?: IDosage;

  /** Value must have at least these property values */
  patternBase64Binary?: string;

  /** Extension for patternBase64Binary */
  _patternBase64Binary?: IElement;

  /** Value must have at least these property values */
  patternBoolean?: boolean;

  /** Extension for patternBoolean */
  _patternBoolean?: IElement;

  /** Value must have at least these property values */
  patternCanonical?: string;

  /** Extension for patternCanonical */
  _patternCanonical?: IElement;

  /** Value must have at least these property values */
  patternCode?: string;

  /** Extension for patternCode */
  _patternCode?: IElement;

  /** Value must have at least these property values */
  patternDate?: string;

  /** Extension for patternDate */
  _patternDate?: IElement;

  /** Value must have at least these property values */
  patternDateTime?: string;

  /** Extension for patternDateTime */
  _patternDateTime?: IElement;

  /** Value must have at least these property values */
  patternDecimal?: number;

  /** Extension for patternDecimal */
  _patternDecimal?: IElement;

  /** Value must have at least these property values */
  patternId?: string;

  /** Extension for patternId */
  _patternId?: IElement;

  /** Value must have at least these property values */
  patternInstant?: string;

  /** Extension for patternInstant */
  _patternInstant?: IElement;

  /** Value must have at least these property values */
  patternInteger?: number;

  /** Extension for patternInteger */
  _patternInteger?: IElement;

  /** Value must have at least these property values */
  patternMarkdown?: string;

  /** Extension for patternMarkdown */
  _patternMarkdown?: IElement;

  /** Value must have at least these property values */
  patternOid?: string;

  /** Extension for patternOid */
  _patternOid?: IElement;

  /** Value must have at least these property values */
  patternPositiveInt?: number;

  /** Extension for patternPositiveInt */
  _patternPositiveInt?: IElement;

  /** Value must have at least these property values */
  patternString?: string;

  /** Extension for patternString */
  _patternString?: IElement;

  /** Value must have at least these property values */
  patternTime?: string;

  /** Extension for patternTime */
  _patternTime?: IElement;

  /** Value must have at least these property values */
  patternUnsignedInt?: number;

  /** Extension for patternUnsignedInt */
  _patternUnsignedInt?: IElement;

  /** Value must have at least these property values */
  patternUri?: string;

  /** Extension for patternUri */
  _patternUri?: IElement;

  /** Value must have at least these property values */
  patternUrl?: string;

  /** Extension for patternUrl */
  _patternUrl?: IElement;

  /** Value must have at least these property values */
  patternUuid?: string;

  /** Extension for patternUuid */
  _patternUuid?: IElement;

  /** Value must have at least these property values */
  patternAddress?: IAddress;

  /** Value must have at least these property values */
  patternAge?: IAge;

  /** Value must have at least these property values */
  patternAnnotation?: IAnnotation;

  /** Value must have at least these property values */
  patternAttachment?: IAttachment;

  /** Value must have at least these property values */
  patternCodeableConcept?: ICodeableConcept;

  /** Value must have at least these property values */
  patternCodeableReference?: ICodeableReference;

  /** Value must have at least these property values */
  patternCoding?: ICoding;

  /** Value must have at least these property values */
  patternContactPoint?: IContactPoint;

  /** Value must have at least these property values */
  patternCount?: ICount;

  /** Value must have at least these property values */
  patternDistance?: IDistance;

  /** Value must have at least these property values */
  patternDuration?: IDuration;

  /** Value must have at least these property values */
  patternHumanName?: IHumanName;

  /** Value must have at least these property values */
  patternIdentifier?: IIdentifier;

  /** Value must have at least these property values */
  patternMoney?: IMoney;

  /** Value must have at least these property values */
  patternPeriod?: IPeriod;

  /** Value must have at least these property values */
  patternQuantity?: IQuantity;

  /** Value must have at least these property values */
  patternRange?: IRange;

  /** Value must have at least these property values */
  patternRatio?: IRatio;

  /** Value must have at least these property values */
  patternRatioRange?: IRatioRange;

  /** Value must have at least these property values */
  patternReference?: IReference;

  /** Value must have at least these property values */
  patternSampledData?: ISampledData;

  /** Value must have at least these property values */
  patternSignature?: ISignature;

  /** Value must have at least these property values */
  patternTiming?: ITiming;

  /** Value must have at least these property values */
  patternContactDetail?: IContactDetail;

  /** Value must have at least these property values */
  patternContributor?: IContributor;

  /** Value must have at least these property values */
  patternDataRequirement?: IDataRequirement;

  /** Value must have at least these property values */
  patternExpression?: IExpression;

  /** Value must have at least these property values */
  patternParameterDefinition?: IParameterDefinition;

  /** Value must have at least these property values */
  patternRelatedArtifact?: IRelatedArtifact;

  /** Value must have at least these property values */
  patternTriggerDefinition?: ITriggerDefinition;

  /** Value must have at least these property values */
  patternUsageContext?: IUsageContext;

  /** Value must have at least these property values */
  patternDosage?: IDosage;

  /** Example value (as defined for type) */
  example?: IElementDefinitionExample[];

  /** Minimum Allowed Value (for some types) */
  minValueDate?: string;

  /** Extension for minValueDate */
  _minValueDate?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueDateTime?: string;

  /** Extension for minValueDateTime */
  _minValueDateTime?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueInstant?: string;

  /** Extension for minValueInstant */
  _minValueInstant?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueTime?: string;

  /** Extension for minValueTime */
  _minValueTime?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueDecimal?: number;

  /** Extension for minValueDecimal */
  _minValueDecimal?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueInteger?: number;

  /** Extension for minValueInteger */
  _minValueInteger?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValuePositiveInt?: number;

  /** Extension for minValuePositiveInt */
  _minValuePositiveInt?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueUnsignedInt?: number;

  /** Extension for minValueUnsignedInt */
  _minValueUnsignedInt?: IElement;

  /** Minimum Allowed Value (for some types) */
  minValueQuantity?: IQuantity;

  /** Maximum Allowed Value (for some types) */
  maxValueDate?: string;

  /** Extension for maxValueDate */
  _maxValueDate?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueDateTime?: string;

  /** Extension for maxValueDateTime */
  _maxValueDateTime?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueInstant?: string;

  /** Extension for maxValueInstant */
  _maxValueInstant?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueTime?: string;

  /** Extension for maxValueTime */
  _maxValueTime?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueDecimal?: number;

  /** Extension for maxValueDecimal */
  _maxValueDecimal?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueInteger?: number;

  /** Extension for maxValueInteger */
  _maxValueInteger?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValuePositiveInt?: number;

  /** Extension for maxValuePositiveInt */
  _maxValuePositiveInt?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueUnsignedInt?: number;

  /** Extension for maxValueUnsignedInt */
  _maxValueUnsignedInt?: IElement;

  /** Maximum Allowed Value (for some types) */
  maxValueQuantity?: IQuantity;

  /** Max length for strings */
  maxLength?: number;

  /** Extension for maxLength */
  _maxLength?: IElement;

  /** Reference to invariant about presence */
  condition?: string[];

  /** Extension for condition */
  _condition?: IElement;

  /** Condition that must evaluate to true */
  constraint?: IElementDefinitionConstraint[];

  /** If the element must be supported */
  mustSupport?: boolean;

  /** Extension for mustSupport */
  _mustSupport?: IElement;

  /** If this modifies the meaning of other elements */
  isModifier?: boolean;

  /** Extension for isModifier */
  _isModifier?: IElement;

  /** Reason that this element is marked as a modifier */
  isModifierReason?: string;

  /** Extension for isModifierReason */
  _isModifierReason?: IElement;

  /** Include when _summary = true? */
  isSummary?: boolean;

  /** Extension for isSummary */
  _isSummary?: IElement;

  /** ValueSet details if this is coded */
  binding?: IElementDefinitionBinding;

  /** Map element to another set of definitions */
  mapping?: IElementDefinitionMapping[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinition from a JSON object
   */
  static fromJSON(json: IElementDefinition): ElementDefinition {
    return new ElementDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinition>): ElementDefinition {
    return new ElementDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinition) => Partial<IElementDefinition>): ElementDefinition {
    const currentData = this.toJSON();
    return new ElementDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinition {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_PROPERTIES);
    return result as IElementDefinition;
  }

  /**
   * Create a deep clone of this ElementDefinition
   */
  clone(): ElementDefinition {
    return new ElementDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinition
   */
  toString(): string {
    const parts: string[] = ['ElementDefinition'];
    return parts.join(', ');
  }
}
