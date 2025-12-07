import { BackboneElement } from '../base/BackboneElement.js';
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
  IElement,
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
} from '@fhir-toolkit/r4-types';

/** Properties specific to StructureMapGroupRuleSource */
const STRUCTURE_MAP_GROUP_RULE_SOURCE_PROPERTIES = [
  'context',
  '_context',
  'min',
  '_min',
  'max',
  '_max',
  'type',
  '_type',
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
  'defaultValueMeta',
  'element',
  '_element',
  'listMode',
  '_listMode',
  'variable',
  '_variable',
  'condition',
  '_condition',
  'check',
  '_check',
  'logMessage',
  '_logMessage',
] as const;

/**
 * StructureMapGroupRuleSource - Source inputs to the mapping
 *
 * @see https://hl7.org/fhir/R4/structuremapgrouprulesource.html
 *
 * @example
 * const structureMapGroupRuleSource = new StructureMapGroupRuleSource({
 *   // ... properties
 * });
 */
export class StructureMapGroupRuleSource extends BackboneElement implements IStructureMapGroupRuleSource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type or variable this rule applies to */
  context: string;

  /** Extension for context */
  _context?: IElement;

  /** Specified minimum cardinality */
  min?: number;

  /** Extension for min */
  _min?: IElement;

  /** Specified maximum cardinality (number or *) */
  max?: string;

  /** Extension for max */
  _max?: IElement;

  /** Rule only applies if source has this type */
  type?: string;

  /** Extension for type */
  _type?: IElement;

  /** Default value if no value exists */
  defaultValueBase64Binary?: string;

  /** Extension for defaultValueBase64Binary */
  _defaultValueBase64Binary?: IElement;

  /** Default value if no value exists */
  defaultValueBoolean?: boolean;

  /** Extension for defaultValueBoolean */
  _defaultValueBoolean?: IElement;

  /** Default value if no value exists */
  defaultValueCanonical?: string;

  /** Extension for defaultValueCanonical */
  _defaultValueCanonical?: IElement;

  /** Default value if no value exists */
  defaultValueCode?: string;

  /** Extension for defaultValueCode */
  _defaultValueCode?: IElement;

  /** Default value if no value exists */
  defaultValueDate?: string;

  /** Extension for defaultValueDate */
  _defaultValueDate?: IElement;

  /** Default value if no value exists */
  defaultValueDateTime?: string;

  /** Extension for defaultValueDateTime */
  _defaultValueDateTime?: IElement;

  /** Default value if no value exists */
  defaultValueDecimal?: number;

  /** Extension for defaultValueDecimal */
  _defaultValueDecimal?: IElement;

  /** Default value if no value exists */
  defaultValueId?: string;

  /** Extension for defaultValueId */
  _defaultValueId?: IElement;

  /** Default value if no value exists */
  defaultValueInstant?: string;

  /** Extension for defaultValueInstant */
  _defaultValueInstant?: IElement;

  /** Default value if no value exists */
  defaultValueInteger?: number;

  /** Extension for defaultValueInteger */
  _defaultValueInteger?: IElement;

  /** Default value if no value exists */
  defaultValueMarkdown?: string;

  /** Extension for defaultValueMarkdown */
  _defaultValueMarkdown?: IElement;

  /** Default value if no value exists */
  defaultValueOid?: string;

  /** Extension for defaultValueOid */
  _defaultValueOid?: IElement;

  /** Default value if no value exists */
  defaultValuePositiveInt?: number;

  /** Extension for defaultValuePositiveInt */
  _defaultValuePositiveInt?: IElement;

  /** Default value if no value exists */
  defaultValueString?: string;

  /** Extension for defaultValueString */
  _defaultValueString?: IElement;

  /** Default value if no value exists */
  defaultValueTime?: string;

  /** Extension for defaultValueTime */
  _defaultValueTime?: IElement;

  /** Default value if no value exists */
  defaultValueUnsignedInt?: number;

  /** Extension for defaultValueUnsignedInt */
  _defaultValueUnsignedInt?: IElement;

  /** Default value if no value exists */
  defaultValueUri?: string;

  /** Extension for defaultValueUri */
  _defaultValueUri?: IElement;

  /** Default value if no value exists */
  defaultValueUrl?: string;

  /** Extension for defaultValueUrl */
  _defaultValueUrl?: IElement;

  /** Default value if no value exists */
  defaultValueUuid?: string;

  /** Extension for defaultValueUuid */
  _defaultValueUuid?: IElement;

  /** Default value if no value exists */
  defaultValueAddress?: IAddress;

  /** Default value if no value exists */
  defaultValueAge?: IAge;

  /** Default value if no value exists */
  defaultValueAnnotation?: IAnnotation;

  /** Default value if no value exists */
  defaultValueAttachment?: IAttachment;

  /** Default value if no value exists */
  defaultValueCodeableConcept?: ICodeableConcept;

  /** Default value if no value exists */
  defaultValueCoding?: ICoding;

  /** Default value if no value exists */
  defaultValueContactPoint?: IContactPoint;

  /** Default value if no value exists */
  defaultValueCount?: ICount;

  /** Default value if no value exists */
  defaultValueDistance?: IDistance;

  /** Default value if no value exists */
  defaultValueDuration?: IDuration;

  /** Default value if no value exists */
  defaultValueHumanName?: IHumanName;

  /** Default value if no value exists */
  defaultValueIdentifier?: IIdentifier;

  /** Default value if no value exists */
  defaultValueMoney?: IMoney;

  /** Default value if no value exists */
  defaultValuePeriod?: IPeriod;

  /** Default value if no value exists */
  defaultValueQuantity?: IQuantity;

  /** Default value if no value exists */
  defaultValueRange?: IRange;

  /** Default value if no value exists */
  defaultValueRatio?: IRatio;

  /** Default value if no value exists */
  defaultValueReference?: IReference;

  /** Default value if no value exists */
  defaultValueSampledData?: ISampledData;

  /** Default value if no value exists */
  defaultValueSignature?: ISignature;

  /** Default value if no value exists */
  defaultValueTiming?: ITiming;

  /** Default value if no value exists */
  defaultValueContactDetail?: IContactDetail;

  /** Default value if no value exists */
  defaultValueContributor?: IContributor;

  /** Default value if no value exists */
  defaultValueDataRequirement?: IDataRequirement;

  /** Default value if no value exists */
  defaultValueExpression?: IExpression;

  /** Default value if no value exists */
  defaultValueParameterDefinition?: IParameterDefinition;

  /** Default value if no value exists */
  defaultValueRelatedArtifact?: IRelatedArtifact;

  /** Default value if no value exists */
  defaultValueTriggerDefinition?: ITriggerDefinition;

  /** Default value if no value exists */
  defaultValueUsageContext?: IUsageContext;

  /** Default value if no value exists */
  defaultValueDosage?: IDosage;

  /** Default value if no value exists */
  defaultValueMeta?: IMeta;

  /** Optional field for this source */
  element?: string;

  /** Extension for element */
  _element?: IElement;

  /** first | not_first | last | not_last | only_one */
  listMode?: StructureMapSourceListModeType;

  /** Extension for listMode */
  _listMode?: IElement;

  /** Named context for field, if a field is specified */
  variable?: string;

  /** Extension for variable */
  _variable?: IElement;

  /** FHIRPath expression  - must be true or the rule does not apply */
  condition?: string;

  /** Extension for condition */
  _condition?: IElement;

  /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
  check?: string;

  /** Extension for check */
  _check?: IElement;

  /** Message to put in log if source exists (FHIRPath) */
  logMessage?: string;

  /** Extension for logMessage */
  _logMessage?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureMapGroupRuleSource>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_MAP_GROUP_RULE_SOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureMapGroupRuleSource from a JSON object
   */
  static fromJSON(json: IStructureMapGroupRuleSource): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureMapGroupRuleSource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureMapGroupRuleSource>): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureMapGroupRuleSource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureMapGroupRuleSource) => Partial<IStructureMapGroupRuleSource>): StructureMapGroupRuleSource {
    const currentData = this.toJSON();
    return new StructureMapGroupRuleSource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureMapGroupRuleSource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureMapGroupRuleSource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_MAP_GROUP_RULE_SOURCE_PROPERTIES);
    return result as IStructureMapGroupRuleSource;
  }

  /**
   * Create a deep clone of this StructureMapGroupRuleSource
   */
  clone(): StructureMapGroupRuleSource {
    return new StructureMapGroupRuleSource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureMapGroupRuleSource
   */
  toString(): string {
    const parts: string[] = ['StructureMapGroupRuleSource'];
    return parts.join(', ');
  }
}
