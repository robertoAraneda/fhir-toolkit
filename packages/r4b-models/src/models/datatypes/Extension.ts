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

/** Properties specific to Extension */
const EXTENSION_PROPERTIES = [
  'url',
  'valueBase64Binary',
  '_valueBase64Binary',
  'valueBoolean',
  '_valueBoolean',
  'valueCanonical',
  '_valueCanonical',
  'valueCode',
  '_valueCode',
  'valueDate',
  '_valueDate',
  'valueDateTime',
  '_valueDateTime',
  'valueDecimal',
  '_valueDecimal',
  'valueId',
  '_valueId',
  'valueInstant',
  '_valueInstant',
  'valueInteger',
  '_valueInteger',
  'valueMarkdown',
  '_valueMarkdown',
  'valueOid',
  '_valueOid',
  'valuePositiveInt',
  '_valuePositiveInt',
  'valueString',
  '_valueString',
  'valueTime',
  '_valueTime',
  'valueUnsignedInt',
  '_valueUnsignedInt',
  'valueUri',
  '_valueUri',
  'valueUrl',
  '_valueUrl',
  'valueUuid',
  '_valueUuid',
  'valueAddress',
  'valueAge',
  'valueAnnotation',
  'valueAttachment',
  'valueCodeableConcept',
  'valueCodeableReference',
  'valueCoding',
  'valueContactPoint',
  'valueCount',
  'valueDistance',
  'valueDuration',
  'valueHumanName',
  'valueIdentifier',
  'valueMoney',
  'valuePeriod',
  'valueQuantity',
  'valueRange',
  'valueRatio',
  'valueRatioRange',
  'valueReference',
  'valueSampledData',
  'valueSignature',
  'valueTiming',
  'valueContactDetail',
  'valueContributor',
  'valueDataRequirement',
  'valueExpression',
  'valueParameterDefinition',
  'valueRelatedArtifact',
  'valueTriggerDefinition',
  'valueUsageContext',
  'valueDosage',
] as const;

/**
 * Extension - Optional Extension Element - found in all resources.
 *
 * @see https://hl7.org/fhir/R4/extension.html
 *
 * @example
 * const extension = new Extension({
 *   // ... properties
 * });
 */
export class Extension extends Element implements IExtension {

  // ============================================================================
  // Properties
  // ============================================================================

  /** identifies the meaning of the extension */
  url: string;

  /** Value of extension */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** Value of extension */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of extension */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  /** Value of extension */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Value of extension */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Value of extension */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Value of extension */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Value of extension */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Value of extension */
  valueInstant?: string;

  /** Extension for valueInstant */
  _valueInstant?: IElement;

  /** Value of extension */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of extension */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** Value of extension */
  valueOid?: string;

  /** Extension for valueOid */
  _valueOid?: IElement;

  /** Value of extension */
  valuePositiveInt?: number;

  /** Extension for valuePositiveInt */
  _valuePositiveInt?: IElement;

  /** Value of extension */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of extension */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Value of extension */
  valueUnsignedInt?: number;

  /** Extension for valueUnsignedInt */
  _valueUnsignedInt?: IElement;

  /** Value of extension */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Value of extension */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** Value of extension */
  valueUuid?: string;

  /** Extension for valueUuid */
  _valueUuid?: IElement;

  /** Value of extension */
  valueAddress?: IAddress;

  /** Value of extension */
  valueAge?: IAge;

  /** Value of extension */
  valueAnnotation?: IAnnotation;

  /** Value of extension */
  valueAttachment?: IAttachment;

  /** Value of extension */
  valueCodeableConcept?: ICodeableConcept;

  /** Value of extension */
  valueCodeableReference?: ICodeableReference;

  /** Value of extension */
  valueCoding?: ICoding;

  /** Value of extension */
  valueContactPoint?: IContactPoint;

  /** Value of extension */
  valueCount?: ICount;

  /** Value of extension */
  valueDistance?: IDistance;

  /** Value of extension */
  valueDuration?: IDuration;

  /** Value of extension */
  valueHumanName?: IHumanName;

  /** Value of extension */
  valueIdentifier?: IIdentifier;

  /** Value of extension */
  valueMoney?: IMoney;

  /** Value of extension */
  valuePeriod?: IPeriod;

  /** Value of extension */
  valueQuantity?: IQuantity;

  /** Value of extension */
  valueRange?: IRange;

  /** Value of extension */
  valueRatio?: IRatio;

  /** Value of extension */
  valueRatioRange?: IRatioRange;

  /** Value of extension */
  valueReference?: IReference;

  /** Value of extension */
  valueSampledData?: ISampledData;

  /** Value of extension */
  valueSignature?: ISignature;

  /** Value of extension */
  valueTiming?: ITiming;

  /** Value of extension */
  valueContactDetail?: IContactDetail;

  /** Value of extension */
  valueContributor?: IContributor;

  /** Value of extension */
  valueDataRequirement?: IDataRequirement;

  /** Value of extension */
  valueExpression?: IExpression;

  /** Value of extension */
  valueParameterDefinition?: IParameterDefinition;

  /** Value of extension */
  valueRelatedArtifact?: IRelatedArtifact;

  /** Value of extension */
  valueTriggerDefinition?: ITriggerDefinition;

  /** Value of extension */
  valueUsageContext?: IUsageContext;

  /** Value of extension */
  valueDosage?: IDosage;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExtension>) {
    super(data);
    if (data) {
      this.assignProps(data, EXTENSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Extension from a JSON object
   */
  static fromJSON(json: IExtension): Extension {
    return new Extension(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Extension with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExtension>): Extension {
    return new Extension({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Extension by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExtension) => Partial<IExtension>): Extension {
    const currentData = this.toJSON();
    return new Extension({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExtension)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExtension {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, EXTENSION_PROPERTIES);
    return result as IExtension;
  }

  /**
   * Create a deep clone of this Extension
   */
  clone(): Extension {
    return new Extension(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Extension
   */
  toString(): string {
    const parts: string[] = ['Extension'];
    return parts.join(', ');
  }
}
