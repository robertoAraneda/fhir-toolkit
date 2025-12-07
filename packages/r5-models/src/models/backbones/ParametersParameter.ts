import { BackboneElement } from '../base/BackboneElement.js';
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
  IElement,
  IExpression,
  IExtendedContactDetail,
  IHumanName,
  IIdentifier,
  IMeta,
  IMoney,
  IParameterDefinition,
  IParametersParameter,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IRatioRange,
  IReference,
  IRelatedArtifact,
  IResource,
  ISampledData,
  ISignature,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ParametersParameter */
const PARAMETERS_PARAMETER_PROPERTIES = [
  'name',
  '_name',
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
  'valueInteger64',
  '_valueInteger64',
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
  'valueDataRequirement',
  'valueExpression',
  'valueParameterDefinition',
  'valueRelatedArtifact',
  'valueTriggerDefinition',
  'valueUsageContext',
  'valueAvailability',
  'valueExtendedContactDetail',
  'valueDosage',
  'valueMeta',
  'resource',
  'part',
] as const;

/**
 * ParametersParameter - Operation Parameter
 *
 * @see https://hl7.org/fhir/R4/parametersparameter.html
 *
 * @example
 * const parametersParameter = new ParametersParameter({
 *   // ... properties
 * });
 */
export class ParametersParameter extends BackboneElement implements IParametersParameter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name from the definition */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** If parameter is a data type */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** If parameter is a data type */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** If parameter is a data type */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  /** If parameter is a data type */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** If parameter is a data type */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** If parameter is a data type */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** If parameter is a data type */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** If parameter is a data type */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** If parameter is a data type */
  valueInstant?: string;

  /** Extension for valueInstant */
  _valueInstant?: IElement;

  /** If parameter is a data type */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** If parameter is a data type */
  valueInteger64?: string;

  /** Extension for valueInteger64 */
  _valueInteger64?: IElement;

  /** If parameter is a data type */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** If parameter is a data type */
  valueOid?: string;

  /** Extension for valueOid */
  _valueOid?: IElement;

  /** If parameter is a data type */
  valuePositiveInt?: number;

  /** Extension for valuePositiveInt */
  _valuePositiveInt?: IElement;

  /** If parameter is a data type */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** If parameter is a data type */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** If parameter is a data type */
  valueUnsignedInt?: number;

  /** Extension for valueUnsignedInt */
  _valueUnsignedInt?: IElement;

  /** If parameter is a data type */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** If parameter is a data type */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** If parameter is a data type */
  valueUuid?: string;

  /** Extension for valueUuid */
  _valueUuid?: IElement;

  /** If parameter is a data type */
  valueAddress?: IAddress;

  /** If parameter is a data type */
  valueAge?: IAge;

  /** If parameter is a data type */
  valueAnnotation?: IAnnotation;

  /** If parameter is a data type */
  valueAttachment?: IAttachment;

  /** If parameter is a data type */
  valueCodeableConcept?: ICodeableConcept;

  /** If parameter is a data type */
  valueCodeableReference?: ICodeableReference;

  /** If parameter is a data type */
  valueCoding?: ICoding;

  /** If parameter is a data type */
  valueContactPoint?: IContactPoint;

  /** If parameter is a data type */
  valueCount?: ICount;

  /** If parameter is a data type */
  valueDistance?: IDistance;

  /** If parameter is a data type */
  valueDuration?: IDuration;

  /** If parameter is a data type */
  valueHumanName?: IHumanName;

  /** If parameter is a data type */
  valueIdentifier?: IIdentifier;

  /** If parameter is a data type */
  valueMoney?: IMoney;

  /** If parameter is a data type */
  valuePeriod?: IPeriod;

  /** If parameter is a data type */
  valueQuantity?: IQuantity;

  /** If parameter is a data type */
  valueRange?: IRange;

  /** If parameter is a data type */
  valueRatio?: IRatio;

  /** If parameter is a data type */
  valueRatioRange?: IRatioRange;

  /** If parameter is a data type */
  valueReference?: IReference;

  /** If parameter is a data type */
  valueSampledData?: ISampledData;

  /** If parameter is a data type */
  valueSignature?: ISignature;

  /** If parameter is a data type */
  valueTiming?: ITiming;

  /** If parameter is a data type */
  valueContactDetail?: IContactDetail;

  /** If parameter is a data type */
  valueDataRequirement?: IDataRequirement;

  /** If parameter is a data type */
  valueExpression?: IExpression;

  /** If parameter is a data type */
  valueParameterDefinition?: IParameterDefinition;

  /** If parameter is a data type */
  valueRelatedArtifact?: IRelatedArtifact;

  /** If parameter is a data type */
  valueTriggerDefinition?: ITriggerDefinition;

  /** If parameter is a data type */
  valueUsageContext?: IUsageContext;

  /** If parameter is a data type */
  valueAvailability?: IAvailability;

  /** If parameter is a data type */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /** If parameter is a data type */
  valueDosage?: IDosage;

  /** If parameter is a data type */
  valueMeta?: IMeta;

  /** If parameter is a whole resource */
  resource?: IResource;

  /** Named part of a multi-part parameter */
  part?: IParametersParameter[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IParametersParameter>) {
    super(data);
    if (data) {
      this.assignProps(data, PARAMETERS_PARAMETER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ParametersParameter from a JSON object
   */
  static fromJSON(json: IParametersParameter): ParametersParameter {
    return new ParametersParameter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ParametersParameter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IParametersParameter>): ParametersParameter {
    return new ParametersParameter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ParametersParameter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IParametersParameter) => Partial<IParametersParameter>): ParametersParameter {
    const currentData = this.toJSON();
    return new ParametersParameter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IParametersParameter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IParametersParameter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PARAMETERS_PARAMETER_PROPERTIES);
    return result as IParametersParameter;
  }

  /**
   * Create a deep clone of this ParametersParameter
   */
  clone(): ParametersParameter {
    return new ParametersParameter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ParametersParameter
   */
  toString(): string {
    const parts: string[] = ['ParametersParameter'];
    return parts.join(', ');
  }
}
