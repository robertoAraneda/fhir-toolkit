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
  ITaskInput,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TaskInput */
const TASK_INPUT_PROPERTIES = [
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
  'valueMeta',
] as const;

/**
 * TaskInput - Information used to perform task
 *
 * @see https://hl7.org/fhir/R4B/taskinput.html
 *
 * @example
 * const taskInput = new TaskInput({
 *   // ... properties
 * });
 */
export class TaskInput extends BackboneElement implements ITaskInput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for the input */
  type: ICodeableConcept;

  /** Content to use in performing the task */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** Content to use in performing the task */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Content to use in performing the task */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  /** Content to use in performing the task */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Content to use in performing the task */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Content to use in performing the task */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Content to use in performing the task */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Content to use in performing the task */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Content to use in performing the task */
  valueInstant?: string;

  /** Extension for valueInstant */
  _valueInstant?: IElement;

  /** Content to use in performing the task */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Content to use in performing the task */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** Content to use in performing the task */
  valueOid?: string;

  /** Extension for valueOid */
  _valueOid?: IElement;

  /** Content to use in performing the task */
  valuePositiveInt?: number;

  /** Extension for valuePositiveInt */
  _valuePositiveInt?: IElement;

  /** Content to use in performing the task */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Content to use in performing the task */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Content to use in performing the task */
  valueUnsignedInt?: number;

  /** Extension for valueUnsignedInt */
  _valueUnsignedInt?: IElement;

  /** Content to use in performing the task */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Content to use in performing the task */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** Content to use in performing the task */
  valueUuid?: string;

  /** Extension for valueUuid */
  _valueUuid?: IElement;

  /** Content to use in performing the task */
  valueAddress?: IAddress;

  /** Content to use in performing the task */
  valueAge?: IAge;

  /** Content to use in performing the task */
  valueAnnotation?: IAnnotation;

  /** Content to use in performing the task */
  valueAttachment?: IAttachment;

  /** Content to use in performing the task */
  valueCodeableConcept?: ICodeableConcept;

  /** Content to use in performing the task */
  valueCoding?: ICoding;

  /** Content to use in performing the task */
  valueContactPoint?: IContactPoint;

  /** Content to use in performing the task */
  valueCount?: ICount;

  /** Content to use in performing the task */
  valueDistance?: IDistance;

  /** Content to use in performing the task */
  valueDuration?: IDuration;

  /** Content to use in performing the task */
  valueHumanName?: IHumanName;

  /** Content to use in performing the task */
  valueIdentifier?: IIdentifier;

  /** Content to use in performing the task */
  valueMoney?: IMoney;

  /** Content to use in performing the task */
  valuePeriod?: IPeriod;

  /** Content to use in performing the task */
  valueQuantity?: IQuantity;

  /** Content to use in performing the task */
  valueRange?: IRange;

  /** Content to use in performing the task */
  valueRatio?: IRatio;

  /** Content to use in performing the task */
  valueReference?: IReference;

  /** Content to use in performing the task */
  valueSampledData?: ISampledData;

  /** Content to use in performing the task */
  valueSignature?: ISignature;

  /** Content to use in performing the task */
  valueTiming?: ITiming;

  /** Content to use in performing the task */
  valueContactDetail?: IContactDetail;

  /** Content to use in performing the task */
  valueContributor?: IContributor;

  /** Content to use in performing the task */
  valueDataRequirement?: IDataRequirement;

  /** Content to use in performing the task */
  valueExpression?: IExpression;

  /** Content to use in performing the task */
  valueParameterDefinition?: IParameterDefinition;

  /** Content to use in performing the task */
  valueRelatedArtifact?: IRelatedArtifact;

  /** Content to use in performing the task */
  valueTriggerDefinition?: ITriggerDefinition;

  /** Content to use in performing the task */
  valueUsageContext?: IUsageContext;

  /** Content to use in performing the task */
  valueDosage?: IDosage;

  /** Content to use in performing the task */
  valueMeta?: IMeta;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITaskInput>) {
    super(data);
    if (data) {
      this.assignProps(data, TASK_INPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TaskInput from a JSON object
   */
  static fromJSON(json: ITaskInput): TaskInput {
    return new TaskInput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TaskInput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITaskInput>): TaskInput {
    return new TaskInput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TaskInput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITaskInput) => Partial<ITaskInput>): TaskInput {
    const currentData = this.toJSON();
    return new TaskInput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITaskInput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITaskInput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TASK_INPUT_PROPERTIES);
    return result as ITaskInput;
  }

  /**
   * Create a deep clone of this TaskInput
   */
  clone(): TaskInput {
    return new TaskInput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TaskInput
   */
  toString(): string {
    const parts: string[] = ['TaskInput'];
    return parts.join(', ');
  }
}
