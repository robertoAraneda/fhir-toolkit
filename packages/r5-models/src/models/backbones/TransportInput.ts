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
  ITiming,
  ITransportInput,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TransportInput */
const TRANSPORT_INPUT_PROPERTIES = [
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
 * TransportInput - Information used to perform transport
 *
 * @see https://hl7.org/fhir/R4/transportinput.html
 *
 * @example
 * const transportInput = new TransportInput({
 *   // ... properties
 * });
 */
export class TransportInput extends BackboneElement implements ITransportInput {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for the input */
  type: ICodeableConcept;

  /** Content to use in performing the transport */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** Content to use in performing the transport */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Content to use in performing the transport */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  /** Content to use in performing the transport */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Content to use in performing the transport */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Content to use in performing the transport */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Content to use in performing the transport */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Content to use in performing the transport */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Content to use in performing the transport */
  valueInstant?: string;

  /** Extension for valueInstant */
  _valueInstant?: IElement;

  /** Content to use in performing the transport */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Content to use in performing the transport */
  valueInteger64?: string;

  /** Extension for valueInteger64 */
  _valueInteger64?: IElement;

  /** Content to use in performing the transport */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** Content to use in performing the transport */
  valueOid?: string;

  /** Extension for valueOid */
  _valueOid?: IElement;

  /** Content to use in performing the transport */
  valuePositiveInt?: number;

  /** Extension for valuePositiveInt */
  _valuePositiveInt?: IElement;

  /** Content to use in performing the transport */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Content to use in performing the transport */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Content to use in performing the transport */
  valueUnsignedInt?: number;

  /** Extension for valueUnsignedInt */
  _valueUnsignedInt?: IElement;

  /** Content to use in performing the transport */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Content to use in performing the transport */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** Content to use in performing the transport */
  valueUuid?: string;

  /** Extension for valueUuid */
  _valueUuid?: IElement;

  /** Content to use in performing the transport */
  valueAddress?: IAddress;

  /** Content to use in performing the transport */
  valueAge?: IAge;

  /** Content to use in performing the transport */
  valueAnnotation?: IAnnotation;

  /** Content to use in performing the transport */
  valueAttachment?: IAttachment;

  /** Content to use in performing the transport */
  valueCodeableConcept?: ICodeableConcept;

  /** Content to use in performing the transport */
  valueCodeableReference?: ICodeableReference;

  /** Content to use in performing the transport */
  valueCoding?: ICoding;

  /** Content to use in performing the transport */
  valueContactPoint?: IContactPoint;

  /** Content to use in performing the transport */
  valueCount?: ICount;

  /** Content to use in performing the transport */
  valueDistance?: IDistance;

  /** Content to use in performing the transport */
  valueDuration?: IDuration;

  /** Content to use in performing the transport */
  valueHumanName?: IHumanName;

  /** Content to use in performing the transport */
  valueIdentifier?: IIdentifier;

  /** Content to use in performing the transport */
  valueMoney?: IMoney;

  /** Content to use in performing the transport */
  valuePeriod?: IPeriod;

  /** Content to use in performing the transport */
  valueQuantity?: IQuantity;

  /** Content to use in performing the transport */
  valueRange?: IRange;

  /** Content to use in performing the transport */
  valueRatio?: IRatio;

  /** Content to use in performing the transport */
  valueRatioRange?: IRatioRange;

  /** Content to use in performing the transport */
  valueReference?: IReference;

  /** Content to use in performing the transport */
  valueSampledData?: ISampledData;

  /** Content to use in performing the transport */
  valueSignature?: ISignature;

  /** Content to use in performing the transport */
  valueTiming?: ITiming;

  /** Content to use in performing the transport */
  valueContactDetail?: IContactDetail;

  /** Content to use in performing the transport */
  valueDataRequirement?: IDataRequirement;

  /** Content to use in performing the transport */
  valueExpression?: IExpression;

  /** Content to use in performing the transport */
  valueParameterDefinition?: IParameterDefinition;

  /** Content to use in performing the transport */
  valueRelatedArtifact?: IRelatedArtifact;

  /** Content to use in performing the transport */
  valueTriggerDefinition?: ITriggerDefinition;

  /** Content to use in performing the transport */
  valueUsageContext?: IUsageContext;

  /** Content to use in performing the transport */
  valueAvailability?: IAvailability;

  /** Content to use in performing the transport */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /** Content to use in performing the transport */
  valueDosage?: IDosage;

  /** Content to use in performing the transport */
  valueMeta?: IMeta;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITransportInput>) {
    super(data);
    if (data) {
      this.assignProps(data, TRANSPORT_INPUT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TransportInput from a JSON object
   */
  static fromJSON(json: ITransportInput): TransportInput {
    return new TransportInput(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TransportInput with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITransportInput>): TransportInput {
    return new TransportInput({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TransportInput by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITransportInput) => Partial<ITransportInput>): TransportInput {
    const currentData = this.toJSON();
    return new TransportInput({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITransportInput)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITransportInput {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TRANSPORT_INPUT_PROPERTIES);
    return result as ITransportInput;
  }

  /**
   * Create a deep clone of this TransportInput
   */
  clone(): TransportInput {
    return new TransportInput(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TransportInput
   */
  toString(): string {
    const parts: string[] = ['TransportInput'];
    return parts.join(', ');
  }
}
