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
  IElementDefinitionExample,
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
} from '@fhir-toolkit/r5-types';

/** Properties specific to ElementDefinitionExample */
const ELEMENT_DEFINITION_EXAMPLE_PROPERTIES = [
  'label',
  '_label',
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
 * ElementDefinitionExample - Example value (as defined for type)
 *
 * @see https://hl7.org/fhir/R5/elementdefinitionexample.html
 *
 * @example
 * const elementDefinitionExample = new ElementDefinitionExample({
 *   // ... properties
 * });
 */
export class ElementDefinitionExample extends BackboneElement implements IElementDefinitionExample {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Describes the purpose of this example */
  label: string;

  /** Extension for label */
  _label?: IElement;

  /** Value of Example (one of allowed types) */
  valueBase64Binary?: string;

  /** Extension for valueBase64Binary */
  _valueBase64Binary?: IElement;

  /** Value of Example (one of allowed types) */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of Example (one of allowed types) */
  valueCanonical?: string;

  /** Extension for valueCanonical */
  _valueCanonical?: IElement;

  /** Value of Example (one of allowed types) */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Value of Example (one of allowed types) */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** Value of Example (one of allowed types) */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Value of Example (one of allowed types) */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** Value of Example (one of allowed types) */
  valueId?: string;

  /** Extension for valueId */
  _valueId?: IElement;

  /** Value of Example (one of allowed types) */
  valueInstant?: string;

  /** Extension for valueInstant */
  _valueInstant?: IElement;

  /** Value of Example (one of allowed types) */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Value of Example (one of allowed types) */
  valueInteger64?: string;

  /** Extension for valueInteger64 */
  _valueInteger64?: IElement;

  /** Value of Example (one of allowed types) */
  valueMarkdown?: string;

  /** Extension for valueMarkdown */
  _valueMarkdown?: IElement;

  /** Value of Example (one of allowed types) */
  valueOid?: string;

  /** Extension for valueOid */
  _valueOid?: IElement;

  /** Value of Example (one of allowed types) */
  valuePositiveInt?: number;

  /** Extension for valuePositiveInt */
  _valuePositiveInt?: IElement;

  /** Value of Example (one of allowed types) */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of Example (one of allowed types) */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Value of Example (one of allowed types) */
  valueUnsignedInt?: number;

  /** Extension for valueUnsignedInt */
  _valueUnsignedInt?: IElement;

  /** Value of Example (one of allowed types) */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** Value of Example (one of allowed types) */
  valueUrl?: string;

  /** Extension for valueUrl */
  _valueUrl?: IElement;

  /** Value of Example (one of allowed types) */
  valueUuid?: string;

  /** Extension for valueUuid */
  _valueUuid?: IElement;

  /** Value of Example (one of allowed types) */
  valueAddress?: IAddress;

  /** Value of Example (one of allowed types) */
  valueAge?: IAge;

  /** Value of Example (one of allowed types) */
  valueAnnotation?: IAnnotation;

  /** Value of Example (one of allowed types) */
  valueAttachment?: IAttachment;

  /** Value of Example (one of allowed types) */
  valueCodeableConcept?: ICodeableConcept;

  /** Value of Example (one of allowed types) */
  valueCodeableReference?: ICodeableReference;

  /** Value of Example (one of allowed types) */
  valueCoding?: ICoding;

  /** Value of Example (one of allowed types) */
  valueContactPoint?: IContactPoint;

  /** Value of Example (one of allowed types) */
  valueCount?: ICount;

  /** Value of Example (one of allowed types) */
  valueDistance?: IDistance;

  /** Value of Example (one of allowed types) */
  valueDuration?: IDuration;

  /** Value of Example (one of allowed types) */
  valueHumanName?: IHumanName;

  /** Value of Example (one of allowed types) */
  valueIdentifier?: IIdentifier;

  /** Value of Example (one of allowed types) */
  valueMoney?: IMoney;

  /** Value of Example (one of allowed types) */
  valuePeriod?: IPeriod;

  /** Value of Example (one of allowed types) */
  valueQuantity?: IQuantity;

  /** Value of Example (one of allowed types) */
  valueRange?: IRange;

  /** Value of Example (one of allowed types) */
  valueRatio?: IRatio;

  /** Value of Example (one of allowed types) */
  valueRatioRange?: IRatioRange;

  /** Value of Example (one of allowed types) */
  valueReference?: IReference;

  /** Value of Example (one of allowed types) */
  valueSampledData?: ISampledData;

  /** Value of Example (one of allowed types) */
  valueSignature?: ISignature;

  /** Value of Example (one of allowed types) */
  valueTiming?: ITiming;

  /** Value of Example (one of allowed types) */
  valueContactDetail?: IContactDetail;

  /** Value of Example (one of allowed types) */
  valueDataRequirement?: IDataRequirement;

  /** Value of Example (one of allowed types) */
  valueExpression?: IExpression;

  /** Value of Example (one of allowed types) */
  valueParameterDefinition?: IParameterDefinition;

  /** Value of Example (one of allowed types) */
  valueRelatedArtifact?: IRelatedArtifact;

  /** Value of Example (one of allowed types) */
  valueTriggerDefinition?: ITriggerDefinition;

  /** Value of Example (one of allowed types) */
  valueUsageContext?: IUsageContext;

  /** Value of Example (one of allowed types) */
  valueAvailability?: IAvailability;

  /** Value of Example (one of allowed types) */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /** Value of Example (one of allowed types) */
  valueDosage?: IDosage;

  /** Value of Example (one of allowed types) */
  valueMeta?: IMeta;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionExample>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_EXAMPLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionExample from a JSON object
   */
  static fromJSON(json: IElementDefinitionExample): ElementDefinitionExample {
    return new ElementDefinitionExample(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionExample with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionExample>): ElementDefinitionExample {
    return new ElementDefinitionExample({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionExample by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionExample) => Partial<IElementDefinitionExample>): ElementDefinitionExample {
    const currentData = this.toJSON();
    return new ElementDefinitionExample({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionExample)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionExample {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_EXAMPLE_PROPERTIES);
    return result as IElementDefinitionExample;
  }

  /**
   * Create a deep clone of this ElementDefinitionExample
   */
  clone(): ElementDefinitionExample {
    return new ElementDefinitionExample(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionExample
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionExample'];
    return parts.join(', ');
  }
}
