import type { ICodeableConcept, ICoding, IDataType, IElement, IReference } from '../../base/index.js';
import type { IAddress } from './IAddress.js';
import type { IAge } from './IAge.js';
import type { IAnnotation } from './IAnnotation.js';
import type { IAttachment } from './IAttachment.js';
import type { IAvailability } from './IAvailability.js';
import type { ICodeableReference } from './ICodeableReference.js';
import type { IContactDetail } from './IContactDetail.js';
import type { IContactPoint } from './IContactPoint.js';
import type { ICount } from './ICount.js';
import type { IDataRequirement } from './IDataRequirement.js';
import type { IDistance } from './IDistance.js';
import type { IDosage } from './IDosage.js';
import type { IDuration } from './IDuration.js';
import type { IExpression } from './IExpression.js';
import type { IExtendedContactDetail } from './IExtendedContactDetail.js';
import type { IHumanName } from './IHumanName.js';
import type { IIdentifier } from './IIdentifier.js';
import type { IMeta } from './IMeta.js';
import type { IMoney } from './IMoney.js';
import type { IParameterDefinition } from './IParameterDefinition.js';
import type { IPeriod } from './IPeriod.js';
import type { IQuantity } from './IQuantity.js';
import type { IRange } from './IRange.js';
import type { IRatio } from './IRatio.js';
import type { IRatioRange } from './IRatioRange.js';
import type { IRelatedArtifact } from './IRelatedArtifact.js';
import type { ISampledData } from './ISampledData.js';
import type { ISignature } from './ISignature.js';
import type { ITiming } from './ITiming.js';
import type { ITriggerDefinition } from './ITriggerDefinition.js';
import type { IUsageContext } from './IUsageContext.js';

/**
 * Extension Interface
 * 
 * Optional Extension Element - found in all resources.
 * 
 *
 * @see https://hl7.org/fhir/R4/extension.html
 */
export interface IExtension extends IDataType {
  /**
   * identifies the meaning of the extension
   */
  url: string;

  /**
   * Value of extension
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Value of extension
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of extension
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * Value of extension
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Value of extension
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Value of extension
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Value of extension
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Value of extension
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Value of extension
   */
  valueInstant?: string;
  /**
   * Extension for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * Value of extension
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Value of extension
   */
  valueInteger64?: string;
  /**
   * Extension for valueInteger64
   */
  _valueInteger64?: IElement;

  /**
   * Value of extension
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * Value of extension
   */
  valueOid?: string;
  /**
   * Extension for valueOid
   */
  _valueOid?: IElement;

  /**
   * Value of extension
   */
  valuePositiveInt?: number;
  /**
   * Extension for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * Value of extension
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Value of extension
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Value of extension
   */
  valueUnsignedInt?: number;
  /**
   * Extension for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * Value of extension
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Value of extension
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * Value of extension
   */
  valueUuid?: string;
  /**
   * Extension for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * Value of extension
   */
  valueAddress?: IAddress;

  /**
   * Value of extension
   */
  valueAge?: IAge;

  /**
   * Value of extension
   */
  valueAnnotation?: IAnnotation;

  /**
   * Value of extension
   */
  valueAttachment?: IAttachment;

  /**
   * Value of extension
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of extension
   */
  valueCodeableReference?: ICodeableReference;

  /**
   * Value of extension
   */
  valueCoding?: ICoding;

  /**
   * Value of extension
   */
  valueContactPoint?: IContactPoint;

  /**
   * Value of extension
   */
  valueCount?: ICount;

  /**
   * Value of extension
   */
  valueDistance?: IDistance;

  /**
   * Value of extension
   */
  valueDuration?: IDuration;

  /**
   * Value of extension
   */
  valueHumanName?: IHumanName;

  /**
   * Value of extension
   */
  valueIdentifier?: IIdentifier;

  /**
   * Value of extension
   */
  valueMoney?: IMoney;

  /**
   * Value of extension
   */
  valuePeriod?: IPeriod;

  /**
   * Value of extension
   */
  valueQuantity?: IQuantity;

  /**
   * Value of extension
   */
  valueRange?: IRange;

  /**
   * Value of extension
   */
  valueRatio?: IRatio;

  /**
   * Value of extension
   */
  valueRatioRange?: IRatioRange;

  /**
   * Value of extension
   */
  valueReference?: IReference;

  /**
   * Value of extension
   */
  valueSampledData?: ISampledData;

  /**
   * Value of extension
   */
  valueSignature?: ISignature;

  /**
   * Value of extension
   */
  valueTiming?: ITiming;

  /**
   * Value of extension
   */
  valueContactDetail?: IContactDetail;

  /**
   * Value of extension
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * Value of extension
   */
  valueExpression?: IExpression;

  /**
   * Value of extension
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * Value of extension
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * Value of extension
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * Value of extension
   */
  valueUsageContext?: IUsageContext;

  /**
   * Value of extension
   */
  valueAvailability?: IAvailability;

  /**
   * Value of extension
   */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /**
   * Value of extension
   */
  valueDosage?: IDosage;

  /**
   * Value of extension
   */
  valueMeta?: IMeta;

}
