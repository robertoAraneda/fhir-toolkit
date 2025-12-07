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
 * TransportOutput Interface
 * 
 * Information produced as part of transport
 * 
 *
 * @see https://hl7.org/fhir/R4/transportoutput.html
 */
export interface ITransportOutput extends IBackboneElement {
  /**
   * Label for output
   */
  type: ICodeableConcept;

  /**
   * Result of output
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Result of output
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Result of output
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

  /**
   * Result of output
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Result of output
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Result of output
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Result of output
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Result of output
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Result of output
   */
  valueInstant?: string;
  /**
   * Extension for valueInstant
   */
  _valueInstant?: IElement;

  /**
   * Result of output
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Result of output
   */
  valueInteger64?: string;
  /**
   * Extension for valueInteger64
   */
  _valueInteger64?: IElement;

  /**
   * Result of output
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * Result of output
   */
  valueOid?: string;
  /**
   * Extension for valueOid
   */
  _valueOid?: IElement;

  /**
   * Result of output
   */
  valuePositiveInt?: number;
  /**
   * Extension for valuePositiveInt
   */
  _valuePositiveInt?: IElement;

  /**
   * Result of output
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Result of output
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Result of output
   */
  valueUnsignedInt?: number;
  /**
   * Extension for valueUnsignedInt
   */
  _valueUnsignedInt?: IElement;

  /**
   * Result of output
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Result of output
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * Result of output
   */
  valueUuid?: string;
  /**
   * Extension for valueUuid
   */
  _valueUuid?: IElement;

  /**
   * Result of output
   */
  valueAddress?: IAddress;

  /**
   * Result of output
   */
  valueAge?: IAge;

  /**
   * Result of output
   */
  valueAnnotation?: IAnnotation;

  /**
   * Result of output
   */
  valueAttachment?: IAttachment;

  /**
   * Result of output
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Result of output
   */
  valueCodeableReference?: ICodeableReference;

  /**
   * Result of output
   */
  valueCoding?: ICoding;

  /**
   * Result of output
   */
  valueContactPoint?: IContactPoint;

  /**
   * Result of output
   */
  valueCount?: ICount;

  /**
   * Result of output
   */
  valueDistance?: IDistance;

  /**
   * Result of output
   */
  valueDuration?: IDuration;

  /**
   * Result of output
   */
  valueHumanName?: IHumanName;

  /**
   * Result of output
   */
  valueIdentifier?: IIdentifier;

  /**
   * Result of output
   */
  valueMoney?: IMoney;

  /**
   * Result of output
   */
  valuePeriod?: IPeriod;

  /**
   * Result of output
   */
  valueQuantity?: IQuantity;

  /**
   * Result of output
   */
  valueRange?: IRange;

  /**
   * Result of output
   */
  valueRatio?: IRatio;

  /**
   * Result of output
   */
  valueRatioRange?: IRatioRange;

  /**
   * Result of output
   */
  valueReference?: IReference;

  /**
   * Result of output
   */
  valueSampledData?: ISampledData;

  /**
   * Result of output
   */
  valueSignature?: ISignature;

  /**
   * Result of output
   */
  valueTiming?: ITiming;

  /**
   * Result of output
   */
  valueContactDetail?: IContactDetail;

  /**
   * Result of output
   */
  valueDataRequirement?: IDataRequirement;

  /**
   * Result of output
   */
  valueExpression?: IExpression;

  /**
   * Result of output
   */
  valueParameterDefinition?: IParameterDefinition;

  /**
   * Result of output
   */
  valueRelatedArtifact?: IRelatedArtifact;

  /**
   * Result of output
   */
  valueTriggerDefinition?: ITriggerDefinition;

  /**
   * Result of output
   */
  valueUsageContext?: IUsageContext;

  /**
   * Result of output
   */
  valueAvailability?: IAvailability;

  /**
   * Result of output
   */
  valueExtendedContactDetail?: IExtendedContactDetail;

  /**
   * Result of output
   */
  valueDosage?: IDosage;

  /**
   * Result of output
   */
  valueMeta?: IMeta;

}
