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
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IRatioRange,
  IReference,
  IRelatedArtifact,
  ISampledData,
  ISignature,
  ITaskOutput,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TaskOutput */
const TASK_OUTPUT_PROPERTIES = [
  'type',
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
] as const;

/**
 * TaskOutput - Information produced as part of task
 *
 * @see https://hl7.org/fhir/R4/taskoutput.html
 *
 * @example
 * const taskOutput = new TaskOutput({
 *   // ... properties
 * });
 */
export class TaskOutput extends BackboneElement implements ITaskOutput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for output */
  type: ICodeableConcept;

  /** Result of output */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** Result of output */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Result of output */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  /** Result of output */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Result of output */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Result of output */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Result of output */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Result of output */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Result of output */
  valueInstant?: string;

  /** Extension for valueInstant */
  _valueInstant?: IElement;

  /** Result of output */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Result of output */
  valueInteger64?: string;

  /** Extension for valueInteger64 */
  _valueInteger64?: IElement;

  /** Result of output */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** Result of output */
  valueOid?: string;

  /** Extension for valueOid */
  _valueOid?: IElement;

  /** Result of output */
  valuePositiveInt?: number;

  /** Extension for valuePositiveInt */
  _valuePositiveInt?: IElement;

  /** Result of output */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Result of output */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Result of output */
  valueUnsignedInt?: number;

  /** Extension for valueUnsignedInt */
  _valueUnsignedInt?: IElement;

  /** Result of output */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Result of output */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** Result of output */
  valueUuid?: string;

  /** Extension for valueUuid */
  _valueUuid?: IElement;

  /** Result of output */
  valueAddress?: IAddress;

  /** Result of output */
  valueAge?: IAge;

  /** Result of output */
  valueAnnotation?: IAnnotation;

  /** Result of output */
  valueAttachment?: IAttachment;

  /** Result of output */
  valueCodeableConcept?: ICodeableConcept;

  /** Result of output */
  valueCodeableReference?: ICodeableReference;

  /** Result of output */
  valueCoding?: ICoding;

  /** Result of output */
  valueContactPoint?: IContactPoint;

  /** Result of output */
  valueCount?: ICount;

  /** Result of output */
  valueDistance?: IDistance;

  /** Result of output */
  valueDuration?: IDuration;

  /** Result of output */
  valueHumanName?: IHumanName;

  /** Result of output */
  valueIdentifier?: IIdentifier;

  /** Result of output */
  valueMoney?: IMoney;

  /** Result of output */
  valuePeriod?: IPeriod;

  /** Result of output */
  valueQuantity?: IQuantity;

  /** Result of output */
  valueRange?: IRange;

  /** Result of output */
  valueRatio?: IRatio;

  /** Result of output */
  valueRatioRange?: IRatioRange;

  /** Result of output */
  valueReference?: IReference;

  /** Result of output */
  valueSampledData?: ISampledData;

  /** Result of output */
  valueSignature?: ISignature;

  /** Result of output */
  valueTiming?: ITiming;

  /** Result of output */
  valueContactDetail?: IContactDetail;

  /** Result of output */
  valueDataRequirement?: IDataRequirement;

  /** Result of output */
  valueExpression?: IExpression;

  /** Result of output */
  valueParameterDefinition?: IParameterDefinition;

  /** Result of output */
  valueRelatedArtifact?: IRelatedArtifact;

  /** Result of output */
  valueTriggerDefinition?: ITriggerDefinition;

  /** Result of output */
  valueUsageContext?: IUsageContext;

  /** Result of output */
  valueAvailability?: IAvailability;

  /** Result of output */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /** Result of output */
  valueDosage?: IDosage;

  /** Result of output */
  valueMeta?: IMeta;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITaskOutput>) {
    super(data);
    if (data) {
      this.assignProps(data, TASK_OUTPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TaskOutput from a JSON object
   */
  static fromJSON(json: ITaskOutput): TaskOutput {
    return new TaskOutput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TaskOutput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITaskOutput>): TaskOutput {
    return new TaskOutput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TaskOutput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITaskOutput) => Partial<ITaskOutput>): TaskOutput {
    const currentData = this.toJSON();
    return new TaskOutput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITaskOutput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITaskOutput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TASK_OUTPUT_PROPERTIES);
    return result as ITaskOutput;
  }

  /**
   * Create a deep clone of this TaskOutput
   */
  clone(): TaskOutput {
    return new TaskOutput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TaskOutput
   */
  toString(): string {
    const parts: string[] = ['TaskOutput'];
    return parts.join(', ');
  }
}
