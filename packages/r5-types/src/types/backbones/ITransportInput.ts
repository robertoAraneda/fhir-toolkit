import type { IBackboneElement, ICodeableConcept, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IAvailability } from '../datatypes/IAvailability.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { ICount } from '../datatypes/ICount.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IDistance } from '../datatypes/IDistance.js';
import type { IDosage } from '../datatypes/IDosage.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IExtendedContactDetail } from '../datatypes/IExtendedContactDetail.js';
import type { IHumanName } from '../datatypes/IHumanName.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMeta } from '../datatypes/IMeta.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IParameterDefinition } from '../datatypes/IParameterDefinition.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IRatioRange } from '../datatypes/IRatioRange.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { ISampledData } from '../datatypes/ISampledData.js';
import type { ISignature } from '../datatypes/ISignature.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ITriggerDefinition } from '../datatypes/ITriggerDefinition.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';

/**
 * TransportInput Interface
 * 
 * Information used to perform transport
 * 
 *
 * @see https://hl7.org/fhir/R5/transportinput.html
 */
export interface ITransportInput extends IBackboneElement {
  /**
   * Label for the input
   */
  type: ICodeableConcept;

  /**
   * Content to use in performing the transport
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueInstant?: string;
  /**
   * Extension for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueInteger64?: string;
  /**
   * Extension for valueInteger64
   */
  _valueInteger64?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueOid?: string;
  /**
   * Extension for valueOid
   */
  _valueOid?: IElement;

  /**
   * Content to use in performing the transport
   */
  valuePositiveInt?: number;
  /**
   * Extension for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueUnsignedInt?: number;
  /**
   * Extension for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueUuid?: string;
  /**
   * Extension for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * Content to use in performing the transport
   */
  valueAddress?: IAddress;

  /**
   * Content to use in performing the transport
   */
  valueAge?: IAge;

  /**
   * Content to use in performing the transport
   */
  valueAnnotation?: IAnnotation;

  /**
   * Content to use in performing the transport
   */
  valueAttachment?: IAttachment;

  /**
   * Content to use in performing the transport
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Content to use in performing the transport
   */
  valueCodeableReference?: ICodeableReference;

  /**
   * Content to use in performing the transport
   */
  valueCoding?: ICoding;

  /**
   * Content to use in performing the transport
   */
  valueContactPoint?: IContactPoint;

  /**
   * Content to use in performing the transport
   */
  valueCount?: ICount;

  /**
   * Content to use in performing the transport
   */
  valueDistance?: IDistance;

  /**
   * Content to use in performing the transport
   */
  valueDuration?: IDuration;

  /**
   * Content to use in performing the transport
   */
  valueHumanName?: IHumanName;

  /**
   * Content to use in performing the transport
   */
  valueIdentifier?: IIdentifier;

  /**
   * Content to use in performing the transport
   */
  valueMoney?: IMoney;

  /**
   * Content to use in performing the transport
   */
  valuePeriod?: IPeriod;

  /**
   * Content to use in performing the transport
   */
  valueQuantity?: IQuantity;

  /**
   * Content to use in performing the transport
   */
  valueRange?: IRange;

  /**
   * Content to use in performing the transport
   */
  valueRatio?: IRatio;

  /**
   * Content to use in performing the transport
   */
  valueRatioRange?: IRatioRange;

  /**
   * Content to use in performing the transport
   */
  valueReference?: IReference;

  /**
   * Content to use in performing the transport
   */
  valueSampledData?: ISampledData;

  /**
   * Content to use in performing the transport
   */
  valueSignature?: ISignature;

  /**
   * Content to use in performing the transport
   */
  valueTiming?: ITiming;

  /**
   * Content to use in performing the transport
   */
  valueContactDetail?: IContactDetail;

  /**
   * Content to use in performing the transport
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * Content to use in performing the transport
   */
  valueExpression?: IExpression;

  /**
   * Content to use in performing the transport
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * Content to use in performing the transport
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * Content to use in performing the transport
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * Content to use in performing the transport
   */
  valueUsageContext?: IUsageContext;

  /**
   * Content to use in performing the transport
   */
  valueAvailability?: IAvailability;

  /**
   * Content to use in performing the transport
   */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /**
   * Content to use in performing the transport
   */
  valueDosage?: IDosage;

  /**
   * Content to use in performing the transport
   */
  valueMeta?: IMeta;

}
